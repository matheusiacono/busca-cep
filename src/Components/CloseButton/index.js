import React from 'react';
import './index.css';

const CloseButton = ({ onClick }) => (
  <button type="button" className="close-button" onClick={onClick} />
);

export default CloseButton;
