import React from 'react';
import MaskedInput from 'react-text-mask';

const mask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
const CepInput = ({ id, className, onChange }) => (
  <MaskedInput
    mask={mask}
    id={id}
    className={className}
    onChange={onChange} />
);

export default CepInput;
