import * as React from 'react';
import range from 'lodash/range';
import { useDispatch } from 'react-redux';
import { setActive } from '../store/actions';
import CharmapChar from './CharmapChar';
import './CharmapPage.css';

export interface Props {
  pageNumber: number;
}

const CharmapPage: React.FC<Props> = ({ pageNumber }) => {
  const dispatch = useDispatch();
  
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const codePoint = Number(e.currentTarget.value);
    dispatch(
      setActive(codePoint, null)
    );
  };

  return (
    <div className="CharmapPage">
      {range(pageNumber * 0x100, (pageNumber + 1) * 0x100).map((i) => (
        <CharmapChar
          key={i}
          codePoint={i}
          value={i}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default CharmapPage;
