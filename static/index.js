import { navBar } from "./nav-menu.js";

console.log('index script!')


const bod = document.querySelector('body')
const ui = bod.querySelector('#ui-layer')





function updateHue (e) {
    const hueVal = e.target.value
    console.log(`testing hue pick ${hueVal}`)
}


if (bod && ui)  {
    ui.appendChild(navBar())

    


}



