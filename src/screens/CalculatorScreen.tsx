import React from 'react'
import { Text, View } from 'react-native'
import { ButtonCalc } from '../components/ButtonCalc'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>  
            <Text style={styles.resultSmall}>4,500.00</Text>
            <Text style={styles.result}>1,500.00</Text>

            {/* Container buttons */}
            <View style={styles.row}>
                {/* Buttons */}
                <ButtonCalc text='C' color='#9b9b9b'/>
                <ButtonCalc text='+/-'  color='#9b9b9b'/>
                <ButtonCalc text='del' color='#9b9b9b'/>
                <ButtonCalc text='/' color='#ff9427'/>
            </View>


        </View>
    )
}
