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



function palletteSelect () {
    const pMenu = makeContainer('div', 'pallete-select')

    const paletteOptions = {
        'jewel' : 'bright',
        'pastel' : 'muted',
        'earthy' : 'neutral',
        'bright' : 'very bright',
    }

    const optLen = Object.keys(paletteOptions).length

    console.log(`test palete select ${optLen}`)

    for (let i = 0; i < optLen; i++) {
        
        const pLabel = makeContainer('label', 'palette-option')
        pLabel.textContent = Object.keys(paletteOptions)[i]

        const pOption = makeContainer('input', 'palette-sel')
        pOption.setAttribute('type', 'radio')
        pOption.setAttribute('name', 'palette-option')
        pOption.setAttribute('value', Object.keys(paletteOptions)[i] )
        pLabel.appendChild(pOption)


        pMenu.appendChild(pLabel)
        pOption.addEventListener('change', updatePalette)
    }

    return pMenu

    function updatePalette (e) {
        // get the current hue color
        const huePick = document.querySelector('#hue-picker')

        if (!huePick) {
            console.log('cannot locate hue-picker')
            return
        }

        const hueVal = huePick.value

        const paletteVal = e.target.value

        console.log(`test pal val ${paletteVal}`)

        let primeColor, fontColor

        switch (paletteVal) {
            case 'jewel':
                primeColor = `hsl(${hueVal}, 80%, 40%)`
                fontColor = `hsl(${hueVal}, 90%, 90%)`
                break
            case 'pastel':
                primeColor = `hsl(${hueVal}, 50%, 85%)`
                fontColor = `hsl(${hueVal}, 30%, 20%)`
                break
            case 'earthy':
                primeColor = `hsl(${hueVal}, 30%, 50%)`
                fontColor = `hsl(${hueVal}, 10%, 10%)`
                break
            case 'bright':
                primeColor = `hsl(${hueVal}, 100%, 60%)`
                fontColor = `hsl(${hueVal}, 80%, 10%)`
                break
            default:
                primeColor = `hsl(${hueVal}, 50%, 50%)`
                fontColor = `hsl(${hueVal}, 0%, 0%)`
                break
        }

        
        document.documentElement.style.setProperty('--primary-color', primeColor)
        document.documentElement.style.setProperty('--font-primary-color', fontColor)
        console.log(primeColor, fontColor)
    }
}


function makeSettingsMenu () {
    const menu = makeContainer('div', 'settings-menu')
    menu.appendChild(huePicker())
    menu.appendChild(fontSelector())
    menu.appendChild(palletteSelect())

    menu.classList.add('hidden')
    return menu
}

export {
    makeSettingsMenu,
}