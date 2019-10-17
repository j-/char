import * as React from 'react';
import './CharacterLiteral.css';

const CharacterLiteral: React.FC = ({ children }) => (
  <span className="CharacterLiteral">
    {children}
  </span>
);

export default CharacterLiteral;
