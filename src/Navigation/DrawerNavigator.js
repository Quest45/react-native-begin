import React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";

import AboutScreen from "../components/screens/AboutScreen";
// import TabNavigator from "./TabNavigator";
import BottomTabNavigator from "./TabNavigator";
import { ContactStackNavigator } from "./StackNavigator";
import {Image, TouchableOpacity, View} from "react-native";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={BottomTabNavigator}/>
            <Drawer.Screen name="Contact" component={ContactStackNavigator}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;