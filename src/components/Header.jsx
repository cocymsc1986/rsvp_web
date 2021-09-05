import React from "react"
import styled from "styled-components"
import { Rsvp } from "./Rsvp"

import headerImg from "../assets/header.png"

const HeaderImage = styled.img`
  max-width: 800px;
  width: 100%;
`

export const Header = () => {
  return (
    <>
      <header>
        <HeaderImage src={headerImg} alt="Michael &amp; Eleni wedding" />
      </header>
      {/* <Rsvp /> */}
    </>
  )
}
