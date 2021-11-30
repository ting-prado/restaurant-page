const loadContact = () => {
    const currentPage = document.querySelector('.currentPage');
    currentPage.innerHTML = '';
    currentPage.id = 'contactpage';
    
    //heading texts
    const contactText = document.createElement('div');
    contactText.id = 'contact-text';
    const contactH1 = document.createElement('h1');
    contactH1.textContent = 'Get in Touch';
    const contactP1 = document.createElement('p');
    contactP1.textContent = 'Feel free to contact us for any information';
    currentPage.appendChild(contactText);
    contactText.appendChild(contactH1);
    contactText.appendChild(contactP1);

    //whitish div
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contactDiv';
    currentPage.appendChild(contactDiv);

    //business hours
    const hoursDiv = document.createElement('div');
    hoursDiv.id = 'hours';
    contactDiv.appendChild(hoursDiv);
    const hoursH1 = document.createElement('h1');
    hoursH1.id = 'hours-heading';
    hoursH1.textContent = 'Business Hours';
    const hoursP1 = document.createElement('p');
    hoursP1.classList.add('hours-text');
    hoursP1.textContent = 'Monday . Tuesday . Wednesday';
    const hoursP2 = document.createElement('p');
    hoursP2.classList.add('hours-text');
    hoursP2.textContent = 'Thursday . Friday . Saturday';
    const hoursP3 = document.createElement('p');
    hoursP3.classList.add('hours-text');
    hoursP3.classList.add('hours-time');
    hoursP3.textContent = '8am - 8pm';
    hoursDiv.appendChild(hoursH1);
    hoursDiv.appendChild(hoursP1);
    hoursDiv.appendChild(hoursP2);
    hoursDiv.appendChild(hoursP3);

    //google map
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('mapouter');
    const mapInner = document.createElement('div');
    mapInner.classList.add('gmap_canvas');
    const gmap = document.createElement('iframe');
    gmap.id = 'gmap_canvas';
    gmap.src = 'https://maps.google.com/maps?q=Sumire%20Tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed';
    gmap.frameborder = '0';
    gmap.scrolling = 'no';
    gmap.marginheight = '0';
    gmap.marginwidth = '0';
    contactDiv.appendChild(mapDiv);
    mapDiv.appendChild(mapInner);
    mapInner.appendChild(gmap);

    //form and info div
    const formInfo = document.createElement('div');
    formInfo.id = 'form-info';
    //form
    const form = document.createElement('form');
    form.id = 'form';
    const fnameInput = document.createElement('input');
    fnameInput.classList.add('text-inputs');
    fnameInput.id = 'fname';
    fnameInput.type = 'text';
    fnameInput.placeholder = 'Full Name...';
    fnameInput.name = 'fname';
    const emailInput = document.createElement('input');
    emailInput.classList.add('text-inputs');
    emailInput.id = 'email';
    emailInput.type = 'text';
    emailInput.placeholder = 'Email...';
    emailInput.name = 'email';
    const textArea = document.createElement('textarea');
    textArea.cols = '50';
    textArea.id = 'review';
    textArea.rows = '5';
    textArea.placeholder = 'Your Message...';
    textArea.name = 'review';
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 'submit';
    submit.value = 'Send Message';
    contactDiv.appendChild(formInfo);
    formInfo.appendChild(form);
    form.appendChild(fnameInput);
    form.appendChild(emailInput);
    form.appendChild(textArea);
    form.appendChild(submit);
    //info
    const info = document.createElement('div');
    info.id = 'info';
    const infoH1 = document.createElement('h1');
    infoH1.id = 'info-heading';
    infoH1.textContent = 'Diner Contact Information';
    formInfo.appendChild(info);
    info.appendChild(infoH1);
    for(let i=1; i<=5; i++) {
        const infoP = document.createElement('p');
        switch(i) {
            case 1:
                infoP.textContent = 'contact@yukihira.tld';
                infoP.classList.add('info-text-top');
                break;
            case 2:
                infoP.textContent = '+81 3 3350 4511';
                break;
            case 3:
                infoP.textContent = '';
                infoP.classList.add('info-text-space');
                break;
            case 4:
                infoP.textContent = 'Sumiredori Shopping District';
                break;
            case 5:
                infoP.textContent = 'Tokyo, Japan';
                break;
        }
        info.classList.add('info-text');
        info.appendChild(infoP);
    }
}

export default loadContact;