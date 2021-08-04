import {Button, StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import React from "react";

const CustomerHeader = ({navigation}) => {
    return (
            <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                <View>
                    <Image source={require('./images/menu.png')} style={{width:30, height:30, tintColor:'white', marginLeft:10}}/>
                </View>
            </TouchableOpacity>
    );
};

export default CustomerHeader;