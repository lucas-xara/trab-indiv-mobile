import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Pages/Home";


const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
    
    return (
        <Tab.Navigator>
            <Tab.Screen name='TabHome' component={Home} />
        </Tab.Navigator>
    )
}