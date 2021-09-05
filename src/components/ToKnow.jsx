import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: left;

  @media (max-width: 768px) {
    display: block;
  }

  > * {
    flex: 1;
    padding: 0 2rem;

    &:first-child {
      text-align: right;

      @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 5rem;
      }
    }

    &:last-child {
      border-left: 1px solid black;

      @media (max-width: 768px) {
        border-left: none;
        text-align: center;
      }
    }
  }
`

const StyledList = styled.ul`
  font-size: 2rem;
  list-style: none;
  padding-left: 0;
`

const StyledListItem = styled.li`
  margin-bottom: 1rem;
`

export const ToKnow = () => {
  return (
    <Wrapper>
      <StyledFlexContainer>
        <div>
          <h2>Helpful info</h2>
          <StyledList>
            <StyledListItem>Closest airport is Larnaca</StyledListItem>
            <StyledListItem>Same plugs as the UK, no adaptors needed</StyledListItem>
            <StyledListItem>
              Cars drive on same side of road as UK, easy for car rental
            </StyledListItem>
            <StyledListItem>Cyprus is 2 hours ahead of UK time</StyledListItem>
          </StyledList>
        </div>
        <div>
          <h2>Where to stay</h2>
          <StyledList>
            <StyledListItem>
              Finikoudes or Mackenzie Beach - Hotels and AirBnBs near the beach
            </StyledListItem>
            <StyledListItem>
              Perivolia - Ideal for villas, slightly further out but near to beaches
              that are quieter with less facilities
            </StyledListItem>
          </StyledList>
        </div>
      </StyledFlexContainer>
      <p>
        Taxi numbers for getting around: Apostolos 0357 96486356, John 0357 99395511.
        Mention you are here for Eleni&apos;s wedding.
      </p>
    </Wrapper>
  )
}
