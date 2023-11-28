/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

function somar() {
 const numero1= parseFloat(document.querySelector("#numero1Soma").value)
 const numero2= parseFloat(document.querySelector("#numero2Soma").value)

 const resultado = numero1 + numero2

 const paragarafo = document.getElementById("resultadoSoma").innerHTML
 paragarafo.innerHTML = `Resultado: <strong> ${resultado}<strong/>`

 console.log(resultado)

}



function subtrair() {

}

function multiplicar() {

}

function dividir() {

}
