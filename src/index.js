import { pageLoad } from './pageLoad'
import { renderMenu } from './menu'
import { renderContactForm } from './contact'

const container = document.querySelector('#content');


//creation of initial text content
let title = document.createElement('h1');
let intro = document.createElement('p');

title.innerHTML = 'Random Restaurant';
intro.innerHTML = 'Random info on the restaurant.';

//preparation of argument for render function
let heading = [title,intro];

pageLoad(heading,container);

//creation of space dedicated to menu and contact form
let section = document.createElement('section');
section.style.setProperty('width', '400px');
section.style.setProperty('height', '300px');
section.style.setProperty('display', 'flex');
section.style.setProperty('flex-direction', 'column');
section.style.setProperty('border', '1px solid white');
container.appendChild(section);

let tabs = document.createElement('div');
tabs.style.setProperty('height', '20%');
tabs.style.setProperty('display', 'flex');
section.appendChild(tabs);

let menuTab = document.createElement('p');
let contactTab = document.createElement('p');
menuTab.innerHTML = 'Menu';
contactTab.innerHTML = 'Contact';
menuTab.style.setProperty('id', 'menu');
menuTab.style.setProperty('border', '1px solid white');
menuTab.style.setProperty('width', '50%');
contactTab.style.setProperty('id', 'contact');
contactTab.style.setProperty('border', '1px solid white');
contactTab.style.setProperty('width', '50%');
tabs.appendChild(menuTab);
tabs.appendChild(contactTab);

let tabContent =  document.createElement('div');
section.appendChild(tabContent);

menuTab.addEventListener('click', () => {
    menuTab.style.setProperty('border-bottom', 'none');
    contactTab.style.setProperty('border-bottom', '1px solid white');
    tabContent.innerHTML = '';
    tabContent.innerHTML = renderMenu(tabContent);
});

contactTab.addEventListener('click', () => {
    menuTab.style.setProperty('border-bottom', '1px solid white');
    contactTab.style.setProperty('border-bottom', 'none');
    tabContent.innerHTML = '';
    renderContactForm(tabContent);
});