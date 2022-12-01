window.addEventListener('DOMContentLoaded', main);

/** Start of the program */
function main() {
  addEventListeners()
  scrollAnimation()
  progressBarIncrease()
};

/** Eventlistener for toggling header menu on click*/
function addEventListeners() {
  const menuIcon = document.querySelector('.burger-menu');
  menuIcon.addEventListener('click', toggleMenu);
};

/** Toggle for header menu */
function toggleMenu() {
  const header = document.querySelector('header');
  header.classList.toggle('toggle-menu');

  const menuIcon = document.querySelector('.burger-menu'); 
};

/** Animation to elements when the user scrolls past them */
function scrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation-show');
        } else {
            entry.target.classList.remove('scroll-animation-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.scroll-animation-hidden');
hiddenElements.forEach((el) => observer.observe(el));
};

/** Animation to progress bars with varying bar limits */
function progressBarIncrease() {
  const barSpeed = 30;
  const barLimitOne = parseInt(document.getElementById("max-value-1").innerHTML, 10);
  const barLimitTwo = parseInt(document.getElementById("max-value-2").innerHTML, 10);
  const barLimitThree = parseInt(document.getElementById("max-value-3").innerHTML, 10);

  for(let i = 0; i <= barLimitOne; i++) {
      setTimeout(function () {
          document.getElementById("max-value-1").innerHTML = i + "%";
      }, barSpeed * i);
  }

  for(let i = 0; i <= barLimitTwo; i++) {
    setTimeout(function () {
        document.getElementById("max-value-2").innerHTML = i + "%";
    }, barSpeed * i);
  }

  for(let i = 0; i <= barLimitThree; i++) {
    setTimeout(function () {
        document.getElementById("max-value-3").innerHTML = i + "%";
    }, barSpeed * i);
  }
};