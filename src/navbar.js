import small_logo from './assets/small-logo.png';

const makeNav = () => {
    const content = document.querySelector('#content');
    const navbar = document.createElement('nav');
    navbar.setAttribute('id', 'navbar');
    content.appendChild(navbar);

    const navlogo = new Image();
    navlogo.src = small_logo;
    navlogo.id = 'nav-logo';
    navlogo.alt = 'yukihira diner small logo';
    const home = document.createElement('a');
    home.setAttribute('href', '#');
    home.classList.add('home');
    home.textContent = 'Home';
    const menu = document.createElement('a');
    menu.setAttribute('href', '#');
    menu.classList.add('menu');
    menu.textContent = 'Menu';
    const contact = document.createElement('a');
    contact.setAttribute('href', '#');
    contact.classList.add('contact');
    contact.textContent = 'Contact Us';
    navbar.appendChild(navlogo);
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
}

export default makeNav;