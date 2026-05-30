const CONFIG = {

  personal: {

    nome: "Matheus Evangelista",

    subtitulo: "Personal Trainer",

    logo: "logo_matheus_evangelista_sem_fundo.png",

    cores: {

      primaria: "#e50914",

      fundo: "#050505",

      card: "#151515"

    }

  },



  aluno: {

    nome: "Gabriel Tavares Goldman",

    objetivo: "Hipertrofia & Recomposição Corporal",

    sexo: "M", // "M" ou "F"

    pesoKg: 73,

    alturaM: 1.75,

    idadeAnos: 28,

    treinosSemana: 4,

    nivel: "Intermediário", // "Iniciante", "Intermediário", "Avançado"

    objetivo_tipo: "hipertrofia", // "hipertrofia", "emagrecimento", "recomposicao"

    sedentarismoDias: 3 // quantos dias de descanso/sedentários

  },



  estrategia: {

    titulo: "Recomposição Corporal",

    descricao: "Estratégia focada em ganho de massa magra, manutenção de performance, controle calórico e aderência de longo prazo.",

    // KCAL e macros serão calculados automaticamente abaixo

    proteina: null, // calculado automaticamente

    carboidrato: null,

    gordura: null,

    agua: null,

    kcalTreino: null,

    kcalDescanso: null,

    imc: null,

    tmb: null,

    tdee: null

  },



  semana: [

    {dia:"Seg", treino:"PUSH", resumo:"Peito · Ombro · Tríceps", alvo:"push"},

    {dia:"Ter", treino:"PULL", resumo:"Costas · Bíceps", alvo:"pull"},

    {dia:"Qua", treino:"REST", resumo:"Cardio opcional", alvo:"cardio"},

    {dia:"Qui", treino:"LOWER", resumo:"Pernas · Core", alvo:"lower"},

    {dia:"Sex", treino:"UPPER", resumo:"Ombro · Braços · Costas", alvo:"upper"},

    {dia:"Sáb", treino:"ATIVO", resumo:"Caminhada leve", alvo:"cardio"},

    {dia:"Dom", treino:"REST", resumo:"Recuperação", alvo:"recuperacao"}

  ],



  treinos: [

    {

      id:"push", letra:"A", dia:"Segunda-feira", nome:"Treino Push",

      descricao:"Peito, deltóide anterior/lateral e tríceps. Foco em carga mecânica, amplitude segura e progressão.",

      exercicios:[

        {nome:"Supino Inclinado com Halteres", series:"4", reps:"8–10", rir:"1–2", descanso:"2–3 min", gif:"assets/exercicios/supino-inclinado.gif", emoji:"🏋️", texto:"Ênfase em peitoral superior. Controle a descida, mantenha escápulas estáveis e progrida carga com técnica."},

        {nome:"Elevação Lateral no Cabo", series:"4", reps:"15–20", rir:"1", descanso:"60–75s", gif:"assets/exercicios/elevacao-lateral.gif", emoji:"💫", texto:"Foco em deltóide lateral. Evite impulso e mantenha tensão constante durante todo o movimento."}

      ]

    },

    {

      id:"pull", letra:"B", dia:"Terça-feira", nome:"Treino Pull",

      descricao:"Grande dorsal, romboides, trapézio e bíceps. Prioridade para largura e espessura das costas.",

      exercicios:[

        {nome:"Pulldown Pegada Neutra", series:"4", reps:"8–12", rir:"1–2", descanso:"2 min", gif:"assets/exercicios/pulldown.gif", emoji:"🏗️", texto:"Puxe com os cotovelos, mantendo tronco estável. Excelente para dorsal e controle escapular."},

        {nome:"Remada Curvada", series:"4", reps:"6–8", rir:"2", descanso:"2–3 min", gif:"assets/exercicios/remada-curvada.gif", emoji:"🚣", texto:"Exercício forte para espessura de costas. Mantenha coluna neutra e evite roubar com lombar."}

      ]

    },

    {

      id:"lower", letra:"C", dia:"Quinta-feira", nome:"Treino Lower",

      descricao:"Quadríceps, posteriores, glúteos e core. Base para força, estética e equilíbrio corporal.",

      exercicios:[

        {nome:"Agachamento Livre", series:"4", reps:"6–8", rir:"2", descanso:"3 min", gif:"assets/exercicios/agachamento.gif", emoji:"🦵", texto:"Movimento base para membros inferiores. Ajuste amplitude conforme mobilidade e mantenha estabilidade."},

        {nome:"Stiff com Halteres", series:"4", reps:"8–10", rir:"2", descanso:"2 min", gif:"assets/exercicios/stiff.gif", emoji:"📏", texto:"Ênfase em posteriores e glúteos. Desça até sentir alongamento sem perder postura."}

      ]

    },

    {

      id:"upper", letra:"D", dia:"Sexta-feira", nome:"Treino Upper",

      descricao:"Segunda frequência para ombros, costas e braços, com volume controlado e qualidade de execução.",

      exercicios:[

        {nome:"Desenvolvimento Arnold", series:"3", reps:"10–12", rir:"2", descanso:"2 min", gif:"assets/exercicios/arnold.gif", emoji:"🌀", texto:"Trabalha ombros com boa amplitude. Controle o core e evite compensar com a lombar."},

        {nome:"Face Pull", series:"3", reps:"15–20", rir:"1–2", descanso:"60s", gif:"assets/exercicios/face-pull.gif", emoji:"🎯", texto:"Importante para deltóide posterior, postura e saúde do ombro."}

      ]

    }

  ],



  refeicoes: [

    {

      id:"cafe", nome:"Café da Manhã", emoji:"☕",

      opcoes:[

        {titulo:"Clássico Proteico", kcal:"~600 kcal", itens:["3 ovos", "2 fatias de pão integral", "1 fruta", "Café"], macros:"P 35g · C 55g · G 22g"},

        {titulo:"Shake Rápido", kcal:"~430 kcal", itens:["Whey", "Banana", "Aveia", "Leite"], macros:"P 35g · C 50g · G 8g"}

      ]

    },

    {

      id:"almoco", nome:"Almoço", emoji:"🍽️",

      opcoes:[

        {titulo:"Frango Base", kcal:"~650 kcal", itens:["Frango", "Arroz", "Feijão", "Salada"], macros:"P 50g · C 70g · G 15g"},

        {titulo:"Carne + Batata", kcal:"~620 kcal", itens:["Carne magra", "Batata", "Legumes", "Azeite"], macros:"P 45g · C 60g · G 18g"}

      ]

    },

    {

      id:"livre", nome:"Refeição Livre", emoji:"🍔",

      opcoes:[

        {titulo:"Hambúrguer Planejado", kcal:"~800–1200 kcal", itens:["Manter proteína alta no dia", "Evitar compensação agressiva", "Encaixar no contexto semanal"], macros:"Flexível"}

      ]

    }

  ],



  suplementos: [

    {nome:"Creatina", dose:"3–5g/dia", horario:"Qualquer horário", funcao:"Força, potência e desempenho."},

    {nome:"Whey Protein", dose:"Conforme necessidade", horario:"Pós-treino ou lanches", funcao:"Ajuda a bater proteína diária."},

    {nome:"Cafeína", dose:"3–6mg/kg", horario:"30–60min pré-treino", funcao:"Foco e performance."}

  ]

};