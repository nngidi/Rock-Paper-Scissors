document.addEventListener('DOMContentLoaded', () => {
    const playerNameInput = document.getElementById('playerName');
    const startGameButton = document.getElementById('startGame');
    const gameArea = document.querySelector('.game-area');
    const playerDisplay = document.getElementById('playerDisplay');
    const choices = document.querySelectorAll('.choice');
    const computerChoiceDisplay = document.getElementById('computerChoice');
    const gameResultDisplay = document.getElementById('gameResult');
  
    const options = ['rock', 'paper', 'scissors'];
  
    startGameButton.addEventListener('click', () => {
      const playerName = playerNameInput.value.trim();
      if (playerName === '') {
        alert('Please enter your name to start!');
        return;
      }
      playerDisplay.textContent = playerName;
      document.querySelector('.player-info').classList.add('hidden');
      gameArea.classList.remove('hidden');
    });
  
    choices.forEach(choice => {
      choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = options[Math.floor(Math.random() * options.length)];
  
        computerChoiceDisplay.textContent = computerChoice;
  
        const result = determineWinner(playerChoice, computerChoice);
        gameResultDisplay.textContent = result;
      });
    });
  
    function determineWinner(player, computer) {
      if (player === computer) {
        return 'It\'s a tie!';
      }
      if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
      ) {
        return 'You win!';
      }
      return 'You lose!';
    }
  });
  