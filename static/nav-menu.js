console.log('nav bar/menu script')


function navBar() {
    'returns a nav-bar component'
    const newDiv = document.createElement('div')
    newDiv.classList.add('nav-container')

    // fetch the template
    fetch ('/nav-bar')
        .then( content => {
            // read as text 
            return content.text()
        })

        
        // return it as 'html'
        .then ( teContent => {
            
            newDiv.innerHTML = teContent
        })

    return newDiv

}


export {
    navBar
}





