let low = 1;
let high = 10;

playGame();

function playGame() {
    let guess_count = 3;
    let target_value = Math.floor(Math.random() * high + 1);
    console.log(target_value);

    while (guess_count > 0) {
        let guessing_input = prompt("Enter value");
        guessing_input = Number(guessing_input);

        if (!isNaN(guessing_input)) {
            if (guessing_input > target_value) {
                guess_count--;
                alert(`Correct answer is smaller! and you have ${guess_count} guess left`);
            } else if (guessing_input < target_value) {
                guess_count--;
                alert(`Correct answer is greater! and you have ${guess_count} guess left`);
            } else if (guessing_input === target_value) {
                alert(`You win and the value is ${target_value}`);
                if (confirm("Play Again?")) {
                    playGame();
                }
                break;
            }
        } else {
            alert("Enter right value");
            playGame();
        }
    }
    if (guess_count == 0) {
        alert(`You lose and the value is ${target_value}`);
        if (confirm("Play again?")) {
            playGame();
        }
    }
}
