import React from 'react';
import PropTypes from 'prop-types';

export default function SButton({ klik, children }) {
  return <button onClick={klik}>{children}</button>;
}

SButton.propTypes = {
  klik: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
