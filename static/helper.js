function makeContainer(elementType='div', className='test') {
	const newContainer = document.createElement(elementType)
	newContainer.classList.add(className)
	return newContainer
}

function clearContainer (parentContainer) {
    if (!parentContainer.firstChild) {
        return
    }
    console.log(`items still present ${parentContainer.firstChild}`)
    parentContainer.removeChild(parentContainer.firstChild)
    clearContainer(parentContainer)
}


let previousScrollPos = 0

function isScrollingDown () {
    let downScroll = false
    let scrollPos = window.pageYOffset

    if (scrollPos > previousScrollPos) {
        console.log('scrolling down')
        downScroll = true
    }

    previousScrollPos = scrollPos

    return downScroll
}

function checkElementVisibility (element) {
    'checks vertical height of the element, partial vis'
    const bounds = element.getBoundingClientRect()
    const top = bounds.top
    const bottom = bounds.bottom
    const windowHeight = window.innerHeight

    if (top > 0 && top < windowHeight 
        || bottom > 0 && bottom < windowHeight ) 
        {

            return true
    }

    return false
 
}

function checkVirticalVisPercent (element) {
    const sBounds = element.getBoundingClientRect()
    const top = sBounds.top
    const bottom = sBounds.bottom
    const height = sBounds.height
    const wHht = window.innerHeight
    // check if top or bottom is first visible?

    let percentInview = ((top + bottom) / 2) / wHht

    // console.log(`testingin percent vertical ${percentInview}`)
    return percentInview
}

export {
    makeContainer,
    isScrollingDown,
    checkElementVisibility,
    checkVirticalVisPercent,
}