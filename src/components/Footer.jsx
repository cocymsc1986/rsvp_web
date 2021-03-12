import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 3rem;
  font-weight: bold;
  margin: 10rem auto 14rem;
`;

export const Footer = () => {
  return (
    <>
      <StyledFooter>We look forward to seeing you there!</StyledFooter>
    </>
  );
};
