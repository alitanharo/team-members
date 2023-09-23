import { Field } from 'formik';
import styled from 'styled-components';



export const FormField = styled(Field)`
  display: block;
  height: 2rem;
  width: 100%;
  border: 1px solid #000;
  padding-left: 0.5rem;
  border-radius: 0.25rem;
  border-color :#999999;
  margin-top: 0.5rem;
`;

export const ErrorMessageContainer = styled.div`
  color: red;
  font-size: 0.875rem;
`;
