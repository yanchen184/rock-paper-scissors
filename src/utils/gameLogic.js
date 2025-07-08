// Game logic utilities for Rock Paper Scissors

/**
 * Game choices constants
 */
export const CHOICES = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors'
};

/**
 * Game result constants
 */
export const RESULTS = {
  PLAYER: 'player',
  COMPUTER: 'computer',
  DRAW: 'draw'
};

/**
 * Emoji mappings for choices
 */
export const CHOICE_EMOJIS = {
  [CHOICES.ROCK]: '🪨',
  [CHOICES.PAPER]: '📄',
  [CHOICES.SCISSORS]: '✂️'
};

/**
 * Result emoji mappings
 */
export const RESULT_EMOJIS = {
  [RESULTS.PLAYER]: '🎉',
  [RESULTS.COMPUTER]: '😔',
  [RESULTS.DRAW]: '🤝'
};

/**
 * Generate a random computer choice
 * @returns {string} Computer's choice
 */
export const generateComputerChoice = () => {
  const choices = Object.values(CHOICES);
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

/**
 * Determine the winner of a round
 * @param {string} playerChoice - Player's choice
 * @param {string} computerChoice - Computer's choice
 * @returns {string} Result of the game
 */
export const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return RESULTS.DRAW;
  }

  const winConditions = {
    [CHOICES.ROCK]: CHOICES.SCISSORS,
    [CHOICES.PAPER]: CHOICES.ROCK,
    [CHOICES.SCISSORS]: CHOICES.PAPER
  };

  return winConditions[playerChoice] === computerChoice 
    ? RESULTS.PLAYER 
    : RESULTS.COMPUTER;
};

/**
 * Get emoji representation of a choice
 * @param {string} choice - The choice to get emoji for
 * @returns {string} Emoji representation
 */
export const getChoiceEmoji = (choice) => {
  return CHOICE_EMOJIS[choice] || '❓';
};

/**
 * Get emoji representation of a result
 * @param {string} result - The result to get emoji for
 * @returns {string} Emoji representation
 */
export const getResultEmoji = (result) => {
  return RESULT_EMOJIS[result] || '❓';
};

/**
 * Get result message text
 * @param {string} result - The result
 * @returns {string} Result message
 */
export const getResultMessage = (result) => {
  const messages = {
    [RESULTS.PLAYER]: 'You Win!',
    [RESULTS.COMPUTER]: 'Computer Wins!',
    [RESULTS.DRAW]: "It's a Draw!"
  };
  return messages[result] || '';
};

/**
 * Calculate win percentage
 * @param {number} wins - Number of wins
 * @param {number} total - Total games played
 * @returns {number} Win percentage
 */
export const calculateWinPercentage = (wins, total) => {
  return total > 0 ? Math.round((wins / total) * 100) : 0;
};

/**
 * Format timestamp for display
 * @param {any} timestamp - Firebase timestamp or Date object
 * @returns {string} Formatted timestamp
 */
export const formatTimestamp = (timestamp) => {
  if (!timestamp) return 'Unknown time';
  
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Validate player name
 * @param {string} name - Player name to validate
 * @returns {boolean} Whether the name is valid
 */
export const validatePlayerName = (name) => {
  return name && name.trim().length > 0 && name.trim().length <= 50;
};

/**
 * Create initial score object
 * @returns {object} Initial score state
 */
export const createInitialScore = () => ({
  player: 0,
  computer: 0,
  draws: 0
});

/**
 * Update score based on game result
 * @param {object} currentScore - Current score object
 * @param {string} result - Game result
 * @returns {object} Updated score object
 */
export const updateScore = (currentScore, result) => {
  const newScore = { ...currentScore };
  
  switch (result) {
    case RESULTS.PLAYER:
      newScore.player += 1;
      break;
    case RESULTS.COMPUTER:
      newScore.computer += 1;
      break;
    case RESULTS.DRAW:
      newScore.draws += 1;
      break;
  }
  
  return newScore;
};

/**
 * Get total games played from score
 * @param {object} score - Score object
 * @returns {number} Total games played
 */
export const getTotalGames = (score) => {
  return score.player + score.computer + score.draws;
};