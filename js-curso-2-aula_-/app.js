let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {

exibirNaTela("h1", "Jogo do Número Secreto");
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do Número Secreto";

exibirNaTela("p", "Escolha um Número entre 1 e 10");
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um Número entre 1 e 10";
}

mensagemInicial();

function verificarChute() {
   let chute = document.querySelector("input").value;

   if (chute == numeroSecreto) {
        exibirNaTela("h1", "Acertou!!!");
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você Descobriu o Número Secreto com ${tentativas} ${palavraTentativa}, Parabéns!!!`;
        exibirNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
   } else {
        if (chute < numeroSecreto) {
            exibirNaTela("h1", "Tente Novamente");
            exibirNaTela(`p`, `O número secreto é maior que ${chute}`);
        } else {
            exibirNaTela("h1", "Tente Novamente");
            exibirNaTela(`p`, `O número secreto é menor que ${chute}`);
        }
        tentativas++;
        limparCampo();
   }
}

//gerar um Numero Aleatório (entre 0 a 1, vezes 10)
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElemetosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElemetosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

//Limpar o Campo depois de uma tentativa
function limparCampo() {
    chute = document.querySelector("input");
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}