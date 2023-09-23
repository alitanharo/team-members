import styled from 'styled-components';
import { Field } from 'formik'


 export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const CheckboxField = styled(Field)`
  margin-right: 0.5rem;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  span.f7 {
    font-size: 0.75rem;
    color: black;
  }
`;

