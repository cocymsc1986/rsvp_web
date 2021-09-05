import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`

const StyledContent = styled.div`
  font-size: 2rem;
  margin-bottom: 5rem;
`

export const BeforeTheDay = () => {
  return (
    <Wrapper>
      <h2>The Night Before the Big Day</h2>
      <StyledContent>
        <p>
          The evening before the wedding there will be drinks and food at The Island
          Boutique Hotel at 7pm. You can find the location{" "}
          <a href="https://www.islandhotelcy.com/contact/">here</a>.
        </p>
      </StyledContent>
    </Wrapper>
  )
}
