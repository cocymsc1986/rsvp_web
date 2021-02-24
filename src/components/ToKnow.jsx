import React from 'react';
import styled from 'styled-components';

const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: left;

  > * {
    flex: 1;
    padding: 0 2rem;

    &:first-child {
      text-align: right;
    }

    &:last-child {
      border-left: 1px solid black;
    }
  }
`;

const StyledList = styled.ul`
  font-size: 2.4rem;
  list-style: none;
  padding-left: 0;
`;

const StyledListItem = styled.li`
  margin-bottom: 1rem;
`;

export const ToKnow = () => {
  return (
    <>
      <StyledFlexContainer>
        <div>
          <h2>Helpful info</h2>
          <StyledList>
            <StyledListItem>Closest airport is Larnaca</StyledListItem>
            <StyledListItem>
              Same plugs as the UK, no adaptors needed
            </StyledListItem>
            <StyledListItem>
              Cars drive on same side of road as UK, easy for car rental
            </StyledListItem>
          </StyledList>
        </div>
        <div>
          <h2>Where to stay</h2>
          <StyledList>
            <StyledListItem>
              Finikoudes or Mackenzie Beach - Hotels and AirBnBs near the beach
            </StyledListItem>
            <StyledListItem>
              Pervolia - Ideal for villas, next to beaches that are less popular
              with less facilities
            </StyledListItem>
          </StyledList>
        </div>
      </StyledFlexContainer>
    </>
  );
};
