# Frontend React - Search Application

Este é um projeto frontend em React que permite pesquisar e exibir resultados obtidos de uma API backend. A aplicação possui uma página de pesquisa e uma página de resultados com visualização em timeline.

## Instalação

Clone o repositório e instale as dependências:

```
git clone [url-do-seu-repositorio]
cd [nome-do-diretorio]
npm install
```

## Execução

Para iniciar a aplicação:

```
npm start
```

## Estrutura do Projeto

### `src/pages/SearchPage.jsx`

Página inicial da aplicação com um formulário de pesquisa.
- Contém um campo de entrada de texto e um botão de pesquisa
- Ao submeter a pesquisa, redireciona para a página de resultados com o termo pesquisado

### `src/pages/ResultsPage.jsx`

Página que exibe os resultados da pesquisa em formato de timeline vertical.
- Obtém o termo pesquisado da URL
- Faz requisição à API para buscar os resultados
- Renderiza os resultados usando o componente VerticalTimeline
- Possui um botão para voltar à página inicial

### `src/components/TimelineItem.jsx`

Componente que renderiza cada item individual na timeline.
- Exibe o resumo do resultado
- Fornece um link para a URL completa da notícia
- Estilizado para se adequar ao tema escuro da aplicação

### `src/services/api.js`

Módulo responsável pela comunicação com o backend.
- Define a URL base da API
- Implementa a função `fetchResults()` para buscar os dados da rota `/results`

## Dependências Principais

- React Router Dom: para navegação entre páginas
- React Vertical Timeline: para exibição dos resultados em formato de timeline
- Axios: para requisições HTTP

## Integração com Backend

O frontend está configurado para se comunicar com um servidor backend rodando em `http://localhost:5000`. Certifique-se de que o servidor backend esteja em execução antes de testar a aplicação.