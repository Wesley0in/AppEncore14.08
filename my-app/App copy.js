import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaAutenticacao } from './src/TelaAutenticacao';
import { InputOTPScreen } from './src/InputOTPScreen';
import { TelaHome } from './src/TelaHome';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Autenticação">
        <Stack.Screen 
        name="Home" 
        component={TelaHome} 
        options={{title: 'Home', headerBackTitle: ''}}
        />
        <Stack.Screen 
        name="TelaAutenticação" 
        component={TelaAutenticacao} 
        />
        <Stack.Screen 
        name="InputOTP" 
        component={InputOTPScreen} 
        options={{title: 'Tela de Confirmação', headerBackTitle: ''}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;