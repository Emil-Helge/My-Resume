window.addEventListener('DOMContentLoaded', main);

function main() {
  addEventListeners()
  scrollAnimation()
  progressBarIncrease()
}

function addEventListeners() {
  const menuIcon = document.querySelector('.burger-menu');
  menuIcon.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  const header = document.querySelector('header');
  header.classList.toggle('toggle-menu');

  const menuIcon = document.querySelector('.burger-menu'); 
}

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
}

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
}