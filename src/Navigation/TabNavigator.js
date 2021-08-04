import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  MainStackNavigator from "./StackNavigator";
import Cart from "../components/Cart";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return (
        <Tab.Navigator screenOptions={{

        }}>
            <Tab.Screen name="Acceuil" component={ MainStackNavigator }/>
            <Tab.Screen name="Cart" component={Cart}/>
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;