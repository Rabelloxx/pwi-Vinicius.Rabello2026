// Colocamos as listas aqui fora para que TODAS as funções consigam ler os pratos e bebidas
const pratos = ["Lasanha", "Pizza", "Risoto", "Nhoque", "Raviolli"];
const bebidas = ["Coca-cola", "Guaraná", "Suco de Maracujá", "Vinho", "Vinho Branco"];

function mostrarBebidas() {
    let resultadob = document.getElementById("resultadob");
    resultadob.innerHTML = "";
    
    // Mostra as bebidas com o número correspondente ao lado (ex: 1 - Coca-cola)
    for (let i = 0; i < bebidas.length; i++) {
        resultadob.innerHTML += "<p>" + (i + 1) + " - " + bebidas[i] + "</p>";
    }
}

function mostrarPratos() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    
    // Mostra os pratos com o número correspondente ao lado (ex: 1 - Lasanha)
    for (let i = 0; i < pratos.length; i++) {
        resultado.innerHTML += "<p>" + (i + 1) + " - " + pratos[i] + "</p>";
    }
}

function escolherPrato() {
    // Pega o número digitado pelo usuário
    let numeroDigitado = parseInt(document.getElementById("numeroPrato").value);
    let resultado2 = document.getElementById("resultado2");
    
    // Convertendo o número para a posição da matriz (ex: prato 1 está na posição 0)
    let posicao = numeroDigitado - 1;

    // Validação: verifica se o número digitado é válido e existe na lista
    if (posicao >= 0 && posicao < pratos.length) {
        resultado2.innerHTML = "Você escolheu: <strong>" + pratos[posicao] + "</strong>";
    } else {
        resultado2.innerHTML = "<span style='color: red;'>Número inválido! Escolha de 1 a " + pratos.length + "</span>";
    }
}

// Função do Sorteio 
function sortearNumero() {
    // Sorteia um número de 1 até o tamanho máximo da lista de pratos
    let numeroSorteado = Math.floor(Math.random() * pratos.length) + 1;
    
    // Pega o nome do prato sorteado usando a lógica da posição (numeroSorteado - 1)
    let pratoSorteado = pratos[numeroSorteado - 1];

    // Insere o resultado no campo correto do HTML
    document.getElementById("resultadoSorteio").innerHTML = 
        "Número sorteado: <strong>" + numeroSorteado + "</strong> - Parabéns, você ganhou um(a) <strong>" + pratoSorteado + "</strong>!";
}