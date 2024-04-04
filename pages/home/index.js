
function closeSum(array) {
    const enter = insertedValues.filter((element) => element.categoryID == 1)
    let fixProhibited = enter.reduce((acc, currentValue) => {
        return acc + currentValue.value
    }, 0)

    const close = insertedValues.filter((element) => element.categoryID == 2)
    let closeFinish = close.reduce((acc, currentValue) => {
        return acc + currentValue.value
    }, 0)

    let valueSum = document.querySelector(".span__sum")
    valueSum.innerText = ""
    valueSum.innerText = `R$${(fixProhibited - closeFinish).toFixed(2)}`

}

closeSum(insertedValues)



