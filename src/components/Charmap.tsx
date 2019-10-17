import * as React from 'react';
import { useSelector } from 'react-redux';
import { getPageNumber } from '../store';
import CharmapPage from './CharmapPage';
import './Charmap.css';

const Charmap: React.FC = () => {
  const pageNumber = useSelector(getPageNumber);
  return (
    <div className="Charmap">
      <CharmapPage pageNumber={pageNumber} />
    </div>
  )
};

export default Charmap;
