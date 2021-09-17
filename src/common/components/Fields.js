import React from 'react';
import PropTypes from 'prop-types';
import './Field.css';

export default function Field({ label, value }) {
  return (
    <div className="row">
      <div className="field title">{label}</div>
      <div className="field value">{value}</div>
    </div>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
