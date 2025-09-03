const convertButton = document.querySelector(".convert-button")

function buttonClicked (){
    const enteredValue = document.querySelector(".entered-value").value
    const dollarValue = 5.47
    const valueResult = enteredValue / dollarValue
    const realValue = document.querySelector(".real-value")
    const result = document.querySelector(".result")

    realValue.innerHTML = new Intl.NumberFormat ("pt-BR", {
        style: "currency",
        currency: "BRL" 
    }).format(enteredValue)
    result.innerHTML = new Intl.NumberFormat ("en-US", {
        style: "currency",
        currency: "USD" 
    }).format(valueResult)

}

convertButton.addEventListener("click", buttonClicked)


