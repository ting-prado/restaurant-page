import large_logo from './assets/logo.png';
import food from './assets/food-unscreen.png';

const loadHome = () => {
    const currentPage = document.querySelector('.currentPage');
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

export default loadHome;