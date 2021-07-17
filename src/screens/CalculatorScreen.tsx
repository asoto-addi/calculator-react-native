import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import { useCalc } from '../hooks/useCalc';
import {styles} from '../theme/appTheme';



export const CalculatorScreen = () => {

    const     {
        number,
        numberOld,
        clear,
        positiveNegative,
        deleteLastNumber,
        btnDiv,
        btnMul,
        btnRes,
        btnSum,
        buildNumber,
        calc
    } = useCalc()
  



  
  return (
    <View style={styles.calculatorContainer}>
      {numberOld !== '0' && <Text style={styles.resultSmall}>{numberOld}</Text>}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      {/* Container buttons */}
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="C" color="#9b9b9b" action={clear} />
        <ButtonCalc text="+/-" color="#9b9b9b" action={positiveNegative} />
        <ButtonCalc text="del" color="#9b9b9b" action={deleteLastNumber} />
        <ButtonCalc text="/" color="#ff9427" action={btnDiv} />
      </View>
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="7" action={buildNumber} />
        <ButtonCalc text="8" action={buildNumber} />
        <ButtonCalc text="9" action={buildNumber} />
        <ButtonCalc text="X" color="#ff9427" action={btnMul} />
      </View>
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="4" action={buildNumber} />
        <ButtonCalc text="5" action={buildNumber} />
        <ButtonCalc text="6" action={buildNumber} />
        <ButtonCalc text="-" color="#ff9427" action={btnRes} />
      </View>
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="1" action={buildNumber} />
        <ButtonCalc text="2" action={buildNumber} />
        <ButtonCalc text="3" action={buildNumber} />
        <ButtonCalc text="+" color="#ff9427" action={btnSum} />
      </View>
      <View style={styles.row}>
        {/* Buttons */}
        <ButtonCalc text="0" action={buildNumber} widthButton />
        <ButtonCalc text="." action={buildNumber} />
        <ButtonCalc text="=" color="#ff9427" action={calc} />
      </View>
    </View>
  );
};

