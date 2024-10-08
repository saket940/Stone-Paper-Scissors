let playerName = prompt("Enter your name");
document.getElementById("h11").innerHTML = "Player - " + playerName;
document.getElementById("p11").innerHTML = "Player - " + playerName;

function initializeGame() {
    document.getElementById("start").innerHTML = "Play";
    document.getElementById("start").style.backgroundColor = "tomato";
    document.getElementById("start").style.fontSize = "24px";
    document.getElementById('computer img').src = "https://w1.pngwing.com/pngs/278/853/png-transparent-line-art-nose-chatbot-internet-bot-artificial-intelligence-snout-head-smile-black-and-white-thumbnail.png"
	resetScores();
}
    document.getElementById("start").addEventListener('click', () => {
        resetScores();
        document.getElementById("start").innerHTML = "Choose any option";

    document.getElementById("stone").addEventListener('click', () => handleClick(1));
        document.getElementById("paper").addEventListener('click', () => handleClick(2));
        document.getElementById("scissor").addEventListener('click', () => handleClick(3));
    });


function resetScores() {
    document.getElementById("p1score").innerHTML = 0;
    document.getElementById("p2score").innerHTML = 0;
}

function handleClick(playerChoice) {
    document.getElementById("start").innerHTML = "Computer choosing...";
    document.getElementById("start").style.backgroundColor = "orange";

    let interval = setInterval(() => {
        const randomChoice = Math.floor(Math.random() * 3 + 1);
        const images = [
            'https://static.vecteezy.com/system/resources/previews/002/111/895/non_2x/a-stone-meteorite-isolated-on-white-background-free-vector.jpg',
            'https://static.vecteezy.com/system/resources/previews/000/554/801/non_2x/paper-icon-vector.jpg',
            'https://www.svgrepo.com/show/68802/scissors.svg'
        ];
        document.getElementById('computer img').src = images[randomChoice - 1];
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
        determineWinner(playerChoice);
    }, 1000);
}

function determineWinner(playerChoice) {
    const computerChoice = Math.floor(Math.random() * 3 + 1);
    setTimeout(() => {
        const images = [
            'https://static.vecteezy.com/system/resources/previews/002/111/895/non_2x/a-stone-meteorite-isolated-on-white-background-free-vector.jpg',
            'https://static.vecteezy.com/system/resources/previews/000/554/801/non_2x/paper-icon-vector.jpg',
            'https://www.svgrepo.com/show/68802/scissors.svg'
        ];
        document.getElementById('computer img').src = images[computerChoice - 1];
    })
    const result = getResult(playerChoice, computerChoice);

    document.getElementById("start").innerHTML = result.message;
    document.getElementById("start").style.backgroundColor = result.color;

    updateScore(result.winner);
}

function getResult(player, computer) {
    if (player === computer) return { message: 'Draw', color: 'black', winner: null };

    if ((player === 1 && computer === 3) || (player === 2 && computer === 1) || (player === 3 && computer === 2)) {
        return { message: 'You win!', color: 'green', winner: 'player' };
    } else {
        return { message: 'Computer wins!', color: 'red', winner: 'computer' };
    }
}

function updateScore(winner) {
   let playerScore = parseInt(document.getElementById("p1score").innerHTML);
    let computerScore = parseInt(document.getElementById("p2score").innerHTML);

    if (winner === 'player') {
        document.getElementById("p1score").innerHTML = playerScore + 1;
    } else if (winner === 'computer') {
        document.getElementById("p2score").innerHTML = computerScore + 1;
    }

    if (playerScore >= 5 || computerScore >= 5) {
        setTimeout(()=>{ alert(playerScore > computerScore ? "You win the match!" : "Computer wins the match!");
        resetScores();
        initializeGame();
        resetScores();
    }, 1000);
}

}
initializeGame();