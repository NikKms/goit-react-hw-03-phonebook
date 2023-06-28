import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const Label = styled.label`
  font-size: 20px;
  color: #333;

  display: flex;
  flex-direction: column;
`;

export const InputField = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-right: auto;

  &:focus {
    outline: none;
    box-shadow: 0 4px 10px rgba(0, 0, 255, 0.3);
    border-color: #337ab7;
  }
`;

export const FormSubmitButton = styled.button`
  margin-right: auto;
  padding: 10px 20px;
  background-color: #337ab7;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #23527c;
  }
`;

export const InputForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

export const ErrorMsg = styled.div`
  font-size: 12px;
  color: red;
`;
