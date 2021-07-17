import React from 'react'
import { SafeAreaView} from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen'
import { styles } from './src/theme/appTheme'

const App = () => {
  return (
    <SafeAreaView style={styles.fund}>
      <CalculatorScreen/>
    </SafeAreaView>
    
  )
}

export default App
