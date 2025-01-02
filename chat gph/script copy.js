if (document.cookie == '') {
    document.cookie = prompt("Enter your name");
    document.getElementById("h11").innerHTML = "Player - " + document.cookie;
    document.getElementById("p11").innerHTML = "Player - " + document.cookie;
}
else {
    document.getElementById("h11").innerHTML = "Player - " + document.cookie;
    document.getElementById("p11").innerHTML = "Player - " + document.cookie;
    document.getElementById("Player").innerHTML = `you - ${document.cookie} || Computer`;
}
function changuser() {
    document.cookie = prompt("Enter your name");
    document.getElementById("h11").innerHTML = "Player - " + document.cookie;
    document.getElementById("p11").innerHTML = "Player - " + document.cookie;
}
function initializeGame() {
    document.getElementById("start").innerHTML = "Play";
    document.getElementById("start").style.backgroundColor = "tomato";
    enableButtons()
}
document.getElementById("userimg").addEventListener('click',() =>{
    document.cookie = prompt("Enter your name");
    document.getElementById("h11").innerHTML = "Player - " + document.cookie;
    document.getElementById("p11").innerHTML = "Player - " + document.cookie;
})
document.getElementById("start").addEventListener('click', () => {
    document.getElementById("start").disabled = true;
    document.getElementById("start").innerHTML = "Choose any option";

    // Function to handle clicks with a delay
    function delayedClickHandler(option) {
        disableButtons();
        handleClick(option);
        setTimeout(enableButtons, 2000);
    }

    // Attach click event listeners with delay logic
    document.getElementById("stone").addEventListener('click', () => delayedClickHandler(1));
    document.getElementById("paper").addEventListener('click', () => delayedClickHandler(2));
    document.getElementById("scissor").addEventListener('click', () => delayedClickHandler(3));
});

// Disable all buttons
function disableButtons() {
    document.getElementById("stone").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissor").disabled = true;
}

// Enable all buttons
function enableButtons() {
    document.getElementById("stone").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissor").disabled = false;
}


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
    }, 2000);
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
    document.getElementById("winer").innerHTML = result.message;
    document.getElementById("win").style.backgroundColor = result.color;

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
let sto = true;
function updateScore(winner) {
    let playerScore = parseInt(document.getElementById("p1score").innerHTML);
    let computerScore = parseInt(document.getElementById("p2score").innerHTML);

    if (winner === 'player') {
        document.getElementById("p1score").innerHTML = playerScore + 1;
        playerScore = parseInt(document.getElementById("p1score").innerHTML);
    } else if (winner === 'computer') {
        document.getElementById("p2score").innerHTML = computerScore + 1;
        computerScore = parseInt(document.getElementById("p2score").innerHTML);
    }
console.log(playerScore,computerScore)
    if (playerScore == 5 || computerScore == 5) {
            document.getElementById("stone").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissor").disabled = true;
            document.getElementById("pop").style.display = 'block';
            document.getElementById("score").innerHTML = `${playerScore} || ${computerScore}`;
            end()

    }
    return
}
initializeGame();
function end(){
    return
}