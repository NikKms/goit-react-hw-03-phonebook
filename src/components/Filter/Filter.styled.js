import styled from '@emotion/styled';

export const Label = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin-right: auto;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    box-shadow: 0 4px 10px rgba(0, 0, 255, 0.3);
    border-color: #337ab7;
  }
`;
