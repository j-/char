import * as React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { Type, convertFrom, modules } from '../convert';
import TypeLabel from './Type';
import { getActiveCodePoint, getActiveConvertType } from '../store';
import { setActive } from '../store/actions';

export interface Props {
  type: Type;
  selectOnFocus?: boolean;
}

const TypeInput: React.FC<Props> = ({ type, selectOnFocus }) => {
  const { to, from, pattern } = modules.get(type);
  // Store
  const dispatch = useDispatch();
  const activeType = useSelector(getActiveConvertType);
  const activeCodePoint = useSelector(getActiveCodePoint);
  const activeChar = from(activeCodePoint);
  // State  
  const [value, setValue] = React.useState(activeChar || '');
  const [hasFocus, setHasFocus] = React.useState(false);
  // Props
  const componentClassName = classNames('TypeInput form-group mb-2', {
    'was-validated': hasFocus,
  })
  const inputClassName = classNames('form-control', {
    'border-dark': activeType === type,
  })
  const inputId = `TypeInput-${type}`;
  // Handlers
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    const codePoint = to(value);
    setValue(value);
    // Invalid character. Exit early.
    if (codePoint === null) return;
    dispatch(
      setActive(codePoint, type)
    );
  };
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setHasFocus(true);
    if (selectOnFocus) {
      e.currentTarget.select();
    }
  };
  const handleBlur: React.FocusEventHandler = (e) => {
    setHasFocus(false);
  };
  // Update input value when store value changes
  React.useEffect(() => {
    // Don't change my value if I'm still typing
    if (hasFocus) return;
    setValue(
      convertFrom(activeCodePoint, type) || ''
    );
  }, [hasFocus, activeCodePoint, type]);
  return (
    <div className={componentClassName}>
      <label htmlFor={inputId} className="d-block mb-0 text-truncate">
        <TypeLabel type={type}/>
      </label>
      <input
        id={inputId}
        className={inputClassName}
        type="text"
        value={value}
        pattern={pattern.source}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default TypeInput;
