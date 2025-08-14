const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de sair de uma palestra sobre o futuro da tecnologia e se depara com uma IA capaz de tomar decisões complexas, criar projetos inteiros e prever tendências. Qual é sua reação inicial?",
        alternativas: [
            {
                texto: "Fico apreensivo com tanto poder em uma máquina.",
                afirmacao: "No começo, sentiu um certo receio sobre como essa IA poderia afetar a sociedade."
            },
            {
                texto: "Fico empolgado com as possibilidades que ela oferece.",
                afirmacao: "Viu nessa tecnologia uma grande oportunidade de transformar seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Durante uma aula de tecnologia, o professor propõe um desafio: desenvolver um projeto que mostre como a IA pode melhorar a vida das pessoas. Como você age?",
        alternativas: [
            {
                texto: "Usa a própria IA para sugerir ideias inovadoras e otimizar o desenvolvimento do projeto.",
                afirmacao: "Soube explorar o potencial da IA para gerar soluções criativas e viáveis."
            },
            {
                texto: "Pesquisa manualmente, conversa com colegas e junta suas próprias ideias para criar algo único.",
                afirmacao: "Conseguiu elaborar um projeto original sem depender diretamente das respostas da IA."
            }
        ]
    },
    {
        enunciado: "Na apresentação do projeto, surge o debate: a IA vai criar mais empregos ou substituir profissionais? Qual é sua opinião?",
        alternativas: [
            {
                texto: "Acredito que a IA abrirá novas áreas e ampliará as capacidades humanas.",
                afirmacao: "Passou a incentivar o uso de IA como ferramenta de evolução profissional e social."
            },
            {
                texto: "Acho que a substituição de pessoas por máquinas é um risco real e deve ser controlado.",
                afirmacao: "Defendeu a criação de políticas para proteger trabalhadores e garantir uma transição justa."
            }
        ]
    },
    {
        enunciado: "Para ilustrar sua visão sobre a IA, você precisa criar um material visual para a turma. O que faz?",
        alternativas: [
            {
                texto: "Produz manualmente um design usando ferramentas tradicionais.",
                afirmacao: "Percebeu que métodos clássicos ainda têm valor e decidiu ensinar outras pessoas a utilizá-los."
            },
            {
                texto: "Usa um gerador de imagens por IA para acelerar a produção.",
                afirmacao: "Aprendeu a dominar ferramentas de geração de imagens e passou a ajudar colegas que têm dificuldade com desenho."
            }
        ]
    },
    {
        enunciado: "Seu grupo precisa entregar um relatório sobre impactos da IA, mas um colega copia o conteúdo diretamente de um chatbot. O que você faz?",
        alternativas: [
            {
                texto: "Aceita o conteúdo como está, já que também foi gerado por uma IA inteligente.",
                afirmacao: "Acabou se tornando dependente das respostas prontas da IA, deixando de desenvolver seu próprio pensamento crítico."
            },
            {
                texto: "Revê o material, acrescenta suas próprias ideias e corrige pontos necessários.",
                afirmacao: "Percebeu que a IA deve ser usada como apoio e não como única fonte, valorizando sua visão pessoal no trabalho."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2036...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
