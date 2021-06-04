"use script";

let rendomNumber = Math.ceil(Math.random() * 100);

function guessNumber() {
  let numberFromUser = prompt("Введите число");
  function checkNumber() {
    if (numberFromUser > rendomNumber) {
      alert("Загаданное число меньше");
      return guessNumber();
    } else if (numberFromUser == rendomNumber) {
      console.log("sfsadf");
      alert("Поздравляю, Вы угадали!!!");
    } else if (numberFromUser === null) {
      alert("Игра окончена");
    } else if (numberFromUser < rendomNumber) {
      alert("Загаданное число больше");
      return guessNumber();
    } else if (!Number.isInteger(numberFromUser)) {
      alert("Введи число!");
      return guessNumber();
    }
  }
  return checkNumber();
}

guessNumber();
