import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { styled } from "./style";
import Background from "../../Assets/background.jpg";
import Logo from "../../Assets/logo.png";
import SMTlogo from "../../Assets/smt-logo.png";
import ButtonI from "../../Assets/button.png"
import { TextInputComponent } from "../../Components/TextInput";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (value: string) => {
    setEmail(value);
    console.log("Valor do email: " + value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
    console.log("Valor da senha: ", value);
  };

  const handleLogin = () => {
    Alert.alert("Botão clicado!");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={Background} style={styled.background}>
        <View style={styled.container}>
          <Image
            style={{
              width: 180,
              height: 180,
              marginTop: 100,
              marginBottom: -10,
            }}
            source={Logo}
            alt="logo"
          />

          <Text style={styled.title}>Fusion App</Text>

          <TextInputComponent
            recebendoFuncao={handleEmail}
            recebendoValue={email}
            recebendoPlaceHolder="username"
          />

          <TextInputComponent
            recebendoFuncao={handlePassword}
            recebendoValue={password}
            recebendoPlaceHolder="password"
            recebendoTipoDoInput={true}
          />

          <TouchableOpacity style={styled.button} onPress={handleLogin}>
          <ImageBackground
              source={ButtonI}
            >
              <Text style={styled.textButton}>Login</Text>
            </ImageBackground>
          </TouchableOpacity>
          <Image
            style={{
              width: '50%',
              height: 80,
              resizeMode: 'contain',
            }}
            source={SMTlogo}
            alt="smt-logo"
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
