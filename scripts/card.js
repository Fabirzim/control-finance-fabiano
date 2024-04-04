function elementCard(element) {

    const li = document.createElement("li")
    const p = document.createElement("p")
    const div = document.createElement("div")
    const btn = document.createElement("button")
    const btnClose = document.createElement("button")
    const iconClose = document.createElement("img")

    li.classList = 'box-outline start flx'
    p.classList = 'font-text-2-medium value__start '
    div.classList = 'li__btn'
    btn.classList = 'btn__li btn-greylow'
    btnClose.classList = 'btn__fixed'

    btnClose.id = element.id
    btnClose.addEventListener('click', () => {
        const sorted = insertedValues.find((element) => +element.id === +btnClose.id)
        let sortedOut = insertedValues.findIndex((element) => element.id == sorted.id)
        insertedValues.splice(sortedOut, 1)
        li.remove()
        closeSum(insertedValues)
    })

    iconClose.src = "/assets/trash.png"
    p.innerText = `R$ ${element.value.toFixed(2)}`
    if (element.categoryID == 1) {
        btn.innerText = "Entrada"
    } else {
        btn.innerText = "Saída"
    }

    btnClose.appendChild(iconClose)
    div.append(btn, btnClose)
    li.append(p, div)

    return li
}

function filtersList() {
    const ulList = document.querySelector(".ul__listed")
    ulList.innerText = ""
    insertedValues.forEach((element) => {
        const card = elementCard(element)
        ulList.appendChild(card)
    })
}

filtersList()







