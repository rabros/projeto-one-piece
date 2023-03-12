// Passo 1 - pegar os elementos botao html
const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    //Passo 2 - idenficar o click
    botao.addEventListener('click', () => {
        // Passo 3 - desmarcar o botao selecionado anterior e marcar o atual
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        // Passo 4 - marcar o botao clicado
        botao.classList.add('selecionado')

        // Passo 5 - esconder as imagens de fundo anterior
        const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa')

        // Passo 6 -mostrar imagem selecionada 
        imagens[indice].classList.add('ativa')
    })
})