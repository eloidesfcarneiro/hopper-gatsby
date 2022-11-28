import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link, PageProps } from 'gatsby'

export default function index({ data }: PageProps) {
  console.log(data)

  //  const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <section className="header">
        <div>
          <h2 className="h2">
            Design
          </h2>
          <h3 className="h3">
            Desenvolvimento & Deploy
          </h3>
          <p>UX - designer & web developer"</p>
          <Link to="/projects">Meu Portfolio</Link>
        </div>
        <img src="icon.png" style={{ maxWidth: '100%' }}></img>
      </section>
      <style jsx> {`
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
      align-items: center;
     }
  
   .h2 {
      font-size: 4em;
   }
    .h3 {
      font-size: 3em;
      font-weight: 400;
      margin-bottom: 20px;
    }
    `}
      </style>
    </Layout>
  )
}