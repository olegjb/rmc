import { checkElementVisibility, checkVirticalVisPercent, isScrollingDown, makeContainer } from "./helper.js"
import { makeSettingsMenu } from "./settings-menu.js"
console.log('nav bar/menu script')


const checkScrollDir = () => {
    const menuLite = document.querySelector('.nav-container')
    
    if (!menuLite) {
        return
    }

    const heroImg = document.querySelector('.hero-image')

    // scroll down/up events
    if (isScrollingDown()) {
        if (heroImg) {
            // paralaxImage(heroImg)
        }
        
        menuLite.classList.add('scroll-down')
        menuLite.classList.remove('scroll-up')


    } else {
        menuLite.classList.add('scroll-up')
        menuLite.classList.remove('scroll-down')


    }



    function paralaxImage (image) {
        console.log(`testing paralax ${Math.abs(checkVirticalVisPercent(image) * 10)}`)
        // image.style.transform = `translateY(${Math.abs(checkVirticalVisPercent(image) * 10)}%`
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
    quickLinkMenu.appendChild(settingsToggle())
    navBar.appendChild(quickLinkMenu)

    // a contianer for holding expanded and setting menu

    const expCont = makeContainer('div', 'expanded-container')

    // TODO would be function, that takes in array
    const expandedMenu = makeContainer('div', 'menu-expanded')
    expandedMenu.classList.add('hidden')
    getExpnadedMenuContent(expandedMenu)


    navCont.appendChild(navBar)
    expCont.appendChild(expandedMenu)

    navCont.appendChild(expCont)

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

    function getExpnadedMenuContent (parentContainer) {
        // fetch the default template
        fetch('/expanded-menu-content')
        
        // fill in the html
        .then(content => {
            return content.text()
        })
        .then (tcontent => {
            parentContainer.innerHTML = tcontent
        })

        
    }

    function settingsToggle () {
        const cont = makeContainer('div', 'setting-toggle-cont')
        const setToggle = makeContainer('div', 'menuu-setting-toggle')
        setToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>'
        cont.appendChild(setToggle)
        setToggle.addEventListener('click', toggleSettingsMenu)
        return cont

        function toggleSettingsMenu () {
            const setMenu = document.querySelector('.settings-menu')

            if (setMenu.classList.contains('hidden')) {
                setMenu.classList.remove('hidden')
                setMenu.classList.add('expanded')
            } else {
                setMenu.classList.remove('expanded')
                setMenu.classList.add('hidden')
            }
      
        }
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

    expCont.appendChild(makeSettingsMenu())
    

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





