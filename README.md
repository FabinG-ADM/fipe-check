# 🚗 FIPE Check

Uma aplicação web moderna, rápida e elegante para consulta de preços médios de veículos diretamente da **Tabela FIPE**. O projeto foi desenvolvido com tecnologias puramente front-end (HTML, CSS e JavaScript Vanilla), consumindo uma API pública e gratuita para fornecer dados atualizados em tempo real.

---

## 🚀 Funcionalidades Principais

- **🔍 Filtro Dinâmico em Cascata**: Os dropdowns são carregados de forma assíncrona e inteligente. Ao selecionar uma **Marca**, os **Modelos** correspondentes são carregados; ao selecionar um **Modelo**, os **Anos** disponíveis são preenchidos automaticamente.
- **📊 Card de Resultados Completo**: Exibição detalhada do veículo selecionado, destacando:
  - Preço Médio Atualizado
  - Nome Completo do Modelo
  - Marca do Veículo
  - Ano do Modelo
  - Tipo de Combustível (Gasolina, Álcool, Diesel, etc.)
  - Código FIPE oficial
  - Mês de Referência dos dados exibidos
- **🔄 Reset Inteligente**: Opção de limpar a pesquisa com um único clique, ocultando os resultados anteriores e restaurando os filtros para o estado inicial (com as marcas pré-carregadas).
- **⚡ Rolagem Suave (Smooth Scroll)**: Assim que os dados são carregados, a página rola suavemente até o card de resultados para uma melhor experiência do usuário.
- **🏍️ Código Preparado para Expansão**: A arquitetura do código JavaScript foi projetada de forma genérica. As funções de busca aceitam o tipo de veículo como argumento, facilitando a implementação de buscas por **Motos** (`motorcycles`) e **Caminhões** (`trucks`) futuramente.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas do desenvolvimento web moderno sem a necessidade de frameworks robustos ou dependências pesadas:

*   **HTML5**: Estruturação semântica de toda a interface.
*   **CSS3 (Modularizado)**:
    *   **Variáveis CSS (`:root`)**: Centralização das definições tipográficas e paleta de cores.
    *   **Flexbox**: Criação de layouts altamente flexíveis, alinhados e modernos.
    *   **Custom Select**: Customização visual dos seletores de formulário utilizando imagens SVG embutidas via CSS.
*   **JavaScript Vanilla (ES6+)**:
    *   **Fetch API & Async/Await**: Comunicação assíncrona, robusta e limpa para consumo da API Restful.
    *   **Manipulação Avançada de DOM**: Atualização dinâmica dos dados na página sem necessidade de recarregamento.
*   **API FIPE Parallelum**: Integração direta com a API pública disponibilizada em [deividfortuna/fipe](https://deividfortuna.github.io/fipe/).

---

## 📂 Estrutura de Arquivos

A organização do projeto segue uma estrutura modular focada na manutenibilidade do código:

```text
fipe-check/
├── index.html          # Ponto de entrada HTML e estrutura semântica da aplicação.
├── index.js            # Lógica principal, consumo de API e controle de estados do DOM.
├── README.md           # Documentação completa do projeto (este arquivo).
├── image/
│   └── car.png         # Logo/Ícone do aplicativo exibido no cabeçalho.
└── src/
    ├── reset.css       # Normalização de estilos padrão do navegador.
    ├── variables.css   # Definições globais de fontes e variáveis de estilo.
    ├── base.css        # Configurações básicas de layout e tipografia geral do body.
    ├── style.css       # Estilização completa dos componentes visuais (cards, botões, formulários).
    └── responsive.css  # Arquivo preparado para futuras customizações e media queries responsivas.
```

---

## 🔌 Integração com a API FIPE

Os dados de veículos são consumidos a partir da API REST da FIPE hospedada pela Parallelum. Os endpoints utilizados dinamicamente são:

1.  **Listar Marcas**:  
    `GET https://fipe.parallelum.com.br/api/v2/cars/brands`
2.  **Listar Modelos** (com base na marca):  
    `GET https://fipe.parallelum.com.br/api/v2/cars/brands/{brandId}/models`
3.  **Listar Anos** (com base na marca e modelo):  
    `GET https://fipe.parallelum.com.br/api/v2/cars/brands/{brandId}/models/{modelId}/years`
4.  **Obter Dados do Veículo** (com base na marca, modelo e ano):  
    `GET https://fipe.parallelum.com.br/api/v2/cars/brands/{brandId}/models/{modelId}/years/{yearId}`

---

## 💻 Como Executar o Projeto

Como o projeto é desenvolvido puramente em ambiente cliente-side (Front-End Estático), **não é necessário instalar dependências ou rodar servidores de build (como Node.js, Webpack, etc.)**.

### Opção 1: Execução Direta
1. Baixe ou clone este repositório em sua máquina.
2. Navegue até a pasta raiz do projeto.
3. Dê um duplo clique no arquivo `index.html` para abri-lo diretamente em qualquer navegador web de sua preferência.

### Opção 2: Utilizando Servidor Local (Recomendado)
Para uma experiência de desenvolvimento ideal com live-reload:
1. Abra a pasta do projeto no **Visual Studio Code**.
2. Instale a extensão **Live Server** (caso ainda não a tenha).
3. Clique com o botão direito no arquivo `index.html` e selecione **Open with Live Server**.
4. O navegador abrirá automaticamente no endereço local `http://127.0.0.1:5500/`.

---

## 💡 Próximos Passos & Sugestões de Melhorias

Este projeto foi estruturado para ser escalável. Caso queira evoluí-lo, aqui estão algumas sugestões ideais:

1.  **Adicionar Seletor de Tipo de Veículo**: Criar abas ou botões de rádio no topo para alternar entre "Carros", "Motos" e "Caminhões". O `index.js` já suporta isso alterando o primeiro parâmetro das funções para `'motorcycles'` ou `'trucks'`.
2.  **Responsividade Avançada**: Adicionar estilos específicos de media query em `src/responsive.css` para melhorar a visualização do card de resultados e do formulário de busca em telas muito pequenas (smartphones compactos).
3.  **Favoritos com LocalStorage**: Permitir que o usuário "salve" carros consultados em uma lista de favoritos armazenada localmente no navegador, exibindo-os mesmo após recarregar a página.
4.  **Histórico de Consultas**: Criar uma seção lateral exibindo as últimas 3 ou 5 consultas realizadas pelo usuário.

---

## 📄 Licença

Este projeto está sob a licença open-source. Sinta-se livre para clonar, estudar, modificar e distribuir o código como desejar!
