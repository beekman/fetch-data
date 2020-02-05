import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import { characters } from '../../../characters';

const Select = () => {
  const Options = characters.map((character) => {
    return <Option key={ character.value } value={ character.value } name={ character.name } />;
  });

  return (
    <select>{ Options }</select>
  );
};

Select.propTypes = {
  select: PropTypes.array
};

export default Select;
