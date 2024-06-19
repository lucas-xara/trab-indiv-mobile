import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Pages/Home";
import { Profile } from "../Pages/Profile";


const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='TabsHome' component={Home} />
            <Tab.Screen name='TabsProfile' component={Profile} />
        </Tab.Navigator>
    );
}