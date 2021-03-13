import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  font-weight: bold;
  margin: 14rem auto;
`

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <h1>We look forward to seeing you there!</h1>
      </StyledFooter>
    </>
  )
}
