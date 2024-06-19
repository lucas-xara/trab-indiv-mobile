import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { styled } from './style';
import { useNavigation } from '@react-navigation/native';
import Background from "../../Assets/background.jpg";
import Mido from "../../Assets/shadows.gif";

export function Home() {

  const navigation = useNavigation();

  return (
    <View style={styled.container}>
      <ImageBackground source={Background} style={styled.background}>     
      <Image
            style={{
              alignSelf: 'center',
              height: 200,
              marginTop: -300,
              marginBottom: 0,
              resizeMode: "contain",
            }}
            source={Mido}
            alt="mido"
          />
      <View style={styled.textBox}>
      <Text style={styled.welcome}>
      Welcome</Text>
      <Text style={styled.shadows}>
      to the Cathedral of Shadows,</Text>    
      <Text style={styled.demons}>
      where demons gather...</Text> 
      </View>  
      </ImageBackground>
    </View>
  )
}
