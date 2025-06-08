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

### 3.1. Modelagem do banco de dados

&emsp; Na década de 1970, a IBM desenvolveu a linguagem SEQUEL (Structured English Query Language) com o objetivo de implementar o modelo relacional proposto por Edgar F. Codd.([[3]](#ref3)) Posteriormente, por questões de marca registrada, o nome foi alterado para SQL (Structured Query Language), que se tornou o padrão para manipulação e consulta de dados em bancos de dados relacionais.([[4]](#ref4)) Esse modelo, conforme descrito por Machado, é o tipo mais comum de banco de dados, no qual os dados são organizados em tabelas compostas por linhas e colunas, e as relações entre os dados são estabelecidas por meio de chaves primárias e estrangeiras.([[5]](#ref5))<br><br>&emsp; Desta maneira, encontra-se abaixo os modelos relacional e físico do Banco de Dados desenvolvidos para o FlexiRoom.

<div align="center">
    <small><strong style="font-size: 12px;">Figura 2 - Modelo relacional do Banco de Dados</strong></small><br>
        <img src="/assets/wad/databaseDiagram.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

<br>&emsp; <a href="/scripts/init.sql">Clique aqui</a> para acessar o modelo físico com o Schema do Banco de Dados do projeto.

&emsp; O modelo de banco de dados apresentado foi estruturado de forma relacional, com o objetivo de garantir integridade, clareza e escalabilidade na gestão das informações do sistema de reservas de salas.<br><br>&emsp; A tabela `users` armazena os dados dos usuários que realizarão as reservas, utilizando o campo `id` como chave primária, o que garante a unicidade dos registros. Além dos dados pessoais como `name`, `lastname` e `email`, há um campo `isAdmin` para distinguir usuários administradores e um campo `password` para autenticação.<br><br>&emsp; A tabela `rooms` representa as salas disponíveis, contendo atributos como `room_name`, `status` (indicando a disponibilidade) e `capacity`. Cada sala é identificada de forma única por meio do campo `room_id`, definido como chave primária.<br><br>&emsp; A tabela `bookings` centraliza as informações de reserva, relacionando cada agendamento a um usuário (`user_id`) e a uma sala (`room_id`) por meio de chaves estrangeiras. Também são registrados os horários de início (`start_date`) e fim (`end_date`) de cada reserva.<br><br>&emsp; A tabela `session` foi incluída para gerenciar sessões ativas no sistema, utilizando o campo `sid` como chave primária. Ela armazena dados da sessão em formato JSON (`sess`) e a data de expiração (`expire`), o que permite controlar a autenticação de usuários no sistema.<br><br>&emsp; Essa estrutura favorece a normalização dos dados, reduz redundâncias e permite consultas eficientes, como a verificação de disponibilidade de salas ou o histórico de reservas de um usuário. A escolha pelo uso de `SERIAL` para os identificadores simplifica a geração automática de valores únicos, contribuindo para uma implementação prática e robusta.<br><br>&emsp; Com base na exposição dos modelos relacional e físico, foi possível compreender e justificar as escolhas estruturais adotadas no banco de dados desenvolvido para este projeto. A aplicação desses modelos não apenas garantiu a organização lógica das informações, como também proporcionou uma base sólida para a implementação eficiente do sistema, assegurando integridade, desempenho e escalabilidade no armazenamento e na recuperação dos dados.


### 3.1.1 DB e Models

&emsp; Em aplicações que utilizam o padrão de arquitetura MVC (Model-View-Controller), o Model representa a camada responsável por gerenciar os dados e a lógica de negócios da aplicação. Ele serve como uma ponte entre o banco de dados e o restante do sistema, encapsulando as operações de leitura e gravação dos dados.<br><br>&emsp; O Model lida diretamente com a lógica da aplicação e o acesso ao armazenamento de dados, permitindo que outras partes da aplicação se concentrem na apresentação e interação com o usuário.([[9]](#ref9))<br><br>&emsp; Em aplicações web modernas, como as desenvolvidas com Node.js e Express, os Models são frequentemente implementados como classes JavaScript que expõem métodos para executar operações no banco de dados, como inserir, buscar, atualizar e excluir informações.([[10]](#ref10))<br><br>&emsp; Neste projeto, foram definidos três Models principais: Booking, User e Room. Cada um deles representa uma entidade central no sistema de reservas, encapsulando as operações relacionadas a essas entidades.

**1. Booking**<br>&emsp; O Model Booking representa as reservas de salas feitas pelos usuários. Ele interage com a tabela bookings no banco de dados e permite criar, buscar, atualizar e excluir reservas. Cada reserva é composta pelos seguintes campos: booking_id, user_id, room_id, start_date e end_date.

<ins>Principais Métodos:</ins>
- getAll(): Retorna todas as reservas.
- getById(id): Retorna uma reserva específica pelo booking_id.
- create(data): Cria uma nova reserva.
- update(id, data): Atualiza uma reserva existente.
- delete(id): Remove uma reserva.

**2. User**<br>O Model User gerencia as informações dos usuários do sistema, permitindo o cadastro, a atualização e a exclusão de usuários, além da consulta de dados individuais ou coletivos. Ele interage com a tabela users no banco de dados, onde cada usuário é identificado por um id único e possui os campos name, lastname, email, cpf e password.

<ins>PrincipaisMétodos:</ins>
- getAll(): Retorna todos os usuários cadastrados.
- getById(id): Retorna os dados de um usuário específico.
- create(data): Cria um novo usuário.
- update(id, data): Atualiza os dados de um usuário.
- delete(id): Remove um usuário.

**3. Room**<br>O Model Room representa as salas disponíveis para reserva. Ele interage com a tabela rooms no banco de dados e gerencia informações como o nome da sala, sua capacidade e demais atributos definidos.

<ins>Métodos principais:</ins>
- getAll(): Retorna todas as salas.
- getById(id): Retorna os detalhes de uma sala específica.
- create(data): Cadastra uma nova sala.
- update(id, data): Atualiza os dados de uma sala existente.
- delete(id): Remove uma sala.

&emsp; Os Models são uma parte essencial de qualquer sistema que utiliza o padrão MVC, pois eles concentram toda a lógica de acesso aos dados de maneira estruturada e reutilizável. O uso de Models, como demonstrado neste projeto, promove uma separação clara de responsabilidades, facilitando a manutenção e a escalabilidade do sistema. Ao encapsular as operações de banco de dados, os Models garantem que as demais camadas da aplicação possam se concentrar na interface do usuário e na experiência de uso.

### 3.2. Arquitetura

&emsp; O diagrama apresentado ilustra a arquitetura de um sistema web baseado no padrão Model-View-Controller (MVC), uma abordagem amplamente utilizada no desenvolvimento de aplicações por sua capacidade de promover a separação de responsabilidades entre as camadas do sistema.([[12]](#ref12))<br><br>&emsp; O padrão MVC organiza o código em três componentes principais: o Model, que representa a lógica de negócio e a manipulação de dados; a View, responsável pela exibição das informações ao usuário; e o Controller, que atua como um intermediário entre o Model e a View, coordenando as interações entre ambos.([[12]](#ref12))<br><br>&emsp; No contexto da aplicação, observa-se a comunicação entre o cliente, o servidor e o banco de dados, permitindo a manipulação de dados referentes a usuários, reservas e salas, de forma a garantir o correto funcionamento e a escalabilidade da aplicação.

<div align="center">
    <small><strong style="font-size: 12px;">Figura 3 - Diagrama de Arquitetura MVC</strong></small><br>
        <img src="/assets/wad/mvcArchitectureDiagram.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; O diagrama evidencia uma organização modular e bem estruturada do sistema, que facilita a manutenção, o reaproveitamento de código e a escalabilidade da aplicação.<br><br>&emsp; A divisão clara entre as responsabilidades de Models, Views e Controllers demonstra o compromisso com boas práticas de desenvolvimento e proporciona uma base sólida para a expansão futura da aplicação.<br><br>&emsp; Desta maneira, essa arquitetura permite que alterações em uma camada não impactem diretamente as demais, favorecendo a adaptabilidade do sistema e a integridade dos dados, além de promover uma experiência de usuário eficiente e segura.

**Instruções para criação do diagrama de arquitetura**

- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.

### 3.3. Wireframes

&emsp; Os wireframes representam uma etapa fundamental no processo de desenvolvimento de interfaces, pois permitem visualizar a estrutura e a hierarquia dos elementos de uma página antes da implementação visual e funcional.([[6]](#ref6)) Eles funcionam como um esboço funcional, focado na disposição dos componentes e na experiência do usuário, sendo essenciais para validar fluxos de navegação e usabilidade desde as fases iniciais do projeto.([[7]](#ref7)) Além disso, wireframes facilitam a comunicação entre designers, desenvolvedores e stakeholders, reduzindo retrabalhos e garantindo alinhamento de expectativas.([[8]](#ref8))<br><br>&emsp; Abaixo estão as figuras referentes aos Wireframes projetados para esta aplicação.

<div align="center">
    <small><strong style="font-size: 12px;">Figura 4 - Wireframe da página de Redefinir a senha e colocar o E-Mail para Login</strong></small><br>
        <img src="/assets/wad/wireframes/email-changePassword-page.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 5 - Wireframe da página de primeiro acesso</strong></small><br>
        <img src="/assets/wad/wireframes/signin-page.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 6 - Wireframe da página de Login</strong></small><br>
        <img src="/assets/wad/wireframes/login-page.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 7 - Wireframe da página do catálogo de salas disponíveis</strong></small><br>
        <img src="/assets/wad/wireframes/rooms-catalogue-page.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; A definição dos wireframes apresentados — incluindo as telas de Redefinir Senha, Primeiro Acesso, Login e Catálogo de Salas Disponíveis — foi essencial para estabelecer uma visão clara da navegação e das funcionalidades principais da aplicação. Cada tela foi projetada para garantir uma experiência intuitiva ao usuário, desde o primeiro contato com a plataforma até a visualização dos recursos disponíveis. Com esses esboços, será possível alinhar expectativas, validar fluxos de uso e preparar o terreno para a etapa de desenvolvimento visual e técnico da interface.

### 3.4. Guia de estilos

&emsp; Para padronizar a estilização e organização do projeto, um guia da estilos que conta com Tipografia, Espaçamentos, Curvatura das Bordas, Paleta de Cores, Sombras e Icones foi desenvolvido, conforme as imagens abaixo.

<div align="center">
    <small><strong style="font-size: 12px;">Figura 8 - Tipografia</strong></small><br>
        <img src="/assets/wad/styles-guide/Typography/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 9 - Espaçamentos</strong></small><br>
        <img src="/assets/wad/styles-guide/Spacing/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 10 - Curvatura das Bordas</strong></small><br>
        <img src="/assets/wad/styles-guide/Radius/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 11 - Paleta de Cores no modo Claro</strong></small><br>
        <img src="/assets/wad/styles-guide/Colors/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 12 - Paleta de Cores no modo Escuro</strong></small><br>
        <img src="/assets/wad/styles-guide/Colors/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 13 - Sombras</strong></small><br>
        <img src="/assets/wad/styles-guide/Shadows/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 14 - Icones no modo Claro</strong></small><br>
        <img src="/assets/wad/styles-guide/Icons/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 15 - Icones no modo Escuro</strong></small><br>
        <img src="/assets/wad/styles-guide/Icons/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; Desta forma, tornou-se possível padronizar a estilização do projeto e criar componentes e paginas seguindo um padrão.

### 3.5. Protótipo de alta fidelidade

&emsp; A partir do Guia de Estilos descrito na seção acima, foram criadas telas que dizem respeito ao protótipo de alta fidelidade do projeto, sendo este o mais próximo da Aplicação Final a ser desenvolvida.<br><br>&emsp; Abaixo encontram-se as telas que compõem este protótipo seguindo a ordem na qual os usuários irão utilizar o sistema. 

<div align="center">
    <small><strong style="font-size: 12px;">Figura 16 - Página de E-Mail</strong></small><br>
        <img src="/assets/wad/Prototype/OnlyE-mailOrResetPassword.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 17 - Página de E-Mail com Senha</strong></small><br>
        <img src="/assets/wad/Prototype/E-mailAndPassword.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 18 - Página de Criação de Senha</strong></small><br>
        <img src="/assets/wad/Prototype/SignInPage.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 19 - Página com a Lista de Usuários (Administrador)</strong></small><br>
        <img src="/assets/wad/Prototype/UsersList.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 20 - Página de Criação ou Edição de Usuário (Administrador)</strong></small><br>
        <img src="/assets/wad/Prototype/EditUser.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 21 - Página com a Lista de Salas (Administrador)</strong></small><br>
        <img src="/assets/wad/Prototype/RoomsList-AdminPage.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 22 - Página de Criação ou Edição de Sala (Administrador)</strong></small><br>
        <img src="/assets/wad/Prototype/EditRoom.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 23 - Página com a Lista de Salas (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/Prototype/RoomsList-UserPage.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 24 - Aba para selecionar período de reserva (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/Prototype/ReserveRoomTab.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 25 - Pop-Up para confirmar reserva (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/Prototype/ConfirmPop-Up.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 26 - Página para visualizar "Minhas Reservas" (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/Prototype/MyReservedRoomsList-UserPage.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; Ao clicar [aqui](https://www.figma.com/design/azZNUyJ9Kh1lLk1Qzkhwpd/FlexiRoom---Design-Final?node-id=105-1333&t=o8sS3sQmLiwzmoJB-1) uma página do sistema de edição de imagens Figma será aberta. Nela, encontram-se o guia de estilos, protótipo de alta fidelidade e os componentes que fazem parte das telas.

### 3.6. WebAPI e endpoints

&emsp; API é a sigla para Application Programming Interface, que em português significa Interface de Programação de Aplicações. Trata-se de um contrato entre diferentes sistemas, que define como eles podem interagir e compartilhar informações. Em termos mais simples, é uma forma de permitir que diferentes aplicações "conversem" e troquem dados de maneira padronizada.([[11]](#ref11))<br><br>&emsp; A API desenvolvida para este projeto segue o padrão RESTful, utilizando o formato JSON para troca de dados e permitindo a interação com os recursos Users, Bookings e Rooms por meio de operações HTTP. Todas as rotas são prefixadas com `/api/v1/`, garantindo uma estrutura organizada e preparada para futuras versões.<br><br>&emsp; Cada recurso possui um conjunto de endpoints que permite as seguintes operações:

<div align="center">
<small><strong style="font-size: 12px;">Quadro 3 - Endpoints de Users</strong></small><br>

| Método HTTP | Caminho Base | Ação |
| --- | --- | --- |
| GET | /api/v1/users | Lista todos os usuários |
| GET | /api/v1/users/email | Buscar um usuário específico por seu E-Mail |
| GET | /api/v1/users/:id | Buscar um usuário específico por seu ID |
| POST | /api/v1/users/createPassword/:id | Cria a senha de um usuário |
| POST | /api/v1/users/verifyCredentials | Verifica as credencias do usuário no sistema de Login |
| POST | /api/v1/users | Cria um novo usuário |
| PUT | /api/v1/users/:id | Atualiza um usuário existente |
| DELETE | /api/v1/users/:id | Excluir um usuário existente |

<small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
<small><strong style="font-size: 12px;">Quadro 4 - Endpoints de Bookings</strong></small><br>

| Método HTTP | Caminho Base | Ação |
| --- | --- | --- |
| GET | /api/v1/bookings | Lista todos as reservas |
| GET | /api/v1/bookings/:id | Buscar uma reserva específica por seu ID |
| POST | /api/v1/bookings | Cria uma nova reserva |
| PUT | /api/v1/bookings/:id | Atualiza uma reserva existente |
| DELETE | /api/v1/bookings/:id | Excluir uma reserva existente |

<small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
<small><strong style="font-size: 12px;">Quadro 5 - Endpoints de Rooms</strong></small><br>

| Método HTTP | Caminho Base | Ação |
| --- | --- | --- |
| GET | /api/v1/rooms | Lista todos as salas |
| GET | /api/v1/rooms/:id | Buscar uma sala específica por seu ID |
| POST | /api/v1/rooms | Cria uma nova sala |
| PUT | /api/v1/rooms/:id | Atualiza uma sala existente |
| DELETE | /api/v1/rooms/:id | Excluir uma sala existente |

<small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; A estrutura dos endpoints desta API foi cuidadosamente projetada para ser simples, padronizada e escalável, facilitando o acesso e a manipulação dos dados de usuários, reservas e salas. Ao seguir as convenções RESTful e utilizar padrões claros de URL e métodos HTTP, o sistema garante uma comunicação consistente e eficiente entre o frontend e o backend. Esse modelo de endpoints torna o desenvolvimento mais ágil, reduz erros de integração e prepara a aplicação para evoluir de forma sustentável, à medida que novas funcionalidades forem sendo adicionadas no futuro.

### 3.7 Interface e Navegação

&emsp; Durante a última semana, o desenvolvimento do frontend do FlexiRoom avançou de forma significativa, consolidando a interface e a navegação do sistema. Foram implementadas as principais telas do sistema web, incluindo as páginas de login, criação de senha, catálogo de salas, reservas e visualização de reservas do usuário. Cada tela foi construída seguindo o guia de estilos definido previamente, garantindo uma experiência visual consistente, moderna e responsiva.<br><br>&emsp; A navegação entre as páginas foi estruturada para ser intuitiva, permitindo que o usuário acesse rapidamente as funcionalidades mais importantes, como reservar uma sala ou consultar suas reservas. Componentes reutilizáveis, como botões, campos de formulário, pop-ups de confirmação e menus de navegação, foram criados para facilitar a manutenção e a escalabilidade do sistema.<br><br>&emsp; Além disso, foi dada atenção especial à integração entre frontend e backend, garantindo que as informações exibidas estejam sempre atualizadas e que as ações do usuário sejam refletidas corretamente no banco de dados. O fluxo de autenticação e logout foi implementado de forma segura, protegendo os dados do usuário e garantindo uma experiência confiável.<br><br>&emsp; Por fim, foram realizados testes de usabilidade e ajustes finos na interface, corrigindo pequenos bugs e melhorando a experiência geral do usuário. O resultado é um frontend funcional, alinhado ao protótipo de alta fidelidade e caminhando para ser utilizado em ambiente real.<br><br>&emsp; Abaixo, prints de tela ilustram as principais páginas e fluxos de navegação do sistema FlexiRoom.

**Light Mode:**

<div align="center">
    <small><strong style="font-size: 12px;">Figura 27 - Página de E-Mail</strong></small><br>
        <img src="/assets/wad/web/emailPage/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 28 - Página de Criação de Senha</strong></small><br>
        <img src="/assets/wad/web/createPassword/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 29 - Página de E-Mail com Senha</strong></small><br>
        <img src="/assets/wad/web/login/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 30 - Página com a Lista de Usuários (Administrador)</strong></small><br>
        <img src="/assets/wad/web/users/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 31 - Página com a Lista de Salas (Administrador)</strong></small><br>
        <img src="/assets/wad/web/roomsList/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 32 - Página com a Lista de Salas (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/roomsToReserve/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 33 - Aba para selecionar período de reserva (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/reserveRoom/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 34 - Pop-Up para confirmar reserva (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/popUp/light-mode.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 35 - Página para visualizar "Minhas Reservas" (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/myReservedRooms/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 36 - Menu do Usuário (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/menu/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

**Dark Mode:**

<div align="center">
    <small><strong style="font-size: 12px;">Figura 27 - Página de E-Mail</strong></small><br>
        <img src="/assets/wad/web/emailPage/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 28 - Página de Criação de Senha</strong></small><br>
        <img src="/assets/wad/web/createPassword/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 29 - Página de E-Mail com Senha</strong></small><br>
        <img src="/assets/wad/web/login/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 30 - Página com a Lista de Usuários (Administrador)</strong></small><br>
        <img src="/assets/wad/web/users/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 31 - Página com a Lista de Salas (Administrador)</strong></small><br>
        <img src="/assets/wad/web/roomsList/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 32 - Página com a Lista de Salas (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/roomsToReserve/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 33 - Aba para selecionar período de reserva (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/reserveRoom/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 34 - Pop-Up para confirmar reserva (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/popUp/dark-mode.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 35 - Página para visualizar "Minhas Reservas" (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/myReservedRooms/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 36 - Menu do Usuário (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/web/menu/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; Apesar dos avanços significativos no desenvolvimento da interface e navegação do FlexiRoom, algumas páginas e menus previstos no protótipo ainda não puderam ser implementadas nesta etapa. Essas telas, consideradas importantes para a experiência completa do usuário, estão planejadas para as próximas fases do projeto e serão desenvolvidas futuramente, garantindo a evolução contínua e o aprimoramento do sistema.

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
<br><a name="ref6">[6]:</a> Garrett, J. J. (2011). The elements of user experience: User-centered design for the web and beyond (2nd ed.). New Riders. https://www.peachpit.com/store/elements-of-user-experience-user-centered-design-for-the-9780321683687
<br><a name="ref7">[7]:</a> Tidwell, J. (2010). Designing interfaces: Patterns for effective interaction design (2nd ed.). O’Reilly Media. https://www.oreilly.com/library/view/designing-interfaces-2nd/9781449319274/
<br><a name="ref8">[8]:</a> Krug, S. (2014). Don't make me think, revisited: A common sense approach to web usability (3rd ed.). New Riders. https://www.sensible.com/dmmt.html
<br><a name="ref9">[9]:</a> Freeman, E., Freeman, E., Bates, B., & Sierra, K. (2004). Head First Design Patterns. O'Reilly Media.
<br><a name="ref10">[10]:</a> Flanagan, D. (2020). JavaScript: The Definitive Guide (7ª ed.). O'Reilly Media.
<br><a name="ref11">[11]:</a> Amazon Web Services. O que é uma API?. https://aws.amazon.com/pt/what-is/api/
<br><a name="ref12">[12]:</a> Fowler, M. (2006). Patterns of Enterprise Application Architecture. Addison-Wesley Professional.
