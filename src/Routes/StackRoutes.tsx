import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "../Pages/Login";
import { BottomTabsRoutes } from "./BottomTabsRoutes";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    
    return (
        
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="StackLogin" component={Login}/>
                {/* <Stack.Screen name="StackTabsPages" component={BottomTabsRoutes}/> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}