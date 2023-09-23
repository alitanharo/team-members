import React from 'react';
import { ErrorMessage } from 'formik';
import { FormField, ErrorMessageContainer } from '../../styles/FormSectionStyles'

const FormSection = ({ fieldName, placeholder, id }) => {
  return (
    <>
      <FormField type="text" placeholder={placeholder} id={id} name={fieldName}  />
      <ErrorMessage name={fieldName} component={ErrorMessageContainer} />
    </>
  );
};

export default FormSection;
