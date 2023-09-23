import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { validationSchema } from '../../utils/validation';
import { useTeamContext } from '../../context/TeamContext';
import FormSection from '../common/FormSection';
import ParagraphSection from '../common/ParagraphSection';
import CheckboxSection from '../common/CheckboxSection';
import { SubmitButton, FormSubtitle, FormTitle, FormContainer } from '../../styles/TeamMemberFormStyles'


const TeamMemberForm = () => {
  const { addMember } = useTeamContext();
  const [hovered, setHovered] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    terms: false,
  };

  const handleSubmit = (values, { resetForm }) => {
    if (values.terms) {
      const newMember = values.name;
      addMember(newMember);
      resetForm();
    } else {
      alert('You must accept the terms to submit the form.');
    }
  };

  return (
    <FormContainer>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <FormTitle>Register</FormTitle>
            <FormSubtitle>Team player - Be positive - Beat yesterday</FormSubtitle>
            <ParagraphSection content="Together we re-define the experience of online gaming through gamification and novel technical solutions." />
            <FormSection fieldName="name" placeholder="Name" id="name" />
            <FormSection fieldName="email" placeholder="Email" id="email" />
            <CheckboxSection fieldName="terms" id="terms" hovered={hovered} setHovered={setHovered} />
            <SubmitButton type="submit">I'm in, sign me up!</SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default TeamMemberForm;
