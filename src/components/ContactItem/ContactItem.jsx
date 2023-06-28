import React from 'react';
import PropTypes from 'prop-types';
import { Item, Name, Tel, Button } from './ContactItem.styled';

export const ContactItem = ({ name, number, onDelete }) => {
  return (
    <Item>
      <Name>{name}:</Name>
      <Tel>{number}</Tel>
      <Button type="button" onClick={onDelete}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
