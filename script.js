function selecionaCartelaPelaPosicao(posicao){
    if (posicao < 1 || posicao > 26) {
        posicaoCartelaExtra = posicao - 26;
        return "A" + String.fromCharCode(96 + posicaoCartelaExtra);
    }
    return String.fromCharCode(96 + posicao);
}

function escolherNumeroAleatorio(valorMaximo){
    return Math.floor(Math.random() * valorMaximo) + 1;
}

function sortear(){
    let numero = escolherNumeroAleatorio(50);
    let posicaoCartela = escolherNumeroAleatorio(30);
    let cartela = selecionaCartelaPelaPosicao(posicaoCartela);
    
    const elemento = document.getElementById('resultado');
    elemento.innerText = `${cartela.toUpperCase()} ${numero}`;
}

function limpar(){
    document.getElementById('resultado').innerText = "--";
}