
var bolinha = document.getElementById('bolinha');

var podeMovimentar = true;
var limiteXDireita = 750; // embora o tamanho do canvas é 800, a bolinha tem 50 pixels de diametro, portanto a subtração
var limiteXEsquerda = 0;

var posicaoXAtual = 0;

var chegouNaPontaDireita = false;


function moverBolinha() {

    var intervalmovimenta = setInterval(movimenta, 50)

    function movimenta() {
        if (podeMovimentar) {
            if (posicaoXAtual <= limiteXDireita && chegouNaPontaDireita == false) {
                posicaoXNova = posicaoXAtual + 5;
                bolinha.style.left = "" + posicaoXNova + "px";
                posicaoXAtual = posicaoXNova;

                if (posicaoXAtual == limiteXDireita) {
                    chegouNaPontaDireita = true
                }
            }

            if (posicaoXAtual >= limiteXEsquerda && chegouNaPontaDireita == true) {
                posicaoXNova = posicaoXAtual - 5;
                bolinha.style.left = "" + posicaoXNova + "px";
                posicaoXAtual = posicaoXNova;


                if (posicaoXAtual == limiteXEsquerda) {
                    chegouNaPontaDireita = false
                }
            }
        }
        else {
            clearInterval(intervalmovimenta)
        }
    }

}


function aparecerBolinha() {
    bolinha.style.opacity = "100%";
    bolinha.style.left = "0px";

    podeMovimentar = true;
    moverBolinha()
}

function apagarBolinha() {
    bolinha.style.opacity = "0%";
    bolinha.style.left = "0px";
    posicaoXAtual = 0;
    podeMovimentar = false;
}