
function clicar() {
var azul = document.getElementById('azul')
var vermelho = document.getElementById('vermelho')
var imagem = document.getElementById('imagem')

azul.style.marginLeft = vermelho.offsetLeft + 'px';
azul.style.marginTop = (vermelho.offsetTop + vermelho.offsetHeight) + 'px';

imagem.style.display = 'block';

}