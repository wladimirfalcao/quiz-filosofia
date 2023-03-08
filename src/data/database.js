const allQuizzes = [
  {
    id: 'fase-01',
    name: 'Fase 01',
    type: 'Psichology',
    number: 1,
    image:
      'https://image.shutterstock.com/image-illustration/abstract-shape-psychological-test-board-260nw-182162528.jpg',
  },
  {
    id: 'fase-02',
    name: 'Fase 01',
    type: 'Math',
    number: 2,
    image:
      'https://www.creativefabrica.com/wp-content/uploads/2019/08/Math-test-with-a-B-580x386.jpg',
  },
];

const quizzes = [
  {
    id: 'fase-01',
    questions: [
      {
        id: '1',
        question:
          "Quais destes tipos de conhecimento são considerados racionais?",
        alternatives: [
          {
            id: 'a',
            alternative: "Filosófico e teológico ",
          },
          {
            id: 'b',
            alternative:
              "TTeológico e senso comumt",
          },
          {
            id: 'c',
            alternative: 'Filosófico e Científico',
          },
          {
            id: 'd',
            alternative:
              'Científico e senso comum',
          },
        ],
      },
      {
        id: '2',
        question:
          "O conhecimento do senso comum ou conhecimento vulgar pode ser ponto de partida para reflexões filosóficas.",
        alternatives: [
          {
            id: 'a',
            alternative: 'FALSO',
          },
          {
            id: 'b',
            alternative: 'VERDADEIRO',
          },
        ],
      },
      {
        id: '3',
        question:
          "É característica do conhecimento teológico:",
        alternatives: [
          {
            id: 'a',
            alternative: 'Baseia-se na revelação;',
          },
          {
            id: 'b',
            alternative: 'É crítico;',
          },
          {
            id: 'c',
            alternative: 'É racional;',
          },
          {
            id: 'd',
            alternative: 'Não inclui as práticas religiosas de sociedades que não conhecem a escrita.',
          },
        ],
      },
      {
        id: '4',
        question: 'É tema que envolve as religiões e que interessa ao conhecimento jurídico científico e filosófico:',
        alternatives: [
          {
            id: 'a',
            alternative: 'O uso da expressão "sob a proteção de Deus no Preâmbulo da Constituição;',
          },
          {
            id: 'b',
            alternative: 'Sacrifícios de animais em rituais religiosos afro-brasileiros;',
          },
          {
            id: 'c',
            alternative: 'O uso de símbolos religiosos em órgãos públicos;',
          },
          {
            id: 'd',
            alternative: 'Todas as opções estão corretas.',
          },
        ],
      },
      {
        id: '5',
        question:
          'NÃO é característica do conhecimento do senso comum:',
        alternatives: [
          {
            id: 'a',
            alternative: 'É assistemático;',
          },
          {
            id: 'b',
            alternative: 'Não possui método;',
          },
          {
            id: 'c',
            alternative: 'Busca causas e consequências;',
          },
          {
            id: 'd',
            alternative: 'É superficial.',
          },
        ],
      },
      
    ],
  },
  {
    id: 'fase-02',
    questions: [
      {
        id: '1',
        question: 'São características do conhecimento científico, EXCETO:',
        alternatives: [
          {
            id: 'a',
            alternative: 'Racional;',
          },
          {
            id: 'b',
            alternative: 'Não testável;',
          },
          {
            id: 'c',
            alternative: 'Sistemático;',
          },
          {
            id: 'd',
            alternative: 'Contextualizado no tempo e no espaço.',
          },
        ],
      },
      {
        id: '2',
        question: 'O conhecimento filosófico:',
        alternatives: [
          {
            id: 'a',
            alternative: 'Permite pensar além dos rigorosos limites da ciência;',
          },
          {
            id: 'b',
            alternative: 'É concreto;',
          },
          {
            id: 'c',
            alternative: 'É subjetivo;',
          },
          {
            id: 'd',
            alternative: 'É limitado.',
          },
        ],
      },
      {
        id: '3',
        question: 'Não possui método, nem tudo o que pressupõe ou intui como correto ou como errado realmente o é:',
        alternatives: [
          {
            id: 'a',
            alternative: 'Conhecimento filosófico;',
          },
          {
            id: 'b',
            alternative: 'Conhecimento técnico;',
          },
          {
            id: 'c',
            alternative: 'Conhecimento popular ou senso comum;',
          },
          {
            id: 'd',
            alternative: 'Conhecimento científico.',
          },
        ],
      },
      {
        id: '4',
        question: 'O conhecimento filosófico é mais importante do que os demais.',
        alternatives: [
          {
            id: 'a',
            alternative: 'VERDADEIRO',
          },
          {
            id: 'b',
            alternative: 'FALSO',
          },
        ],
      },
      {
        id: '5',
        question: 'São objetos da filosofia do Direito, EXCETO:',
        alternatives: [
          {
            id: 'a',
            alternative: 'Estudar o conceito de direito e de justiça;',
          },
          {
            id: 'b',
            alternative: 'Estudar problemas jurídicos nos limites de cada legislação nacional;',
          },
          {
            id: 'c',
            alternative: 'Estudar a relação entre direito e força;',
          },
          {
            id: 'd',
            alternative: 'Questionar o que fazer diante de leis injustas.',
          },
        ],
      },
      
    ],
  },
];

const responses = [
  {
    quiz: 'fase-01',
    results: [
      {
        id: 'introvert',
        title: 'PARABÉNS!',
        text: `EU OUVI GÊNIO?`,
      },
      {
        id: 'extrovert',
        title: 'PARABÉNS!',
        text: `FILÓSOFO DA TURMA!!!🧐
        `,
      },
    ],
  },
  {
    quiz: 'fase-02',
    results: [
      {
        title: 'PARABÉNS!',
        text: `EU OUVI GÊNIO?`,
      },
      {
        title: 'PARABÉNS!',
        text: `EU OUVI GÊNIO?`,
      },
    ],
  },
];

export { allQuizzes, quizzes, responses };
