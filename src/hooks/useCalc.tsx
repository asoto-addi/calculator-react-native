import {useRef, useState} from 'react';

enum Operators {
  sum,
  res,
  mul,
  div,
}

export const useCalc = () => {
  const [numberOld, setNumberOld] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setNumberOld('0');
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
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
        //avoid 000.0
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
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

  const deleteLastNumber = () => {
    let negative = '';
    let temp = number;
    if (number.includes('-')) {
      negative = '-';
      temp = number.substr(1);
    }
    if (temp.length > 1) {
      setNumber(negative + temp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberToPrevious = () => {
    if (number.endsWith('.')) {
      setNumberOld(number.slice(0, -1));
    } else {
      setNumberOld(number);
    }
    setNumber('0');
  };

  const btnDiv = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.div;
  };

  const btnMul = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.mul;
  };
  const btnRes = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.res;
  };

  const btnSum = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.sum;
  };

  const calc = () => {
    const num1 = Number(number);
    const num2 = Number(numberOld);
    switch (lastOperation.current) {
      case Operators.sum:
        setNumber(`${num1 + num2}`);

        break;
      case Operators.res:
        setNumber(`${num2 - num1}`);

        break;
      case Operators.mul:
        setNumber(`${num1 * num2}`);

        break;
      case Operators.div:
        setNumber(`${num2 / num1}`);

        break;
    }

    setNumberOld('0');
  };

  return {
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
  }


};


