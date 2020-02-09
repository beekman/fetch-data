import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import { characters } from '../../../characters';

const Select = ({ onChange }) => {
  const Options = characters.map((character) => {
    return <Option key={ character.value } value={ character.value } name={ character.name } />;
  });

  return (
    <select onChange={ onChange }>{ Options }</select>
  );
};

Select.propTypes = {
  select: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default Select;
