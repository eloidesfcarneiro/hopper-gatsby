import type { GatsbyConfig } from "gatsby";

const title = "Portifolio War";
const pathPrefix = "/";

const config: GatsbyConfig = {
  siteMetadata: {
    title,
    description: "Projeto Gatsby Infnet",
    image: `${pathPrefix}/images/icon.png`,
    siteUrl: `https://github.com/eloidesfcarneiro/hopper-gatsby`,
    pathPrefix,
  },pathPrefix,
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-jsx", "gatsby-plugin-styled-components", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: `${__dirname}/src/pages/`,
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "projects",
      path: `${__dirname}/src/projects`,
    },
  },
  {
    resolve: `gatsby-transformer-json`,
    options: {
      typeName: `Json`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: title,
      short_name: title,
      start_url: "/",
      background_color: "#eee",
      theme_color: "#fff",
      display: "standalone",
      icon: "src/images/icon.png",
      crossOrigin: `use-credentials`,
    },
  },
  "gatsby-transformer-remark", {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/projects/`,
    },
  },
]
};

export default config;
