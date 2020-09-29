import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './fonts/Scientific_Calculator_LCD.ttf';
import Button from './components/button';


function App() {

  const [showButtonValue, setShowButtonValue] = useState("0");
  // const [getButtonValue,setButtonValue] = useState([]);
  // const resultantArr = [...getButtonValue];

  // const [getButtonValue,setButtonValue] = useState("");

  const getValueFromButton = (buttonValue) => {
    setShowButtonValue(buttonValue);
    // console.log(buttonValue.value);
  }

  const valueToClear = () => {
    setShowButtonValue("0");    
  }

  // const clearValue = () => {
  //   setShowButtonValue("0");
  // }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-navigation">
              <span>{showButtonValue}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-4">
                <div className="button">
                  <Button name="AC" onGetValue={valueToClear}/>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="+/-" onGetValue={getValueFromButton}/>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="%" onGetValue={getValueFromButton}/>
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="9" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="9" onClick={getValueFromButton}>9</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="8" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="8" onClick={getValueFromButton}>8</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="7" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="7" onClick={getValueFromButton}>7</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="6" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="6" onClick={getValueFromButton}>6</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="5" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="5" onClick={getValueFromButton}>5</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="4" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="4" onClick={getValueFromButton}>4</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="3" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="3" onClick={getValueFromButton}>3</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="2" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="2" onClick={getValueFromButton}>2</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="1" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="1" onClick={getValueFromButton}>1</button> */}
                </div>
              </div>
              <div className="col-8">
                <div className="button">
                  <Button name="0" onGetValue={getValueFromButton} />
                  {/* <button type="button" name="0" onClick={getValueFromButton}>1</button> */}
                </div>
              </div>
              <div className="col-4">
                <div className="button">
                  <Button name="." onGetValue={getValueFromButton} />
                  {/* <button type="button" name="." onClick={getValueFromButton}>.</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-12">
                <div className="button">
                  <Button name="/" onGetValue={getValueFromButton} />
                  {/* <button>/</button> */}
                </div>
              </div>
              <div className="col-12">
                <div className="button">
                  <Button name="x" onGetValue={getValueFromButton} />
                  {/* <button>x</button> */}
                </div>
              </div>
              <div className="col-12">
                <div className="button">
                  <Button name="-" onGetValue={getValueFromButton} />
                  {/* <button>-</button> */}
                </div>
              </div>
              <div className="col-12">
                <div className="button">
                  <Button name="+" onGetValue={getValueFromButton} />
                  {/* <button>+</button> */}
                </div>
              </div>
              <div className="col-12">
                <div className="button">
                  <Button name="=" onGetValue={getValueFromButton} />
                  {/* <button>=</button> */}
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
