import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const StyledContent = styled.div`
  font-size: 2.4rem;
  margin-bottom: 5rem;
`;

export const BeforeTheDay = () => {
  return (
    <Wrapper>
      <h2>Before the Big Day</h2>
      <StyledContent>
        <p>
          The evening before the wedding, we plan to invite everyone to join us
          for drinks and food at a time and place to be confirmed
        </p>
      </StyledContent>
    </Wrapper>
  );
};
