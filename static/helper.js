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


export {
    makeContainer
}