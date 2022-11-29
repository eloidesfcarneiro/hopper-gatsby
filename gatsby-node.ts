const path = require('path')
import { GatsbyNode, graphql, useStaticQuery } from "gatsby"

type TypeData = {
  data?: { allMarkdownRemark: { nodes: { frontmatter: { slug : { name: string } }[] } }};
}

export const createPages: GatsbyNode["createPages"]  = async ({graphql, actions}) => {
 
  const { createPage } = actions

  const { data } = await graphql<TypeData>(`
  query Projects($slug: String) {
    markdownRemark(frontmatter: {slug: {name: {eq: $slug}}}) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
  `)

// Create Project Pages  
const projectTemplate = path.resolve("./src/templates/project-details.tsx")
const createPostPromise = data?.data?.allMarkdownRemark.nodes.frontmatter.map((frontmatter) => {
    createPage({
        path : `/projects/${frontmatter.slug.name}`,
        component : projectTemplate,
        context : {
            slug: frontmatter.slug.name,
            // anything else you want to pass to your context
        }
    })
})
await Promise.all( [ createPostPromise] )
}

const result = useStaticQuery (graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "//content/events//" } }) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)