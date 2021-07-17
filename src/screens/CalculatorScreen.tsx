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
            <View style={styles.row}>
                {/* Buttons */}
                <ButtonCalc text='7' />
                <ButtonCalc text='8'  />
                <ButtonCalc text='9' />
                <ButtonCalc text='X' color='#ff9427'/>
            </View>
            <View style={styles.row}>
                {/* Buttons */}
                <ButtonCalc text='4' />
                <ButtonCalc text='5'  />
                <ButtonCalc text='6' />
                <ButtonCalc text='-' color='#ff9427'/>
            </View>
            <View style={styles.row}>
                {/* Buttons */}
                <ButtonCalc text='1' />
                <ButtonCalc text='2'  />
                <ButtonCalc text='3' />
                <ButtonCalc text='+' color='#ff9427'/>
            </View>
            <View style={styles.row}>
                {/* Buttons */}
                <ButtonCalc text='0' widthButton />
                <ButtonCalc text='.'  />
                <ButtonCalc text='=' color='#ff9427'/>
            </View>



        </View>
    )
}
