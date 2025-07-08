import React from 'react';
import { getChoiceEmoji, getResultMessage, RESULTS } from '../utils/gameLogic';

const GameBoard = ({ 
  playerChoice, 
  computerChoice, 
  result, 
  isPlaying, 
  onPlayerChoice, 
  choices 
}) => {
  // Get result class for styling
  const getResultClass = () => {
    if (!result) return '';
    return `result-${result}`;
  };

  // Get choice display class
  const getChoiceDisplayClass = (choice) => {
    const baseClass = 'choice-display';
    if (choice) {
      return `${baseClass} has-choice`;
    }
    return baseClass;
  };

  // Get choice button class
  const getChoiceButtonClass = (choice) => {
    const baseClass = 'choice-button';
    if (playerChoice === choice) {
      return `${baseClass} selected`;
    }
    return baseClass;
  };

  return (
    <div className="game-board">
      {/* Choices Display */}
      <div className="choices-display">
        <div className="choice-section">
          <h3>You</h3>
          <div className={getChoiceDisplayClass(playerChoice)}>
            {isPlaying && !playerChoice ? (
              <div className="loading">🤔</div>
            ) : (
              <div className="choice-emoji">
                {getChoiceEmoji(playerChoice)}
              </div>
            )}
          </div>
        </div>

        <div className="vs-section">
          <div className="vs-text">VS</div>
          {result && (
            <div className={`result-message ${getResultClass()}`}>
              {result === RESULTS.PLAYER && '🎉 '}
              {result === RESULTS.COMPUTER && '😔 '}
              {result === RESULTS.DRAW && '🤝 '}
              {getResultMessage(result)}
            </div>
          )}
        </div>

        <div className="choice-section">
          <h3>Computer</h3>
          <div className={getChoiceDisplayClass(computerChoice)}>
            {isPlaying ? (
              <div className="loading">🤖</div>
            ) : (
              <div className="choice-emoji">
                {getChoiceEmoji(computerChoice)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Player Choice Buttons */}
      <div className="player-choices">
        <h3>Make Your Choice:</h3>
        <div className="choice-buttons">
          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() => onPlayerChoice(choice)}
              disabled={isPlaying}
              className={getChoiceButtonClass(choice)}
              aria-label={choice}
            >
              <span className="choice-emoji">{getChoiceEmoji(choice)}</span>
              <span className="choice-name">{choice.charAt(0).toUpperCase() + choice.slice(1)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Game Instructions */}
      {!playerChoice && !isPlaying && (
        <div className="game-instructions">
          <p>🪨 Rock beats Scissors</p>
          <p>📄 Paper beats Rock</p>
          <p>✂️ Scissors beats Paper</p>
        </div>
      )}

      {/* Game Status */}
      {isPlaying && (
        <div className="game-status">
          <p className="status-text">🎮 Game in progress...</p>
        </div>
      )}
    </div>
  );
};

export default GameBoard;