import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from './components/button';

const App = () => {
  const [getButtonValue, setButtonValue] = useState(0);
  const [getResultantValue, setResultValue] = useState(0);
  const givenArray = [];
  const [collectedArray, setCollectedArray] = useState(givenArray);
  const [copiedArr, setCopiedArr] = useState(givenArray);
  let operatorTypesArr = ['+', 'x', '/', '-', '+/-', '%'];
  const getValueFromButton = (buttonValue) => {
    // setOperatorValue(null);
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
    setCollectedArray([]);
  };

  const getOperatorFromButton = (operatorValue) => {
    let resultantArr;
    if (getButtonValue !== 0) {
      resultantArr = [...collectedArray, getButtonValue, operatorValue];
    } else {
      let operatorFound = operatorTypesArr.find((ele) => ele === collectedArray[collectedArray.length - 1]);
      if (operatorFound) {
        collectedArray.pop();
      }
      resultantArr = [...collectedArray, operatorValue];
    }
    setCollectedArray(resultantArr);
    setButtonValue(0);
    setResultValue(0);
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
    } else if (sign === '/') {
      return firstValue / secondValue;
    } else if (sign === '%') {
      return (firstValue / 100) * secondValue;
    }
  }

  const resultCalculation = useCallback((copiedArr, operator) => {
    let beforeIntValue;
    let afterIntValue;
    let calculationResult;
    let indexOperator;
    for (let i = 0; i < copiedArr.length; i++) {
      if (copiedArr[i] === operator) {
        indexOperator = copiedArr.indexOf(copiedArr[i]);
        beforeIntValue = copiedArr[indexOperator - 1];
        afterIntValue = copiedArr[indexOperator + 1];
        calculationResult = calculate(copiedArr[i], beforeIntValue, afterIntValue);
        console.log(calculationResult, beforeIntValue);
        let resultantFoundIndexBefore = copiedArr.indexOf(beforeIntValue);
        if (resultantFoundIndexBefore > -1) {
          copiedArr[resultantFoundIndexBefore] = calculationResult;
        }
        copiedArr.splice(resultantFoundIndexBefore + 1, 1);
        copiedArr.splice(resultantFoundIndexBefore + 1, 1);
      }
    }
    return copiedArr;
  },[]);

  const getAnswerFromButton = () => {
    let copiedCollectionArr;
    if (getButtonValue !== 0) {
      setCollectedArray([...collectedArray, getButtonValue]);
      copiedCollectionArr = [...collectedArray, getButtonValue];
      setCopiedArr(copiedCollectionArr);
    } else {
      let operatorFound = operatorTypesArr.find((ele) => ele === collectedArray[collectedArray.length - 1]);
      if (operatorFound) {
        collectedArray.pop();
      }
      copiedCollectionArr = [...collectedArray];
      setCopiedArr(copiedCollectionArr);
    }
    setButtonValue(0);
  };

  useEffect(() => {
    let result;
    result = resultCalculation(copiedArr, '%');
    result = resultCalculation(result, '/');
    result = resultCalculation(result, 'x');
    result = resultCalculation(result, '+');
    result = resultCalculation(result, '-');
    if (result.length > 0) {
      setCollectedArray(result);
      setResultValue(result[0]);
    }
  },[copiedArr, resultCalculation]);

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
