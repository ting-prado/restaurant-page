import large_logo from './assets/logo.png';
import food from './assets/food-unscreen.png';

const loadHome = () => {
    const currentPage = document.querySelector('.currentPage');
    currentPage.innerHTML = '';
    currentPage.id = 'homepage';
    const homelogo = new Image();
    homelogo.src = large_logo;
    homelogo.id = 'logo';
    homelogo.alt = 'yukihira diner homepage logo';
    const description = document.createElement('p');
    description.id = 'desc';
    description.textContent = 'Yukihira pushes the envelope of japanese cuisine. Taking its influences from our team members\'s culinary roots, Yukihira blends traditional and innovative techniques to create unique offerings using local ingredients in all of its dishes. Yukihira is grounded in hospitality with our staff\'s commitment to providing you with a memorable experience each time you walk through our door.';
    const foodImg = new Image();
    foodImg.src = food;
    foodImg.id = 'food';
    foodImg.alt = 'home food image';
    currentPage.appendChild(homelogo);
    currentPage.appendChild(description);
    currentPage.appendChild(foodImg);
}

export default loadHome;