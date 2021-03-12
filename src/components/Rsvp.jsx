import React, { useState } from 'react';
import styled from 'styled-components';

import { saveRsvp } from '../utils/saveRsvp';

import { namesList } from '../utils/namesList';

const Wrapper = styled.div`
  margin-bottom: 7rem;

  @media (max-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const StyledForm = styled.form`
  margin-bottom: 4rem;
`;

const FormField = styled.div`
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 2.4rem;
  font-weight: bold;
`;

const StyledInput = styled.input`
  font-family: 'Didot';
  padding: 0.6rem;
  font-size: 2rem;
  width: 30rem;
`;

const StyledButton = styled.button`
  font-family: 'Didot';
  padding: 0.5rem 1.5rem;
  font-size: 2.5rem;
  font-weight: bold;
  background: black;
  color: white;
  border: none;
  cursor: pointer;
`;

const StyledSubText = styled.span`
  font-size: 1.6rem;
  font-weight: normal;
`;

const StyledError = styled.span`
  margin-top: 0.5rem;
  display: block;
  color: red;
`;

const ModalOverlay = styled.span`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  z-index: 5;
`;

const Modal = styled.div`
  font-size: 2.5rem;
  position: absolute;
  background: white;
  border: 1px solid black;
  width: 25rem;
  padding: 6rem 4rem 10rem;
  text-align: center;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.6);
`;

export const Rsvp = () => {
  const [values, setValues] = useState({
    name: '',
    people: '',
    diet: '',
    song: '',
  });
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const validateForm = () => {
    if (!values.name) {
      setValid(false);
      return false;
    }

    return namesList.some((name) =>
      name.toLowerCase().includes(values.name.toLowerCase())
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setValid(true);
      const { success, error } = await saveRsvp(values);

      if (error) {
        setSubmitted(false);
        setError(true);
      }

      if (success) {
        setError(false);
        setSubmitted(true);
      }
      return;
    }

    setSubmitted(false);
    setError(false);
    setValid(false);
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={onSubmit}>
        <h1>RSVP</h1>
        <p>
          We just need one person to respond on behalf of all of your family
        </p>
        <FormField>
          <StyledLabel htmlFor="name">
            Who?
            <br />
            <StyledSubText>(First name and surname)</StyledSubText>
          </StyledLabel>
          <StyledInput
            onChange={onChange}
            value={values.name}
            type="text"
            id="name"
            name="name"
          />
          {!valid && (
            <StyledError>
              Name not recognised, please include your surname
            </StyledError>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor="people">
            Who else is coming with you?
            <br />
            <StyledSubText>
              (Separate multiple names with a comma)
            </StyledSubText>
          </StyledLabel>
          <StyledInput
            value={values.people}
            type="text"
            id="people"
            name="people"
            onChange={onChange}
          />
        </FormField>
        <FormField>
          <StyledLabel htmlFor="diet">Dietary Requirements?</StyledLabel>
          <StyledInput
            value={values.diet}
            type="text"
            id="diet"
            name="diet"
            onChange={onChange}
          />
        </FormField>
        <FormField>
          <StyledLabel htmlFor="song">Song Requests?</StyledLabel>
          <StyledInput
            value={values.song}
            type="text"
            id="song"
            name="song"
            onChange={onChange}
          />
        </FormField>
        <FormField>
          <StyledButton>Send!</StyledButton>
        </FormField>
        {error && (
          <StyledError>
            There was a problem saving RSVP, please try again.
          </StyledError>
        )}
      </StyledForm>
      {submitted && (
        <ModalOverlay>
          <Modal>
            <p>We have received your RSVP, thank you!</p>
            <StyledButton onClick={() => setSubmitted(false)}>
              Close
            </StyledButton>
          </Modal>
        </ModalOverlay>
      )}
    </Wrapper>
  );
};
