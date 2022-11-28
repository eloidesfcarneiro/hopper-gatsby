import React from 'react'
import styled from 'styled-components'

const StyleP = styled.p 
    `
      p {
        color: red;
      }
    `

function index() {
  return (
    <div>
    {/* you can include <Component />s here that include
         other <p>s that don't get unexpected styles! */}

    <StyleP>
    <p>only this paragraph will get the style :)</p>
    </StyleP>
  </div>
  )
}

export default index