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
var wizardCoatColor = [
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

function changeColor(place, object, colors) {
  if (place === -1 || place === colors.length - 1) {
    place = 0;
  } else {
    place += 1;
  }
  object.style.fill = colors[place];
}

wizardCoat.addEventListener('click', function () {
  var currentColor = wizardCoat.style.fill;
  var place = find(wizardCoatColor, currentColor);
  changeColor(place, wizardCoat, wizardCoatColor);
});

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColor = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

wizardEyes.addEventListener('click', function () {
  var currentColor = wizardEyes.style.fill;
  var place = find(wizardEyesColor, currentColor);
  changeColor(place, wizardEyes, wizardEyesColor);
});

var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = [
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
  var currentColor = getComputedStyle(fireball);
  currentColor = currentColor.backgroundColor;
  currentColor = colorToHex(currentColor);
  var place = find(fireballColor, currentColor);
  changeColor(place, fireball, fireballColor);
  if (place === -1 || place === fireballColor.length - 1) {
    place = 0;
  } else {
    place += 1;
  }
  fireball.style.background = fireballColor[place];
});


