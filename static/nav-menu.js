import { checkElementVisibility, checkVirticalVisPercent, isScrollingDown, makeContainer } from "./helper.js"
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
            paralaxImage(heroImg)
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
    navBar.appendChild(quickLinkMenu)

    // TODO would be function, that takes in array
    const expandedMenu = makeContainer('div', 'menu-expanded')
    expandedMenu.classList.add('hidden')
    getExpnadedMenuContent(expandedMenu)


    navCont.appendChild(navBar)
    navCont.appendChild(expandedMenu)
    navCont.appendChild(huePicker())

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

    function huePicker () {
        const sliderLabel = makeContainer('label', 'slider-label')
        sliderLabel.setAttribute('for', 'hue-slider')
        sliderLabel.textContent = 'select main hue'
        
        const hSlider = makeContainer('input', 'hue-slider')
        hSlider.setAttribute('id', 'hue-picker')
        hSlider.setAttribute('type', 'range')
        hSlider.setAttribute('min', 0)
        hSlider.setAttribute('max', 360)
        hSlider.value = 218

        hSlider.addEventListener('input', updateHue)

        sliderLabel.appendChild(hSlider)

        return sliderLabel

        function updateHue (e) {
            const hueVal = e.target.value
            console.log(hueVal)

            document.documentElement.style.setProperty('--primary-color', `hsl(${hueVal}, 85%, 96%)`)
            document.documentElement.style.setProperty('--font-primary-color', `hsl(${hueVal}, 70%, 18%)`)
        }
    }
    // attach to expanded menu

    

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





