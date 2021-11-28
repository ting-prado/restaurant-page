import './assets/css/main.css';
import './assets/css/reset.css';
import loadHome from './home';
import makeNav from './navbar';

makeNav();

const content = document.querySelector('#content');
const currentPage = document.createElement('div');
currentPage.classList.add('currentPage');
content.appendChild(currentPage);

loadHome();

const home = document.querySelector('.home');
home.addEventListener('click', loadHome);
