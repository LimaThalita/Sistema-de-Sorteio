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
    let posicaoCartela = escolherNumeroAleatorio(32);
    let cartela = selecionaCartelaPelaPosicao(posicaoCartela);
        
    let resultado = `${cartela.toUpperCase()} ${numero}`;

    setTimeout(() => {
        document.getElementById('resultado').innerHTML = '<img src="image/drumroll.gif" alt="Tambor">';
        document.getElementById('resultado').classList.add("sorteando");

        let audio = new Audio("audio/Rufem os Tambores.mp3"); // troque pelo nome do seu arquivo
        audio.play();

    }, 1200);

    setTimeout(() => {
        document.getElementById('resultado').classList.remove("sorteando");
        document.getElementById('resultado').innerText = resultado;

        Swal.fire({
            title: resultado,   
            icon: "success",
            showConfirmButton: false,
            timer: 1700,
            didOpen: () => {
                confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.6 }
                });
            }
        });
    },1200 + 2000);

}

function limpar(){
    document.getElementById('resultado').innerText = "--";
}
