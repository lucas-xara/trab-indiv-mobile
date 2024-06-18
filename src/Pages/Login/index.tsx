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
import ButtonI from "../../Assets/button.png";
import ButtonIcon from "../../Assets/login.png";
import { TextInputComponent } from "../../Components/TextInput";

export function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsername = (value: string) => {
    setUsername(value);
    console.log("Valor do username: " + value);
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
            recebendoFuncao={handleUsername}
            recebendoValue={username}
            recebendoPlaceHolder="username"
          />

          <TextInputComponent
            recebendoFuncao={handlePassword}
            recebendoValue={password}
            recebendoPlaceHolder="password"
            recebendoTipoDoInput={true}
          />

          <TouchableOpacity style={styled.button} onPress={handleLogin}>
            <Image
              style={{
                width: "100%",
                height: 80,
                position: "absolute",
                borderRadius: 10,
                opacity: 0.8,
              }}
              source={ButtonI}
              alt="fundo botão"
            />

            <Image
              style={{
                width: "50%",
                alignItems: "center",
                alignContent: "center",
                position: "absolute",
                resizeMode: "contain",
              }}
              source={ButtonIcon}
              alt="icon"
            />
            
            <Text style={styled.textButton}>Login</Text>
            
          </TouchableOpacity>

          <Image
            style={{
              width: "50%",
              height: 80,
              resizeMode: "contain",
            }}
            source={SMTlogo}
            alt="smt-logo"
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
