import React, {useCallback, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from './components/button';
import ClearIcon from './images/clear.png';

const App = () => {
  const [getButtonValue, setButtonValue] = useState(0);
  const [getResultantValue, setResultValue] = useState(0);
  const givenArray = [];
  const [collectedArray, setCollectedArray] = useState(givenArray);
  const [resultBoolean, setResult] = useState(false);
  let operatorTypesArr = ['+', '÷', 'x', '-', '+/-', '%'];
  const getValueFromButton = (buttonValue) => {
    setResultValue(0);
    setResult(true);
    let resultButtonValue = '';
    if (getButtonValue > 0 || (typeof getButtonValue === 'string' && getButtonValue === '.')) {
      if (getButtonValue.indexOf('.') !== -1) {
        if (buttonValue !== '.') {
          const getButtonsValue = getButtonValue.concat('',buttonValue);
          setButtonValue(getButtonsValue);
        }
      } else {
        let getButtonsValue = '';
        if (getResultantValue > 0) {
          getButtonsValue = resultButtonValue.concat('', buttonValue);
        } else {
          getButtonsValue = getButtonValue.concat('',buttonValue)
        }
        setButtonValue(getButtonsValue);
      }
    } else {
      setButtonValue(buttonValue);
    }
  };

  const valueToClear = () => {
    setButtonValue(0);
    setResultValue(0);
    setCollectedArray([]);
  };

  const valueToRemove = () => {
    if (getButtonValue > 0) {
      let str = typeof getButtonValue === 'string' ? getButtonValue : getButtonValue.toString();
      str = str.substring(0, str.length - 1);
      if (str === '') {
        setButtonValue(0);
      } else {
        setButtonValue(str);
      }
    }
    if (getResultantValue > 0) {
      let str = typeof getResultantValue === 'string' ? getResultantValue : getResultantValue.toString();
      str = str.substring(0, str.length - 1);
      if (str === '') {
        setResultValue(0);
      } else {
        setResultValue(str);
      }
    }
  }
  const getOperatorFromButton = (operatorValue) => {
    let resultantArr = [];
    let result = []; 
    console.log(resultBoolean, 'Resultant Button Boolean');
    setButtonValue(0);
    setResultValue(0);
    if (getButtonValue !== 0 && resultBoolean) {
      resultantArr = [...collectedArray, getButtonValue];
      if (resultantArr.length === 3) {
        result = resultCalculation(resultantArr);
        setResultValue(result[0]);
        setCollectedArray(result);
        setResult(false);
      }
    } else if (getResultantValue !== 0) {
      resultantArr = [...resultantArr, getResultantValue];
      if (resultantArr.length === 3) {
        result = resultCalculation(resultantArr);
        setResultValue(result[0]);
        setCollectedArray(result);
        setResult(false);
      }
    } else {
      console.log("Else Case");
      let operatorFound = operatorTypesArr.find((ele) => ele === collectedArray[collectedArray.length - 1]);
      if (operatorFound) {
        collectedArray.pop();
      }
      resultantArr = [...collectedArray];
    }
    resultantArr = [...resultantArr, operatorValue];
    setCollectedArray(resultantArr);
  };

  const calculate = (sign, value1, value2) => {
    let firstValue = typeof value1 === 'string' ? value1.indexOf('.') !== -1 ? parseFloat(value1) : parseInt(value1) : value1;
    let secondValue = typeof value2 === 'string' ? value2.indexOf('.') !== -1 ? parseFloat(value2) : parseInt(value2) : value2;
    if (sign === 'x') {
      return firstValue * secondValue;
    } else if (sign === '+') {
      return firstValue + secondValue;
    } else if (sign === '-') {
      return firstValue - secondValue;
    } else if (sign === '÷') {
      return firstValue / secondValue;
    } else if (sign === '%') {
      return (firstValue / 100) * secondValue;
    }
  }

  const resultCalculation = useCallback((copiedArr) => {
    let beforeIntValue;
    let afterIntValue;
    let calculationResult;
    let indexOperator;
    for (let i = 0; i < copiedArr.length; i++) {
      indexOperator = copiedArr.indexOf(copiedArr[i + 1]);
      beforeIntValue = copiedArr[indexOperator - 1];
      afterIntValue = copiedArr[indexOperator + 1];
      calculationResult = calculate(copiedArr[i + 1], beforeIntValue, afterIntValue);
      let resultantFoundIndexBefore = copiedArr.indexOf(beforeIntValue);
      if (resultantFoundIndexBefore > -1) {
        copiedArr[resultantFoundIndexBefore] = calculationResult;
      }
      copiedArr.splice(resultantFoundIndexBefore + 1, 1);
      copiedArr.splice(resultantFoundIndexBefore + 1, 1);
    }
    return copiedArr;
  },[]);

  const getAnswerFromButton = () => {
    let copiedCollectionArr;
    let result = [];
    if (getButtonValue !== 0) {
      let operatorFound = operatorTypesArr.find((ele) => ele === collectedArray[collectedArray.length - 1]);
      if (operatorFound) {
        copiedCollectionArr = [...collectedArray, getButtonValue];
        setCollectedArray(copiedCollectionArr);
        if (copiedCollectionArr.length === 3) {
          result = resultCalculation(copiedCollectionArr);
          if (result.length > 0) {
            setResultValue(result[0]);
            setButtonValue(0);
          }
          setCollectedArray([]);
        }
      } else {
        if (getResultantValue === 0) {
          setResultValue(getButtonValue);
        }
        setCollectedArray([]);
      }
    } else {
      copiedCollectionArr = [...collectedArray];
      let operatorFound = operatorTypesArr.find((ele) => ele === copiedCollectionArr[copiedCollectionArr.length - 1]);
      if (operatorFound) {
        copiedCollectionArr.pop();
        setResultValue(copiedCollectionArr[0]);
        setCollectedArray([]);
      }
      setButtonValue(0);
    }
  };
  return (
      <>
        <div className="App">
          <div className="container height-100">
            <div className="row height-40">
              <div className="col-12">
                <div className="header-navigation height-100">
                  <div className="top-bar">
                    {
                      collectedArray.length > 0 ?
                          <div className="top-value">{collectedArray.join(' ')}</div> : null
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
            <div className="row height-60">
              <div className="col-9">
                <div className="row height-100">
                  <div className="col-4">
                    <div className="button height-100 acButton">
                      <Button name="AC" onGetValue={valueToClear}/>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="img" img={<img src={ClearIcon} alt="clear icon" />} onGetValue={valueToRemove} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="%" onGetValue={getOperatorFromButton}/>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="9" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="8" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="7" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="6" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="5" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="4" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="3" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="2" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="1" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="00" onGetValue={getValueFromButton}/>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="0" onGetValue={getValueFromButton} />
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="button height-100">
                      <Button name="." onGetValue={getValueFromButton} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="row height-100">
                  <div className="col-12">
                    <div className="button height-100">
                      <Button name="÷" onGetValue={getOperatorFromButton} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button height-100">
                      <Button name="x" onGetValue={getOperatorFromButton} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button height-100">
                      <Button name="-" onGetValue={getOperatorFromButton} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button height-100">
                      <Button name="+" onGetValue={getOperatorFromButton} />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button height-100">
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
