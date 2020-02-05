import React from 'react';
import PropTypes from 'prop-types';

const Range = (min, max, step) => {
  return (
    <input type="range" min={ min } max={ max } step={ step } />
  );
};

Range.propTypes = {
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  step: PropTypes.string.isRequired
};

export default Range;
