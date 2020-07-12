const game = () => {
    let pScore = 0;
    let cScore = 0;
    const playBtn = document.querySelector('.intro button');
    const winner = document.querySelector('.winner');

    // change to korean
    const setLang = () => {
        // const setLangBtn = document.querySelector('.language .lang');
        // create element for language set buttons
        const krBtn = document.querySelector('.language .ko');
        const enBtn = document.querySelector('.language .en');
        // const jpBtn = document.querySelector('.language .jp');
        // const cnBtn = document.querySelector('.language .cn');

        const namePlayer = document.querySelector('.player-score h2');
        const nameComputer = document.querySelector('.computer-score h2');
        const nameIntro = document.querySelector('.intro h1');
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        
        krBtn.addEventListener('click', () => {
            namePlayer.textContent = '플레이어';
            nameComputer.textContent = '컴퓨터';
            
            nameIntro.textContent = '가위 바위 보';
            playBtn.textContent = '게임 시작하기';
            winner.textContent = '아래에서 한 가지를 고르세요';
            scissorsBtn.textContent = '가위';
            rockBtn.textContent = '바위';
            paperBtn.textContent = '보';
        })
    };

    

    // start the game 
    const startGame = () => {
        
        
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
                }, 1500)

                // animation
                playerHand.style.animation = 'shakePlayer 1.5s ease';
                computerHand.style.animation = 'shakeComputer 1.5s ease';
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
    setLang();
    
};


// start game function
game();


// if the parameter is only one, then () can be omitted

// arrow function을 쓰면, 해당 이벤트 클릭이 발생하는 요소에 binding이 안 된다.
// arrow을 썼더니 window를 콘솔하더라 