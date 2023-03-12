// Passo 1 - pegar os elementos botao html
const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    //Passo 2 - idenficar o click
    botao.addEventListener('click', () => {
        // Passo 3 - desmarcar o botao selecionado anterior e marcar o atual
        desmarcarBotaoSelecionado();
        
        // Passo 4 - marcar o botao clicado
        marcarBotaoParaSelecionado(botao);

        // Passo 5 - esconder as imagens de fundo anterior
        esconderImagem();

        // Passo 6 -mostrar imagem selecionada 
        mostrarImagemSelecionada(indice);
    })
})

function mostrarImagemSelecionada(indice) {
    imagens[indice].classList.add('ativa');
}

function esconderImagem() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function marcarBotaoParaSelecionado(botao) {
    botao.classList.add('selecionado');
}

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
