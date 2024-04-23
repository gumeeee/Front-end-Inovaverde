# 🌳**Projeto integrador InovaVerde**

### Descrição do Projeto

<div style="text-align: justify;">
  <p style="text-align: justify;">
  O  projeto  InovaVerde  é  um  e-commerce baseado  na  ODS  9  da  ONU  (Indústria,  inovação  e  infraestrutura).
  </p>
</div>

<h4 align="center"> 
	🚧  InovaVerde 🚀 Em construção...  🚧
</h4>

<div align="center">
  <img src= "https://github.com/Inova-Verde/projeto-integrador-inova-verde/assets/147213232/af7509c4-70e3-49dd-bf81-e9c57abf3b5a" alt="drawing" width="300"/>
</div>

# ✨Features

- [x] Página dos produtos
- [ ] Implementação da página do usuário
- [ ] Cashback em crédito de carbono
- [ ] Página dos fornecedores
<br>

# 📝Tabela de conteúdos

   * 👉[Descrição do Projeto](#descricao-do-projeto)
   * 👉[Tabela de Conteudos](#Tabela-de-conteúdos)
   * 👉[Contextualização](#Contextualização)
      * [O problema social](#O-problema-social)
      * [Quais são as causas, os impactos e as consequências do Problema Social foco do projeto na sociedade?](#local-files)
      * [Qual o motivo da escolha do modelo de software acima?](#remote-files)
      * [Como a aplicação irá contribuir na solução do Problema Social?](#multiple-files)
   * 👉[Diagrama de Entidade-Relacionamento (DER)](#testes)
      * [Descrição das Tabelas e seus atributos](#tecnologias)
   * 👉[Pré-requisitos](#tecnologias)
      * [Extensões do projeto](#extensões)
      * [Arquitetura de pastas](#arquitetura)
   * 👉[Contribuidores](#equipe)   
<br>

# 💡Contextualização
### O problema social

<div style="text-align: justify;">
  <p style="text-align: justify;">
  Indústria,  inovação  e  infraestrutura  Construir  infraestruturas  resilientes,  promover  a  industrialização  inclusiva  e  sustentável  e  fomentar  a  inovação.
O foco do projeto é a meta 9.4: “Até 2030, modernizar a infraestrutura e reabilitar as indústrias para torná-las sustentáveis, com eficiência aumentada no uso de recursos e maior adoção de tecnologias e processos industriais limpos e ambientalmente corretos; com todos os países atuando de acordo com suas respectivas capacidades”.
  </p>
</div>
<br>

### Quais são as causas, os impactos e as consequências do Problema Social foco do projeto na sociedade?

<div style="text-align: justify;">
  <p style="text-align: justify;">
  Problemas ambientais associados à emissão de CO2 como a chuva ácida, gerando problemas secundários como alteração do PH de corpos hídricos alterando toda a dinâmica da fauna e flora local, além de mudança de preços dos alimentos agrícolas devido a alteração do PH da chuva e outros problemas relacionados a saúde pública como o aumento de doenças respiratórias e aumento da ocupação do leito de hospitais.
  </p>
</div>
<br>
 
### Qual o motivo da escolha do modelo de software acima?

<div style="text-align: justify;">
  <p style="text-align: justify;">
  
  O _e-commerce_ foi escolhido pelo grupo 5 pensando na solução da problemática da emissão de CO2 que foi discutida na reunião da ONU denominada protocolo de Kyoto de 1997, nessa reunião foi discutido sobre o mercado de crédito de carbono.
  </p>
</div>
<br>

### Como a aplicação irá contribuir na solução do Problema Social?

<div style="text-align: justify;">
  <p style="text-align: justify;">
  
  A ideia do software é compensar o cliente através da compensação em cashback com créditos de carbono a partir das compras de produtos sustentáveis. Como agricultura familiar e produtos reciclados.
  </p>
</div>
<br>

# 📌Diagrama de Entidade-Relacionamento (DER)

<div style="text-align: justify;">
  <p style="text-align: justify;">
  
  Um Diagrama de Entidade-Relacionamento (DER) é uma ferramenta utilizada na modelagem de dados para representar as relações entre entidades em um sistema. Ele é composto por entidades (que representam objetos do mundo real) e relacionamentos (que representam como essas entidades se conectam). O DER é frequentemente usado no projeto de bancos de dados para visualizar a estrutura e as relações dos dados.

  O início do projeto InovaVerde foi idealizado através de uma DER no software MySQL Workbench, ou seja, um banco de dados que armazena dados dos produtos, categoria e usuarios do _e-commerce_, a disposição das tabelas e seus atributos no DER pode ser observada na figura 1 a seguir:
  </p>
</div>

<div align="center">
  
![Diagrama DER Projeto InovaVerde](https://github.com/Inova-Verde/projeto-integrador-inova-verde/assets/147213232/b253fb5d-63c9-4b1b-af22-247b5b42be85)

</div>

<p align="center">
  <strong>Figura 1 - Modelo de diagrama de entidade de relacionamento entre produtos, categorias e usuários, sendo que a relação usuarios:produtos é 1:n e categorias:produtos é 1:n.</strong>
</p>

<br>

<h3>📝Descrição das Tabelas e seus atributos</h3>

<div align="center">

 **Tabela 1 - Descrição dos atributos da tabela "tb_categorias", bem como a definição do tipo de dado e seus limites.**

 </div>
 
<div align="center">

| Atributo   | Descrição e motivo da escolha       | Chave       |
| :---------- | :--------- | :---------------------------------- |
| `id` BIGINT | Identificador único da tabela "tb_categorias" | **PK** |
| `nome` VARCHAR(255) | Definir Nome da categoria dos produtos | **NN** |
| `subcategoria` VARCHAR(255) | Definir Subcategoria dos produtos | **NN** |

</div>
A seguir temos exemplos de como será construído as categorias e suas respectivas subcategorias:

- **Categoria 1:** Produtos Orgânicos e Sustentáveis.
  - **Subcategoria:** Frutas orgânicas e Vegetais orgânicos.

- **Categoria 2:** Produtos de Agricultura de Conservação.
  - **Subcategoria:** Kits de compostagem doméstica, Fertilizantes orgânicos e Produtos para manejo de pragas e doenças orgânicos.

- **Categoria 3:** Energia Renovável para Residências e Pequenos Negócios.
  - **Subcategoria:** Kits de energia solar para residências, Sistemas de

<br>
<br>
<div align="center">

 **Tabela 2 - Descrição dos atributos da tabela "tb_produtos", bem como a definição do tipo de dado e seus limites.**

 </div>
 
<div align="center">

| Atributo   | Descrição e motivo da escolha       | Chave       |
| :---------- | :--------- | :---------------------------------- |
| `id` BIGINT | Identificador único da tabela "tb_produtos" | **PK** |
| `nome` VARCHAR(255) | Definir Nome do produto | **NN** |
| `preco` DECIMAL(6,2) | Preço do produto | **NN** |
| `descricao` VARCHAR(255) | Descrição do produto do e-commerce | **NN** |
| `estoque` BIGINT | Quantidade do produto em estoque | **NN** |
| `data_validade` DATE | Data de validade do produto em estoque | **NN** |

</div>
<br>
<br>
<div align="center">
   
   **Tabela 3 - Descrição dos atributos da tabela "tb_usuarios", bem como a definição do tipo de dado e seus limites.**
   
</div>
 
<div align="center">

| Atributo   | Descrição e motivo da escolha       | Chave       |
| :---------- | :--------- | :---------------------------------- |
| `id` BIGINT | Identificador único da tabela "tb_usuarios" | **PK** |
| `nome` VARCHAR(255) | Nome de usuário para o login | **NN** |
| `usuario` VARCHAR (255) | E-mail para confirmação e possível contato do usuário | **NN** |
| `senha` VARCHAR(255) | Senha de usuário para o login | **NN** |
| `foto` VARCHAR(255) | Foto do usuário (opcional) |  |

</div>
<br>

# ✔️Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: 
[Node.js](https://nodejs.org/en/), 
[VSCode](https://code.visualstudio.com/),
[Vite](https://vitejs.dev/guide),
[React](https://dev.to/mcbarna/setup-react-with-vite-on-vscode-a-step-by-step-tutorial-591g).

<h3>🛠 Extensões do projeto</h3>

**Razão para Instalação:** As extensões abaixo são essenciais para aprimorar o desenvolvimento e a experiência do usuário na aplicação. Execute os comandos a seguir no terminal para adicionar essas funcionalidades ao projeto.

1. **Vite**: Gerenciamento eficiente de projetos com React para desenvolvimento rápido.
```bash
npm install -g vite 
npm create vite@latest  
cd <nome-do-projeto-criado>  
npm install  
npm run dev  
```
2. **React Router DOM**: Criação e gerenciamento de rotas para a aplicação React.
```bash
npm install react-router-dom
```
3. **Tailwind CSS**: Estruturação e estilização rápida e responsiva de componentes UI.
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
4. **Phosphor Icons for React**: Utilização de ícones modernos na aplicação React.
```bash
npm install @phosphor-icons/react
```
5. **Axios**: Facilita o envio de requisições HTTP para o servidor.
```bash
npm install axios
```
6. **React Loader Spinner**: Adiciona animação de loading com o estilo de um DNA giratório na interface.
```bash
npm install react-loader-spinner
```
Esses comandos devem ser executados no terminal do seu projeto para instalar e configurar cada extensão, garantindo um desenvolvimento eficiente e uma interface atraente e funcional para sua aplicação React.
<br>
<br>
<h3>📁 Arquitetura de pastas </h3>

<div style="text-align: justify;">
  <p style="text-align: justify;">
Dentro da pasta do projeto temos a seguinte configuração de pastas:
  </p>
</div>

`scr> (assets, components(footer, navbar, postagens, temas), contexts, models, paginas(cadastro, home, login, perfil), services, util)`
<br>

Existem várias maneiras de organizar um projeto React, mas geralmente as pastas mais comuns são `pages`, `components`, `services` ,`contexts` e `assets`. Abaixo, vou explicar brevemente a função de cada uma delas:

- **`pages`:** A pasta `pages` geralmente contém os componentes que correspondem às páginas ou rotas da aplicação. Cada página é geralmente composta por vários componentes, como formulários, botões, gráficos, tabelas, etc. Esses componentes são agrupados em uma pasta específica dentro de `pages` e são responsáveis por renderizar a página correta com base na URL ou rota.
- **`components`:** A pasta `components` contém os componentes reutilizáveis da aplicação. Esses componentes podem ser usados em várias páginas ou em outros componentes para ajudar a evitar a duplicação de código. Os componentes em `components` são geralmente compostos por um conjunto de subcomponentes menores que podem ser reutilizados em outros lugares.
- **`services`:** A pasta `services` geralmente contém os arquivos de serviço da aplicação, que lidam com a comunicação com um servidor externo ou API. Esses arquivos geralmente são responsáveis por enviar e receber dados do servidor, realizar autenticação, tratar erros e outros processos relacionados à comunicação com o servidor.
- **`contexts`:** A pasta `contexts` contém os contextos da aplicação. Os contextos são uma forma de compartilhar dados entre componentes sem precisar passá-los manualmente de um componente para outro. Eles são úteis para compartilhar dados como autenticação, configurações, temas, etc. em toda a aplicação.
- **`assets`:** A pasta `assets` geralmente contém todos os recursos estáticos da aplicação, como imagens, ícones, arquivos de fonte e folhas de estilo. Esses recursos são agrupados em uma pasta específica para facilitar o gerenciamento e a importação nos componentes da aplicação.
- **`models`:** A pasta `models` pode conter modelos ou esquemas de dados que definem como os dados são organizados e estruturados na aplicação. Eles podem ser usados para validar e normalizar os dados antes de serem armazenados ou exibidos.
<br>

# 🤝Contribuidores

<div align="center">
<table>
  <tr>
    <td align="center"><a href="https://github.com/Asttryd"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/95387263?v=4" width="100px;" alt=""/><br /><sub><b>Asttryd</b></sub></a><br /><a href="https://github.com/Asttryd" title="Asttryd">🚁</a></td>
    <td align="center"><a href="https://github.com/dafneduda"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/147463270?v=4" width="100px;" alt=""/><br /><sub><b>Dafne</b></sub></a><br /><a href="https://github.com/dafneduda" title="Dafne">🚁</a></td>
    <td align="center"><a href="https://github.com/douglasppn"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/19985517?v=4" width="100px;" alt=""/><br /><sub><b>Douglas</b></sub></a><br /><a href="https://github.com/douglasppn" title="Douglas">🚁</a></td>
    <td align="center"><a href="https://github.com/GabrielVieiraz9"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/147213232?v=4" width="100px;" alt=""/><br /><sub><b>Gabriel</b></sub></a><br /><a href="https://github.com/GabrielVieiraz9" title="Gabriel">🚁</a></td>
    <td align="center"><a href="https://github.com/gumeeee"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/124413755?v=4" width="100px;" alt=""/><br /><sub><b>Guilherme</b></sub></a><br /><a href="https://github.com/gumeeee" title="Guilherme">🚁</a></td>
    <td align="center"><a href="https://github.com/MillenaOliveiraSouza"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/91639335?v=4" width="100px;" alt=""/><br /><sub><b>Millena</b></sub></a><br /><a href="https://github.com/MillenaOliveiraSouza" title="Millena">🚁</a></td>
    <td align="center"><a href="https://github.com/ddigo99"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/157827964?v=4" width="100px;" alt=""/><br /><sub><b>Rodrigo</b></sub></a><br /><a href="https://github.com/ddigo99" title="Rodrigo">🚁</a></td>
  </tr>
</table>
</div>




