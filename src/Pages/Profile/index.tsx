import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import ButtonComponents from './ButtonComponents';
import { styled } from './style';

export function Profile() {

  const handleLogout = () =>{
    Alert.alert("Sair")
  }

  return (
    <View style={styled.container}>
      <Text style={styled.title}>
        Estamos na pagina Profile!
      </Text>

      <ButtonComponents title='Sair' recebendoFuncao={handleLogout}/>

    </View>
  )
}
