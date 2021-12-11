import chickenDon from './assets/Chicken_Egg_Tempura_Don.png';
import specialRamen from './assets/special\ ramen.png';
import africanRamen from './assets/African_Ramen.png';
import curryRice from './assets/curry.png';
import pork from './assets/pork.png';
import terrine from './assets/Rainbow_Terrine.png';
import tea from './assets/drinks.png';

const loadMenu = () => {
    const currentPage = document.querySelector('.currentPage');
    currentPage.innerHTML = '';
    currentPage.id = 'menupage';

    const menuDiv = document.createElement('div');
    menuDiv.id = 'menudiv';
    currentPage.appendChild(menuDiv);

    const menucontent = document.createElement('div');
    menucontent.id = 'menucontent';
    menuDiv.appendChild(menucontent);

    //donburi
    const donburi = document.createElement('div');
    donburi.id = 'donburi';
    const donburiH1 = document.createElement('h1');
    donburiH1.textContent = 'Donburi';
    const donburiImg = new Image();
    donburiImg.src = chickenDon;
    donburiImg.id = 'chicken-don';
    donburiImg.alt = 'chicken egg tempura don';
    menucontent.appendChild(donburi);
    donburi.appendChild(donburiH1);
    for(let i=1; i<=4; i++) {
        const donburiP = document.createElement('p');
        switch(i) {
            case 1:
                donburiP.textContent = 'Chaliapin Steak Don................¥450';
                break;
            case 2:
                donburiP.textContent = 'Chicken Egg Tempura Don......¥420';
                break;
            case 3:
                donburiP.textContent = 'Japanese Beef Roti Don...........¥380';
                break;
            case 4:
                donburiP.textContent = 'Beef Cutlet Don.......................¥400';
                break;
        }
        donburi.appendChild(donburiP);
    }
    menucontent.appendChild(donburiImg);

    //ramen
    const ramenImg1 = new Image();
    ramenImg1.src = specialRamen;
    ramenImg1.id = 'special-ramen';
    ramenImg1.alt = 'joichiro special rich ramen';
    const ramenImg2 = new Image();
    ramenImg2.src = africanRamen;
    ramenImg2.id = 'african-ramen';
    ramenImg2.alt = 'african ramen';

    const ramen = document.createElement('div');
    ramen.id = 'ramen';
    const ramenH1 = document.createElement('h1');
    ramenH1.textContent = 'Ramen';
    menucontent.appendChild(ramenImg1);
    menucontent.appendChild(ramen);
    ramen.appendChild(ramenH1);
    for(let i=1; i<=6; i++) {
        const ramenP = document.createElement('p');
        switch(i) {
            case 1:
                ramenP.textContent = 'African Ramen......................................¥560';
                break;
            case 2:
                ramenP.textContent = 'Joichiro Special Rich Ramen................¥570';
                break;
            case 3:
                ramenP.textContent = 'Soupe De Poisson Ramen.....................¥560';
                break;
            case 4:
                ramenP.textContent = 'Kagoshima Ramen................................¥535';
                break;
            case 5:
                ramenP.textContent = 'Tonkotsu Ramen...................................¥540';
                break;
            case 6:
                ramenP.textContent = 'Kozuyu Chicken Soy Sauce Ramen......¥535';
                break;
        }
        ramen.appendChild(ramenP);
    }
    menucontent.appendChild(ramenImg2);

    //mid images
    const curryImg = new Image();
    curryImg.src = curryRice;
    curryImg.id = 'curry-rice';
    curryImg.alt = 'curry with rice';
    const porkImg = new Image();
    porkImg.src = pork;
    porkImg.id = 'pork';
    porkImg.alt = 'holding pork with chopsticks';
    menucontent.appendChild(curryImg);
    menucontent.appendChild(porkImg);

    //curry
    const curry = document.createElement('div');
    curry.id = 'curry';
    const curryH1 = document.createElement('h1');
    curryH1.textContent = 'Curry';
    menucontent.appendChild(curry);
    curry.appendChild(curryH1);
    for(let i=1; i<=6; i++) {
        const curryP = document.createElement('p');
        switch(i) {
            case 1:
                curryP.textContent = 'Curry Risotto Omurice....................¥335';
                break;
            case 2:
                curryP.textContent = 'Kozhi Varutha Curry.......................¥320';
                break;
            case 3:
                curryP.textContent = 'Time Fuse Mapo Curry Noodles.......¥360';
                break;
            case 4:
                curryP.textContent = 'Pineapple Fried Curry Rice.............¥335';
                break;
            case 5:
                curryP.textContent = 'Monkfish Dobu-Jiru Curry...............¥340';
                break;
            case 6:
                curryP.textContent = 'Naporitan Curry Fettucine.............¥335';
                break;
        }
        curry.appendChild(curryP);
    }

    //terrine image
    const terrineImg = new Image();
    terrineImg.src = terrine;
    terrineImg.id = 'terrine';
    terrineImg.alt = 'rainbow terrine';
    menucontent.appendChild(terrineImg);

    //appetizer
    const appetizer = document.createElement('div');
    appetizer.id = 'appetizer';
    const appetizerH1 = document.createElement('h1');
    appetizerH1.textContent = 'Appetizer';
    menucontent.appendChild(appetizer);
    appetizer.appendChild(appetizerH1);
    for(let i=1; i<=5; i++) {
        const appetizerP = document.createElement('p');
        switch(i) {
            case 1:
                appetizerP.textContent = 'Rainbow Terrine.......................¥120';
                break;
            case 2:
                appetizerP.textContent = 'Hachis Parmentier...................¥170';
                break;
            case 3:
                appetizerP.textContent = 'Butter Pilaf Inarizushi............¥160';
                break;
            case 4:
                appetizerP.textContent = 'Anki-Monaka.............................¥155';
                break;
            case 5:
                appetizerP.textContent = 'Sumire Karaage........................¥140';
                break;
        }
        appetizer.appendChild(appetizerP);
    }

    //dumpling
    const dumpling = document.createElement('div');
    dumpling.id = 'dumpling';
    const dumplingH1 = document.createElement('h1');
    dumplingH1.textContent = 'Dumpling';
    menucontent.appendChild(dumpling);
    dumpling.appendChild(dumplingH1);
    for(let i=1; i<=4; i++) {
        const dumplingP = document.createElement('p');
        switch(i) {
            case 1:
                dumplingP.textContent = 'Cheese-Feathered Hanetsuki Gyoza.................¥240';
                break;
            case 2:
                dumplingP.textContent = 'Hujao Bing..........................................................¥220';
                break;
            case 3:
                dumplingP.textContent = 'Jiaozi with Chili Oil...........................................¥230';
                break;
            case 4:
                dumplingP.textContent = 'Surprise-Filled Gyoza........................................¥270';
                break;
        }
        dumpling.appendChild(dumplingP);
    }

        //drinks
        const drinks = document.createElement('div');
        drinks.id = 'drinks';
        const drinksH1 = document.createElement('h1');
        drinksH1.textContent = 'Drinks';
        menucontent.appendChild(drinks);
        drinks.appendChild(drinksH1);
        for(let i=1; i<=4; i++) {
            const drinksP = document.createElement('p');
            switch(i) {
                case 1:
                    drinksP.textContent = 'Flavored Soy Milk.................¥80';
                    break;
                case 2:
                    drinksP.textContent = 'Royal Milk Tea......................¥80';
                    break;
                case 3:
                    drinksP.textContent = 'Green Tea.............................¥70';
                    break;
                case 4:
                    drinksP.textContent = 'Japanese Sake......................¥100';
                    break;
                case 5:
                    drinksP.textContent = 'Melon Soda...........................70';
                    break;
            }
            drinks.appendChild(drinksP);
        }
        const drinksImg = new Image();
        drinksImg.src = tea;
        drinksImg.id = 'tea';
        drinksImg.alt = 'milk teas';
        menucontent.appendChild(drinksImg);
}

export default loadMenu;