import * as React from 'react';
import { Button, View, Text } from 'react-native';

export function TelaHome({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
        title="Ir para Autenticação"
        onPress={() => navigation.navigate('TelaAutenticação')}
      />        
      </View>
    );
  }