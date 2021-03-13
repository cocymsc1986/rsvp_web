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
        <p>Times TBC</p>
        <p>
          All transport to the church and venue is arranged, and there will be a
          shuttle back to the original pick up point at the end of the night
        </p>
        <p>Coaches will be picking up from the point below</p>
      </StyledContent>

      <StyledMapContainer data-testid="map-component">
        <LocationMap />
      </StyledMapContainer>
      <MapHeightDummyComponent />
    </Wrapper>
  )
}
