import './assets/css/main.css';
import './assets/css/home.css';
import './assets/css/menu.css';
import './assets/css/contact.css';
import './assets/css/reset.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import makeNav from './navbar';

makeNav();

const content = document.querySelector('#content');
const currentPage = document.createElement('div');
currentPage.classList.add('currentPage');
content.appendChild(currentPage);

loadHome();

const home = document.querySelector('.home');
home.addEventListener('click', loadHome);

const menu = document.querySelector('.menu');
menu.addEventListener('click', loadMenu);

const contact = document.querySelector('.contact');
contact.addEventListener('click', loadContact);
