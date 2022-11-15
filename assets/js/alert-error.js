export const alertError = {
    element: document.querySelector('.alert-message'),
    open(){ 
        alertError.element.classList.add('open')
    },
    close(){
        alertError.element.classList.remove('open')
    }
}

