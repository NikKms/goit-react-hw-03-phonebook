import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  FormSubmitButton,
  Label,
  InputForm,
  InputField,
  ErrorMsg,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Z'-\s]+$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name is required'),
  number: Yup.string()
    .matches(
      /^[0-9\s+()-]+$/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is required'),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <InputForm>
        <Label>
          Name
          <InputField type="text" name="name" />
          <ErrorMessage name="name" component={ErrorMsg} />
        </Label>

        <Label>
          Tel
          <InputField type="tel" name="number" />
          <ErrorMessage name="number" component={ErrorMsg} />
        </Label>

        <FormSubmitButton type="submit">Add contact</FormSubmitButton>
      </InputForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
