import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { ButtonComponent } from "../../Components/Button";
import { styled } from './style';
import Logout from '../../Assets/logout.png'
import { useNavigation } from '@react-navigation/native';

export function Profile() {

  const navigation = useNavigation();

  const handleLogout = () =>{
    navigation.navigate("StackLogin", {name:"Login"})
  }

  return (
    <View style={styled.container}>
      <Text style={styled.title}>
        Estamos na pagina Profile!
      </Text>

      <ButtonComponent 
      recebendoTitle="Sair"
      recebendoIcon={Logout}
      recebendoFuncao={handleLogout}/>
      

    </View>
  )
}
