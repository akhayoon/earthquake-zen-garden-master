import React from 'react';
import {
  string, number, oneOfType,
} from 'prop-types';
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
  value: oneOfType([string, number]).isRequired,
  label: string.isRequired,
};
