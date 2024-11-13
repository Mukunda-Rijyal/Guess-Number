'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const message = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const humanScore = function (val) {
  document.querySelector('.score').textContent = val;
};

const hiScore = function (high) {
  document.querySelector('.highscore').textContent = high;
};live-ser
const numBer = function (num) {
  document.querySelector('.number').textContent = num;
};

const work = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    message(`You haven't entered any number...`);
  } else if (guess !== randomNum) {
    if (score > 1) {
      message(guess > randomNum ? 'Too high guess' : 'Too low guess');
      score--;
      humanScore(score);
    } else {
      message('You lost the game...');
      humanScore(0);
      bgColor('red');
      width('30rem');
      numBer(randomNum);
    }
  } else if (guess === randomNum) {
    message(`You guess it correctly...`);
    bgColor('#60b347');
    width('30rem');
    numBer(guess);
    humanScore(score);
    if (score > highScore) {
      highScore = score;
      hiScore(highScore);
    }
  }
};

const again = function () {
  score = 20;
  randomNum = Math.trunc(Math.random() * 20 + 1);
  message('Start guessing');
  humanScore(20);
  bgColor('#222');
  width('15rem');
  numBer('?');
  document.querySelector('.guess').value = '';
};

document.querySelector('.check').addEventListener('click', work);
document.querySelector('.again').addEventListener('click', again);

const check = document.querySelector('.check');

document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    work();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') {
    again();
  }
});
