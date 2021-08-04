import React from "react";
import {View, StyleSheet, Text, Button} from "react-native";

const About = ({navigation}) => {
    return (
        <View style={styles.center}>
            <Text>This is the contact screen</Text>
            <Button title="Go to About Screen" onPress={()=>navigation.navigate("About")}/>
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

export default About;