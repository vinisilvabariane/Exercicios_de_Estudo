var largura = prompt('Digite a largura do terreno em metros')
var comprimento = prompt('Digite o comprimento do terreno em metros')

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' + area + ' metros quadrados')

function calcularAreaTerreno(largura, comprimento) {
  var area = largura * comprimento
  return area
}