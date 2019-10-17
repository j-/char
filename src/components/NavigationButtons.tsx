import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPageNumber, getFirstPageNumber, getLastPageNumber } from '../store';
import { setPage } from '../store/actions';

const NavigationButtons: React.FC = () => {
  const currentPage = useSelector(getPageNumber);
  const firstPageNumber = useSelector(getFirstPageNumber);
  const lastPageNumber = useSelector(getLastPageNumber);
  const dispatch = useDispatch();

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const newPage = Number(e.currentTarget.value);
    dispatch(
      setPage(newPage)
    );
  };

  return (
    <div className="NavigationButtons card card-body d-flex flex-row">
      <button
        type="button"
        className="btn btn-light flex-fill"
        value={currentPage - 1}
        disabled={currentPage <= firstPageNumber}
        onClick={handleButtonClick}
      >
        <span className="float-left">&larr;</span>
        <span>Previous page</span>
      </button>
      <button
        type="button"
        className="btn btn-light flex-fill"
        value={currentPage + 1}
        disabled={currentPage >= lastPageNumber}
        onClick={handleButtonClick}
      >
        <span className="float-right">&rarr;</span>
        <span>Next page</span>
      </button>
    </div>
  );
};

export default NavigationButtons;
