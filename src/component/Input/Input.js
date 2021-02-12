import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

export const Input = ({size, value, onChange, placeholder}) => (
  <input
      className={[`input input-${size}`].join('')}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
  />
);

Input.propTypes = {
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * input placeholder
   */
  value: PropTypes.string.isRequired,
  /**
   * input value
   */
  placeholder: PropTypes.string,
  /**
   * Optional onchange handler
   */
  onChange: PropTypes.func,
};