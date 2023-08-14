import * as React from 'react';
import 'react-native-gesture-handler';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TelaAutenticacao } from './src/TelaAutenticacao';
import { InputOTPScreen } from './src/InputOTPScreen';
import { TelaHome } from './src/TelaHome';

import Routes from './src/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Routes />
  );
}

