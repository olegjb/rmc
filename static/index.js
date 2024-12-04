import { navBar } from "./nav-menu.js";

console.log('index script!')


const bod = document.querySelector('body')

if (bod) {
    bod.appendChild(navBar())
}

