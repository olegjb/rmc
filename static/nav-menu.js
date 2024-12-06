import { makeContainer } from "./helper.js"



console.log('nav bar/menu script')




function navBar() {
    'returns a nav-bar component'
    // menu structure
    const navCont = makeContainer('div', 'nav-container')
    const menuToggleCont = makeContainer('div', 'menu-toggle-cont')
    const hamMenu = makeContainer('div', '.ham-menu')


    // get the ham menu
    fetch ('/ham-menu-svg')
        .then( content => {
            return content.text()
        })
        // append it to the container.
        .then ( tContent => {
            hamMenu.innerHTML = tContent
        })
    
    menuToggleCont.appendChild(hamMenu)
    navCont.appendChild(menuToggleCont)

    return navCont

    

    // hover menu func

    function toggleExpMenuBtn () {
        console.log('running ham toggle')
        // get the ham-menu
        const ham = document.querySelector('.ham-menu')

        if (ham) {
            
            ham.addEventListener('click', toggleExpMenu)
            
            

        }


        function toggleExpMenu (e) {
            const expMenu = e.parentElement.querySelector('.menu-expanded')
            console.log(expMenu)
            
        }
    }
}










// refine event for scroll down
// when scroling up, become more visible
// when down, fade away

export {
    navBar
}





