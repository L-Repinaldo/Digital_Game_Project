# GDD — Fiscal Forca

**Projeto:** EducaJogo Fiscal  
**Tipo de documento:** Game Design Document (GDD)  
**Versão:** 1.0  
**Gênero:** Puzzle educativo / jogo de palavras  
**Plataforma:** Web  
**Público-alvo:** Estudantes do Ensino Médio  
**Desenvolvimento:** Individual  
**Status:** Protótipo funcional em desenvolvimento

---

## Índice

1. [Visão geral](#1-visão-geral)
2. [Objetivos do projeto](#2-objetivos-do-projeto)
3. [Público-alvo](#3-público-alvo)
4. [Escopo do jogo](#4-escopo-do-jogo)
5. [Core Gameplay](#5-core-gameplay)
6. [Mecânicas de jogo](#6-mecânicas-de-jogo)
7. [Conteúdo educativo](#7-conteúdo-educativo)
8. [Interface e experiência do usuário](#8-interface-e-experiência-do-usuário)
9. [Arquitetura técnica](#9-arquitetura-técnica)
10. [Regras funcionais](#10-regras-funcionais)
11. [Requisitos não funcionais](#11-requisitos-não-funcionais)
12. [Relação entre gameplay e aprendizagem](#12-relação-entre-gameplay-e-aprendizagem)
13. [Aplicação extensionista](#13-aplicação-extensionista)
14. [Limitações conhecidas](#14-limitações-conhecidas)
15. [Possibilidades de evolução](#15-possibilidades-de-evolução)

---

## 1. Visão geral

### 1.1. Conceito do jogo

**Fiscal Forca** é um jogo educativo de palavras baseado na mecânica clássica da forca, desenvolvido com o objetivo de apresentar conceitos de Educação Fiscal de maneira interativa e contextualizada.

Durante uma rodada, o jogador recebe uma situação relacionada à Educação Fiscal e deve descobrir o conceito correspondente selecionando letras de uma palavra oculta. Para auxiliar na resolução, o jogo oferece dicas que podem ser utilizadas em troca de uma vida.

Ao final da rodada, o jogador recebe um feedback explícito de vitória ou derrota, visualiza a resposta correta e tem acesso a uma explicação educativa sobre o conceito apresentado.

O diferencial do jogo está na utilização de contextos cotidianos como parte central da mecânica. O jogador não precisa apenas reconhecer uma palavra: deve relacionar as informações apresentadas a conceitos de tributação, consumo, cidadania e gestão pública.

### 1.2. Proposta de valor

Transformar conteúdos de Educação Fiscal em desafios curtos e interativos, incentivando a interpretação de situações cotidianas, o reconhecimento de conceitos e a compreensão de sua importância para a sociedade.

### 1.3. Pilares de design

- **Aprendizagem contextualizada:** apresentar os conceitos por meio de situações compreensíveis.
- **Interatividade:** permitir que o jogador participe ativamente da resolução dos desafios.
- **Feedback educativo:** explicar o significado do conceito ao final da rodada.
- **Simplicidade:** oferecer uma interface intuitiva, com regras fáceis de compreender.
- **Acessibilidade de conteúdo:** utilizar linguagem adequada ao público-alvo, evitando complexidade desnecessária.

---

## 2. Objetivos do projeto

### 2.1. Objetivo principal

Desenvolver um jogo web educativo que auxilie estudantes do Ensino Médio a reconhecer e compreender conceitos básicos de Educação Fiscal por meio de desafios de palavras contextualizados.

### 2.2. Objetivos específicos

- Apresentar conceitos fiscais em situações próximas da realidade dos estudantes.
- Estimular a interpretação de textos curtos.
- Relacionar situações cotidianas a conceitos de Educação Fiscal.
- Incentivar o raciocínio por meio da descoberta progressiva de palavras.
- Oferecer dicas para auxiliar a resolução dos desafios.
- Consolidar o aprendizado por meio de explicações apresentadas ao final das rodadas.
- Disponibilizar uma aplicação simples, executável em um navegador web.

---

## 3. Público-alvo

O público-alvo principal são estudantes do Ensino Médio, aproximadamente entre 15 e 18 anos.

O jogo também poderá ser utilizado em atividades educativas promovidas por instituições de ensino e pelo Núcleo de Apoio Contábil e Fiscal (NAF).

### 3.1. Diretrizes de linguagem

O conteúdo deverá:

- Utilizar frases curtas e objetivas.
- Apresentar situações compreensíveis sem exigir conhecimento tributário prévio.
- Explicar termos técnicos quando necessário.
- Evitar ambiguidades que dificultem a identificação da resposta.
- Manter coerência entre o contexto, as dicas, a palavra e a explicação.
- Utilizar definições educativas compatíveis com os conceitos e com a legislação aplicável.

---

## 4. Escopo do jogo

O Fiscal Forca tem como núcleo a resolução de desafios individuais de palavras.

### 4.1. Funcionalidades contempladas no protótipo

- Carregamento de conceitos a partir de uma base de dados.
- Apresentação de contexto educativo.
- Exibição de palavra oculta.
- Seleção de letras por meio de teclado na interface.
- Identificação de letras corretas e incorretas.
- Gerenciamento de vidas e tentativas.
- Sistema de dicas com consumo de vidas.
- Controle das dicas utilizadas durante a rodada.
- Verificação das condições de vitória e derrota.
- Exibição de popup de resultado.
- Apresentação da resposta correta e da explicação do conceito.
- Possibilidade de iniciar outra rodada.
- Comunicação entre frontend e backend por meio de uma API.

### 4.2. Funcionalidades fora do escopo atual

Não fazem parte do escopo funcional atual:

- Sistema de pontuação.
- Ranking de jogadores.
- Cadastro e autenticação de usuários.
- Modo multiplayer.
- Níveis de dificuldade formalmente definidos.
- Adaptação automática da dificuldade.
- Estatísticas históricas de desempenho.
- Classificação automática dos conceitos por dificuldade.

Essas funcionalidades poderão ser avaliadas futuramente, mas não são necessárias para o funcionamento do protótipo.

---

## 5. Core Gameplay

O ciclo principal de jogo é composto pelas seguintes etapas:

1. O jogador inicia ou carrega uma rodada.
2. O sistema seleciona um conceito disponível.
3. O contexto educativo é apresentado.
4. O jogador observa a palavra oculta.
5. O jogador seleciona uma letra.
6. O sistema verifica se a letra pertence à palavra.
7. A interface atualiza a palavra e as vidas restantes.
8. O jogador continua tentando ou utiliza uma dica.
9. O sistema verifica se houve vitória ou derrota.
10. O resultado é apresentado em um popup.
11. O jogador pode iniciar uma nova rodada.

```text
        Iniciar rodada
              |
              v
      Exibir contexto
              |
              v
       Palavra oculta
              |
              v
       Escolher letra
              |
              v
       Validar palpite
              |
        +-----+-----+
        |           |
      Acerto       Erro
        |           |
        v           v
 Revelar letra   Perder vida
        |           |
        +-----+-----+
              |
              v
     Verificar resultado
              |
        +-----+-----+
        |           |
      Vitória      Derrota
        |           |
        +-----+-----+
              |
              v
      Exibir popup
      e explicação
              |
              v
       Próxima rodada
```

O fluxo também permite a utilização de dicas durante a rodada, desde que as condições para seu uso sejam atendidas.

---

## 6. Mecânicas de jogo

### 6.1. Palavra oculta

Cada rodada possui uma palavra associada ao conceito educativo.

Inicialmente, as letras são ocultadas por espaços reservados. Os espaços entre palavras são preservados para facilitar a leitura de expressões compostas.

Exemplo:

```text
_ _ _ _   _ _ _ _ _ _
```

A cada palpite correto, todas as ocorrências correspondentes à letra selecionada são reveladas.

Exemplo:

```text
_ R _ _   _ _ _ _ _ _
```

A rodada termina com vitória quando todas as letras da palavra são descobertas.

### 6.2. Seleção de letras

O jogador utiliza o teclado apresentado na interface para selecionar letras.

Após a seleção:

- Se a letra estiver presente no conceito, suas ocorrências serão reveladas.
- Se a letra não estiver presente, uma vida será perdida.
- As letras já selecionadas deverão ser identificadas visualmente para evitar repetições desnecessárias.
- A interface deverá apresentar feedback sobre o resultado do palpite.

Os palpites são processados pelo backend, que mantém o estado da rodada.

### 6.3. Sistema de vidas

O jogador começa cada rodada com a quantidade máxima de tentativas configurada pelo jogo.

Cada letra incorreta reduz o número de tentativas restantes em uma unidade.

Exemplo ilustrativo:

```text
Vidas restantes: ♥ ♥ ♥ ♡ ♡
```

Quando as tentativas chegam a zero, o jogador perde a rodada.

O sistema não deverá permitir novos palpites após o encerramento da partida.

### 6.4. Sistema de dicas

As dicas oferecem informações adicionais para ajudar o jogador a deduzir o conceito.

Cada conceito poderá possuir uma sequência de dicas progressivas. A primeira dica apresenta uma orientação geral, enquanto a segunda pode fornecer uma pista mais específica.

Exemplo:

**Contexto:** A população acompanha como os recursos públicos são utilizados.

**Dica 1:** Está relacionado à participação da sociedade.

**Dica 2:** Envolve acompanhar e fiscalizar ações do poder público.

**Resposta:** CONTROLE SOCIAL.

#### Regras de utilização

- As dicas são específicas de cada conceito.
- O jogador pode utilizar as dicas disponíveis durante a rodada.
- Cada dica utilizada consome uma vida.
- Não é permitido utilizar uma dica quando resta apenas uma vida.
- Uma dica utilizada não deverá ser disponibilizada novamente na mesma rodada.
- O sistema deverá informar quando não houver mais dicas disponíveis.
- O uso de uma dica atualiza o estado da rodada no backend.

As dicas utilizadas e as vidas restantes devem permanecer consistentes durante a continuidade da rodada.

### 6.5. Condições de vitória e derrota

**Vitória:** ocorre quando todas as letras da palavra são descobertas.

**Derrota:** ocorre quando o jogador esgota as tentativas disponíveis.

Uma rodada encerrada não deve aceitar novas letras ou dicas.

### 6.6. Popup de resultado

Ao finalizar uma rodada, o jogo apresenta um popup centralizado sobre a interface.

O popup deverá:

- Destacar visualmente a vitória ou a derrota.
- Apresentar uma mensagem correspondente ao resultado.
- Exibir a resposta correta.
- Apresentar a explicação educativa do conceito.
- Disponibilizar um botão para iniciar outra rodada.
- Bloquear a interação com os elementos do jogo enquanto estiver aberto.

O popup utiliza a identidade visual do Fiscal Forca, com fundo escuro, destaques em verde para a vitória e detalhes em vermelho para a derrota.

O objetivo do componente é tornar o resultado evidente e garantir que a explicação educativa não passe despercebida.

---

## 7. Conteúdo educativo

O conteúdo é um dos componentes centrais do jogo. Cada conceito deve possuir informações suficientes para sustentar uma rodada completa.

### 7.1. Estrutura de um conceito

Cada registro contém:

| Campo | Descrição |
|---|---|
| `id` | Identificador único do conceito. |
| `word` | Palavra ou expressão que o jogador deve descobrir. |
| `category` | Categoria temática do conceito. |
| `context` | Situação apresentada ao jogador antes dos palpites. |
| `hints` | Lista de dicas disponíveis para a rodada. |
| `explanation` | Explicação apresentada ao final da partida. |

### 7.2. Exemplo de conteúdo

```json
{
    "id": 1,
    "word": "NOTA FISCAL",
    "category": "consumo",
    "context": "Uma pessoa compra um produto e recebe um documento que registra a operação comercial.",
    "hints": [
        "Está relacionado ao registro de uma compra.",
        "Pode ser utilizado para comprovar a operação."
    ],
    "explanation": "A nota fiscal é um documento que registra uma operação comercial."
}
```

### 7.3. Categorias temáticas

Os conceitos poderão ser organizados nas seguintes categorias:

**Tributos**
- Tributo
- Imposto
- Taxa
- IPTU
- IPVA
- ICMS

**Gestão pública**
- Orçamento público
- Arrecadação
- Gasto público
- Serviço público

**Cidadania**
- Cidadania
- Transparência
- Controle social
- Justiça fiscal

**Consumo**
- Nota fiscal
- Nota fiscal eletrônica
- Consumidor
- Fornecedor

**Irregularidades fiscais**
- Sonegação
- Evasão fiscal
- Elisão fiscal

As categorias servem para organizar os conteúdos. A existência de uma categoria não implica, por si só, a implementação de filtros ou modos de jogo específicos.

### 7.4. Critérios de qualidade do conteúdo

Cada conceito deverá ser revisado para garantir:

- Correção conceitual.
- Clareza do contexto.
- Coerência entre contexto, palavra e dicas.
- Ausência de pistas que revelem diretamente a resposta sem necessidade de raciocínio.
- Explicação compatível com o nível de conhecimento do público-alvo.
- Consistência com a legislação aplicável, especialmente nos conceitos tributários.

---

## 8. Interface e experiência do usuário

### 8.1. Tela principal do jogo

A interface principal concentra os elementos necessários para jogar.

Os componentes são organizados em duas áreas principais:

**Área de jogo**
- Identificação do jogo.
- Título e instruções.
- Contexto educativo.
- Palavra oculta.
- Teclado de letras.
- Feedback sobre os palpites.

**Barra lateral**
- Representação visual da forca.
- Indicador de vidas restantes.
- Área de dicas.
- Botão para utilizar uma dica, quando permitido.

A organização deverá manter as informações relevantes visíveis e reduzir a necessidade de navegação durante uma rodada.

### 8.2. Identidade visual

A interface utiliza uma identidade visual escura, com contrastes e destaques em verde.

Paleta principal:

| Elemento | Cor |
|---|---|
| Fundo principal | `#101512` |
| Painéis | `#181f1b` |
| Painéis secundários | `#202923` |
| Bordas | `#303c34` |
| Texto principal | `#edf2ef` |
| Texto secundário | `#9ba89e` |
| Verde de destaque | `#b8f36b` |
| Verde escuro | `#25351d` |
| Vermelho de erro | `#ff7777` |

A tipografia utiliza DM Sans para o texto geral e Space Grotesk para títulos e elementos de destaque.

### 8.3. Feedback visual

A interface deverá distinguir visualmente:

- Letras corretas.
- Letras incorretas.
- Vidas disponíveis.
- Vidas consumidas.
- Dicas disponíveis.
- Erros de operação.
- Estados de carregamento.
- Vitória e derrota.

O feedback deve ser claro, consistente e coerente com a paleta de cores.

### 8.4. Responsividade

O jogo deverá se adaptar a diferentes tamanhos de tela.

Em telas menores:

- A área de jogo e a barra lateral poderão ser reorganizadas verticalmente.
- O teclado deverá manter botões legíveis e utilizáveis.
- A palavra oculta deverá acomodar expressões maiores.
- O popup deverá respeitar as dimensões disponíveis e permitir rolagem quando necessário.

---

## 9. Arquitetura técnica

A aplicação utiliza uma arquitetura cliente-servidor, separando a interface do jogo da lógica responsável por processar as rodadas.

### 9.1. Frontend

**Tecnologias:**
- React
- TypeScript
- CSS
- Vite

**Responsabilidades:**
- Renderizar a interface.
- Exibir o contexto e a palavra oculta.
- Receber os palpites do jogador.
- Apresentar vidas, dicas e feedback.
- Controlar os estados visuais da aplicação.
- Exibir o popup de resultado.
- Comunicar-se com a API do backend.

A lógica de comunicação com a API fica separada dos componentes visuais, enquanto o estado e as ações do jogo são organizados em hooks e módulos próprios.

### 9.2. Backend

**Tecnologias:**
- Python
- Flask

**Responsabilidades:**
- Disponibilizar os endpoints do jogo.
- Carregar os conceitos educativos.
- Selecionar palavras para as rodadas.
- Validar os palpites.
- Atualizar as letras descobertas e as tentativas restantes.
- Processar a utilização de dicas.
- Verificar as condições de encerramento.
- Manter o estado da rodada na sessão do jogador.
- Retornar os dados necessários para a interface.

### 9.3. API

A comunicação entre frontend e backend ocorre por meio de endpoints HTTP que utilizam JSON.

Endpoints principais:

| Método | Endpoint | Responsabilidade |
|---|---|---|
| `GET` | `/api/game/` | Recuperar a rodada ativa ou iniciar uma nova. |
| `POST` | `/api/game/guess` | Processar um palpite de letra. |
| `POST` | `/api/game/hint` | Processar a utilização de uma dica. |

As respostas da API fornecem os dados necessários para atualizar a interface, incluindo a palavra mascarada, as tentativas restantes e as informações educativas pertinentes.

### 9.4. Gerenciamento de estado

O estado da rodada é mantido pelo backend por meio da sessão do jogador.

O frontend mantém uma representação desse estado para renderizar os componentes e atualizar a interface após cada operação.

Essa separação permite que as regras do jogo sejam processadas no servidor, evitando que a interface seja a única responsável por validar os resultados.

### 9.5. Persistência

O protótipo utiliza sessões para manter o estado temporário da rodada, incluindo informações como:

- Identificador do conceito selecionado.
- Letras corretas.
- Letras incorretas.
- Tentativas restantes.
- Quantidade de dicas utilizadas.

Esse mecanismo permite preservar o progresso durante a continuidade da sessão, conforme o comportamento implementado no backend.

O protótipo não prevê, no escopo atual, uma base de dados de usuários ou um histórico permanente de partidas.

### 9.6. Armazenamento de conteúdo

Os conceitos educativos são armazenados em arquivos JSON.

Essa abordagem permite adicionar, editar ou remover conteúdos sem precisar reescrever a lógica principal do jogo, desde que os registros respeitem o formato esperado pelo carregador.

---

## 10. Regras funcionais

As regras abaixo definem o comportamento esperado do jogo.

**RF01 — Inicialização:** o sistema deve disponibilizar uma rodada com contexto, palavra oculta, tentativas e dicas.

**RF02 — Palpites:** o sistema deve receber e validar as letras selecionadas pelo jogador.

**RF03 — Acerto:** quando a letra existir na palavra, suas ocorrências deverão ser reveladas.

**RF04 — Erro:** quando a letra não existir na palavra, uma tentativa deverá ser consumida.

**RF05 — Vitória:** o sistema deverá identificar quando todas as letras forem descobertas.

**RF06 — Derrota:** o sistema deverá identificar quando as tentativas forem esgotadas.

**RF07 — Dicas:** o sistema deverá disponibilizar as dicas cadastradas para o conceito, respeitando os limites de utilização.

**RF08 — Custo da dica:** cada dica utilizada deverá consumir uma tentativa.

**RF09 — Restrição de dicas:** não deverá ser possível utilizar uma dica quando restar apenas uma tentativa.

**RF10 — Encerramento:** uma rodada finalizada não deverá aceitar novos palpites ou dicas.

**RF11 — Resultado:** o sistema deverá informar se o jogador venceu ou perdeu.

**RF12 — Explicação:** a resposta correta e a explicação do conceito deverão ser apresentadas ao final da rodada.

**RF13 — Nova rodada:** o jogador deverá poder iniciar outra rodada após o resultado.

**RF14 — Estado da rodada:** o sistema deverá manter o estado da partida de maneira consistente entre frontend e backend durante a sessão.

---

## 11. Requisitos não funcionais

**RNF01 — Usabilidade:** a interface deverá apresentar instruções claras e controles intuitivos.

**RNF02 — Responsividade:** o layout deverá funcionar em diferentes resoluções de tela.

**RNF03 — Manutenibilidade:** a aplicação deverá manter separadas as responsabilidades de interface, comunicação com a API e lógica do jogo.

**RNF04 — Extensibilidade:** novos conceitos deverão poder ser adicionados à base de dados sem alterações estruturais na mecânica principal.

**RNF05 — Consistência:** os dados apresentados na interface deverão refletir o estado retornado pelo backend.

**RNF06 — Desempenho:** as operações de palpites e dicas deverão ocorrer sem atrasos perceptíveis em condições normais de execução.

**RNF07 — Tratamento de erros:** falhas de comunicação e operações inválidas deverão produzir mensagens compreensíveis.

**RNF08 — Acessibilidade básica:** os controles deverão possuir identificação clara, foco visível e feedback perceptível.

---

## 12. Relação entre gameplay e aprendizagem

| Elemento do jogo | Contribuição educativa |
|---|---|
| Contexto | Apresenta uma situação relacionada à Educação Fiscal. |
| Palavra oculta | Estimula a identificação do conceito a partir de pistas. |
| Seleção de letras | Mantém o jogador envolvido na resolução do desafio. |
| Dicas | Orienta o raciocínio e fornece informações adicionais. |
| Categorias | Organiza os conceitos por tema. |
| Popup de resultado | Destaca a conclusão da rodada. |
| Explicação | Reforça o significado do conceito após a resolução. |
| Nova rodada | Permite contato com outros conceitos educativos. |

A aprendizagem proposta não depende apenas de acertar a palavra. A explicação final é parte fundamental da experiência, pois transforma a resposta em uma oportunidade de compreensão e revisão do conteúdo.

---

## 13. Aplicação extensionista

O Fiscal Forca poderá ser utilizado em atividades educativas do NAF com estudantes do Ensino Médio, como recurso complementar para introduzir ou revisar conceitos de Educação Fiscal.

### 13.1. Formato sugerido

**Duração:** 15 a 30 minutos.

**Equipamento:** computador ou notebook com navegador web.

**Organização:** atividade individual, com possibilidade de discussão coletiva após as rodadas.

### 13.2. Dinâmica proposta

1. O mediador apresenta o objetivo e as regras do jogo.
2. Os estudantes resolvem as rodadas disponíveis.
3. Ao final de cada desafio, os participantes leem a explicação do conceito.
4. O mediador promove uma discussão sobre os conceitos mais difíceis.
5. Os estudantes relacionam os conceitos a situações cotidianas.
6. A atividade termina com uma breve revisão dos temas abordados.

O jogo funciona como instrumento de apoio educativo e não substitui a orientação de professores ou mediadores.

---

## 14. Limitações conhecidas

O protótipo possui um escopo deliberadamente reduzido.

Entre as limitações estão:

- Ausência de autenticação de usuários.
- Ausência de ranking e pontuação.
- Ausência de histórico permanente de partidas.
- Ausência de níveis de dificuldade formalmente implementados.
- Dependência da qualidade e da quantidade de conceitos cadastrados.
- Necessidade de revisar os conteúdos educativos antes de sua utilização em atividades formais.
- Dependência da disponibilidade do backend para realizar as operações do jogo.

Essas limitações não impedem a execução do ciclo principal e poderão orientar evoluções futuras.

---

## 15. Possibilidades de evolução

Após a estabilização do protótipo, poderão ser consideradas as seguintes melhorias:

- Criar uma tela inicial com apresentação do projeto e instruções.
- Implementar filtros por categoria.
- Desenvolver um sistema de pontuação.
- Criar níveis de dificuldade definidos manualmente.
- Adicionar estatísticas da sessão.
- Ampliar o banco de conceitos.
- Aprimorar a acessibilidade.
- Implementar testes automatizados para a API e as regras de jogo.
- Avaliar formas de registrar resultados de atividades educativas, respeitando os requisitos de privacidade aplicáveis.

Essas possibilidades não constituem requisitos para a entrega do protótipo atual.