import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import ButtonI from "../../Assets/button.png";
import ButtonIcon from "../../Assets/login.png";
import { styled } from './style'

type ButtonComponentProps = {
  text: string;
  icon: any;
  onPress: () => void;
};

export function ButtonComponent({ text, icon, onPress }: ButtonComponentProps) {
  return (
    <TouchableOpacity style={styled.button} onPress={onPress}>
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
  );
}
