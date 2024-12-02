const caixaPrincipal = document.querySelector(".caixa__principal");
const caixaPerguntas = document.querySelector(".caixa__perguntas");
const caixaAlternativas = document.querySelector(".caixa__alternativas");
const caixaResultados = document.querySelector(".caixa__resultados");
const textoResultado = document.querySelector(".texto__resultado");

const perguntas = [
    {
        enunciado: "Sofia é uma jovem estudante de música, apaixonada pelo piano. Desde pequena, ela sonha em tocar em grandes palcos, mas também é fascinada por compor suas próprias melodias. Recentemente, ela recebeu duas oportunidades únicas que podem mudar sua vida. Agora, ela precisa tomar uma decisão. É uma manhã ensolarada, e Sofia está sentada à beira do lago, segurando duas cartas que chegaram pelo correio. Uma delas é de uma prestigiada escola de música, oferecendo a ela uma bolsa para estudar performance pianística. A outra é de uma gravadora independente, interessada em suas composições. Sofia sabe que ambas as escolhas são incríveis, mas não pode fazer as duas ao mesmo tempo. Ela respira fundo e decide qual caminho seguir.",
        alternativas: [
            "Aceitar a bolsa da escola de música",
            "Assinar com a gravadora independente"
        ]
    },
    {
        enunciado: "Ao entrar na academia, Sofia se depara com alunos talentosos e exigentes professores. Em sua primeira aula, a professora pede para ela tocar algo que a represente. Sofia sente o peso da responsabilidade.",
        alternativas: [
            "Tocar uma peça clássica que ela domina.",
            "Arriscar e tocar uma composição própria."
        ]
    },
    {
        enunciado: "A gravadora quer lançar um álbum com suas músicas, mas propõe alterações que Sofia acredita mudarem a essência de suas composições.",
        alternativas: [
            "Aceitar as mudanças para agradar o mercado.",
            "Insistir em manter suas músicas autênticas."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();