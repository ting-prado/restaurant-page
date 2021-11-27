import './assets/css/main.css';
import './assets/css/reset.css';
import small_logo from './assets/small-logo.png';
import large_logo from './assets/logo.png';
import food from './assets/food-unscreen.png';

const content = document.querySelector('#content');
const navbar = document.createElement('nav');
navbar.setAttribute('id', 'navbar');
content.appendChild(navbar);

const navlogo = new Image();
navlogo.src = small_logo;
navlogo.id = 'nav-logo';
const home = document.createElement('a');
home.setAttribute('href', '#');
home.textContent = 'Home';
const menu = document.createElement('a');
menu.setAttribute('href', '#');
menu.textContent = 'Menu';
const contact = document.createElement('a');
contact.setAttribute('href', '#');
contact.textContent = 'Contact Us';
navbar.appendChild(navlogo);
navbar.appendChild(home);
navbar.appendChild(menu);
navbar.appendChild(contact);

const currentPage = document.createElement('div');
content.appendChild(currentPage);

const loadHome = () => {
    currentPage.innerHTML = '';
    currentPage.id = 'homepage';
    const homelogo = new Image();
    homelogo.src = large_logo;
    homelogo.id = 'logo';
    const description = document.createElement('p');
    description.id = 'desc';
    description.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel semper erat. Etiam placerat pretium nulla eu auctor. In lorem neque, mollis quis sagittis nec, lacinia sit amet est. Nullam sed convallis nulla. Mauris faucibus tincidunt posuere. Nam sollicitudin nunc et erat consectetur dictum. Fusce blandit, felis eu convallis luctus, ligula magna pretium justo, a tincidunt dolor diam quis purus.';
    const foodImg = new Image();
    foodImg.src = food;
    foodImg.id = 'food';
    currentPage.appendChild(homelogo);
    currentPage.appendChild(description);
    currentPage.appendChild(foodImg);
}

document.addEventListener('DOMContentLoaded', loadHome);
home.addEventListener('click', loadHome);