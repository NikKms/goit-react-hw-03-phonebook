import PropTypes from 'prop-types';
import React from 'react';
import { Label, Input } from './Filter.styled';

export const Filter = ({ onChangeFilter, value }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" onChange={onChangeFilter} value={value} />
    </Label>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
