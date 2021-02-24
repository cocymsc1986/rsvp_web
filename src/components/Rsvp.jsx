import React, { useState } from 'react';
import styled from 'styled-components';

import { saveRsvp } from '../utils/saveRsvp';

import { namesList } from '../utils/namesList';

const StyledForm = styled.form`
  margin-bottom: 4rem;
`;

const FormField = styled.div`
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 2rem;
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
`;

const StyledSubText = styled.span`
  font-size: 1.6rem;
`;

const StyledError = styled.span`
  margin-top: 0.5rem;
  display: block;
  color: red;
`;

export const Rsvp = () => {
  const [values, setValues] = useState({});
  const [valid, setValid] = useState(true);

  const onChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const validateForm = () => {
    return namesList.includes(values.who);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setValid(true);
      saveRsvp(values);
      return;
    }

    setValid(false);
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <h1>RSVP</h1>
        <FormField>
          <StyledLabel htmlFor="who">
            Who?
            <br />
            <StyledSubText>(Please enter your surname)</StyledSubText>
          </StyledLabel>
          <StyledInput
            onChange={onChange}
            value={values.who}
            type="text"
            name="who"
          />
          {!valid && (
            <StyledError>
              Name not recognised, please enter your surname
            </StyledError>
          )}
        </FormField>
        <FormField>
          <StyledLabel htmlFor="diet">Dietary Requirements?</StyledLabel>
          <StyledInput value={values.diet} type="text" name="diet" />
        </FormField>
        <FormField>
          <StyledLabel htmlFor="song">Song Request?</StyledLabel>
          <StyledInput value={values.song} type="text" name="song" />
        </FormField>
        <FormField>
          <StyledButton>Send!</StyledButton>
        </FormField>
      </StyledForm>
    </>
  );
};
