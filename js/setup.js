'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupModal = document.querySelector('.setup');
var setupClose = setupModal.querySelector('.setup-close');

setupOpen.addEventListener('click', function () {
  if (setupModal.classList.contains('invisible')) {
    setupModal.classList.remove('invisible');
  } else {
    setupModal.classList.add('invisible');
  }
});

setupClose.addEventListener('click', function () {
  setupModal.classList.add('invisible');
});

var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

function find(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function getNextIndex(currentIndex, colors) {
  if (currentIndex === -1 || currentIndex === colors.length - 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}

function changeColor(currentIndex, object, colors) {
  var newIndex = getNextIndex(currentIndex, colors);
  object.style.fill = colors[newIndex];
}

function changeBackground(currentIndex, object, colors) {
  var newIndex = getNextIndex(currentIndex, colors);
  object.style.background = colors[newIndex];
}

wizardCoat.addEventListener('click', function () {
  var currentColor = wizardCoat.style.fill;
  var newIndex = find(wizardCoatColors, currentColor);
  changeColor(newIndex, wizardCoat, wizardCoatColors);
});

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizardEyes.addEventListener('click', function () {
  var currentColor = wizardEyes.style.fill;
  var place = find(wizardEyesColors, currentColor);
  changeColor(place, wizardEyes, wizardEyesColors);
});

var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

function colorToHex(color) {
  if (color.substr(0, 1) === '#') {
    return color;
  }
  var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

  var red = parseInt(digits[2], 10);
  var green = parseInt(digits[3], 10);
  var blue = parseInt(digits[4], 10);

  var rgb = blue | (green << 8) | (red << 16);
  return digits[1] + '#' + rgb.toString(16);
}


fireball.addEventListener('click', function () {
  var fireballComputedStyle = getComputedStyle(fireball);
  var currentColor = fireballComputedStyle.backgroundColor;
  var currentColorInHex = colorToHex(currentColor);
  var currentIndex = find(fireballColors, currentColorInHex);
  changeBackground(currentIndex, fireball, fireballColors);
});


