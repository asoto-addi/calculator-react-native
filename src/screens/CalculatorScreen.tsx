import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [numberOld, setNumberOld] = useState('0');
  const [number, setNumber] = useState('0');

  const clear = () => {
    setNumber('0');
  };

  const buildNumber = (numberText: string) => {
    //No aceptar doble punto
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      //punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);
        //Evaluar si es otro cero y hay un punto

      } else if (numberText === '0' && number.includes('.')) {
       
        setNumber(number + numberText);

      //evaluar si no es otro 0 y no tiene punto
    } else if (numberText !== '0' && !number.includes('.')){
        setNumber(numberText)
        //avoid 000.0
      }else if( numberText === '0' && !number.includes('.')){
        setNumber(number)
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteLastNumber=()=>{
      let negative = ''
      let temp = number 
      if (number.includes('-')){
          negative='-'
          temp=number.substr(1)
      }
      if(temp.length > 1){
          setNumber(negative  + temp.slice(0,-1))
      }else {
          setNumber('0')
      }

  }


  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>{numberOld}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Container buttons */}
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="C" color="#9b9b9b" action={clear} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="del" color="#9b9b9b" action={deleteLastNumber} />
        <ButtonCalc text="/" color="#ff9427" action={clear} />
      </View>
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#ff9427" action={clear} />
      </View>
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#ff9427" action={clear} />
      </View>
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#ff9427" action={clear} />
      </View>
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="0" action={buildNumber} widthButton />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#ff9427" action={clear} />
      </View>
    </View>
  );
};
