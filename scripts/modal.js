/* Função Modal */


let idValue = 0
let sumValue = 0

function modalFuncao() {

    const sectionModal = document.createElement("section")
    const sectionModalContainer = document.createElement("section")
    const divModal = document.createElement("div")
    const h3Modal = document.createElement("h3")
    const modalBtn = document.createElement("button")
    const modalMain = document.createElement("main")
    const modalParagraph = document.createElement("p")
    const modalValue = document.createElement("div")
    const modalLabel = document.createElement("label")
    const modalInput = document.createElement("input")
    const modalDivValue = document.createElement("div")
    const modalParagraphValue = document.createElement("p")
    const modalEnter = document.createElement("input")
    const modalEnterLabel = document.createElement("label")
    const modalClose = document.createElement("input")
    const modalCloseLabel = document.createElement("label")
    const modalFootDiv = document.createElement("div")
    const modalBtnCanceled = document.createElement("button")
    const modalBtnAdd = document.createElement("button")


    sectionModal.classList = 'modal__section'
    sectionModalContainer.classList = 'modal'
    divModal.classList = 'modal__header'
    h3Modal.classList = 'modal__register font-title-2-bold'
    modalBtn.classList = 'modal__close'
    modalMain.classList = 'modal__main flx'
    modalParagraph.classList = 'modal__texto font-body-regular color-grey-2'
    modalValue.classList = 'modal__value flx'
    modalLabel.classList = 'modal__print font-text-2-medium color-grey-1'
    modalInput.classList = 'modal__value input__value'
    modalDivValue.classList = 'modal__type'
    modalParagraphValue.classList = 'modal__paragraph font-text-2-medium color-grey-1'
    modalEnterLabel.classList = 'modal__label button__nav'
    modalEnter.classList = 'btn__modal hidden'
    modalClose.classList = ' btn__modal hidden'
    modalCloseLabel.classList = 'modal__label button__nav'
    modalFootDiv.classList = 'modal__footer flx'
    modalBtnCanceled.classList = 'modal__btn-footer btn-greylow'
    modalBtnAdd.classList = 'modal__btn-footer button__open'

    h3Modal.innerHTML = 'Registro de valor'
    modalBtn.id = 'modal__close'
    modalBtn.innerText = 'X'
    modalBtn.addEventListener('click', () => {
        sectionModal.remove()
    })

    modalParagraph.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'

    modalInput.placeholder = 'R$ 00,00'
    modalInput.type = 'number'
    modalInput.id = 'modal__value'
    modalLabel.innerText = 'Valor'
    modalLabel.for = 'modal__value'
    modalParagraphValue.innerText = 'Tipo de valor'
    modalEnter.type = 'button'
    modalEnter.name = 'modal__type'
    modalEnter.id = 1
    modalEnterLabel.innerText = 'Entrada'
    modalEnterLabel.for = 1
    modalEnterLabel.id = 1

    let selected = false

    modalEnterLabel.addEventListener('click', ({ target }) => {
        sumValue = target.id
        target.classList.add('active')
        target.nextElementSibling.classList.remove('active')
        selected = true
    })

    modalCloseLabel.addEventListener('click', ({ target }) => {
        sumValue = target.id
        target.classList.add('active')
        target.previousElementSibling.classList.remove('active')
        selected = true
    })


    modalClose.type = 'button'
    modalClose.name = 'modal__type'
    modalClose.id = 2
    modalCloseLabel.for = 2
    modalCloseLabel.innerText = 'Saída'
    modalCloseLabel.id = 2
    modalBtnCanceled.innerText = 'Cancelar'

    modalBtnCanceled.addEventListener('click', () => {
        const sectionModalContainer = document.getElementById('modal__section')
        sectionModalContainer.remove()
    })

    modalBtnAdd.innerText = 'Inserir valor'

    modalBtnAdd.addEventListener('click', () => {
        if (selected == true && modalInput.value !== '') {
            const newElement = {
                id: idValue,
                value: +modalInput.value,
                categoryID: +sumValue,
            }

            insertedValues.push(newElement)
            filtersList()
            closeSum(insertedValues)
            const sectionModalContainer = document.getElementById('modal__section')
            sectionModalContainer.remove()
        }
    })

    sectionModal.id = 'modal__section'

    divModal.append(h3Modal, modalBtn)
    modalValue.append(modalLabel, modalInput)
    modalEnterLabel.append(modalEnter)
    modalCloseLabel.append(modalClose)
    modalDivValue.append(modalParagraphValue, modalEnterLabel, modalCloseLabel)
    modalFootDiv.append(modalBtnCanceled, modalBtnAdd)
    modalMain.append(modalParagraph, modalValue, modalDivValue, modalFootDiv)
    sectionModalContainer.append(divModal, modalMain)
    sectionModal.append(sectionModalContainer)
    idValue++
    return sectionModal
}

function showModal() {

    const btnOpenModal = document.querySelector('.modal__fixed')
    const mainContainer = document.getElementById('app')
    btnOpenModal.addEventListener('click', function () {
        const modal = modalFuncao()
        mainContainer.appendChild(modal)

    })
}
showModal()

const mainContainer = document.getElementById('app')
btnNewValue.addEventListener('click', () => {
    const modal = modalFuncao()
    mainContainer.appendChild(modal)

})