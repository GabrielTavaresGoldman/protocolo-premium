# Protocolo Premium Parametrizável

Gerador de protocolos de treino e nutrição personalizados, totalmente configurável. Todos os cálculos (KCAL, macros, IMC, TDEE) são automáticos baseados em peso, altura, idade e objetivo.

## 🚀 Funcionalidades

✅ **Cálculos Automáticos**
- TDEE (Taxa de Gasto Energético Diário) via Harris-Benedict
- KCAL por tipo de dia (treino/descanso) ajustada por objetivo
- Macros (proteína, carbs, gordura) calculadas automaticamente
- IMC e métricas corporais
- Ingestão de água personalizada

✅ **Totalmente Parametrizável**
- Altere peso, altura, idade, nível de treino - tudo recalcula automaticamente
- 3 objetivos pré-configurados: Hipertrofia, Emagrecimento, Recomposição Corporal
- Personalize cores, logo, nome do personal e aluno

✅ **Design Premium**
- Interface dark moderna com animações suaves
- Responsivo (funciona em mobile)
- Exportável para PDF
- Grid dinâmico e cards interativos

## 📋 Como Usar

### 1. Abra o arquivo `protocolo.html` no navegador
```bash
# Ou use um servidor local
npx http-server
```

### 2. Configure os dados no arquivo HTML

Edite a seção `CONFIG` no topo do arquivo:

```javascript
const CONFIG = {
  personal: {
    nome: "Seu Nome",
    subtitulo: "Personal Trainer",
    logo: "assets/logo.jpg",
    // ...
  },

  aluno: {
    nome: "Nome do Cliente",
    objetivo: "Hipertrofia & Recomposição Corporal",
    sexo: "M", // "M" ou "F"
    pesoKg: 73,
    alturaM: 1.75,
    idadeAnos: 28,
    treinosSemana: 4,
    nivel: "Intermediário", // "Iniciante", "Intermediário", "Avançado"
    objetivo_tipo: "hipertrofia", // "hipertrofia", "emagrecimento", "recomposicao"
    // Tudo mais é calculado automaticamente!
  },
  // ...
};
```

### 3. Customize os treinos e refeições

A seção `CONFIG.treinos` e `CONFIG.refeicoes` pode ser expandida com seus próprios exercícios e opções alimentares.

## 🧮 Como Funcionam os Cálculos

### TDEE (Taxa de Gasto Energético)
```
TMB = Harris-Benedict (baseado em sexo, peso, altura, idade)
TDEE = TMB × Fator de Atividade (1.4 a 1.65 conforme nível)
```

### KCAL por Dia
```
Dias de Treino: TDEE × 1.05-1.12 (conforme objetivo)
Dias de Descanso: TDEE × 0.90-0.98 (conforme objetivo)
```

### Macros
```
Proteína: 2.2g por kg de peso
Gordura: 25% das calorias
Carbos: Resto das calorias
```

## 📁 Estrutura do Projeto

```
protocolo-premium/
├── protocolo.html         # Arquivo principal
├── README.md             # Este arquivo
├── .gitignore           # Arquivos a ignorar no Git
├── assets/
│   ├── logo.jpg         # Logo do personal/marca
│   └── exercicios/      # GIFs dos exercícios
│       ├── supino-inclinado.gif
│       ├── elevacao-lateral.gif
│       └── ...
└── exemplos/            # Protocolos de exemplo
    ├── hipertrofia.html
    ├── emagrecimento.html
    └── recomposicao.html
```

## 🎨 Customização

### Alterar Cores
```javascript
cores: {
  primaria: "#e50914",  // Mude para sua cor
  fundo: "#050505",
  card: "#151515"
}
```

### Adicionar Mais Exercícios
```javascript
{
  id:"push",
  exercicios:[
    {
      nome:"Seu Exercício",
      series:"4",
      reps:"8–10",
      rir:"1–2",
      descanso:"2–3 min",
      gif:"assets/exercicios/seu-exercicio.gif",
      emoji:"💪",
      texto:"Descrição do exercício"
    }
  ]
}
```

## 📊 Exemplos de Objetivos

### 1. Hipertrofia
- KCAL Treino: +12% acima do TDEE
- KCAL Descanso: -2% abaixo do TDEE
- Foco: Ganho de massa magra

### 2. Emagrecimento
- KCAL Treino: -5% abaixo do TDEE
- KCAL Descanso: -10% abaixo do TDEE
- Foco: Perda de gordura

### 3. Recomposição Corporal
- KCAL Treino: +5% acima do TDEE
- KCAL Descanso: -2% abaixo do TDEE
- Foco: Ganho de massa com perda de gordura

## 🖨️ Exportar para PDF

Clique no botão **"🖨️ Salvar PDF"** no canto inferior direito para gerar um PDF do protocolo completo.

## 📱 Responsivo

O design se adapta automaticamente para:
- Desktop (full width)
- Tablet (colunas ajustadas)
- Mobile (single column)

## 🔧 Tecnologias

- HTML5
- CSS3 (com Grid, Flexbox, Animations)
- JavaScript Vanilla (sem dependências)

## 📝 Licença

Livre para uso pessoal e profissional. Credite a origem se compartilhar.

## 💬 Suporte

Tem dúvidas? Abra uma issue no GitHub!

---

**Desenvolvido para Personais Trainers e Coaches 💪**
