Calcular();


function ColetarInformacoes() {

  let numero = parseInt(prompt("Qual número será elevado ?"));

  let potencia = parseInt(prompt(" Elevado á qual potência ? "));

  return ValidarInformacoes(numero, potencia);
}

function ValidarInformacoes(numero, potencia) {

  if (numero < 0) {
    throw new Error("Calcula somente números positivos...");
  } else if (isNaN(numero) || isNaN(potencia)) {
    throw new Error("Os valores inseridos não são válidos...");
  } else {
    return [numero, potencia];
  }

}

function Calcular() {

  let [numero, potencia] = ColetarInformacoes();
  let resultado = Math.pow(numero, potencia)
  console.log("Valor é: " + resultado)
}