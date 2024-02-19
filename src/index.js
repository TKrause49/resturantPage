import { homeContent } from "./home.js";
import { menuContent } from "./menu.js";
import { aboutContent } from "./about.js";

const container = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');

function clearContainer () {
    container.textContent = '';
}

homeContent();

homeBtn.addEventListener('click', () => {
    clearContainer();
    homeContent();
});

menuBtn.addEventListener('click', () => {
    clearContainer();
    menuContent();
});

aboutBtn.addEventListener('click', () => {
    clearContainer();
    aboutContent();
});
