import Picture from './bobsLogo.jpg';

const div = document.querySelector('#content');

function createItem(dish, description) {
    const li = document.createElement('li');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    h2.textContent = dish;
    p.textContent = description;
    li.appendChild(h2);
    li.appendChild(p);
    return li;
}

function menuContent() {
    const myIcon = new Image();
    myIcon.src = Picture;
    myIcon.style.width = "200px";
    div.appendChild(myIcon);

    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    div.appendChild(heading);

    const list = document.createElement('ul');
    const chicken = createItem('Chicken', 'White chicken breast marianted with lemon pepper seasoning, seared and baked to the perfect temperature. Served with carmalized onions on top and a side of mashed potatoes.');
    const soup = createItem('Soup', 'Chicken noodle soup with home made broth. Contains onions, carrots, noodles, and chicken.');
    list.appendChild(chicken);
    list.appendChild(soup);

    div.appendChild(list);
};

export { menuContent };