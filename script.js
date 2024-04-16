    const cores = ["verde", "amarelo", "azul", "vermelho"];
    let x = Math.floor((Math.random() * cores.length));
    var corRandom = [];
    corRandom.unshift(cores.at(x));
    
    let botao;
    var corEscolhida = [];
    var contador = 1;
    var contadorTentativa = 0;
    let pontuacao = 0;
    let record = 0;

    
    function acenderCor(i) {
        if (i < contador) {
            botao = document.getElementById(corRandom[i]);
            setTimeout(function() {
                botao.classList.add("active");
            }, 300);
            setTimeout(function() {
                botao.classList.remove("active");
                acenderCor(i + 1);
            }, 1000);
        }
    }
    function logicaBotao() {
        if (corEscolhida[contadorTentativa] == corRandom[contadorTentativa]) {
            pontuacao++;
            contadorTentativa++;
            if (contador == contadorTentativa) {
                x = Math.floor((Math.random() * cores.length));
                corRandom.push(cores.at(x));
                acenderCor(0);
                contador++;
                contadorTentativa = 0;
                corEscolhida = [];
            }
            document.getElementById("random").innerHTML = "Pontuação: " + pontuacao;         
        }
        else {
            if (pontuacao > record) {
                record = pontuacao;
                document.getElementById("escolha").innerHTML = "Melhor pontuação: " + record;
            }
            document.getElementById("iniciar").style.display = "block";
            corEscolhida = [];
            x = Math.floor((Math.random() * cores.length));
            corRandom.splice(0, corRandom.length, cores.at(x));
            contador = 1;
            contadorTentativa = 0;
            pontuacao = 0;
        }
    }
    
    function verde() {
        corEscolhida.push(document.getElementById("verde").value);
        logicaBotao();
    }
    function amarelo() {
        corEscolhida.push(document.getElementById("amarelo").value);
        logicaBotao();
    }
    function azul() {
        corEscolhida.push(document.getElementById("azul").value);
        logicaBotao();
    }
    function vermelho() {
        corEscolhida.push(document.getElementById("vermelho").value);
        logicaBotao();
    }
    

    function iniciar() {
        document.getElementById("iniciar").style.display = "none";
        botao = document.getElementById(corRandom[0]);
        botao.classList.add("active");
        setTimeout(function() {
            botao.classList.remove("active");
        }, 500);
    }