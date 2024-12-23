import { isScrollingDown, makeContainer } from "./helper.js"
console.log('nav bar/menu script')


const checkScrollDir = () => {
    const menuLite = document.querySelector('.nav-container')
    
    if (!menuLite) {
        return
    }

    // scroll down/up events
    if (isScrollingDown()) {
        menuLite.classList.add('scroll-down')
        menuLite.classList.remove('scroll-up')
    } else {
        menuLite.classList.add('scroll-up')
        menuLite.classList.remove('scroll-down')
    }
}


window.addEventListener('scroll', checkScrollDir)

function navBar() {
    'returns a nav-bar component'
    // menu structure


    const navCont = makeContainer('div', 'nav-container')


    
    const navBar = makeContainer('div', 'nav-bar')
    // hamburger menu
    navBar.appendChild(hamMenu())
    
    // logo
    navBar.appendChild(makeLogoContainer())

    // TODO quick links function
    const quickLinkMenu = makeContainer('div', 'quick-link')
    navBar.appendChild(quickLinkMenu)

    // TODO would be function, that takes in array
    const expandedMenu = makeContainer('div', 'menu-expanded')
    expandedMenu.classList.add('hidden')
    
    navCont.appendChild(navBar)
    navCont.appendChild(expandedMenu)

    function makeLogoContainer () {
        const logoContainer = makeContainer('div', 'logo-container')

        // get the logo, svg or text
        fetch ('/logo')
            .then( logo_html => {
                return logo_html.text()
            } )
            .then ( l_html => {
                logoContainer.innerHTML = l_html
            } )
        //

        return logoContainer
    }

    function hamMenu () {
        const menuToggleCont = makeContainer('div', 'menu-toggle-cont')
        const hamMenu = makeContainer('div', '.ham-menu')
        hamMenu.addEventListener('click', toggleExpMenu)

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
            return menuToggleCont
    }

    return navCont

    // ----- ----- helper functions

    // hover menu func

    function toggleExpMenu () { 
        if (expandedMenu.classList.contains('hidden')) {
            expandedMenu.classList.remove('hidden')
            expandedMenu.classList.add('expanded')
        } else {
            expandedMenu.classList.remove('expanded')
            expandedMenu.classList.add('hidden')
        }
    }
}











// refine event for scroll down
// when scroling up, become more visible
// when down, fade away

export {
    navBar
}





