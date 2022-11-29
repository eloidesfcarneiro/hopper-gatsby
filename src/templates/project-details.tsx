import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function ProjectDetails({}) {
  const data = useStaticQuery (graphql `
  query ProjectsDetails($slug: String) {
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
  
  const {html} =  data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  return (
    <Layout>
        <div className="details">
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className="featued">
                <Img fluid={featuredImg.childImageSharp.fluid}/>
            </div>
             <div className="html"  dangerouslySetInnerHTML={{__html: html}}/>
        </div>
        <style jsx> {
            `
              .details h2 {
                font-size: 3.5em;
                margin-top: 80px;
              }

              .details h3 {
                font-size: 2em;
                font-weight: 400;
                margin-bottom: 40px;
              }

              .html {
                margin-top: 40px;
              }

              .featured {
                margin-bottom: 40px;
              }
            `
        }
        </style>
     </Layout>
  )
}

