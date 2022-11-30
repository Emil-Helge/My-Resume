window.addEventListener('DOMContentLoaded', main);

function main() {
  addEventListeners()
  scrollAnimation()
}

function addEventListeners() {
  const menuIcon = document.querySelector('.burger-menu');
  menuIcon.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  const header = document.querySelector('header');
  header.classList.toggle('h-60');

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