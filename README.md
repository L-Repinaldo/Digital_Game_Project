# GDD — Fiscal Forca

**Projeto:** EducaJogo Fiscal  
**Jogo:** Fiscal Forca  
**Tipo de documento:** Game Design Document (GDD)  
**Versão:** 1.1  
**Gênero:** Puzzle educativo / jogo de palavras  
**Plataforma:** Web  
**Público-alvo:** Estudantes do Ensino Médio  
**Desenvolvimento:** Individual  
**Status:** Protótipo funcional em desenvolvimento — NP2

---

## Índice

1. [Identificação](#1-identificação)
2. [Problema educativo](#2-problema-educativo)
3. [Público-alvo](#3-público-alvo)
4. [Objetivo de aprendizagem](#4-objetivo-de-aprendizagem)
5. [Conceito do jogo](#5-conceito-do-jogo)
6. [Gênero e plataforma](#6-gênero-e-plataforma)
7. [Tecnologia e justificativa técnica](#7-tecnologia-e-justificativa-técnica)
8. [Core gameplay](#8-core-gameplay)
9. [Mecânicas principais](#9-mecânicas-principais)
10. [Objetivos e condições](#10-objetivos-e-condições)
11. [Feedback ao jogador](#11-feedback-ao-jogador)
12. [Fluxo de telas/cenas](#12-fluxo-de-telascenas)
13. [Interface](#13-interface)
14. [Identidade visual e sonora](#14-identidade-visual-e-sonora)
15. [Relação gameplay × Educação Fiscal](#15-relação-gameplay--educação-fiscal)
16. [Escopo da NP2](#16-escopo-da-np2)
17. [Divisão de atividades](#17-divisão-de-atividades)
18. [Uso de IA generativa](#18-uso-de-ia-generativa)

---

## 1. Identificação

O **Fiscal Forca** é um jogo educativo desenvolvido como parte do projeto **EducaJogo Fiscal**, com a finalidade de abordar conceitos de Educação Fiscal por meio de uma experiência interativa baseada na mecânica clássica da forca.

| Informação | Descrição |
|---|---|
| Projeto | EducaJogo Fiscal |
| Nome do jogo | Fiscal Forca |
| Tipo de documento | Game Design Document (GDD) |
| Versão | 1.1 |
| Gênero | Puzzle educativo / jogo de palavras |
| Plataforma | Web |
| Público-alvo | Estudantes do Ensino Médio |
| Desenvolvimento | Individual |
| Status | Protótipo funcional em desenvolvimento |

---

## 2. Problema educativo

A Educação Fiscal envolve a compreensão de conceitos relacionados à tributação, arrecadação, utilização dos recursos públicos, cidadania e participação social.

Entretanto, esses assuntos podem parecer abstratos ou distantes da realidade dos estudantes, especialmente quando apresentados exclusivamente por meio de explicações teóricas e definições técnicas.

O projeto busca trabalhar essa dificuldade por meio de situações cotidianas que permitam relacionar conceitos fiscais a experiências próximas da realidade dos jogadores.

A proposta não é apenas apresentar definições, mas incentivar o reconhecimento dos conceitos e sua relação com situações como:

- A compra de produtos e a emissão de notas fiscais.
- A arrecadação de tributos.
- A utilização dos recursos públicos.
- A prestação de serviços à população.
- A transparência na administração pública.
- A participação da sociedade na fiscalização dos gastos públicos.

Dessa forma, o Fiscal Forca procura tornar o contato com a Educação Fiscal mais acessível e participativo, utilizando uma atividade lúdica como instrumento complementar de aprendizagem.

---

## 3. Público-alvo

O público-alvo prioritário são estudantes do Ensino Médio, aproximadamente entre 15 e 18 anos.

A aplicação também poderá ser utilizada em atividades educativas promovidas por instituições de ensino e pelo Núcleo de Apoio Contábil e Fiscal (NAF).

### 3.1. Adequações de linguagem e dificuldade

O conteúdo deverá considerar que os jogadores podem não possuir conhecimento prévio sobre tributação ou administração pública.

Para isso, serão adotadas as seguintes diretrizes:

- Utilizar frases curtas e objetivas.
- Apresentar situações compreensíveis sem exigir conhecimento tributário prévio.
- Explicar termos técnicos quando necessário.
- Evitar ambiguidades que dificultem a identificação da resposta.
- Manter coerência entre contexto, palavra, dicas e explicação.
- Utilizar definições educativas compatíveis com o público-alvo e com os conceitos apresentados.

A dificuldade dos desafios será determinada principalmente pela complexidade dos conceitos, pela construção dos contextos e pela especificidade das dicas.

O protótipo não possui níveis de dificuldade formalmente implementados ou adaptação automática da dificuldade.

---

## 4. Objetivo de aprendizagem

Espera-se que, ao interagir com o Fiscal Forca, o jogador desenvolva maior familiaridade com conceitos básicos de Educação Fiscal e consiga relacioná-los a situações do cotidiano.

Os objetivos de aprendizagem são:

- Reconhecer conceitos relacionados à tributação e à arrecadação.
- Compreender a relação entre tributos e financiamento dos serviços públicos.
- Identificar a importância da emissão e da utilização de documentos fiscais.
- Reconhecer a participação da sociedade no acompanhamento da gestão pública.
- Relacionar conceitos fiscais a situações cotidianas.
- Refletir sobre a importância da transparência e da cidadania fiscal.

A compreensão dos conceitos não será avaliada exclusivamente pelo acerto da palavra. A explicação apresentada ao final de cada rodada também será parte fundamental da experiência educativa.

---

## 5. Conceito do jogo

**Fiscal Forca** é um jogo educativo de palavras baseado na mecânica clássica da forca, desenvolvido para apresentar conceitos de Educação Fiscal de maneira interativa e contextualizada.

Durante uma rodada, o jogador recebe uma situação relacionada à Educação Fiscal e deve descobrir o conceito correspondente selecionando letras de uma palavra oculta.

Para auxiliar na resolução, o jogo oferece dicas progressivas que podem ser utilizadas em troca de uma vida.

Ao final da rodada, o jogador recebe um feedback explícito de vitória ou derrota, visualiza a resposta correta e tem acesso a uma explicação educativa sobre o conceito apresentado.

### 5.1. Diferencial da proposta

O diferencial do jogo está na utilização de contextos cotidianos como parte central da mecânica.

O jogador não precisa apenas reconhecer uma palavra: deve interpretar as informações apresentadas e relacioná-las a conceitos de tributação, consumo, cidadania e gestão pública.

Além disso, o sistema de dicas introduz uma decisão durante a partida: o jogador pode obter informações adicionais, mas precisa considerar o custo de uma vida.

### 5.2. Pilares de design

- **Aprendizagem contextualizada:** apresentar conceitos por meio de situações compreensíveis.
- **Interatividade:** permitir que o jogador participe ativamente da resolução dos desafios.
- **Feedback educativo:** explicar o significado do conceito ao final da rodada.
- **Simplicidade:** oferecer uma interface intuitiva, com regras fáceis de compreender.
- **Acessibilidade de conteúdo:** utilizar linguagem adequada ao público-alvo, evitando complexidade desnecessária.

---

## 6. Gênero e plataforma

**Gênero:** Puzzle educativo / jogo de palavras.

**Plataforma:** Web.

A experiência é baseada na resolução de desafios individuais, nos quais o jogador precisa descobrir uma palavra ou expressão a partir de um contexto educativo.

A aplicação é executada em um navegador web, permitindo sua utilização em computadores e dispositivos com acesso à aplicação.

A escolha desse formato permite disponibilizar o jogo sem exigir a instalação de um aplicativo específico pelo usuário.

---

## 7. Tecnologia e justificativa técnica

A aplicação utiliza uma arquitetura cliente-servidor, separando a interface do jogo da lógica responsável por processar as rodadas.

### 7.1. Frontend

**Tecnologias utilizadas:**

- React.
- TypeScript.
- CSS.
- Vite.

**Responsabilidades:**

- Renderizar a interface do jogo.
- Exibir o contexto e a palavra oculta.
- Receber os palpites do jogador.
- Apresentar vidas, dicas e feedback.
- Controlar os estados visuais da aplicação.
- Exibir o popup de resultado.
- Comunicar-se com a API do backend.

**Justificativa técnica:**

O React permite organizar a interface em componentes reutilizáveis e atualizar os elementos visuais conforme o estado da partida é alterado.

O TypeScript contribui para a organização e a tipagem dos dados utilizados na comunicação entre os componentes e a API.

O Vite é utilizado como ferramenta de desenvolvimento e construção da aplicação frontend.

### 7.2. Backend

**Tecnologias utilizadas:**

- Python.
- Flask.

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

**Justificativa técnica:**

O Flask foi escolhido por permitir a criação de uma API com estrutura simples e adequada ao escopo do protótipo.

O Python permite implementar e organizar as regras do jogo de maneira direta, enquanto o Flask possibilita disponibilizar essas regras por meio de endpoints HTTP.

### 7.3. Armazenamento de conteúdo e estado

Os conceitos educativos são armazenados em arquivos JSON.

Cada registro contém informações como palavra, categoria, contexto, dicas e explicação.

Essa abordagem permite adicionar ou modificar conteúdos sem precisar alterar a lógica principal do jogo, desde que os registros respeitem o formato esperado pelo carregador.

O estado temporário da rodada é mantido pelo backend por meio de sessões, incluindo:

- Identificador do conceito selecionado.
- Letras corretas.
- Letras incorretas.
- Tentativas restantes.
- Quantidade de dicas utilizadas.

O protótipo não utiliza, no escopo atual, uma base de dados de usuários ou um histórico permanente de partidas.

### 7.4. Comunicação entre frontend e backend

A comunicação ocorre por meio de uma API HTTP que utiliza JSON.

| Método | Endpoint | Responsabilidade |
|---|---|---|
| `GET` | `/api/game/` | Recuperar a rodada ativa ou iniciar uma nova. |
| `POST` | `/api/game/guess` | Processar um palpite de letra. |
| `POST` | `/api/game/hint` | Processar a utilização de uma dica. |

A separação permite que as regras da partida sejam processadas no servidor, enquanto o frontend fica responsável pela apresentação e interação com o jogador.

---

## 8. Core gameplay

O ciclo principal de jogo consiste em interpretar um contexto educativo e descobrir o conceito correspondente por meio da seleção de letras.

O jogador pode utilizar dicas durante a rodada, mas precisa considerar que cada utilização consome uma vida.

O ciclo é composto pelas seguintes etapas:

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

### 8.1. Fluxo simplificado

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
       +------+------+
       |             |
     Acerto         Erro
       |             |
       v             v
  Revelar letra  Perder vida
       |             |
       +------+------+
              |
              v
     Verificar resultado
              |
       +------+------+
       |             |
     Vitória       Derrota
       |             |
       +------+------+
              |
              v
       Exibir popup
       e explicação
              |
              v
        Próxima rodada
```

A utilização de dicas é uma ação alternativa durante a resolução, disponível enquanto as condições de uso forem atendidas.

---

## 9. Mecânicas principais

### 9.1. Palavra oculta

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

### 9.2. Seleção de letras

O jogador utiliza o teclado apresentado na interface para selecionar letras.

Após a seleção:

- Se a letra estiver presente no conceito, suas ocorrências serão reveladas.
- Se a letra não estiver presente, uma vida será perdida.
- As letras já selecionadas deverão ser identificadas visualmente para evitar repetições desnecessárias.
- A interface deverá apresentar feedback sobre o resultado do palpite.

Os palpites são processados pelo backend, que mantém o estado da rodada.

### 9.3. Sistema de vidas

O jogador começa cada rodada com a quantidade máxima de tentativas configurada pelo jogo.

Cada letra incorreta reduz o número de tentativas restantes em uma unidade.

Exemplo ilustrativo:

```text
Vidas restantes: ♥ ♥ ♥ ♡ ♡
```

Quando as tentativas chegam a zero, o jogador perde a rodada.

O sistema não deverá permitir novos palpites após o encerramento da partida.

### 9.4. Sistema de dicas

As dicas oferecem informações adicionais para ajudar o jogador a deduzir o conceito.

Cada conceito poderá possuir uma sequência de dicas progressivas. A primeira dica apresenta uma orientação geral, enquanto a segunda pode fornecer uma pista mais específica.

**Exemplo:**

**Contexto:** A população acompanha como os recursos públicos são utilizados.

**Dica 1:** Está relacionado à participação da sociedade.

**Dica 2:** Envolve acompanhar e fiscalizar ações do poder público.

**Resposta:** CONTROLE SOCIAL.

**Regras de utilização:**

- As dicas são específicas de cada conceito.
- O jogador pode utilizar as dicas disponíveis durante a rodada.
- Cada dica utilizada consome uma vida.
- Não é permitido utilizar uma dica quando resta apenas uma vida.
- Uma dica utilizada não deverá ser disponibilizada novamente na mesma rodada.
- O sistema deverá informar quando não houver mais dicas disponíveis.
- O uso de uma dica atualiza o estado da rodada no backend.

As dicas utilizadas e as vidas restantes devem permanecer consistentes durante a continuidade da rodada.

### 9.5. Categorias temáticas

Os conceitos poderão ser organizados nas seguintes categorias:

**Tributos**
- Tributo.
- Imposto.
- Taxa.
- IPTU.
- IPVA.
- ICMS.

**Gestão pública**
- Orçamento público.
- Arrecadação.
- Gasto público.
- Serviço público.

**Cidadania**
- Cidadania.
- Transparência.
- Controle social.
- Justiça fiscal.

**Consumo**
- Nota fiscal.
- Nota fiscal eletrônica.
- Consumidor.
- Fornecedor.

**Irregularidades fiscais**
- Sonegação.
- Evasão fiscal.
- Elisão fiscal.

As categorias servem para organizar os conteúdos. A existência de uma categoria não implica, por si só, a implementação de filtros ou modos de jogo específicos.

---

## 10. Objetivos e condições

O objetivo imediato do jogador é descobrir a palavra correspondente ao contexto educativo antes de esgotar as tentativas disponíveis.

### 10.1. Condição de vitória

A vitória ocorre quando todas as letras da palavra são descobertas.

Ao vencer, o jogador recebe uma indicação visual do resultado e tem acesso à resposta e à explicação educativa.

### 10.2. Condição de derrota

A derrota ocorre quando o jogador esgota as tentativas disponíveis.

Nesse caso, o sistema apresenta a resposta correta e a explicação do conceito, permitindo que o jogador conheça o conteúdo mesmo sem concluir o desafio.

### 10.3. Encerramento da rodada

Uma rodada é encerrada quando uma das condições de vitória ou derrota é atingida.

Após o encerramento:

- Novos palpites não deverão ser aceitos.
- Novas dicas não deverão ser utilizadas.
- O resultado deverá ser apresentado ao jogador.
- A resposta correta deverá ficar disponível.
- O jogador poderá iniciar outra rodada.

O protótipo não possui um sistema de pontuação, ranking ou progressão por níveis.

---

## 11. Feedback ao jogador

O feedback tem a função de comunicar o resultado das ações e manter o jogador informado sobre o estado da partida.

### 11.1. Feedback durante a rodada

A interface deverá distinguir visualmente:

- Letras corretas.
- Letras incorretas.
- Vidas disponíveis.
- Vidas consumidas.
- Dicas disponíveis.
- Dicas utilizadas.
- Erros de operação.
- Estados de carregamento.

O resultado de um palpite deverá ser refletido na palavra oculta e no indicador de vidas.

### 11.2. Feedback de vitória e derrota

Ao finalizar uma rodada, o jogo apresenta um popup centralizado sobre a interface.

O componente deverá:

- Destacar visualmente a vitória ou a derrota.
- Apresentar uma mensagem correspondente ao resultado.
- Exibir a resposta correta.
- Apresentar a explicação educativa do conceito.
- Disponibilizar um botão para iniciar outra rodada.
- Bloquear a interação com os elementos do jogo enquanto estiver aberto.

O popup utiliza a identidade visual do Fiscal Forca, com destaques em verde para a vitória e detalhes em vermelho para a derrota.

### 11.3. Feedback educativo

A explicação apresentada ao final da rodada é parte essencial do feedback.

Seu objetivo é reforçar o significado do conceito e relacioná-lo ao contexto apresentado, independentemente de o jogador ter vencido ou perdido.

---

## 12. Fluxo de telas/cenas

O protótipo concentra sua experiência em uma tela principal de jogo e em um popup de resultado.

Não há, no escopo atual, uma estrutura de múltiplas fases, menus de progressão ou telas de perfil de jogador.

### 12.1. Tela principal do jogo

É o ambiente em que ocorre a interação principal.

Apresenta:

- Identificação do jogo.
- Título e instruções.
- Contexto educativo.
- Palavra oculta.
- Teclado de letras.
- Feedback sobre os palpites.
- Indicador de vidas.
- Área de dicas.
- Botão para utilizar uma dica, quando permitido.

### 12.2. Popup de resultado

É exibido sobre a tela principal quando a rodada termina.

Apresenta:

- Resultado da rodada.
- Mensagem de vitória ou derrota.
- Resposta correta.
- Explicação educativa.
- Botão para iniciar outra rodada.

### 12.3. Fluxo de navegação

```text
      Tela principal
             |
             v
       Iniciar rodada
             |
             v
       Jogar rodada
             |
             v
     Vitória ou derrota
             |
             v
      Popup de resultado
             |
             v
       Nova rodada
             |
             v
       Jogar rodada
```

A ação de iniciar outra rodada retorna o jogador ao fluxo principal, carregando um novo desafio.

---

## 13. Interface

A interface principal concentra os elementos necessários para jogar, organizados em duas áreas principais.

### 13.1. Área de jogo

Contém:

- Identificação do jogo.
- Título e instruções.
- Contexto educativo.
- Palavra oculta.
- Teclado de letras.
- Feedback sobre os palpites.

### 13.2. Barra lateral

Contém:

- Representação visual da forca.
- Indicador de vidas restantes.
- Área de dicas.
- Botão para utilizar uma dica, quando permitido.

A organização deverá manter as informações relevantes visíveis e reduzir a necessidade de navegação durante uma rodada.

### 13.3. Organização responsiva

O jogo deverá se adaptar a diferentes tamanhos de tela.

Em telas menores:

- A área de jogo e a barra lateral poderão ser reorganizadas verticalmente.
- O teclado deverá manter botões legíveis e utilizáveis.
- A palavra oculta deverá acomodar expressões maiores.
- O popup deverá respeitar as dimensões disponíveis e permitir rolagem quando necessário.

### 13.4. Referência da interface

A interface implementada no protótipo é a principal referência visual do projeto.

Caso sejam adicionados wireframes ou capturas de tela ao documento, recomenda-se incluí-los nesta seção, identificando:

1. Tela principal do jogo.
2. Estado da rodada com letras selecionadas.
3. Área de dicas.
4. Popup de vitória.
5. Popup de derrota.

---

## 14. Identidade visual e sonora

### 14.1. Identidade visual

A interface utiliza uma identidade visual escura, com contrastes e destaques em verde.

A proposta visual busca transmitir uma aparência moderna, manter a legibilidade dos elementos e destacar as informações relevantes durante a partida.

**Paleta principal:**

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

**Tipografia:**

- **DM Sans:** utilizada nos textos gerais da interface.
- **Space Grotesk:** utilizada em títulos e elementos de destaque.

### 14.2. Identidade sonora

O protótipo atual não possui uma identidade sonora implementada.

A utilização de efeitos sonoros ou música poderá ser avaliada futuramente, caso contribua para a experiência sem prejudicar a concentração ou a utilização do jogo em ambientes educativos.

---

## 15. Relação gameplay × Educação Fiscal

As mecânicas do Fiscal Forca foram escolhidas para estabelecer uma relação direta entre a resolução dos desafios e o reconhecimento de conceitos de Educação Fiscal.

| Elemento do jogo | Contribuição educativa |
|---|---|
| Contexto | Apresenta uma situação relacionada à Educação Fiscal. |
| Palavra oculta | Estimula a identificação do conceito a partir de pistas. |
| Seleção de letras | Mantém o jogador envolvido na resolução do desafio. |
| Dicas | Orienta o raciocínio e fornece informações adicionais. |
| Categorias | Organiza os conceitos por tema. |
| Sistema de vidas | Introduz consequências para escolhas e tentativas incorretas. |
| Popup de resultado | Destaca a conclusão da rodada. |
| Explicação | Reforça o significado do conceito após a resolução. |
| Nova rodada | Permite contato com outros conceitos educativos. |

A aprendizagem proposta não depende apenas de acertar a palavra.

O contexto apresenta uma situação, as dicas fornecem informações adicionais e a descoberta da palavra exige que o jogador relacione essas informações a um conceito.

A explicação final consolida a experiência ao apresentar o significado do termo e sua relação com a Educação Fiscal.

Dessa forma, a mecânica de palavras funciona como meio de interação com o conteúdo, e não apenas como um desafio de adivinhação.

---

## 16. Escopo da NP2

O escopo da NP2 contempla a implementação e apresentação de um protótipo funcional capaz de executar o ciclo principal do Fiscal Forca.

### 16.1. Funcionalidades contempladas

- Carregamento de conceitos a partir de arquivos JSON.
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
- Manutenção do estado da rodada por meio de sessões no backend.

### 16.2. Funcionalidades fora do escopo

Não fazem parte do escopo funcional atual:

- Sistema de pontuação.
- Ranking de jogadores.
- Cadastro e autenticação de usuários.
- Modo multiplayer.
- Níveis de dificuldade formalmente definidos.
- Adaptação automática da dificuldade.
- Estatísticas históricas de desempenho.
- Classificação automática dos conceitos por dificuldade.
- Histórico permanente de partidas.

Essas funcionalidades poderão ser avaliadas em versões futuras, mas não são necessárias para a entrega do protótipo atual.

---

## 17. Divisão de atividades

O desenvolvimento do protótipo é realizado individualmente.

Dessa forma, as responsabilidades de concepção, implementação e documentação estão concentradas no desenvolvedor.

| Atividade | Responsabilidade |
|---|---|
| Concepção do jogo | Lucas Repinaldo |
| Definição das mecânicas | Lucas Repinaldo |
| Elaboração e organização dos conceitos | Lucas Repinaldo |
| Desenvolvimento do frontend | Lucas Repinaldo |
| Desenvolvimento do backend | Lucas Repinaldo |
| Implementação da API | Lucas Repinaldo |
| Desenvolvimento da interface | Lucas Repinaldo |
| Testes e validação | Lucas Repinaldo |
| Documentação do projeto | Lucas Repinaldo |

---

## 18. Uso de IA generativa


- Ferramenta utilizada: ChatGpt
- Finalidade da utilização: Correção de bugs, população da base de dados JSON e auxílio no desenvolvimento (especialmente no front).
- Forma de validação das informações ou sugestões recebidas: Leitura e testes empíricos do código.
- Adaptações realizadas antes da incorporação ao projeto: Troca do conteúdo gerado para a formatação e estilo adotado durante o desenvolvimento (Seguindo padrões do python no back, como snake case, o equivalente foi feito no front, porém seguindo os padrões do typescript + react).
  
---
