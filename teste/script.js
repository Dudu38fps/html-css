
function clicar() {
var azul = document.getElementById('azul')
var vermelho = document.getElementById('vermelho')
var roxo = document.getElementById('roxo')
var imagem = document.getElementById('imagem')
var container = document.getElementById('container')

azul.style.marginLeft = vermelho.offsetLeft + 'px';
azul.style.marginTop = (vermelho.offsetTop + vermelho.offsetHeight) + 'px';

azul.style.display = 'none'
vermelho.style.display = 'none'
roxo.style.alignSelf = 'center'
roxo.style.backgroundColor = 'purple'
container.style.flexDirection = 'column'
container.style.alignItems = 'center'


imagem.style.display = 'block';

}