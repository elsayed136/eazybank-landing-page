import sass from '../sass/index.scss';

const body = document.body;
const btnNavbarToggler = document.querySelector('#navbar__toggler');
const header = document.querySelector('#header');
const animatedFadeElements = document.querySelectorAll('.animated-fade');

btnNavbarToggler.addEventListener('click', function () {
  console.log('clicked');
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    body.classList.remove('noscroll');

    animatedFadeElements.forEach(element => {
      element.classList.add('fade-out');
      element.classList.remove('fade-in');
    });
  } else {
    header.classList.add('open');
    body.classList.add('noscroll');
    animatedFadeElements.forEach(element => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }
});
