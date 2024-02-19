import Picture from './bobsBurgers.jpg';

const div = document.querySelector('#content');

function homeContent() {
    const myIcon = new Image();
    myIcon.src = Picture;
    myIcon.style.width = "200px";
    div.appendChild(myIcon);

    const heading = document.createElement('h1');
    heading.textContent = 'My Restaurant';
    div.appendChild(heading);

    const text = document.createElement('p');
    text.textContent = 'My Restaurant is a great restaurant! We cook a lot of great food. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laboriosam perspiciatis consequatur minima. Ratione quidem et, nihil ipsum nulla atque eius molestiae deserunt excepturi voluptas. Consectetur aut rerum perferendis labore.';
    div.appendChild(text);
};

export { homeContent };