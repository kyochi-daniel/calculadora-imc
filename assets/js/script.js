//Importações
import { modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC, notNumber} from './utils.js'

// Variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

//Eventos
form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if(weightOrHeightIsNotANumber){
        alertError.open()
        return
    }
    
    alertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    modal.open()
    modal.message.innerText = `Seu IMC é de ${result}`
}

inputWeight.addEventListener('input', () => {
    alertError.close()
})

inputHeight.addEventListener('input', () => {
    alertError.close()
})
