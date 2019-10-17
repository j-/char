import * as React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { getActiveCodePoint } from '../store';
import char from '../convert/char';
import acronyms from '../acronyms';
import Acronym from './Acronym';
import CharacterLiteral from './CharacterLiteral';
import './CharmapChar.css';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  codePoint: number;
}

const CharmapChar: React.FC<Props> = ({ codePoint, ...props }) => {
  const activeCodePoint = useSelector(getActiveCodePoint);
  const isActive = codePoint === activeCodePoint;
  
  return (
    <button
      className={
        classNames('CharmapChar', {
          'CharmapChar--active': isActive,
        })
      }
      type="button"
      tabIndex={-1}
      {...props}
    >
      {
        acronyms.has(codePoint) ?
          <Acronym>{acronyms.get(codePoint)}</Acronym> :
          <CharacterLiteral>{char.from(codePoint)}</CharacterLiteral>
      }
    </button>
  );
};

export default CharmapChar;
