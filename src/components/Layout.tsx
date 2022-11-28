import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import {useStaticQuery, graphql } from 'gatsby'
import '../styles/global.css'

interface Props {
  children : ReactNode
}

const Layout = ({children}: Props) => {
const data = useStaticQuery(graphql `
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}`)

const siteTitle = data.site.siteMetadata?.title || `Title`
const description = data.site.siteMetadata?.description || 'Description'

  return (
    <>
    <div className="layout">
        <Navbar/>
        <div className='content'>
            {children}
        </div>
        <footer>
          <p>Copyright 2022</p>
          <Header siteTitle={siteTitle} description={description}/>
        </footer>
    </div>
    </>
  )
}


export default Layout

