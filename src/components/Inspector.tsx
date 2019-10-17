import * as React from 'react';
import { useSelector } from 'react-redux';
import { getActiveCodePoint } from '../store';
import { convertFrom, Type } from '../convert';
import CharacterPreview from './CharacterPreview';
import TypeInput from './TypeInput';
import './Inspector.css';

const cancel: React.FormEventHandler<HTMLFormElement> = (e) => e.preventDefault();

const Inspector: React.FC = () => {
  const activeCodePoint = useSelector(getActiveCodePoint);
  const activeChar = convertFrom(activeCodePoint, Type.CHAR);
  return (
    <div className="Inspector">
      <CharacterPreview>
        {activeChar}
      </CharacterPreview>
      <form className="Inspector-inputs mt-4" onSubmit={cancel}>
        <TypeInput type={Type.CHAR} selectOnFocus={true} />
        <TypeInput type={Type.UNICODE} />
        <TypeInput type={Type.HEXADECIMAL} />
        <TypeInput type={Type.DECIMAL} />
        <TypeInput type={Type.OCTAL} />
        <TypeInput type={Type.BINARY} />
        <TypeInput type={Type.CSS} />
        <TypeInput type={Type.JS_LONG} />
        <TypeInput type={Type.JS_SHORT} />
        <TypeInput type={Type.HTML_DECIMAL} />
        <TypeInput type={Type.HTML_HEXADECIMAL} />
        <TypeInput type={Type.HTML_ENTITY} />
      </form>
    </div>
  );
};

export default Inspector;
