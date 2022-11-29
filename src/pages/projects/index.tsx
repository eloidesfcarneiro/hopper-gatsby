import { graphql, Link, StaticQueryDocument } from "gatsby"
import React from 'react'
import Layout from '../../components/Layout'
import Img from "gatsby-image"

interface ProjectpageProps {
  data : Queries.ProjectsPageQuery
}


export default function index(props : ProjectpageProps) {
  console.log(props.data)
  const projects = props.data.allMarkdownRemark.nodes
  return (
    <Layout>
        <div className="portifolio">
            <h2>Portfolio</h2>
            <h3>Links to Projects</h3>
        </div>
        <div className="projects">
          {projects.map(project => (
            <Link to={"/projects"+project.frontmatter?.slug?.name} key={project.id}>
              <div>
                <Img fluid={project.frontmatter?.thumb?.childImageSharp?.fluid} />
                <h3>{ project.frontmatter?.title }</h3>
                <p>{ project.frontmatter?.stack }</p>
              </div>
            </Link>
          ))}
        </div>
        <style jsx> {
            `
              .portifolio {
                 text-align: center;
            }
            .portifolio > h2 {
                text-align: center;
                font-size: 3em;
                margin-top: 80px;
             }
             .portifolio > h3 {
                text-align: center;
                font-size: 2em;
                font-weight: 400;
                color: white;
              }
              .portifolio > p {
                text-align: center;
              }
              .projects {
                display : grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-gap: 80px;
                margin: 80px 20px;
              }
              .projects > h3 {
                text-align: center;
                margin: 20px auto 0px;
                font-weight: 500;
              }
              .projects > p {
                color: #ccc;
                margin top: 4px;
              }
            `
        } 
        </style>
    </Layout>
  )
}

export const query : StaticQueryDocument = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {fields: frontmatter___title, order: ASC}) {
    nodes {
      frontmatter {
        slug {
          name
        }
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`