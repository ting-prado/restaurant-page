import large_logo from './assets/logo.png';
import food from './assets/food-unscreen.png';

const loadHome = () => {
    const currentPage = document.querySelector('.currentPage');
    currentPage.innerHTML = '';
    currentPage.id = 'homepage';

    //contents
    const homeDiv = document.createElement('div');
    homeDiv.id = 'homeDiv';
    const homelogo = new Image();
    homelogo.src = large_logo;
    homelogo.id = 'logo';
    homelogo.alt = 'yukihira diner homepage logo';
    const description = document.createElement('p');
    description.id = 'desc';
    description.textContent = 'Yukihira pushes the envelope of Japanese cuisine. Taking its influences from our team members\' culinary roots, this diner blends traditional and innovative techniques to create unique offerings using local ingredients in all of its dishes. We are grounded in hospitality with our staff\'s commitment to provide you with a memorable experience every time you walk through our door.';
    const foodImg = new Image();
    foodImg.src = food;
    foodImg.id = 'food';
    foodImg.alt = 'home food image';
    currentPage.appendChild(homeDiv);
    homeDiv.appendChild(homelogo);
    homeDiv.appendChild(description);
    homeDiv.appendChild(foodImg);
}

export default loadHome;