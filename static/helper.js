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

export {
    makeContainer,
    isScrollingDown,
}