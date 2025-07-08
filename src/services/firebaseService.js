// Firebase service for game data operations
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  limit, 
  getDocs,
  where,
  startAfter,
  getCountFromServer
} from 'firebase/firestore';
import { db } from '../config/firebase';

/**
 * Save game result to Firebase
 * @param {object} gameData - Game data to save
 * @returns {Promise<string>} Document ID of saved game
 */
export const saveGameResult = async (gameData) => {
  try {
    const docRef = await addDoc(collection(db, 'gameHistory'), {
      ...gameData,
      timestamp: new Date(),
      version: '1.0.0' // Add version tracking
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving game result:', error);
    throw new Error('Failed to save game result');
  }
};

/**
 * Load recent game history from Firebase
 * @param {number} limitCount - Number of recent games to fetch
 * @returns {Promise<Array>} Array of game history objects
 */
export const loadGameHistory = async (limitCount = 10) => {
  try {
    const historyRef = collection(db, 'gameHistory');
    const q = query(
      historyRef, 
      orderBy('timestamp', 'desc'), 
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    const history = [];
    querySnapshot.forEach((doc) => {
      history.push({ 
        id: doc.id, 
        ...doc.data() 
      });
    });
    
    return history;
  } catch (error) {
    console.error('Error loading game history:', error);
    throw new Error('Failed to load game history');
  }
};

/**
 * Load game history for a specific player
 * @param {string} playerName - Player name to filter by
 * @param {number} limitCount - Number of games to fetch
 * @returns {Promise<Array>} Array of player's game history
 */
export const loadPlayerHistory = async (playerName, limitCount = 20) => {
  try {
    const historyRef = collection(db, 'gameHistory');
    const q = query(
      historyRef,
      where('playerName', '==', playerName),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    const history = [];
    querySnapshot.forEach((doc) => {
      history.push({ 
        id: doc.id, 
        ...doc.data() 
      });
    });
    
    return history;
  } catch (error) {
    console.error('Error loading player history:', error);
    throw new Error('Failed to load player history');
  }
};

/**
 * Get player statistics
 * @param {string} playerName - Player name to get stats for
 * @returns {Promise<object>} Player statistics object
 */
export const getPlayerStats = async (playerName) => {
  try {
    const historyRef = collection(db, 'gameHistory');
    const q = query(
      historyRef,
      where('playerName', '==', playerName)
    );
    
    const querySnapshot = await getDocs(q);
    
    let totalGames = 0;
    let wins = 0;
    let losses = 0;
    let draws = 0;
    let lastPlayed = null;
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      totalGames++;
      
      switch (data.result) {
        case 'player':
          wins++;
          break;
        case 'computer':
          losses++;
          break;
        case 'draw':
          draws++;
          break;
      }
      
      // Track most recent game
      if (!lastPlayed || data.timestamp > lastPlayed) {
        lastPlayed = data.timestamp;
      }
    });
    
    const winRate = totalGames > 0 ? Math.round((wins / totalGames) * 100) : 0;
    
    return {
      totalGames,
      wins,
      losses,
      draws,
      winRate,
      lastPlayed
    };
  } catch (error) {
    console.error('Error getting player stats:', error);
    throw new Error('Failed to get player statistics');
  }
};

/**
 * Get leaderboard data
 * @param {number} limitCount - Number of top players to fetch
 * @returns {Promise<Array>} Array of leaderboard entries
 */
export const getLeaderboard = async (limitCount = 10) => {
  try {
    const historyRef = collection(db, 'gameHistory');
    const querySnapshot = await getDocs(historyRef);
    
    // Group games by player
    const playerStats = {};
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const playerName = data.playerName || 'Anonymous';
      
      if (!playerStats[playerName]) {
        playerStats[playerName] = {
          playerName,
          totalGames: 0,
          wins: 0,
          losses: 0,
          draws: 0,
          lastPlayed: null
        };
      }
      
      const stats = playerStats[playerName];
      stats.totalGames++;
      
      switch (data.result) {
        case 'player':
          stats.wins++;
          break;
        case 'computer':
          stats.losses++;
          break;
        case 'draw':
          stats.draws++;
          break;
      }
      
      // Track most recent game
      if (!stats.lastPlayed || data.timestamp > stats.lastPlayed) {
        stats.lastPlayed = data.timestamp;
      }
    });
    
    // Calculate win rates and sort
    const leaderboard = Object.values(playerStats)
      .map(stats => ({
        ...stats,
        winRate: stats.totalGames > 0 ? Math.round((stats.wins / stats.totalGames) * 100) : 0
      }))
      .filter(stats => stats.totalGames >= 5) // Minimum 5 games to qualify
      .sort((a, b) => {
        // Sort by win rate first, then by total games
        if (b.winRate !== a.winRate) {
          return b.winRate - a.winRate;
        }
        return b.totalGames - a.totalGames;
      })
      .slice(0, limitCount);
    
    return leaderboard;
  } catch (error) {
    console.error('Error getting leaderboard:', error);
    throw new Error('Failed to get leaderboard data');
  }
};

/**
 * Get total games count from Firebase
 * @returns {Promise<number>} Total number of games played
 */
export const getTotalGamesCount = async () => {
  try {
    const historyRef = collection(db, 'gameHistory');
    const snapshot = await getCountFromServer(historyRef);
    return snapshot.data().count;
  } catch (error) {
    console.error('Error getting total games count:', error);
    return 0;
  }
};

/**
 * Delete old game records (cleanup function)
 * @param {number} daysOld - Delete records older than this many days
 * @returns {Promise<number>} Number of deleted records
 */
export const cleanupOldGames = async (daysOld = 30) => {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysOld);
    
    const historyRef = collection(db, 'gameHistory');
    const q = query(
      historyRef,
      where('timestamp', '<', cutoffDate)
    );
    
    const querySnapshot = await getDocs(q);
    let deletedCount = 0;
    
    // Note: In a production app, you'd want to use batch deletes
    // and implement this as a server-side function
    const deletePromises = [];
    querySnapshot.forEach((doc) => {
      deletePromises.push(doc.ref.delete());
      deletedCount++;
    });
    
    await Promise.all(deletePromises);
    return deletedCount;
  } catch (error) {
    console.error('Error cleaning up old games:', error);
    throw new Error('Failed to cleanup old games');
  }
};