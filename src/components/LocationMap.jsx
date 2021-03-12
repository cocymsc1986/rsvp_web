import React from 'react';

import GoogleMap from 'google-map-react';
import styled from 'styled-components';

const StyledPointer = styled.div`
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 30px solid black;
  z-index: 999;
`;

const StyledLocationInfo = styled.div`
  margin-top: -4rem;
  margin-left: 4rem;
  text-align: left;
  background: white;
  padding: 2rem;
  width: 15rem;
`;

const StyledLocationInfoItem = styled.span`
  display: block;
  font-size: 1.4rem;
  margin-bottom: 0.7rem;

  &:first-child {
    font-weight: bold;
    font-size: 1.6rem;
  }
`;

const Pointer = () => {
  return (
    <StyledPointer data-testid="map-pointer">
      <StyledLocationInfo>
        <StyledLocationInfoItem>
          Mackenzie beach car park
        </StyledLocationInfoItem>
        <StyledLocationInfoItem>Mackenzie Beach</StyledLocationInfoItem>
        <StyledLocationInfoItem>Larnaca 6027</StyledLocationInfoItem>
      </StyledLocationInfo>
    </StyledPointer>
  );
};

export const LocationMap = () => {
  return (
    <GoogleMap
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={{ lat: 34.890548141034394, lng: 33.63668879572238 }}
      defaultZoom={16}
    >
      <Pointer lat={34.89054814103439} lng={33.63626879562218} />
    </GoogleMap>
  );
};
