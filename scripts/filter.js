const filters = document.querySelector('.filtrando')

filters.addEventListener('click', () => {
    filtersList()
})

const toEnter = document.querySelector('.enter')
toEnter.addEventListener('click', () => {

    const enter = insertedValues.filter((element) => element.categoryID == 1)
    const filtersSum = enter.map((elemento) => elementCard(elemento))
    const ulList = document.querySelector(".ul__listed")
    ulList.innerText = ""
    filtersSum.forEach((element) => ulList.append(element))
})

const closeds = document.querySelector('.close')
closeds.addEventListener('click', () => {
    const close = insertedValues.filter((element) => element.categoryID == 2)
    const filtersClose = close.map((element) => elementCard(element))
    const ulList = document.querySelector(".ul__listed")
    ulList.innerText = ""
    filtersClose.forEach((element) => ulList.append(element))
})
