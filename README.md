# Digital_Game_Project

# 🎮 Fiscal Forca

> **Jogo educativo de palavras e conceitos sobre Educação Fiscal para estudantes do Ensino Médio.**

---

## 1. Identificação

**Nome:** Fiscal Forca
**Tipo:** Puzzle educativo / jogo de palavras
**Plataforma:** Web
**Público-alvo:** Estudantes do Ensino Médio
**Projeto:** EducaJogo Fiscal
**Desenvolvimento:** Individual
**Tecnologia principal:** Python + Flask

---

# 2. Conceito

O **Fiscal Forca** é um jogo educativo baseado na mecânica clássica da forca.

Em cada rodada, o jogador recebe um **contexto relacionado à Educação Fiscal** e deve identificar o conceito correspondente descobrindo suas letras.

Diferentemente de uma forca tradicional, o jogador não recebe simplesmente uma palavra aleatória. O contexto fornece informações suficientes para que ele possa **compreender e deduzir o conceito**.

Após a resolução, o jogo apresenta uma explicação curta sobre o termo e sua relação com Educação Fiscal.

---

# 3. Problema educativo

Conceitos relacionados à Educação Fiscal podem ser apresentados de forma excessivamente teórica, dificultando sua compreensão por estudantes.

O projeto busca transformar esses conceitos em uma experiência interativa na qual o estudante precisa interpretar uma situação e relacioná-la a um conceito específico.

---

# 4. Objetivo educativo

O jogo pretende auxiliar o estudante a:

* reconhecer conceitos relacionados à Educação Fiscal;
* associar situações cotidianas a conceitos fiscais;
* compreender a função de termos relacionados à cidadania;
* desenvolver interpretação de informações;
* ampliar seu vocabulário relacionado à cidadania fiscal.

### Objetivo principal

Ao final da experiência, espera-se que o jogador consiga **relacionar situações contextualizadas a conceitos básicos de Educação Fiscal**.

---

# 5. Público-alvo

Estudantes do Ensino Médio, aproximadamente entre 15 e 18 anos.

A linguagem deverá:

* ser clara;
* evitar excesso de termos técnicos;
* utilizar situações próximas da realidade dos estudantes;
* apresentar explicações curtas após cada rodada.

---

# 6. Core Gameplay

O ciclo principal será:

```text
Iniciar rodada
      ↓
Receber contexto
      ↓
Observar palavra oculta
      ↓
Escolher uma letra
      ↓
Acertar / errar
      ↓
Continuar tentando
      ↓
Descobrir conceito
      ↓
Receber explicação
      ↓
Próxima rodada
```

---

# 7. Mecânica principal

A palavra relacionada ao conceito é ocultada:

```text
_ _ _ _ _ _ _ _
```

O jogador escolhe letras.

### Acerto

A letra aparece:

```text
_ R _ _ _ _ _ _
```

### Erro

Uma tentativa é perdida:

```text
Tentativas restantes: ♥ ♥ ♥ ♡ ♡
```

O jogador vence quando descobre todas as letras.

O jogador perde quando esgota suas tentativas.

---

# 8. Contexto educativo

Cada rodada apresenta uma situação antes da palavra.

### Exemplo

> Uma pessoa compra um produto e recebe um documento que registra a operação comercial. Esse documento também pode ser importante para comprovar a compra e exercer direitos do consumidor.

```text
_ _ _ _   _ _ _ _ _ _
```

**Resposta:**

> NOTA FISCAL

Após o acerto:

> **Nota fiscal** é um documento que registra uma operação comercial e pode ser utilizado para comprovação da compra e exercício de direitos do consumidor.

---

# 9. Categorias

Os conceitos serão organizados em categorias.

### 💰 Tributos

Exemplos:

* tributo;
* imposto;
* taxa;
* arrecadação.

### 🏛️ Gestão pública

Exemplos:

* orçamento;
* receita;
* despesa;
* investimento.

### 👥 Cidadania

Exemplos:

* cidadania;
* participação;
* transparência;
* fiscalização;
* controle social.

### 🧾 Consumo

Exemplos:

* nota fiscal;
* consumidor;
* fornecedor;
* formalização.

---

# 10. Sistema de dicas

O jogador poderá solicitar dicas durante a rodada.

As dicas serão progressivas.

### Exemplo

**Contexto:**

> A população acompanha como os recursos públicos estão sendo utilizados.

**Dica 1:**

> Está relacionado à participação da sociedade.

**Dica 2:**

> Envolve acompanhar e fiscalizar ações do poder público.

**Resposta:**

> CONTROLE SOCIAL

O uso de dicas poderá reduzir a pontuação.

---

# 11. Sistema de pontuação

A pontuação será baseada no desempenho do jogador.

### Pontos positivos

* descobrir uma letra;
* completar a palavra;
* resolver sem dicas;
* resolver rapidamente.

### Penalidades

* letra incorreta;
* utilização de dica;
* tentativa adicional.

Exemplo inicial:

```text
Acertar palavra       +100
Letra correta          +10
Letra incorreta        -5
Dica                   -20
```

Os valores poderão ser ajustados durante os testes.

---

# 12. Progressão

Os termos serão divididos em níveis de dificuldade.

```text
Nível 1
Conceitos básicos
       ↓
Nível 2
Conceitos intermediários
       ↓
Nível 3
Conceitos mais específicos
```

A progressão poderá considerar:

* tamanho da palavra;
* quantidade de letras repetidas;
* complexidade do contexto;
* quantidade de pistas;
* dificuldade identificada pelo modelo de ML.

---

# 13. Machine Learning

O ML será utilizado como componente auxiliar para **agrupar os termos de acordo com características relacionadas à dificuldade**.

O jogo continuará funcionando mesmo que o componente de ML seja removido.

---

## 13.1 Características

Cada termo poderá possuir:

```text
word_length
unique_letters
repeated_letters
vowel_count
context_length
hint_count
```

Exemplo:

| Termo         | Tamanho | Letras únicas | Vogais | Contexto |
| ------------- | ------: | ------------: | -----: | -------: |
| imposto       |       7 |             6 |      3 |      180 |
| orçamento     |       9 |             8 |      4 |      240 |
| transparência |      13 |            11 |      6 |      310 |

---

## 13.2 Processamento

Os dados serão normalizados utilizando `StandardScaler`.

Depois será aplicado **K-Means**.

```text
Termos
  ↓
Extração de características
  ↓
StandardScaler
  ↓
K-Means
  ↓
Clusters
  ↓
Interpretação
  ↓
Fácil / Médio / Difícil
```

O modelo não receberá diretamente uma classificação de dificuldade.

Os clusters serão analisados e interpretados com base nas características médias dos grupos.

---

# 14. Adaptação da dificuldade

Como possível extensão, o desempenho do jogador poderá influenciar a seleção dos próximos termos.

Exemplo:

```text
Bom desempenho
      ↓
Termos mais complexos
```

```text
Baixo desempenho
      ↓
Termos mais simples
```

Essa funcionalidade será implementada somente após o funcionamento do jogo principal.

---

# 15. Interface

## Tela inicial

```text
┌─────────────────────────────┐
│       FISCAL FORCA          │
│                             │
│   Educação Fiscal de       │
│       forma lúdica          │
│                             │
│       [ JOGAR ]             │
│       [ COMO JOGAR ]        │
│       [ SOBRE ]             │
└─────────────────────────────┘
```

## Tela de jogo

```text
┌─────────────────────────────────┐
│ FISCAL FORCA          1200 pts │
├─────────────────────────────────┤
│                                 │
│ CIDADANIA FISCAL                │
│                                 │
│ A população acompanha e          │
│ fiscaliza como os recursos      │
│ públicos são utilizados.        │
│                                 │
│        _ _ _ _ _ _ _ _          │
│                                 │
│ Tentativas: ♥ ♥ ♥ ♥ ♡          │
│                                 │
│ [A][B][C][D][E][F][G][H][I]     │
│ [J][K][L][M][N][O][P][Q][R]     │
│ [S][T][U][V][W][X][Y][Z]        │
│                                 │
│             [ DICA ]            │
└─────────────────────────────────┘
```

## Tela de resultado

```text
┌─────────────────────────────┐
│          CORRETO!           │
│                             │
│     CONTROLE SOCIAL         │
│                             │
│ Você utilizou 1 dica.       │
│ Pontuação: 85               │
│                             │
│ [ ENTENDER O CONCEITO ]     │
│ [ PRÓXIMO ]                 │
└─────────────────────────────┘
```

---

# 16. Estrutura de dados

Os conceitos poderão ser armazenados em JSON.

```json
{
    "id": 1,
    "term": "controle social",
    "category": "cidadania",
    "context": "A população acompanha...",
    "hints": [
        "Está relacionado à participação da sociedade.",
        "Envolve acompanhar ações do poder público."
    ],
    "explanation": "É a participação da sociedade no acompanhamento..."
}
```

---

# 17. Stack

## Backend

* Python
* Flask

## Frontend

* HTML
* CSS
* JavaScript

## Machine Learning

* pandas
* scikit-learn

## Dados

* JSON

## Versionamento

* Git
* GitHub

## Testes

* pytest

---

# 18. Estrutura do projeto

```text
fiscal-forca/
│
├── app/
│   ├── routes/
│   ├── game/
│   ├── ml/
│   └── utils/
│
├── data/
│   └── terms.json
│
├── static/
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/
│   ├── index.html
│   ├── game.html
│   ├── result.html
│   └── about.html
│
├── tests/
│
├── notebooks/
│
├── requirements.txt
├── run.py
└── README.md
```

---

# 19. Roadmap

## Fase 1 — MVP

* [ ] Criar Flask
* [ ] Criar tela inicial
* [ ] Criar tela do jogo
* [ ] Implementar palavra oculta
* [ ] Implementar seleção de letras
* [ ] Implementar erros
* [ ] Implementar vitória/derrota
* [ ] Criar primeiro termo

### Marco

> Uma rodada completa funciona.

---

## Fase 2 — Conteúdo

* [ ] Criar 10 termos
* [ ] Criar contextos
* [ ] Criar explicações
* [ ] Criar dicas
* [ ] Criar categorias
* [ ] Revisar conteúdo

### Marco

> O jogo pode ser utilizado sem conteúdo de teste.

---

## Fase 3 — Progressão

* [ ] Implementar pontuação
* [ ] Implementar níveis
* [ ] Implementar sequência de partidas
* [ ] Implementar seleção de termos
* [ ] Implementar estatísticas da sessão

---

## Fase 4 — ML

* [ ] Criar dataset
* [ ] Definir features
* [ ] Implementar StandardScaler
* [ ] Implementar K-Means
* [ ] Avaliar clusters
* [ ] Associar dificuldade aos termos
* [ ] Integrar resultado ao jogo

### Marco

> O modelo consegue agrupar os termos e o jogo utiliza esses grupos.

---

## Fase 5 — Polimento

* [ ] Melhorar interface
* [ ] Melhorar feedback
* [ ] Adicionar animações simples
* [ ] Melhorar responsividade
* [ ] Revisar textos
* [ ] Testar diferentes resoluções
* [ ] Corrigir bugs

---

## Fase 6 — Entrega

* [ ] Finalizar GDD
* [ ] Organizar repositório
* [ ] Documentar stack
* [ ] Documentar ML
* [ ] Registrar uso de IA
* [ ] Preparar demonstração
* [ ] Gravar vídeo de contingência
* [ ] Preparar apresentação

---

# 20. Escopo mínimo

Caso o prazo seja reduzido, o projeto será limitado a:

* 10 termos;
* 4 categorias;
* 1 mecânica de forca;
* contextos educativos;
* dicas;
* pontuação;
* explicação dos conceitos;
* 3 níveis de dificuldade;
* K-Means para agrupamento dos termos.

Funcionalidades adicionais somente serão implementadas após o MVP.

---

# 21. Critério de sucesso

O protótipo será considerado funcional quando o jogador conseguir:

```text
Iniciar partida
      ↓
Receber contexto
      ↓
Descobrir conceito
      ↓
Acertar / errar letras
      ↓
Vencer ou perder
      ↓
Receber explicação
      ↓
Continuar jogando
```

O componente de ML será considerado funcional quando:

```text
Termos
  ↓
Características
  ↓
Normalização
  ↓
K-Means
  ↓
Clusters
  ↓
Níveis de dificuldade
```

---

# 22. Relação Gameplay × Educação Fiscal

| Mecânica               | Objetivo educativo                   |
| ---------------------- | ------------------------------------ |
| Contexto               | Apresentar uma situação realista     |
| Descoberta do termo    | Associar situação e conceito         |
| Dicas                  | Orientar o raciocínio                |
| Explicação             | Consolidar o aprendizado             |
| Categorias             | Organizar conceitos                  |
| Progressão             | Aumentar gradualmente a complexidade |
| Dificuldade adaptativa | Adequar a experiência ao jogador     |

A mecânica principal depende da compreensão do contexto para identificar o conceito. Dessa forma, o conteúdo de Educação Fiscal participa diretamente da resolução do desafio.

---

# 23. Aplicação extensionista

O jogo poderá ser utilizado pelo NAF em atividades presenciais com estudantes do Ensino Médio.

### Formato sugerido

**Duração:** 15–30 minutos.

**Equipamento:** computador ou notebook.

**Internet:** opcional, caso o jogo seja executado localmente.

### Atividade

1. O mediador apresenta brevemente o jogo.
2. Os estudantes resolvem uma sequência de conceitos.
3. Após determinadas respostas, o mediador discute o significado do conceito.
4. Os estudantes podem comparar seus desempenhos.
5. O mediador utiliza os conceitos errados ou difíceis como ponto de discussão.

---

# 24. Regra de escopo

> **Primeiro faça a forca funcionar. Depois adicione conteúdo. Depois ML.**

A arquitetura deve permitir que o jogo funcione independentemente do modelo de Machine Learning.

O ML é um diferencial do projeto, não o núcleo necessário para executar uma partida.
