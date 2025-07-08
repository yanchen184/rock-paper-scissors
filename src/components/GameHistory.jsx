import React, { useState } from 'react';
import { getChoiceEmoji, getResultEmoji, getResultMessage, formatTimestamp } from '../utils/gameLogic';

const GameHistory = ({ history, isLoading }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filterResult, setFilterResult] = useState('all'); // 'all', 'player', 'computer', 'draw'

  // Filter history based on selected filter
  const filteredHistory = history.filter(game => {
    if (filterResult === 'all') return true;
    return game.result === filterResult;
  });

  // Get filter button class
  const getFilterButtonClass = (filter) => {
    return `filter-button ${filterResult === filter ? 'active' : ''}`;
  };

  // Get result statistics
  const getResultStats = () => {
    const stats = {
      total: history.length,
      player: history.filter(g => g.result === 'player').length,
      computer: history.filter(g => g.result === 'computer').length,
      draw: history.filter(g => g.result === 'draw').length
    };
    return stats;
  };

  const stats = getResultStats();

  if (isLoading) {
    return (
      <div className="game-history">
        <h3>📜 Game History</h3>
        <div className="loading-history">
          <div className="loading-spinner">⏳</div>
          <p>Loading game history...</p>
        </div>
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="game-history">
        <h3>📜 Game History</h3>
        <div className="no-history">
          <div className="no-history-icon">🎮</div>
          <p>No games played yet. Start playing to see your history!</p>
          <p className="no-history-tip">💡 Your games will be automatically saved and synced across devices</p>
        </div>
      </div>
    );
  }

  return (
    <div className="game-history">
      <div className="history-header">
        <h3>📜 Game History</h3>
        <button 
          className="expand-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '▲ Hide' : '▼ Show'} ({history.length} games)
        </button>
      </div>
      
      {/* Statistics */}
      <div className="history-stats">
        <div className="stat-chip">
          <span className="stat-label">Total:</span>
          <span className="stat-value">{stats.total}</span>
        </div>
        <div className="stat-chip wins">
          <span className="stat-label">🏆 Wins:</span>
          <span className="stat-value">{stats.player}</span>
        </div>
        <div className="stat-chip losses">
          <span className="stat-label">😔 Losses:</span>
          <span className="stat-value">{stats.computer}</span>
        </div>
        <div className="stat-chip draws">
          <span className="stat-label">🤝 Draws:</span>
          <span className="stat-value">{stats.draw}</span>
        </div>
      </div>
      
      {isExpanded && (
        <>
          {/* Filter controls */}
          <div className="history-filters">
            <span className="filter-label">Filter by result:</span>
            <div className="filter-buttons">
              <button 
                className={getFilterButtonClass('all')}
                onClick={() => setFilterResult('all')}
              >
                All ({stats.total})
              </button>
              <button 
                className={getFilterButtonClass('player')}
                onClick={() => setFilterResult('player')}
              >
                🏆 Wins ({stats.player})
              </button>
              <button 
                className={getFilterButtonClass('computer')}
                onClick={() => setFilterResult('computer')}
              >
                😔 Losses ({stats.computer})
              </button>
              <button 
                className={getFilterButtonClass('draw')}
                onClick={() => setFilterResult('draw')}
              >
                🤝 Draws ({stats.draw})
              </button>
            </div>
          </div>
          
          {/* History list */}
          <div className="history-list">
            {filteredHistory.length === 0 ? (
              <div className="no-filtered-results">
                <p>No games match the selected filter.</p>
              </div>
            ) : (
              filteredHistory.map((game, index) => (
                <div key={game.id || index} className={`history-item result-${game.result}`}>
                  <div className="history-game-info">
                    <div className="game-choices">
                      <div className="choice-with-label">
                        <span className="choice-label">You:</span>
                        <span className="player-choice">
                          {getChoiceEmoji(game.playerChoice)}
                        </span>
                      </div>
                      <span className="vs-text">vs</span>
                      <div className="choice-with-label">
                        <span className="choice-label">CPU:</span>
                        <span className="computer-choice">
                          {getChoiceEmoji(game.computerChoice)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="game-result">
                      <span className="result-emoji">
                        {getResultEmoji(game.result)}
                      </span>
                      <span className="result-text">
                        {getResultMessage(game.result)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="history-meta">
                    <div className="player-name">
                      👤 {game.playerName || 'Anonymous'}
                    </div>
                    <div className="game-time">
                      🕐 {formatTimestamp(game.timestamp)}
                    </div>
                    {game.score && (
                      <div className="game-score">
                        📊 {game.score.player}-{game.score.computer}-{game.score.draws}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
      
      {!isExpanded && history.length > 0 && (
        <div className="history-preview">
          <div className="latest-game">
            <span className="preview-label">Latest:</span>
            <span className="preview-choices">
              {getChoiceEmoji(history[0].playerChoice)} vs {getChoiceEmoji(history[0].computerChoice)}
            </span>
            <span className="preview-result">
              {getResultEmoji(history[0].result)} {getResultMessage(history[0].result)}
            </span>
            <span className="preview-time">
              🕐 {formatTimestamp(history[0].timestamp)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameHistory;