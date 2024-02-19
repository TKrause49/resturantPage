import Picture from './insideBobs.jpg';

const div = document.querySelector('#content');

function aboutContent() {
    const myIcon = new Image();
    myIcon.src = Picture;
    myIcon.style.width = "200px";
    div.appendChild(myIcon);

    const heading = document.createElement('h1');
    heading.textContent = 'About Us';
    div.appendChild(heading);

    const text = document.createElement('p');
    text.textContent = 'My restaurant has been open for a long time. We have tons of great dishes you can try, and we love to cook! Come try our famous "Billionaire Bobby Boy Burger Blaster" burger!';
    div.appendChild(text);
};

export { aboutContent };