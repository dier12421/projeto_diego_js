var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função dividir
  dividir();

});


//Função dividir
function dividir() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let Quilometro_rodado= Number(document.getElementById("Quilometro_rodado").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let Combustivel_gasto= Number(document.getElementById("Combustivel_gasto").value);

  //Realiza a soma do valor que está na variável "Quilômetro_rodado" com o valor que está na
  //variável "Combustivel_gasto"
  //E a variável "Total" recebe o valor da soma
  let Total = Quilometro_rodado / Combustivel_gasto;
  //Aqui vai escrever no input "Total" o valor que está armazenado na variável "Total"
  document.getElementById("Total").value = Total;


}
