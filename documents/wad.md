# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Nome do Projeto

**FlexiRoom** - Where space bends to your calendar.

### Autor do projeto

[Felipe Karpovas Lisak](https://www.linkedin.com/in/felipelisak/)

## Sumário

1. [Introdução](#c1)
2. [Visão Geral da Aplicação Web](#c2)
3. [Projeto Técnico da Aplicação Web](#c3)
4. [Desenvolvimento da Aplicação Web](#c4)
5. [Referências](#c5)

## <a name="c1"></a>1. Introdução

&emsp; O avanço das tecnologias digitais e a necessidade crescente de otimização de recursos impulsionaram a demanda por sistemas de gestão de espaços em ambientes corporativos. De acordo com Davenport, a eficiência dos processos internos é um dos principais fatores que impactam diretamente a produtividade e a competitividade das organizações. Nesse cenário, escolheu-se desenvolver um Sistema de Reserva de Salas para Agendamentos, visando resolver problemas comuns no cotidiano empresarial.([[1]](#ref1))<br><br>&emsp; A escolha dessa proposta fundamenta-se na observação de desafios recorrentes, como a dificuldade em coordenar horários de reuniões, o uso inadequado dos espaços e a falta de transparência na disponibilidade das salas. Tais obstáculos, além de gerar desperdício de tempo, comprometem o andamento das atividades e a organização interna das empresas.<br><br>&emsp; O sistema projetado tem como objetivo centralizar e automatizar o controle das reservas de salas, oferecendo uma experiência mais ágil, acessível e confiável para os usuários. Com uma interface simples e funcional, a solução permitirá consultas em tempo real, agendamentos rápidos e otimização da ocupação dos ambientes, contribuindo para uma gestão mais estratégica dos recursos físicos da empresa.<br><br>&emsp; Assim, este projeto propõe uma resposta prática às necessidades modernas de gestão de espaços, alinhando-se às tendências de digitalização e aprimoramento da eficiência operacional.

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas

&emsp; Para compreender melhor os usuários-alvo do sistema FlexiRoom, desenvolveu-se uma persona que representa um perfil recorrente em empresas que enfrentam desafios com a gestão de espaços corporativos. A seguir, apresenta-se Lucas Bianconi, um profissional estratégico que lida diariamente com a complexidade de ambientes dinâmicos e que demanda soluções práticas e inteligentes para otimizar processos.

<div align="center">
  <small><strong style="font-size: 12px;">Figura 1 - Persona</strong></small><br>
    <img src="/assets/wad/Persona.png">
  <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; Com Lucas, sintetizou-se as dores e aspirações de muitos profissionais envolvidos na organização de recursos físicos dentro das empresas. Ao entender seus desafios, motivações e comportamentos, busca-se alinhar o design e as funcionalidades do FlexiRoom às necessidades reais do mercado corporativo. Esta persona será utilizada como referência central ao longo das decisões de produto, garantindo foco na entrega de valor com eficiência.

### 2.2. User Stories

&emsp; As User Stories são descrições breves e simples que capturam uma necessidade ou desejo de um usuário em relação ao sistema. Segundo a abordagem ágil, uma boa User Story descreve quem é o usuário, o que ele deseja fazer e por que aquilo é importante. Essa técnica ajuda a guiar o desenvolvimento de forma focada nas necessidades reais dos usuários.([[2]](#ref2))

&emsp; Para assegurar a qualidade das User Stories, utilizou-se o modelo INVEST, proposto por Mike Cohn, que estabelece seis critérios que uma boa história deve atender:

- I (Independente): Pode ser desenvolvida sem depender de outras histórias.

- N (Negociável): Não é um contrato fechado; pode ser adaptada.

- V (Valiosa): Deve gerar valor para o usuário ou cliente.

- E (Estimável): Deve ter escopo claro para facilitar a estimativa de esforço.

- S (Small): Precisa ser pequena o suficiente para ser desenvolvida em pouco tempo.

- T (Testável): Deve ser possível validar se foi entregue corretamente.

&emsp; As User Stories abaixo representam funcionalidades centrais do sistema FlexiRoom, focadas em atender as necessidades dos usuários, garantindo simplicidade de uso, eficiência operacional e suporte à tomada de decisões. Cada história foi projetada para entregar valor diretamente ao usuário e facilitar a implementação de soluções práticas no dia a dia corporativo.<br>

<div align="center">
  <small><strong style="font-size: 12px;">Quadro 1 - User Stories</strong></small><br>

| #   | User Story                                                                                                        |
| --- | ----------------------------------------------------------------------------------------------------------------- |
| US1 | Como gestor de espaços, quero visualizar disponibilidade das salas, para identificar horários livres rapidamente. |
| US2 | Como colaborador, quero reservar salas em um clique, para agilizar o agendamento de reuniões.                     |
| US3 | Como gestor de espaços, quero relatórios de ocupação por período, para tomar decisões baseadas em dados.          |

<small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>

</div>

<br>&emsp; Essas User Stories são fundamentais para o sucesso do FlexiRoom, pois garantem que o sistema atenda às necessidades reais dos usuários de maneira prática e eficiente. Com foco na simplicidade e agilidade, cada funcionalidade foi pensada para otimizar o uso dos espaços e aumentar a produtividade nas empresas.<br><br>&emsp; A User Story US02 foi selecionada para análise por atender de maneira clara aos critérios do modelo INVEST, amplamente utilizado para a definição de boas histórias de usuário:<br>

<div align="center">
<small><strong style="font-size: 12px;">Quadro 2 - User Story 2 no Modelo INVEST</strong></small><br>

| Critério        | Contexto no Projeto                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Independente    | A funcionalidade de reservar salas em um clique pode ser implementada de forma isolada, sem dependência de outras histórias ou módulos.              |
| Negociável      | O fluxo de reserva pode ser ajustado conforme a necessidade dos usuários ou do projeto, permitindo alterações sem grandes impactos.                  |
| Valiosa         | A funcionalidade proporciona valor direto ao colaborador, otimizando o processo de agendamento e reduzindo o tempo gasto em tarefas administrativas. |
| Estimável       | O escopo é claro e objetivo, o que facilita a estimativa do esforço necessário para implementação.                                                   |
| Small (Pequena) | A história é focada em uma única ação (reserva rápida), o que a torna simples e rápida de ser desenvolvida e entregue.                               |
| Testável        | É possível criar testes objetivos para validar o sucesso da reserva, garantindo que a funcionalidade atenda aos requisitos esperados.                |

<small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>

</div>

<br>&emsp; Dessa forma, a escolha da US02 se justifica pelo forte alinhamento aos princípios do INVEST, além de representar uma funcionalidade central e prioritária para o sucesso do sistema FlexiRoom.

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados (Semana 3)

&emsp; Na década de 1970, a IBM desenvolveu a linguagem SEQUEL (Structured English Query Language) com o objetivo de implementar o modelo relacional proposto por Edgar F. Codd.([[3]](#ref3)) Posteriormente, por questões de marca registrada, o nome foi alterado para SQL (Structured Query Language), que se tornou o padrão para manipulação e consulta de dados em bancos de dados relacionais.([[4]](#ref4)) Esse modelo, conforme descrito por Machado, é o tipo mais comum de banco de dados, no qual os dados são organizados em tabelas compostas por linhas e colunas, e as relações entre os dados são estabelecidas por meio de chaves primárias e estrangeiras.([[5]](#ref5))<br><br>&emsp; Desta maneira, encontra-se abaixo os modelos relacional e físico do Banco de Dados desenvolvidos para o FlexiRoom.

<div align="center">
    <small><strong style="font-size: 12px;">Figura 2 - Modelo relacional do Banco de Dados</strong></small><br>
        <img src="/assets/modelo-banco.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

<br>&emsp; <a href="/scripts/init.sql">Clique aqui</a> para acessar o modelo físico com o Schema do Banco de Dados do projeto.

&emsp; Com base na exposição dos modelos relacional e físico, foi possível compreender e justificar as escolhas estruturais adotadas no banco de dados desenvolvido para este projeto. A aplicação desses modelos não apenas garantiu a organização lógica das informações, como também proporcionou uma base sólida para a implementação eficiente do sistema, assegurando integridade, desempenho e escalabilidade no armazenamento e na recuperação dos dados.

### 3.1.1 BD e Models (Semana 5)

_Descreva aqui os Models implementados no sistema web_

### 3.2. Arquitetura (Semana 5)

_Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário._

**Instruções para criação do diagrama de arquitetura**

- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.

_Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View._

### 3.3. Wireframes (Semana 03)

_Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização)._

### 3.4. Guia de estilos (Semana 05)

_Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução._

### 3.5. Protótipo de alta fidelidade (Semana 05)

_Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)._

### 3.6. WebAPI e endpoints (Semana 05)

_Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema._

### 3.7 Interface e Navegação (Semana 07)

_Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

_VIDEO: Insira o link do vídeo demonstrativo nesta seção_
_Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

_Indique pontos fortes e pontos a melhorar de maneira geral._
_Relacione também quaisquer outras ideias que você tenha para melhorias futuras._

## <a name="c5"></a>5. Referências

&emsp; Foi escolhida a utilização das normas da APA (American Psychological Association) em substituição às normas da ABNT (Associação Brasileira de Normas Técnicas), visando alinhar o projeto a padrões internacionais de formatação e citação, e, assim, ampliar sua aplicação e reconhecimento em contextos acadêmicos e profissionais no exterior.

<br><a name="ref1">[1]:</a> IFMA – International Facility Management Association. (2020). Space Management Benchmark Report. Disponível em: https://www.ifma.org
<br><a name="ref2">[2]:</a> Cohn, M. (2004). User stories applied: For agile software development. Addison-Wesley. Disponível em https://www.mountaingoatsoftware.com/books/user-stories-applied
<br><a name="ref3">[3]:</a> Codd, E. F. (1970). A relational model of data for large shared data banks. Communications of the ACM, 13(6), 377–387. Disponível em: https://dl.acm.org/doi/10.1145/362384.362685
<br><a name="ref4">[4]:</a> Chamberlin, D. D., & Boyce, R. F. (1974). SEQUEL: A structured English query language. Proceedings of the 1974 ACM SIGFIDET Workshop on Data Description, Access and Control, 249–264. Disponível em: https://dl.acm.org/doi/10.1145/800296.811515
<br><a name="ref5">[5]:</a> Machado, F. N. R. (2014). Banco de dados: Projeto e implementação (3ª ed.). Érica.
