import React from "react";
import {View, StyleSheet, Text, Button} from "react-native";

const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.center}>
            <Text>This is the about screen</Text>
            <View>
                <Button title="Go to details screen" onPress={()=>navigation.navigate("Details")}/>
            </View>
            <View style={{marginTop:20}}>
                <Button title="Go to home screen" onPress={()=>navigation.navigate("Tab A", {
                    screen: 'Home',
                })}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default AboutScreen;