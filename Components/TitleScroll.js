var headline = document.getElementsByClassName('content-section__headline-container');
var headlineOffset = headline[0].offsetTop;
var letters = headline[0].innerText.split('');
letters = letters.filter(function(letter) {
  return letter !== ' ' && letter !== '\n' ? letter : false;
});
var tweenDistance = getRandomArbitrary(200, 400);
var topDistance = 0;
var movement = 0;
var elements = [];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function move(element, distance) {
  var translate3d = 'translate3d(0, ' + distance + 'px, 0)';
  element.style['-webkit-transform'] = translate3d;
  element.style['-moz-transform'] = translate3d;
  element.style['-ms-transform'] = translate3d;
  element.style['-o-transform'] = translate3d;
  element.style.transform = translate3d;
};

function moveY(element, distance) {
  var translate3d = 'translateY(' + distance + '%)';
  element.style['-webkit-transform'] = translate3d;
  element.style['-moz-transform'] = translate3d;
  element.style['-ms-transform'] = translate3d;
  element.style['-o-transform'] = translate3d;
  element.style.transform = translate3d;
};

function fadeOut(element, scrollDistance, tweenDistance) {
  element.style.opacity = (tweenDistance - scrollDistance) / tweenDistance;
}

function tweenHeight(element, scrollDistance, tweenDistance, initialHeight) {
  element.style.height = (((tweenDistance - scrollDistance) / tweenDistance) * initialHeight) + 'px';
}

letters.forEach(function(letter) {
  var element = document.createElement('span');
  element.innerText = letter;
  element.dataset.speed = Math.random(0, 1).toFixed(2);
  headline[0].appendChild(element);
  elements.push(element);
});

window.addEventListener('scroll', function (event) {
  var scrollIndicator = document.getElementsByClassName('scroll-indicator');
  var scrollIndicatorLine = document.getElementsByClassName('scroll-indicator__line');
  topDistance = window.pageYOffset;
  movement = topDistance*2;

  fadeOut(scrollIndicator[0], topDistance, 150);
  tweenHeight(scrollIndicatorLine[0], topDistance, 100, 25);
  
  elements.forEach(function(element) {
    movement = -(topDistance * element.dataset.speed);
    move(element, movement);
    fadeOut(element, topDistance, tweenDistance);
  });
});

/*Copyright (c) 2021 by Biliana (https://codepen.io/interstellar/pen/OmVjJg)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/