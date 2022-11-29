import { useStaticQuery, graphql, Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }`)
  const {title: string} = data.site.siteMetadata
  return (
    <nav>
      <h1>Hopper - Projetos</h1>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portifolio Projects</Link>
      </div>
    </nav>
  )
}
