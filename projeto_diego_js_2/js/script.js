var meuFormulario = document.getElementById("formulario");

meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  // Chama a função somar
  somar();

  // Muda o título da página
  document.title = "Resultado da Soma";

  // Muda o texto do cabeçalho
  document.getElementById("titulo").innerText = "Resultado da Soma";
});


// Função somar
function somar() {
  // Captura o que está dentro do primeiro input no formulário
  // Number - Transforma o texto capturado em Numero
  let primeiro_numero_inteiro = Number(document.getElementById("primeiro_numero_inteiro").value);

  // Captura o que está dentro do segundo input no formulário
  // Number - Transforma o texto capturado em Numero
  // Realiza a soma do valor que está na variável "primeiro_numero_inteiro" com o valor que está na
  // variável "0"
  // E a variável "0" recebe o valor da soma
  let resultado_soma = primeiro_numero_inteiro + 0;

  // Verifica se a soma é maior que 100
  if (resultado_soma > 100) {
    document.getElementById("resultado_soma").value = "O número é maior que 100!";
  } else if (resultado_soma < 100) { // Verifica se a soma é menor que 100
    document.getElementById("resultado_soma").value = "O número é menor que 100!";
  } else { // Se não for maior nem menor, então é igual a 100
    document.getElementById("resultado_soma").value = "O número é igual a 100!";
  }
}
