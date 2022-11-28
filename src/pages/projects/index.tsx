import React from 'react'
import Layout from '../../components/Layout'

function index() {
  return (
    <Layout>
        <div className="portifolio">
            <h2>Portfolio</h2>
            <h3>Project Spring Boot BackEnd</h3>
        </div>
        <style jsx> {
            `
              .portifolio {
                 text-align: center;
            }
              h2 {
                font-size: 3em;
                margin-top: 80px;
             }
              h3 {
                font-size: 2em;
                font-weight: 400;
                color: white;
              }

            `
        } 
        </style>
    </Layout>
  )
}

export default index