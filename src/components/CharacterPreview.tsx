import * as React from 'react';
import './CharacterPreview.css';

const CharacterPreview: React.FC = ({ children }) => (
  <div className="CharacterPreview card card-body text-center">
    {children}
  </div>
);

export default CharacterPreview;
