import { navBar } from "./nav-menu.js";

console.log('index script!')


const bod = document.querySelector('body')
const ui = bod.querySelector('#ui-layer')

if (bod && ui)  {
    ui.appendChild(navBar())
}

