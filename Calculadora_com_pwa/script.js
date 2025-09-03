let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let resultado = document.getElementById("resultado");

const soma = document.getElementById("soma");
soma.onclick = function() {
    const valor1 = parseFloat(n1.value);//convertendo em numero
    const valor2 = parseFloat(n2.value);
    if (isNaN(valor1) || isNaN(valor2)) { // valida se é um numero
        resultado.textContent = "Por favor, insira números válidos.";   
    }else{
    const somaValores = valor1 + valor2;
    resultado.textContent = `Resultado: ${somaValores}`;
    }
}
const subtrair = document.getElementById("subtrair");
subtrair.onclick = function() {
    const valor1 = parseFloat(n1.value);//convertendo em numero
    const valor2 = parseFloat(n2.value);
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "Por favor, insira números válidos.";   
    }else{
    const subValores = valor1 - valor2;
    resultado.textContent = `Resultado: ${subValores}`;
    }
}
const multiplicar = document.getElementById("multiplicar");
multiplicar.onclick = function() {
    const valor1 = parseFloat(n1.value);//convertendo em numero
    const valor2 = parseFloat(n2.value);
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "Por favor, insira números válidos.";   
    }else{
    const mulValores = valor1 * valor2;
    resultado.textContent = `Resultado: ${mulValores}`;
    }
}
const dividir = document.getElementById("dividir");
dividir.onclick = function() {
    const valor1 = parseFloat(n1.value);//convertendo em numero
    const valor2 = parseFloat(n2.value);
    if (isNaN(valor1) || isNaN(valor2)) {
        resultado.textContent = "Por favor, insira números válidos.";   
    }else{
    const divValores = valor1 / valor2;
    resultado.textContent = `Resultado: ${divValores}`;
    }
}

