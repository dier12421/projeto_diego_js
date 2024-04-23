var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  //Chama a função somar
  somar();

});


//Função somar
function somar() {

  //Captura o que está dentro do primeiro input no formulário
  //Number - Transforma o texto capturado em Numero
  let Quilômetro rodado(km)= Number(document.getElementById("Quilômetro rodado(km)").value);

  //Captura o que está dentro do segundo input no formulário
  //Number - Transforma o texto capturado em Numero
  let Litro de combustível gastado(L)= Number(document.getElementById("Litro de combustível gastado(L)").value);

  //Realiza a soma do valor que está na variável "Quilômetro rodado(km)" com o valor que está na
  //variável "Litro de combustível gastado(L)"
  //E a variável "resultado_soma" recebe o valor da soma
  let resultado_soma = Quilômetro rodado(km)/ Litro de combustível gastado(L);

  //Aqui vai escrever no input "Total (km/L)" o valor que está armazenado na variável "Total (km/L)"
  document.getElementById("resultado_soma").value = Total (km/L);


}
