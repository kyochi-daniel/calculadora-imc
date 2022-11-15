export const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal h2 span'),
    btnClose: document.querySelector('.modal button.close'),
    open(){
        modal.wrapper.classList.add('open')
    },
    close(){
        modal.wrapper.classList.remove('open')
    }
}

modal.btnClose.addEventListener('click', () => {
    modal.close()
})

window.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        modal.close()
    }
})