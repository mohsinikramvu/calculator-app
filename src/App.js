import React, { useState } from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'



function App() {


  // const [getButtonValue,setButtonValue] = useState([]);
  // const resultantArr = [...getButtonValue];

  // const [getButtonValue,setButtonValue] = useState("");

  const getValueFromButton = (buttonValue) => {
    console.log(buttonValue.value);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-navigation">
              <span>Mohsin</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <div className="button">
                  <button>AC</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button>+/-</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button>%</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="9" onClick={getValueFromButton}>9</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="8" onClick={getValueFromButton}>8</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="7" onClick={getValueFromButton}>7</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="6" onClick={getValueFromButton}>6</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="5" onClick={getValueFromButton}>5</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="4" onClick={getValueFromButton}>4</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="3" onClick={getValueFromButton}>3</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="2" onClick={getValueFromButton}>2</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="1" onClick={getValueFromButton}>1</button>
                </div>
              </div>
              <div className="col-8">
                <div className="button">
                  <button type="button" value="0" onClick={getValueFromButton}>1</button>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <button type="button" value="." onClick={getValueFromButton}>.</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-12">
                <div className="button">
                  <button>/</button>
                </div>
              </div>
              <div className="col-12">
                <div className="button">
                  <button>x</button>
                </div>
              </div>
              <div className="col-12">
                <div className="button">
                  <button>-</button>
                </div>
              </div>
              <div className="col-12">
                <div className="button">
                  <button>+</button>
                </div>
              </div>
              <div className="col-12">
                <div className="button">
                  <button>=</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
