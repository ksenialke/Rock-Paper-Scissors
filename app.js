var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/*
* querySelector wyciąga pierwszy element, który jest opisany przez selektor
* przy pomocy querySelector możliwe jest wyszukanie każdego elementu, do którego można napisać selektor CSS (czyli de facto każdego)
*
* */

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)} ${smallCompWord}. You win.🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} ${smallCompWord} beats ${convertToWord(userChoice)} ${smallUserWord}. You lose.💩`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `You both chose ${convertToWord(userChoice)}. It's a draw.😕`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();
