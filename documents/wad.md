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
        <img src="/assets/modelo-banco.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

<br>&emsp; <a href="/scripts/init.sql">Clique aqui</a> para acessar o modelo físico com o Schema do Banco de Dados do projeto.

&emsp; O modelo de banco de dados apresentado foi estruturado de forma relacional, com o objetivo de garantir integridade, clareza e escalabilidade na gestão das informações do sistema de reservas de salas.<br><br>&emsp; A tabela `users` armazena os dados dos usuários que realizarão as reservas, utilizando o campo cpf como chave primária, o que garante a unicidade dos registros.<br><br>&emsp; A tabela `rooms` representa as salas disponíveis, contendo atributos como nome, capacidade e status de disponibilidade, também identificadas por uma chave primária (room_id).<br><br>&emsp; A tabela `bookings` centraliza as reservas, relacionando cada uma a um usuário e a uma sala por meio de chaves estrangeiras (user_id e room_id), além de armazenar os horários de início e fim da reserva.<br><br>&emsp; Essa estrutura favorece a normalização dos dados, reduz redundâncias e permite consultas eficientes, como a verificação de disponibilidade de salas ou o histórico de reservas de um usuário. A escolha pelo uso de SERIAL para os identificadores simplifica a geração automática de valores únicos, contribuindo para uma implementação prática e robusta.<br><br>&emsp; Com base na exposição dos modelos relacional e físico, foi possível compreender e justificar as escolhas estruturais adotadas no banco de dados desenvolvido para este projeto. A aplicação desses modelos não apenas garantiu a organização lógica das informações, como também proporcionou uma base sólida para a implementação eficiente do sistema, assegurando integridade, desempenho e escalabilidade no armazenamento e na recuperação dos dados.

### 3.1.1 DB e Models (Semana 5)

_Descreva aqui os Models implementados no sistema web_

### 3.2. Arquitetura (Semana 5)

_Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário._

**Instruções para criação do diagrama de arquitetura**

- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.

_Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View._

### 3.3. Wireframes

&emsp; Os wireframes representam uma etapa fundamental no processo de desenvolvimento de interfaces, pois permitem visualizar a estrutura e a hierarquia dos elementos de uma página antes da implementação visual e funcional.([[6]](#ref6)) Eles funcionam como um esboço funcional, focado na disposição dos componentes e na experiência do usuário, sendo essenciais para validar fluxos de navegação e usabilidade desde as fases iniciais do projeto.([[7]](#ref7)) Além disso, wireframes facilitam a comunicação entre designers, desenvolvedores e stakeholders, reduzindo retrabalhos e garantindo alinhamento de expectativas.([[8]](#ref8))<br><br>&emsp; Abaixo estão as figuras referentes aos Wireframes projetados para esta aplicação.

<div align="center">
    <small><strong style="font-size: 12px;">Figura 3 - Wireframe da página de Redefinir a senha e colocar o E-Mail para Login</strong></small><br>
        <img src="/assets/wad/email-changePassword-page.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>
<div align="center">
    <small><strong style="font-size: 12px;">Figura 4 - Wireframe da página de primeiro acesso</strong></small><br>
        <img src="/assets/wad/signin-page.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>
<div align="center">
    <small><strong style="font-size: 12px;">Figura 5 - Wireframe da página de Login</strong></small><br>
        <img src="/assets/wad/login-page.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>
<div align="center">
    <small><strong style="font-size: 12px;">Figura 6 - Wireframe da página do catálogo de salas disponíveis</strong></small><br>
        <img src="/assets/wad/rooms-catalogue-page.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; A definição dos wireframes apresentados — incluindo as telas de Redefinir Senha, Primeiro Acesso, Login e Catálogo de Salas Disponíveis — foi essencial para estabelecer uma visão clara da navegação e das funcionalidades principais da aplicação. Cada tela foi projetada para garantir uma experiência intuitiva ao usuário, desde o primeiro contato com a plataforma até a visualização dos recursos disponíveis. Com esses esboços, será possível alinhar expectativas, validar fluxos de uso e preparar o terreno para a etapa de desenvolvimento visual e técnico da interface.

### 3.4. Guia de estilos

&emsp; Para padronizar a estilização e organização do projeto, um guia da estilos que conta com Tipografia, Espaçamentos, Curvatura das Bordas, Paleta de Cores, Sombras e Icones foi desenvolvido, conforme as imagens abaixo.

<div align="center">
    <small><strong style="font-size: 12px;">Figura 7 - Tipografia</strong></small><br>
        <img src="/assets/wad/styles-guide/Typography/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 8 - Espaçamentos</strong></small><br>
        <img src="/assets/wad/styles-guide/Spacing/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 9 - Curvatura das Bordas</strong></small><br>
        <img src="/assets/wad/styles-guide/Radius/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 10 - Paleta de Cores no modo Claro</strong></small><br>
        <img src="/assets/wad/styles-guide/Colors/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 11 - Paleta de Cores no modo Escuro</strong></small><br>
        <img src="/assets/wad/styles-guide/Colors/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 12 - Sombras</strong></small><br>
        <img src="/assets/wad/styles-guide/Shadows/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 13 - Icones no modo Claro</strong></small><br>
        <img src="/assets/wad/styles-guide/Icons/Light.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 14 - Icones no modo Escuro</strong></small><br>
        <img src="/assets/wad/styles-guide/Icons/Dark.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; Desta forma, tornou-se possível padronizar a estilização do projeto e criar componentes e paginas seguindo um padrão.

### 3.5. Protótipo de alta fidelidade

&emsp; A partir do Guia de Estilos descrito na seção acima, foram criadas telas que dizem respeito ao protótipo de alta fidelidade do projeto, sendo este o mais próximo da Aplicação Final a ser desenvolvida.<br><br>&emsp; Abaixo encontram-se as telas que compõem este protótipo seguindo a ordem na qual os usuários irão utilizar o sistema. 

<div align="center">
    <small><strong style="font-size: 12px;">Figura 15 - Página de E-Mail</strong></small><br>
        <img src="/assets/wad/Prototype/OnlyE-mailOrResetPassword.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 16 - Página de E-Mail com Senha</strong></small><br>
        <img src="/assets/wad/Prototype/E-mailAndPassword.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 17 - Página de Criação de Senha</strong></small><br>
        <img src="/assets/wad/Prototype/SignInPage.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 18 - Página com a Lista de Usuários (Administrador)</strong></small><br>
        <img src="/assets/wad/Prototype/UsersList.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 19 - Página de Criação ou Edição de Usuário (Administrador)</strong></small><br>
        <img src="/assets/wad/Prototype/EditUser.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 20 - Página com a Lista de Salas (Administrador)</strong></small><br>
        <img src="/assets/wad/Prototype/RoomsList-AdminPage.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 21 - Página de Criação ou Edição de Sala (Administrador)</strong></small><br>
        <img src="/assets/wad/Prototype/EditRoom.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 22 - Página com a Lista de Salas (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/Prototype/RoomsList-UserPage.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 23 - Aba para selecionar período de reserva (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/Prototype/ReserveRoomTab.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 24 - Pop-Up para confirmar reserva (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/Prototype/ConfirmPop-Up.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small><br>
    <small><strong style="font-size: 12px;">Figura 25 - Página para visualizar "Minhas Reservas" (Usuário Comum)</strong></small><br>
        <img src="/assets/wad/Prototype/MyReservedRoomsList-UserPage.png"><br>
    <small style="margin-top: 4px; font-size: 10px;">Fonte: O autor, 2025.</small>
</div>

&emsp; Ao clicar [aqui](https://www.figma.com/design/azZNUyJ9Kh1lLk1Qzkhwpd/FlexiRoom---Design-Final?node-id=105-1333&t=o8sS3sQmLiwzmoJB-1) uma página do sistema de edição de imagens Figma será aberta. Nela, encontram-se o guia de estilos, protótipo de alta fidelidade e os componentes que fazem parte das telas.

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
<br><a name="ref6">[6]:</a> Garrett, J. J. (2011). The elements of user experience: User-centered design for the web and beyond (2nd ed.). New Riders. https://www.peachpit.com/store/elements-of-user-experience-user-centered-design-for-the-9780321683687
<br><a name="ref7">[7]:</a> Tidwell, J. (2010). Designing interfaces: Patterns for effective interaction design (2nd ed.). O’Reilly Media. https://www.oreilly.com/library/view/designing-interfaces-2nd/9781449319274/
<br><a name="ref8">[8]:</a> Krug, S. (2014). Don't make me think, revisited: A common sense approach to web usability (3rd ed.). New Riders. https://www.sensible.com/dmmt.html
