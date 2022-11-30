window.addEventListener('DOMContentLoaded', main);

function main() {
  addEventListeners()
}

function addEventListeners() {
  const menuIcon = document.querySelector('.burger-menu');
  menuIcon.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  const header = document.querySelector('header');
  header.classList.toggle('h-80');

  const menuIcon = document.querySelector('.burger-menu');
  
}

