import * as React from 'react';
import { detectType } from '../convert';
import Type from './Type';
import NavigationButtons from './NavigationButtons';
import Charmap from './Charmap';
import Inspector from './Inspector';
import './App.css';

const debug = false;

const App: React.FC = () => {
  const [input, setInput] = React.useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e =>
    setInput(e.currentTarget.value);

  const type = React.useMemo(() => detectType(input.trim()), [input]);

  return (
    <div className="App container">
      {debug && (
        <>
          <div>
            <label htmlFor="App-value">
              <strong>Value</strong>
            </label>
            <br />
            <input
              id="App-value"
              className="form-control"
              type="text"
              value={input}
              onChange={handleChange}
            />
          </div>
          <div>
            <strong>Output</strong>
            <br />
            <output>
              <Type type={type} />
            </output>
          </div>
        </>
      )}
      <div className="row">
        <div className="col-xl-10 col-lg-12 mt-5 mb-5">
          <NavigationButtons />
          <Charmap />
          <NavigationButtons />
        </div>
        <div className="col-xl-2 col-lg-12 mt-5 mb-5">
          <Inspector />
        </div>
      </div>
    </div>
  );
};

export default App;
