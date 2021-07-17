import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  widthButton?: boolean,
  action: (numberText:string) => void
}

export const ButtonCalc = ({text, color = '#2d2d2d', widthButton=false, action}: Props) => {
  return (

    <TouchableOpacity
        onPress={()=>action(text)}
     >
        <View style={{
            ...styles.button, 
            backgroundColor: color,
            width: (widthButton) ? 180 : 80
            }}>
        <Text
            style={{
            ...styles.buttonText,
            color: color === '#9b9b9b' ? 'black' : 'white',
            }}>
            {text}
        </Text>
        </View>
    </TouchableOpacity>

  );
};
