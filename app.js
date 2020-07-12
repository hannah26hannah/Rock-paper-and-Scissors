const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    // start the game 
    const startGame = () => {
        // 전역변수로 만들 필요 없는 건 컴팩트하게 필요한 함수에 넣어주기
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');
        
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.remove('fadeOut');
            matchScreen.classList.add('fadeIn');
        })
    };

    // Play match
    const playMatch = () => {

        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        })

        // computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach((option) => {
            option.addEventListener('click', function() {
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                // Here is where we call compare hands
                compareHands(this.textContent, computerChoice);

                // Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000)

                // animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        })
    };
    const updateScore = () => {
        let playerScore = document.querySelector('.player-score p');
        let computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    // comparision 
    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner');
        // checking for a tie
        if(playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
            return; // ends the function
        }
        // check for rock
        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        // check for scissor
        if(playerChoice === 'scissor') {
            if(computerChoice === 'paper') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        // check for paper
        if(playerChoice === 'paper') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
                return;
            }
        }
    };

    // call all the inner function 
    startGame();
    playMatch();
    // updateScore();
    
};

// start game function
game();


// if the parameter is only one, then () can be omitted

// arrow function을 쓰면, 해당 이벤트 클릭이 발생하는 요소에 binding이 안 된다.
// arrow을 썼더니 window를 콘솔하더라 