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

    pesoKg: 76,

    alturaM: 1.75,

    idadeAnos: 25,

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

    {dia:"Segunda-feira", treino:"CARDIO", resumo:"Bike (~5Km)", alvo:"cardio"},

    {dia:"Terça-feira", treino:"LOWER", resumo:"Pernas · Core", alvo:"lower"},

    {dia:"Quarta-feira", treino:"PUSH", resumo:"Peito · Ombro · Tríceps", alvo:"push"},

    {dia:"Quinta-feira", treino:"CROSSFIT", resumo:"Condicionamento Físico", alvo:"crossfit"},
   
    {dia:"Sexta-feira", treino:"Pilates", resumo:"Controle e alinhamento", alvo:"pilates"},

    {dia:"Sábado", treino:"CROSSFIT", resumo:"Condicionamento Físico", alvo:"crossfit"},

    {dia:"Domingo", treino:"PULL", resumo:"Costas · Bíceps", alvo:"pull"}

  ],



  treinos: [

    {
      id:"lower",
      letra:"A",
      dia:"Terça-feira",
      nome:"Treino Lower",
      descricao:"Quadríceps, posteriores, glúteos, panturrilhas e core. Foco em força, hipertrofia e estabilidade corporal para suportar musculação, CrossFit e atividades do dia a dia.",
      exercicios:[
        {grupo:"Quadríceps", nome:"Agachamento Livre", series:"4", reps:"6–8", rir:"2", descanso:"3 min", gif:"assets/exercicios/agachamento.gif", texto:"Principal exercício para quadríceps e glúteos. Utilize amplitude máxima segura mantendo estabilidade lombar e progressão gradual de carga."},
        {grupo:"Quadríceps", nome:"Leg Press 45°", series:"3", reps:"10–12", rir:"1–2", descanso:"2 min", gif:"assets/exercicios/legpress.gif", texto:"Excelente relação estímulo/fadiga. Permite alta produção de força com menor demanda técnica que o agachamento."},
        {grupo:"Posteriores", nome:"Mesa Flexora", series:"4", reps:"10–12", rir:"1", descanso:"90s", gif:"assets/exercicios/mesa-flexora.gif", texto:"Foco em posteriores de coxa. Controle a fase excêntrica para maximizar hipertrofia."},
        {grupo:"Posteriores/Glúteos", nome:"Stiff com Halteres", series:"3", reps:"8–10", rir:"2", descanso:"2 min", gif:"assets/exercicios/stiff.gif", texto:"Grande estímulo para posteriores e glúteos através do alongamento muscular sob carga."},
        {grupo:"Panturrilhas", nome:"Panturrilha Sentado", series:"4", reps:"12–15", rir:"1", descanso:"60s", gif:"assets/exercicios/panturrilha-sentado.gif", texto:"Prioriza o sóleo, fundamental para volume visual da panturrilha."},
        {grupo:"Panturrilhas", nome:"Panturrilha em Pé", series:"3", reps:"10–12", rir:"1", descanso:"60s", gif:"assets/exercicios/panturrilha-pe.gif", texto:"Ênfase no gastrocnêmio. Utilize amplitude completa."},
        {grupo:"Core", nome:"Cable Crunch", series:"4", reps:"12–15", rir:"1", descanso:"60s", gif:"assets/exercicios/cable-crunch.gif", texto:"Trabalho direto de abdômen com sobrecarga progressiva."}
      ]
    },

    {
      id:"push",
      letra:"B",
      dia:"Quarta-feira",
      nome:"Treino Push",
      descricao:"Peitoral, deltóides e tríceps. Foco em construção de peitoral superior, largura de ombros e densidade dos braços.",
      exercicios:[
        {grupo:"Peitoral", nome:"Supino Inclinado com Halteres", series:"4", reps:"6–10", rir:"1–2", descanso:"2–3 min", gif:"assets/exercicios/supino-inclinado.gif", texto:"Principal exercício para desenvolvimento da porção clavicular do peitoral e estética do tronco."},
        {grupo:"Peitoral", nome:"Supino Máquina", series:"3", reps:"8–12", rir:"1", descanso:"2 min", gif:"assets/exercicios/supino-maquina.gif", texto:"Alta estabilidade permitindo máxima proximidade da falha muscular."},
        {grupo:"Ombros", nome:"Desenvolvimento Máquina", series:"3", reps:"8–12", rir:"1–2", descanso:"2 min", gif:"assets/exercicios/desenvolvimento.gif", texto:"Foco em deltóide anterior com excelente segurança articular."},
        {grupo:"Ombros", nome:"Elevação Lateral no Cabo", series:"5", reps:"12–20", rir:"1", descanso:"60–75s", gif:"assets/exercicios/elevacao-lateral.gif", texto:"Talvez o exercício mais importante para criar aparência de ombros largos e cintura menor."},
        {grupo:"Tríceps", nome:"Tríceps Corda", series:"3", reps:"10–12", rir:"1", descanso:"75s", gif:"assets/exercicios/triceps-corda.gif", texto:"Excelente estímulo para cabeça lateral e medial do tríceps."},
        {grupo:"Tríceps", nome:"Tríceps Francês", series:"3", reps:"10–12", rir:"1", descanso:"90s", gif:"assets/exercicios/triceps-frances.gif", texto:"Grande alongamento da cabeça longa do tríceps, importante para volume do braço."}
      ]
    },

    {
      id:"pull",
      letra:"C",
      dia:"Domingo",
      nome:"Treino Pull",
      descricao:"Costas, trapézio posterior, romboides e bíceps. Prioridade para largura dorsal, espessura e construção do V-Taper.",
      exercicios:[
        {grupo:"Costas", nome:"Barra Fixa", series:"4", reps:"6–10", rir:"1–2", descanso:"2–3 min", gif:"assets/exercicios/barra-fixa.gif", texto:"Um dos melhores exercícios para desenvolvimento global das dorsais."},
        {grupo:"Costas", nome:"Pulldown Pegada Neutra", series:"3", reps:"8–12", rir:"1", descanso:"2 min", gif:"assets/exercicios/pulldown.gif", texto:"Excelente para largura das costas e controle escapular."},
        {grupo:"Costas", nome:"Remada Articulada", series:"4", reps:"8–12", rir:"1", descanso:"2 min", gif:"assets/exercicios/remada-articulada.gif", texto:"Grande estímulo para espessura das costas com menor fadiga lombar."},
        {grupo:"Costas", nome:"Remada Baixa", series:"3", reps:"10–12", rir:"1", descanso:"90s", gif:"assets/exercicios/remada-baixa.gif", texto:"Complementa o desenvolvimento dos romboides e trapézio médio."},
        {grupo:"Ombros Posteriores", nome:"Face Pull", series:"4", reps:"12–20", rir:"1", descanso:"60s", gif:"assets/exercicios/facepull.gif", texto:"Saúde dos ombros e fortalecimento dos deltóides posteriores."},
        {grupo:"Bíceps", nome:"Rosca Scott", series:"3", reps:"8–12", rir:"1", descanso:"90s", gif:"assets/exercicios/rosca-scott.gif", texto:"Grande estabilidade e estímulo para hipertrofia do bíceps."},
        {grupo:"Bíceps", nome:"Rosca Martelo", series:"3", reps:"10–12", rir:"1", descanso:"75s", gif:"assets/exercicios/rosca-martelo.gif", texto:"Desenvolvimento do braquial e aumento da espessura visual dos braços."}
      ]

    }

  ],



  refeicoes: [

  {
  id:"cafe-da-manha",
  nome:"Café da Manhã",
  horario:"07:00",
  obrigatoria:true,
  objetivo:"Iniciar o dia com proteína de alta qualidade, energia e saciedade.",

  
  opcoes:[

    {
      nome:"Ovos, Pão e Fruta",
      calorias:"550",
      proteinas:"38g",
      carboidratos:"55g",
      gorduras:"18g",

      alimentos:[
        {grupo:"Proteína", alimento:"Ovos Inteiros", quantidade:"4 unidades"},
        {grupo:"Carboidrato", alimento:"Pão Integral", quantidade:"3 fatias"},
        {grupo:"Fruta", alimento:"Banana", quantidade:"1 unidade"},
        {grupo:"Bebida", alimento:"Café", quantidade:"Livre"}
      ]
    },

    {
      nome:"Shake Completo",
      calorias:"580",
      proteinas:"42g",
      carboidratos:"60g",
      gorduras:"16g",

      alimentos:[
        {grupo:"Proteína", alimento:"Whey Protein", quantidade:"40g"},
        {grupo:"Laticínio", alimento:"Leite Integral", quantidade:"300ml"},
        {grupo:"Carboidrato", alimento:"Aveia", quantidade:"60g"},
        {grupo:"Fruta", alimento:"Banana", quantidade:"1 unidade"}
      ]
    },

    {
      nome:"Tapioca Proteica",
      calorias:"540",
      proteinas:"40g",
      carboidratos:"58g",
      gorduras:"14g",

      alimentos:[
        {grupo:"Carboidrato", alimento:"Tapioca", quantidade:"100g"},
        {grupo:"Proteína", alimento:"Ovos", quantidade:"3 unidades"},
        {grupo:"Proteína", alimento:"Queijo Minas", quantidade:"50g"}
      ]
    }

  ]
  

  },

  {
  id:"lanche-manha",
  nome:"Lanche da Manhã",
  horario:"10:00",
  obrigatoria:false,
  objetivo:"Aumentar aporte proteico diário sem gerar desconforto.",

  
  opcoes:[

    {
      nome:"Iogurte e Fruta",
      calorias:"280",
      proteinas:"22g",
      carboidratos:"25g",
      gorduras:"8g",

      alimentos:[
        {grupo:"Laticínio", alimento:"Iogurte Grego", quantidade:"170g"},
        {grupo:"Fruta", alimento:"Maçã", quantidade:"1 unidade"}
      ]
    },

    {
      nome:"Whey e Banana",
      calorias:"250",
      proteinas:"25g",
      carboidratos:"28g",
      gorduras:"3g",

      alimentos:[
        {grupo:"Proteína", alimento:"Whey Protein", quantidade:"30g"},
        {grupo:"Fruta", alimento:"Banana", quantidade:"1 unidade"}
      ]
    },

    {
      nome:"Sanduíche de Atum",
      calorias:"320",
      proteinas:"28g",
      carboidratos:"25g",
      gorduras:"10g",

      alimentos:[
        {grupo:"Proteína", alimento:"Atum", quantidade:"1 lata"},
        {grupo:"Carboidrato", alimento:"Pão Integral", quantidade:"2 fatias"}
      ]
    }

  ]
  

  },

  {
  id:"almoco",
  nome:"Almoço",
  horario:"13:00",
  obrigatoria:true,
  objetivo:"Principal refeição para recuperação, hipertrofia e desempenho.",

  
  opcoes:[

    {
      nome:"Frango Tradicional",
      calorias:"750",
      proteinas:"55g",
      carboidratos:"85g",
      gorduras:"18g",

      alimentos:[
        {grupo:"Proteína", alimento:"Peito de Frango", quantidade:"200g"},
        {grupo:"Carboidrato", alimento:"Arroz Branco", quantidade:"200g"},
        {grupo:"Leguminosa", alimento:"Feijão", quantidade:"100g"},
        {grupo:"Vegetais", alimento:"Salada", quantidade:"À vontade"},
        {grupo:"Gordura Boa", alimento:"Azeite", quantidade:"1 colher de sopa"}
      ]
    },

    {
      nome:"Patinho Moído",
      calorias:"760",
      proteinas:"50g",
      carboidratos:"80g",
      gorduras:"22g",

      alimentos:[
        {grupo:"Proteína", alimento:"Patinho Moído", quantidade:"200g"},
        {grupo:"Carboidrato", alimento:"Arroz Branco", quantidade:"200g"},
        {grupo:"Leguminosa", alimento:"Feijão", quantidade:"100g"}
      ]
    },

    {
      nome:"Atum e Arroz",
      calorias:"700",
      proteinas:"50g",
      carboidratos:"80g",
      gorduras:"15g",

      alimentos:[
        {grupo:"Proteína", alimento:"Atum", quantidade:"2 latas"},
        {grupo:"Carboidrato", alimento:"Arroz Branco", quantidade:"200g"},
        {grupo:"Leguminosa", alimento:"Feijão", quantidade:"100g"}
      ]
    }

  ]
  

  },

  {
  id:"pre-treino",
  nome:"Pré-Treino",
  horario:"16:30–17:30",
  obrigatoria:true,
  objetivo:"Maximizar energia, força e performance durante o treino.",

  
  opcoes:[

    {
      nome:"Pão com Doce de Leite",
      calorias:"350",
      proteinas:"25g",
      carboidratos:"45g",
      gorduras:"7g",

      alimentos:[
        {grupo:"Carboidrato", alimento:"Pão Integral", quantidade:"2 fatias"},
        {grupo:"Carboidrato", alimento:"Doce de Leite", quantidade:"1 colher de sopa"},
        {grupo:"Proteína", alimento:"Whey Protein", quantidade:"30g"}
      ]
    },

    {
      nome:"Banana com Nutella",
      calorias:"360",
      proteinas:"25g",
      carboidratos:"48g",
      gorduras:"8g",

      alimentos:[
        {grupo:"Fruta", alimento:"Banana", quantidade:"1 unidade"},
        {grupo:"Carboidrato", alimento:"Nutella", quantidade:"1 colher de sopa"},
        {grupo:"Proteína", alimento:"Whey Protein", quantidade:"30g"}
      ]
    },

    {
      nome:"Cuscuz e Ovos",
      calorias:"400",
      proteinas:"28g",
      carboidratos:"50g",
      gorduras:"10g",

      alimentos:[
        {grupo:"Carboidrato", alimento:"Cuscuz", quantidade:"120g"},
        {grupo:"Proteína", alimento:"Ovos", quantidade:"3 unidades"}
      ]
    }

  ]
  

  },

  {
  id:"jantar-pos-treino",
  nome:"Jantar / Pós-Treino",
  horario:"20:00",
  obrigatoria:true,
  objetivo:"Recuperação muscular e reposição de glicogênio.",

  
  opcoes:[

    {
      nome:"Frango e Arroz",
      calorias:"700",
      proteinas:"50g",
      carboidratos:"80g",
      gorduras:"15g",

      alimentos:[
        {grupo:"Proteína", alimento:"Peito de Frango", quantidade:"200g"},
        {grupo:"Carboidrato", alimento:"Arroz Branco", quantidade:"200g"},
        {grupo:"Vegetais", alimento:"Legumes", quantidade:"À vontade"}
      ]
    },

    {
      nome:"Macarrão com Patinho",
      calorias:"720",
      proteinas:"50g",
      carboidratos:"85g",
      gorduras:"18g",

      alimentos:[
        {grupo:"Proteína", alimento:"Patinho Moído", quantidade:"180g"},
        {grupo:"Carboidrato", alimento:"Macarrão", quantidade:"250g"}
      ]
    },

    {
      nome:"Wrap Proteico",
      calorias:"650",
      proteinas:"48g",
      carboidratos:"60g",
      gorduras:"18g",

      alimentos:[
        {grupo:"Proteína", alimento:"Frango Desfiado", quantidade:"180g"},
        {grupo:"Carboidrato", alimento:"Wrap Integral", quantidade:"2 unidades"},
        {grupo:"Vegetais", alimento:"Alface e Tomate", quantidade:"À vontade"}
      ]
    }

  ]
  

  },

  {
  id:"ceia",
  nome:"Ceia",
  horario:"22:30",
  obrigatoria:false,
  objetivo:"Complementar proteínas e aumentar saciedade noturna.",

  
  opcoes:[

    {
      nome:"Iogurte Proteico",
      calorias:"220",
      proteinas:"25g",
      carboidratos:"10g",
      gorduras:"8g",

      alimentos:[
        {grupo:"Laticínio", alimento:"Iogurte Grego", quantidade:"170g"},
        {grupo:"Proteína", alimento:"Whey Protein", quantidade:"20g"}
      ]
    },

    {
      nome:"Ovos e Queijo",
      calorias:"250",
      proteinas:"24g",
      carboidratos:"2g",
      gorduras:"16g",

      alimentos:[
        {grupo:"Proteína", alimento:"Ovos", quantidade:"3 unidades"},
        {grupo:"Proteína", alimento:"Queijo Minas", quantidade:"40g"}
      ]
    }

  ]
  

  },

  {
  id:"refeicao-livre",
  nome:"Refeição Livre",
  horario:"Sábado ou Domingo",
  obrigatoria:false,
  objetivo:"Melhorar aderência à dieta e sustentabilidade a longo prazo.",

  
  opcoes:[

    {
      nome:"Hambúrguer Artesanal",
      calorias:"800–1200",
      proteinas:"40–60g",
      carboidratos:"70–120g",
      gorduras:"35–60g",

      alimentos:[
        {grupo:"Livre", alimento:"Hambúrguer", quantidade:"1 unidade"},
        {grupo:"Livre", alimento:"Batata Frita", quantidade:"1 porção"},
        {grupo:"Livre", alimento:"Refrigerante Zero", quantidade:"Opcional"}
      ]
    }
  ]
  

  }

  ],


    resumoNutricional: {

    kcalTreino: "2800",
    kcalDescanso: "2500",

    proteinas: "170–180g",
    carboidratos: "300–340g",
    gorduras: "70–80g",

    fibras: "30–40g",
    agua: "3.0–3.5L",

    observacao: "Ajustar calorias conforme evolução do peso, medidas, performance e aparência física."
  },

  equivalenciasNutricionais: [

    {
      grupo: "Proteína",
      trocas: [
        "200g de frango = 180–200g de patinho moído",
        "200g de frango = 2 latas de atum",
        "200g de frango = 5 ovos inteiros",
        "30g de whey = aproximadamente 120g de frango em proteína"
      ]
    },

    {
      grupo: "Carboidrato",
      trocas: [
        "200g de arroz branco = 250g de batata inglesa",
        "200g de arroz branco = 220g de mandioca",
        "200g de arroz branco = 250g de macarrão cozido",
        "2 fatias de pão = 1 pão francês médio",
        "100g de tapioca = 120g de cuscuz pronto"
      ]
    },

    {
      grupo: "Gorduras",
      trocas: [
        "1 colher de sopa de azeite = 15g de gordura",
        "30g de castanhas = 15–18g de gordura",
        "50g de queijo minas = 8–12g de gordura",
        "1 colher de sopa de Nutella ou doce de leite pode entrar como carboidrato prazeroso controlado"
      ]
    }

  ],

  refeicaoLivre: {

    frequencia: "1–2 refeições livres por semana",

    melhorMomento: "Preferencialmente no sábado ou domingo, em dias com CrossFit, musculação ou maior gasto energético.",

    exemplos: [
      "Hambúrguer artesanal",
      "Pizza em quantidade moderada",
      "Lanche com batata pequena",
      "Sobremesa pequena após refeição principal"
    ],

    regras: [
      "Não transformar refeição livre em dia livre inteiro",
      "Manter proteína alta no restante do dia",
      "Evitar compensar com jejum extremo",
      "Preferir refrigerante zero caso queira reduzir calorias",
      "Retomar a dieta normalmente na próxima refeição",
      "Não sentir culpa: aderência também faz parte do resultado"
    ]

  },

  prioridadesMusculares: [

    {
      grupo: "Deltoide Lateral",
      prioridade: 1,
      motivo: "Aumenta largura visual dos ombros e melhora o V-Taper."
    },

    {
      grupo: "Dorsais",
      prioridade: 2,
      motivo: "Expande a aparência das costas e cria contraste com a cintura."
    },

    {
      grupo: "Peitoral Superior",
      prioridade: 3,
      motivo: "Melhora estética do tronco e aparência de peitoral cheio."
    },

    {
      grupo: "Posteriores de Coxa",
      prioridade: 4,
      motivo: "Equilibra membros inferiores, melhora força e reduz risco de desequilíbrios."
    }

  ],

  monitoramento: {

    pesagem: "Diariamente em jejum, usando a média semanal.",

    fotos: "A cada 14 dias, nas mesmas condições de luz, distância e horário.",

    medidas: [
      "Cintura",
      "Peito",
      "Braço",
      "Coxa",
      "Peso corporal"
    ],

    sinaisPositivos: [
      "Cargas subindo",
      "Cintura estável ou reduzindo",
      "Peso estável ou subindo lentamente",
      "Melhora visual em fotos",
      "Boa disposição para treinar"
    ],

    sinaisDeAlerta: [
      "Queda de performance por mais de 2 semanas",
      "Sono ruim frequente",
      "Dor muscular persistente",
      "Cintura aumentando rápido",
      "Fadiga excessiva no CrossFit ou musculação"
    ],

    ajusteCalorico: {

      aumentar: "Adicionar +150 kcal se o peso ficar estável por 3 semanas e a performance não evoluir.",

      reduzir: "Reduzir -150 a -200 kcal se a cintura aumentar rápido ou o peso subir mais de 0,5% por semana.",

      manter: "Manter calorias se força estiver subindo e aparência estiver melhorando."

    }

  },

  meta: {

    pesoAtual: "76kg",
    pesoAlvo: "76–78kg",

    gorduraAtualEstimativa: "13–15%",
    gorduraAlvoEstimativa: "10–12%",

    horizonte: "16–24 semanas",

    objetivoVisual: "Mais volume em ombros, costas e peitoral superior, mantendo cintura controlada e abdômen aparente."

  },

  suplementos: [

    {nome:"Creatina", dose:"3–5g/dia", horario:"Qualquer horário", funcao:"Força, potência e desempenho."},

    {nome:"Whey Protein", dose:"Conforme necessidade", horario:"Pós-treino ou lanches", funcao:"Ajuda a bater proteína diária."},

    {nome:"Cafeína", dose:"3–6mg/kg", horario:"30–60min pré-treino", funcao:"Foco e performance."}

  ]

};