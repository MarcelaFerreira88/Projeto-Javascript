/* 
1. Crie variáveis que capturem os valores que a usuária inserir e manipule-os nas funções 
2. Exibir o resultado na tela
*/

const botaoSubtrair = document.getElementById("subtrair")
const botaoMultiplicar = document.getElementById("multiplicar")


function somar() {
    
 const numero1= parseFloat(document.querySelector("#numero1Soma").value)
 const numero2= parseFloat(document.querySelector("#numero2Soma").value)

 const total = numero1 + numero2

 const paragrafo = document.getElementById("resultadoSoma")

 paragrafo.innerHTML = ''
 
 
 const resultado = document.createElement('strong');
    resultado.innerText = total
 

    paragrafo.innerText = 'Resultado: '
    paragrafo.appendChild(resultado)


}



function subtrair() {
    const numero1= parseFloat(document.querySelector("#numero1Sub").value)
    const numero2= parseFloat(document.querySelector("#numero2Sub").value)
   
    const resultado = numero1 - numero2

    document.getElementById("resultadoSub").innerHTML = resultado
}



function multiplicar() {
    const numero1= parseFloat(document.querySelector("#numero1Mult").value)
    const numero2= parseFloat(document.querySelector("#numero2Mult").value)

    const total = numero1 * numero2

    const paragrafo = document.querySelector("#resultadoMult")

    paragrafo.innerHTML = ''
    const resultado = document.createElement('strong');
    resultado.innerText = total


    paragrafo.innerText = 'Resultado:'
    paragrafo.appendChild(resultado)
    
}

function dividir() {
    const numero1= parseFloat(document.querySelector("#numero1Div").value)
    const numero2= parseFloat(document.querySelector("#numero2Div").value)

    const total = numero1 / numero2

    document.getElementById("resultadoDiv").innerHTML = `Resultado : <strong>${total}</strong>`; 
}


botaoSubtrair.addEventListener('click', subtrair)
botaoMultiplicar.addEventListener('click', multiplicar)