
function clicar() {
var azul = document.getElementById('azul')
var vermelho = document.getElementById('vermelho')
var roxo = document.getElementById('roxo')
var imagem = document.getElementById('imagem')
var container = document.getElementById('container')

azul.style.transition = 'transform 1s ease'
vermelho.style.transition = 'transform 1s ease'

azul.style.transform = 'translate(22vw, 0)'
vermelho.style.transform = 'translate(-22vw, 0)'

setTimeout(() => {
    azul.style.display = 'none'
    vermelho.style.display = 'none'
    roxo.style.alignSelf = 'center'
    roxo.style.backgroundColor = 'purple'
    container.style.flexDirection = 'column'
    container.style.alignItems = 'center'
    imagem.style.display = 'block';    
}, 2000)

document.addEventListener("DOMContentLoaded", () => {
    var azul = document.getElementById('azul')
    var vermelho = document.getElementById('vermelho')

    function esferas() {
        azul.style.transform = 'translate(22vw, 0)';
        vermelho.style.transform = 'translate(-22vw, 0)';
    }

    setTimeout(esferas, 2000)
})

}

