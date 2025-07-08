import React, { useState, useEffect } from 'react';
import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';
import GameHistory from './GameHistory';
import VersionIndicator from './VersionIndicator';
import { saveGameResult, loadGameHistory } from '../services/firebaseService';
import {
  CHOICES,
  generateComputerChoice,
  determineWinner,
  createInitialScore,
  updateScore,
  validatePlayerName
} from '../utils/gameLogic';
import './Game.css';

const Game = () => {
  // Game state management
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState(createInitialScore());
  const [gameHistory, setGameHistory] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const choices = Object.values(CHOICES);

  // Load game history from Firebase on component mount
  useEffect(() => {
    loadHistoryData();
  }, []);

  // Load recent game history from Firebase
  const loadHistoryData = async () => {
    try {
      setIsLoading(true);
      const history = await loadGameHistory(10);
      setGameHistory(history);
      setError('');
    } catch (error) {
      console.error('Error loading game history:', error);
      setError('Failed to load game history. Playing offline.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle player choice and start game round
  const handlePlayerChoice = async (choice) => {
    if (isPlaying) return;

    setIsPlaying(true);
    setPlayerChoice(choice);
    setError('');
    
    // Add delay for dramatic effect
    setTimeout(async () => {
      try {
        const compChoice = generateComputerChoice();
        setComputerChoice(compChoice);
        
        const gameResult = determineWinner(choice, compChoice);
        setResult(gameResult);
        
        // Update score
        const newScore = updateScore(score, gameResult);
        setScore(newScore);
        
        // Save to Firebase
        const gameData = {
          playerChoice: choice,
          computerChoice: compChoice,
          result: gameResult,
          score: newScore,
          playerName: playerName || 'Anonymous'
        };
        
        try {
          await saveGameResult(gameData);
          await loadHistoryData(); // Refresh history
        } catch (saveError) {
          console.error('Error saving game:', saveError);
          setError('Game saved locally only. Check internet connection.');
        }
        
      } catch (error) {
        console.error('Error during game:', error);
        setError('An error occurred during the game.');
      } finally {
        setIsPlaying(false);
      }
    }, 1000);
  };

  // Reset game state
  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setScore(createInitialScore());
    setIsPlaying(false);
    setError('');
  };

  // Start new game with player name
  const startGame = () => {
    if (validatePlayerName(playerName)) {
      setGameStarted(true);
      resetGame();
      setError('');
    } else {
      setError('Please enter a valid name (1-50 characters).');
    }
  };

  // Handle input change with validation
  const handleNameChange = (e) => {
    const name = e.target.value;
    setPlayerName(name);
    
    if (error && validatePlayerName(name)) {
      setError('');
    }
  };

  // Render start screen if game hasn't started
  if (!gameStarted) {
    return (
      <div className="game-container">
        <VersionIndicator />
        <div className="start-screen">
          <h1>🪨📄✂️ Rock Paper Scissors</h1>
          <div className="player-setup">
            <input
              type="text"
              placeholder="Enter your name"
              value={playerName}
              onChange={handleNameChange}
              className={`player-name-input ${error ? 'error' : ''}`}
              maxLength={50}
            />
            {error && <div className="error-message">{error}</div>}
            <button 
              onClick={startGame}
              disabled={!validatePlayerName(playerName)}
              className="start-button"
            >
              Start Game
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="game-container">
      <VersionIndicator />
      
      <header className="game-header">
        <h1>🪨📄✂️ Rock Paper Scissors</h1>
        <p className="player-name">Player: {playerName}</p>
        {error && <div className="error-banner">{error}</div>}
      </header>
      
      <ScoreBoard score={score} />
      
      <GameBoard
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
        isPlaying={isPlaying}
        onPlayerChoice={handlePlayerChoice}
        choices={choices}
      />
      
      <div className="game-controls">
        <button onClick={resetGame} className="reset-button">
          🔄 Reset Game
        </button>
        <button 
          onClick={() => setGameStarted(false)} 
          className="new-player-button"
        >
          👤 New Player
        </button>
        <button 
          onClick={loadHistoryData} 
          className="refresh-button"
          disabled={isLoading}
        >
          {isLoading ? '⏳ Loading...' : '🔄 Refresh'}
        </button>
      </div>
      
      <GameHistory history={gameHistory} isLoading={isLoading} />
    </div>
  );
};

export default Game;