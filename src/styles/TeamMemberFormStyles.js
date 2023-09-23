import styled from 'styled-components';

export const FormContainer = styled.div`
 padding-left: 3rem; /*1.25 Equivalent to pl5 in Tachyons */
  max-width: 30rem; /* Equivalent to mw6 in Tachyons */
 `;

export const FormTitle = styled.h2`
  color: #001b44;
  font-size: 1.5rem;/* Equivalent to f3 in Tachyons */
  margin-top: 0;
  margin-bottom: 3rem;/*1.25 Equivalent to mb5 in Tachyons */
    
`;

export const FormSubtitle = styled.h3`
  color: #001b44;
  font-size: 1.25rem
  
`;

export const SubmitButton = styled.button`
  padding-left: 1rem; /* Equivalent to 4 * 0.25rem */
  padding-right: 1rem; /* Equivalent to 4 * 0.25rem */
  padding-top: 0.5rem; /* Equivalent to 2 * 0.25rem */
  padding-bottom: 0.5rem; /* Equivalent to 2 * 0.25rem */
  background-color: #357edd;
  color: white;
  border-radius: 0.25rem; /* Equivalent to 2 * 0.125rem */
  border: none;
  margin-top: 1.5rem; /* Equivalent to 3 * 0.5rem */
  margin-left:0;
  margin-right:0;

  /* Hover and Pointer Styles */
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;


