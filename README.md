# Projeto Infnet Gatsby!
autor: Eloídes F. Carneiro

## Iniciando Projeto Gatsby

Criando um app gatsby

`npm init gatsby`

## Endereço do Projeto no Git Hub

    http://github.com/eloidesfcarneiro/hopper-gatsby

## Endereço Web após Deploy do Projeto 

    https://eloidesfcarneiro.github.io/hopper-gatsby/

## Adicionando Styles Componentes CSS

     npm install styled-jsx gatsby-plugin-styled-jsx

     npm install --save @types/styled-components
gatsby-config.js

Copygatsby-config.js: adicionar código

    module.exports  =  {
      plugins:  [`gatsby-plugin-styled-components`],}

## Layout com Graphql

Incluso no Layout Graphql com os Dados do Site

    query SiteInfo {
    site {
    siteMetadata {
    description
    title
    }
    }
    }`) 

## Formulário Contato em About

## Mdk em Projetos
