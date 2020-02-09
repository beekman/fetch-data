import React from './node_modules/react';
import PropTypes from './node_modules/prop-types';
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
