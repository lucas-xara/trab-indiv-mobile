import React, { useState } from 'react'
import {
  Text, TextInput, TouchableOpacity, View,
  Image, Button, Alert, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { styled } from './style';
import Banner from '../../Assets/banner.jpg';
import { TextInputComponent } from '../../Components/TextInput';

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (value: string) => {
    setEmail(value)
    console.log('Valor do email: ' + value)
  }

  const handlePassword = (value: string) => {
    setPassword(value)
    console.log('Valor da senha: ', value);
  }

  const handleLogin = () => {
    Alert.alert('Botão clicado!')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styled.container}>
        <Text style={styled.title}>Bem vindo ao nosso segundo App!</Text>

        <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoValue={email}
          recebendoPlaceHolder="Digite seu email..."
        />

        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Digite sua senha..."
          recebendoTipoDoInput={true}
          recebendoBackgroundColor="red"
        />

         <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoValue={email}
        />

        <TouchableOpacity style={styled.button} onPress={handleLogin}>
          <Image
            style={{
              width: '100%',
              height: 50,
              position: 'absolute',
              borderRadius: 10,
            }}
            source={Banner}
            alt="fundo botão"
          />

          <Text style={styled.textButton}>
            Entrar
          </Text>
        </TouchableOpacity>

      </View>
    </TouchableWithoutFeedback>
  )
}