import React from 'react';
import { getTotalGames, calculateWinPercentage } from '../utils/gameLogic';

const ScoreBoard = ({ score }) => {
  // Calculate game statistics
  const totalGames = getTotalGames(score);
  const winPercentage = calculateWinPercentage(score.player, totalGames);
  
  // Get performance level based on win rate
  const getPerformanceLevel = (winRate) => {
    if (winRate >= 70) return { level: 'Legendary', emoji: '🏆', color: '#FFD700' };
    if (winRate >= 60) return { level: 'Expert', emoji: '⭐', color: '#C0C0C0' };
    if (winRate >= 50) return { level: 'Good', emoji: '👍', color: '#CD7F32' };
    if (winRate >= 40) return { level: 'Average', emoji: '👌', color: '#87CEEB' };
    return { level: 'Beginner', emoji: '🌱', color: '#90EE90' };
  };

  const performance = getPerformanceLevel(winPercentage);

  return (
    <div className="score-board">
      <h2>🏆 Score Board</h2>
      
      <div className="score-grid">
        <div className="score-item player-score">
          <div className="score-label">🏆 You</div>
          <div className="score-value">{score.player}</div>
          <div className="score-sublabel">Wins</div>
        </div>
        
        <div className="score-item computer-score">
          <div className="score-label">🤖 Computer</div>
          <div className="score-value">{score.computer}</div>
          <div className="score-sublabel">Wins</div>
        </div>
        
        <div className="score-item draws-score">
          <div className="score-label">🤝 Draws</div>
          <div className="score-value">{score.draws}</div>
          <div className="score-sublabel">Ties</div>
        </div>
      </div>
      
      <div className="score-stats">
        <div className="stat-item">
          <span className="stat-label">Total Games:</span>
          <span className="stat-value">{totalGames}</span>
        </div>
        
        {totalGames > 0 && (
          <>
            <div className="stat-item">
              <span className="stat-label">Win Rate:</span>
              <span className="stat-value">{winPercentage}%</span>
            </div>
            
            <div className="stat-item">
              <span className="stat-label">Performance:</span>
              <span 
                className="stat-value performance-level"
                style={{ color: performance.color }}
              >
                {performance.emoji} {performance.level}
              </span>
            </div>
          </>
        )}
      </div>
      
      {/* Progress bar for win rate */}
      {totalGames > 0 && (
        <div className="win-rate-bar">
          <div className="win-rate-label">Win Rate Progress</div>
          <div className="progress-container">
            <div 
              className="progress-bar"
              style={{ 
                width: `${winPercentage}%`,
                background: `linear-gradient(90deg, ${performance.color}, #44A08D)`
              }}
            ></div>
          </div>
          <div className="progress-text">{winPercentage}% - {performance.level}</div>
        </div>
      )}
      
      {/* Game streaks */}
      {totalGames >= 3 && (
        <div className="game-streaks">
          <div className="streak-info">
            {score.player > score.computer ? (
              <span className="winning-streak">🔥 You're ahead!</span>
            ) : score.computer > score.player ? (
              <span className="losing-streak">💪 Fight back!</span>
            ) : (
              <span className="even-streak">⚖️ It's tied!</span>
            )}
          </div>
        </div>
      )}
      
      {/* Motivational messages */}
      {totalGames > 0 && (
        <div className="motivation-message">
          {totalGames === 1 && <p>🎮 Great start! Keep playing!</p>}
          {totalGames === 5 && <p>🚀 You're getting the hang of it!</p>}
          {totalGames === 10 && <p>🎯 Nice consistency!</p>}
          {totalGames >= 20 && winPercentage >= 60 && <p>🌟 You're a Rock Paper Scissors master!</p>}
          {totalGames >= 50 && <p>🏅 Dedication pays off!</p>}
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;