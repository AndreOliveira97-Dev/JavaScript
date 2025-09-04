const convertButton = document.querySelector(".convert-button")  // botão de fazer a conversão 
const select = document.querySelector(".select")     //    menu de seleção de qual moeda vou converter


function buttonClicked() {     // quando essa função for charamada, ela vai executar o seguinte: 

    const enteredValue = document.querySelector(".entered-value").value   // ela vai pegar o input digitado
    const realValue = document.querySelector(".real-value")   // aqui ela guardou o valor digitado 
    const result = document.querySelector(".result")   // aqui ela guardou o valor convertido 


    const dollarValue = 5.45  // valor do real
    const euroValue = 6.35    // valor do dolar 


     if (select.value == "dolar") {   // se o valor no meu menu de seleçaõ, for igual a opção "dolar"
        result.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",                                    //vamos formatar o valor no formato do dolar 
            currency: "USD"
        }).format(enteredValue / dollarValue)  // o resultado sera o valor digitado no input dividido pelo valor do dolar
    }


    if (select.value == "euro") {   // se o valor no menu de seleção, for igual a opção "euro"
        result.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",                      // vamos formatar o valor no formato do euro
            currency: "EUR"
        }).format(enteredValue / euroValue)     // o resultado sera o valor digitado no input dividido pelo euro 
    }



    realValue.innerHTML = new Intl.NumberFormat("pt-BR", {   // aqui estamos formatando a moeda no formato do real brasileiro 
        style: "currency",
        currency: "BRL"
    }).format(enteredValue)   //  aqui é o alor digitado no input 
}

              // até aqui só foi trocado o número 

              // daqui em diante, iremos trocar a foto da moeda a ser convertida e a legende em baixo da foto.

function exchangedCurrency() {      // quando essa função for chamada ela vai, 

    const currencyName = document.querySelector("#currency-name") // aqui ela criou uma constante, e mapiou no nome da moeda la no html 
    const currencyImg = document.querySelector(".currency-img")  // aqui ela criou outra constante e mapiou na imagem da moeda la no html 


    if (select.value == "dolar") {          // aqui, se a opção selecionada no meu menu de seleção for igual ao dolar
        currencyName.innerHTML = "Dólar Americano"   // eu vou trocar atravez do "innerHTML" para o nome "dolar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png" // e a imagem será, a imagem do eua 
    }

    if(select.value == "euro"){   // se a opção selecionada no meu menu de seleção for igual ao euro 
        currencyName.innerHTML = "Euro"  // eu troco atravéz do "innerHTML" para o nome "euro"
        currencyImg.src ="./assets/Design sem nome 3.png"  // e troco a iimagem para e moeda do euro 
    }

    buttonClicked() // aqui eu trouxe a funçao de trocar o valor, ja feita la em cima, para quando trocar a moeda, ja fazer a converção automaticamente.
                               // sem precisar clicar no botão "converter"
}


select.addEventListener("change", exchangedCurrency)  // aqui eu peguei minha "const select" e adicionei um observador, que ira ativar a função "exchangedCurrency"
                                                                   //sempre que houvre uma mudança na moeda, la no meu menu de opçoes.


convertButton.addEventListener("click", buttonClicked)  // e aqui eu peguei minha "const converteButton" e adicionei um observador que ira chamar a função 
                                                        // "buttonClicked" sempre que o meu botão for clicado.






