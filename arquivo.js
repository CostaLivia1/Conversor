const convertbutton =document.querySelector(".convertbutton")


function convertvalue(){

    const inputcurrency= Number(document.getElementById("input-currency").value)
const convertfrom=document.getElementById("convert-from").value
const convertTo=document.getElementById("convert-to").value
console.log(convertTo)
    
const euroRate= 6.17
const dolarRate=5.50
const libraRate=7.10

let valorEmReal=0

if (convertfrom === "R$ Real Brasileiro"){
    valorEmReal=inputcurrency
} 
else if (convertfrom ==="€ Euro"){
    valorEmReal=inputcurrency * euroRate
}
else if (convertfrom ==="U$ Dolar Americano"){
    valorEmReal=inputcurrency * dolarRate
}
else if (convertfrom ==="£ Libra"){
    valorEmReal=inputcurrency * libraRate
}

let resultado =0
let currency ="BRL"

if(convertTo ==="R$ Real Brasileiro"){
    resultado=valorEmReal
    currency="BRL"
}
else if (convertTo === "€ Euro") {
        resultado = valorEmReal / euroRate
        currency = "EUR"
    }
    else if (convertTo=== "U$ Dolar Americano") {
        resultado = valorEmReal / dolarRate
        currency = "USD"
    }
    else if (convertTo === "£ Libra") {
        resultado = valorEmReal / libraRate
        currency = "GBP"
    }
 const inputconvert = document.getElementById("input-convert")

    inputconvert.value = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency
    }).format(resultado)
}

convertbutton.addEventListener("click", convertvalue)