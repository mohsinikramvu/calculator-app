import React, {useEffect, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from './components/button';


const App = () => {

  const [getButtonValue, setButtonValue] = useState(0);
  const [getResultantValue, setResultValue] = useState(0);
  const [getOperatorValue, setOperatorValue] = useState(null);
  const givenArray = [];
  const [collectedArray, setCollectedArray] = useState(givenArray);

  const getValueFromButton = (buttonValue) => {
    if (getButtonValue > 0) {
      if (getButtonValue.indexOf('.') !== -1) {
        if (buttonValue !== '.') {
          const getButtonsValue = getButtonValue.concat('',buttonValue);
          setButtonValue(getButtonsValue);
        }
      } else {
        const getButtonsValue = getButtonValue.concat('',buttonValue);
        setButtonValue(getButtonsValue);
      }
    } else {
      setButtonValue(buttonValue);
    }
  };

  const valueToClear = () => {
    setButtonValue(0);
    setResultValue(0);
  };

  const getOperatorFromButton = (operatorValue) => {
    if (collectedArray[collectedArray.length - 1] === getButtonValue) {
      collectedArray.pop(getButtonValue);
      // setCollectedArray([]);
      // setOperatorValue(operatorValue);
      // setCollectedArray([...collectedArray,getResultantValue]);
    }
    // else {
    //   setCollectedArray([]);
      setOperatorValue(operatorValue);
      setCollectedArray([...collectedArray,getButtonValue]);
    // }
    setButtonValue(0);
  };

  useEffect(() => {
    if (getOperatorValue !== null) {
      setCollectedArray([...collectedArray, getOperatorValue]);
      // setButtonValue(0);
    }
  },[getOperatorValue]);

  const getAnswerFromButton = () => {
    setCollectedArray([...collectedArray, getButtonValue]);
    console.log(collectedArray);
    if (collectedArray.length > 0) {
      var val1 = null;
      var val2 = null;
      var result = null;
      for(let i = 0; i <= collectedArray.length; i++) {
        if (collectedArray[i] === '+') {
          val1 = collectedArray[i - 1];
          if (val1.indexOf('.') !== -1 && getButtonValue.indexOf('.') !== -1) {
            val1 = parseInt(val1);
            val2 = parseInt(getButtonValue);
          } else {
            val1 = parseFloat(val1);
            val2 = parseFloat(getButtonValue);
          }
          result = val1 + val2;
        }
        // else if (collectedArray[i] === '-') {
        //   val1 = collectedArray[i - 1];
        //   if (val1.indexOf('.') !== -1 && getButtonValue.indexOf('.') !== -1) {
        //     val1 = parseInt(val1);
        //     val2 = parseInt(getButtonValue);
        //   } else {
        //     val1 = parseFloat(val1);
        //     val2 = parseFloat(getButtonValue);
        //   }
        //   result = val1 - val2;
        // }
        setResultValue(result);
      }
    }
  };

  // console.log(collectedArray);

  return (
      <>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-navigation">
                  <div className="top-bar">
                    {
                      collectedArray.length > 0 ?
                          <span className="top-value">{collectedArray}</span> : null
                    }
                    {
                      getResultantValue !== 0 ?
                          <span>{getResultantValue}</span>
                          : <span>{getButtonValue}</span>
                    }
                  </div>
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
                      <Button name="+/-" onGetValue={getOperatorFromButton}/>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="%" onGetValue={getOperatorFromButton}/>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="9" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="8" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="7" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="6" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="5" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="4" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="3" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="2" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="1" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="button">
                      <Button name="0" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button">
                      <Button name="." onGetValue={getValueFromButton} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row">
                  <div className="col-12">
                    <div className="button">
                      <Button name="/" onGetValue={getOperatorFromButton} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button">
                      <Button name="x" onGetValue={getOperatorFromButton} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button">
                      <Button name="-" onGetValue={getOperatorFromButton} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button">
                      <Button name="+" onGetValue={getOperatorFromButton} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button">
                      <Button name="=" onGetValue={getAnswerFromButton} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default App;
