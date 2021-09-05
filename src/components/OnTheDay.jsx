import React from "react"
import styled from "styled-components"

import { LocationMap } from "./LocationMap"

const Wrapper = styled.div`
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`

const StyledMapContainer = styled.div`
  width: 100vw;
  height: 400px;
  position: absolute;
  transform: translateX(50%);
  left: -50%;
`

const StyledContent = styled.div`
  font-size: 2rem;
  margin-bottom: 5rem;
`

const MapHeightDummyComponent = styled.div`
  height: 400px;
`

export const OnTheDay = () => {
  return (
    <Wrapper>
      <h2>On the Big Day</h2>
      <StyledContent>
        <p>
          All transport to the church is arranged from the pick up point below at
          14:45 and we will be providing transport from the church to the venue.
          There will be a shuttle back to the original pick up point at various
          points through the night, starting at 23:00.
        </p>
        <p>
          If you want to arrange your own transport, these are trusted taxi
          companies: Apostolos 0357 96486356, John 0357 99395511. Mention you are
          here for Eleni&apos;s wedding.
        </p>
      </StyledContent>

      <StyledMapContainer data-testid="map-component">
        <LocationMap />
      </StyledMapContainer>
      <MapHeightDummyComponent />
    </Wrapper>
  )
}
