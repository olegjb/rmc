import { makeContainer } from "./helper.js"

function fontSelector ( ) {
    const fontOptions = [
        'Arial, sans-serif',
        "Times New Roman, serif",
        "Courier New, monospace",
        "Poppins, sans-serif",
        "Playfair, serif",
        "Roboto, monospace",
        
    ]

    const fSelectLabel = makeContainer('label', 'font-sel-label')
    fSelectLabel.setAttribute('for', 'font-select')
    fSelectLabel.textContent = 'select font'
    

    const fontSelectInput = makeContainer('select', 'font-select')
    fontSelectInput.addEventListener('change', updateFont)

    fontOptions.forEach(option => {
        const opt = makeContainer('option', 'font-option')
        opt.textContent = option
        fontSelectInput.appendChild(opt)
    })

    fSelectLabel.appendChild(fontSelectInput)
    
    return fSelectLabel


    function updateFont (e) {
        const fontVal = e.target.value
        console.log(fontVal)
        document.documentElement.style.setProperty('--font-fam', fontVal)
    }
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
        document.documentElement.style.setProperty('--primary-med', `hsl(${hueVal}, 35%, 35%)`)
        document.documentElement.style.setProperty('--contrast-light', `hsl(${hueVal}, 35%, 91%)`)
        document.documentElement.style.setProperty('--primary-dark', `hsl(${hueVal}, 32%, 17%)`)
    }
}


function makeSettingsMenu () {
    const menu = makeContainer('div', 'settings-menu')
    menu.appendChild(huePicker())
    menu.appendChild(fontSelector())
    
    return menu
}

export {
    makeSettingsMenu,
}