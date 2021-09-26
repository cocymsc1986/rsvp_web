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

export const TravelInfo = () => {
  return (
    <Wrapper>
      <h2>Travel Information (COVID)</h2>
      <StyledContent>
        <h3>Update 26/9/21</h3>
        <p>
          There will be an announcement on October 4th to change the rules around
          travelling back to England, check{" "}
          <a href="https://www.gov.uk/guidance/red-amber-and-green-list-rules-for-entering-england#amber-list-rules">
            gov.uk travel info for England
          </a>{" "}
          for more info.
        </p>
        <h3>Update 5/9/21</h3>
        <p>
          All the following info is correct as of 5/9/21, we will try to update if
          anything changes, but check the information at{" "}
          <a href="https://www.gov.uk/guidance/red-amber-and-green-list-rules-for-entering-england#amber-list-rules">
            gov.uk travel info for England
          </a>
          ,{" "}
          <a href="https://www.gov.uk/foreign-travel-advice/cyprus">
            gov.uk travel info for Cyprus
          </a>
          , and{" "}
          <a href="https://www.visitcyprus.com/index.php/en/cyprus-covid19-travel-protocol">
            Cyprus&apos; government travel info webpage
          </a>
        </p>
        <h3>Getting into Cyprus (correct at 5/9/21)</h3>
        <p>
          As long as you are double jabbed there is no requirement to take a test to
          get into the country (Random testing is in place but there is no obligation
          on the traveller to take a test beforehand). England is on Cyprus&apos; red
          list, but this is irrelevant as long as you are double jabbed.
        </p>
        <p>
          You need to fill in a PLF form within 48 hours of your arrival into Cyprus,
          the form is <a href="https://cyprusflightpass.gov.cy/">here</a>.
        </p>

        <h3>Returning to England (correct at 5/9/21)</h3>
        <p>
          As long as you are double jabbed the requirements are that you need to take
          a test in Cyprus within 72 hours of your flight. The test can be either
          lateral flow or PCR, but you must have a certificate to show your results
          in English. These are available at Larnaca Airport (€15 for rapid, €50 for
          PCR). See more info{" "}
          <a href="https://www.hermesairports.com/covid-19/covid-19-test-labs">
            here (under departures)
          </a>
        </p>
        <p>
          You also need to pre-book a day 2 test to take when you have returned to
          England (within 48 hours of landing). We have previously used Randox at
          home kits, available <a href="https://covid.randoxhealth.com/home">here</a>
          , labelled &apos;Fully Vaccinated Day 2 COVID-19 Test&apos;. These tests
          you can take at home and then take to a local drop off centre. These are
          currently £48 each. Other government approved testing is listed at{" "}
          <a href="https://www.gov.uk/find-travel-test-provider">
            https://www.gov.uk/find-travel-test-provider
          </a>
        </p>
        <p>
          You also need to fill in a PLF form within 48 hours of you arriving in the
          country. The form is{" "}
          <a href="https://www.gov.uk/provide-journey-contact-details-before-travel-uk">
            here
          </a>
          .
        </p>
      </StyledContent>
    </Wrapper>
  )
}
