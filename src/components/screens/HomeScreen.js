// import React, {useEffect, useState} from 'react';
// import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, Button} from 'react-native';
// import {getPostsFromApi} from '../../api/posts';
// import ListItem from "../ListItem";
//
// const HomeScreen = ({navigation}) => {
//     const [loading, setLoading] = useState(true);
//     const [data, setData] = useState([]);
//
//     useEffect(async ()=>{
//         let result = await getPostsFromApi();
//         setData([...data, ...result]);
//         setLoading(false);
//     }, []);
//
//     const goToHome1 = ()=> navigation.navigate("Home1");
//     const renderItem = ({ item }) => (
//         <ListItem title={item.title} userId={item.userId}/>
//     );
//     return (
//         <SafeAreaView style={styles.container}>
//             <View>
//                 <Button onPress={goToHome1} title="Go To Home 1"/>
//             </View>
//             {loading ?
//                 (<View style={{flex: 1, justifyContent:"center"}}>
//                     <ActivityIndicator size="large" color="#0000ff"/>
//                 </View> ): (
//                     <FlatList
//                         data={data}
//                         renderItem={renderItem}
//                         InitialNumToRender={4}
//                         keyExtractor={item => item.id}
//                     />
//                 )
//             }
//         </SafeAreaView>
//     );
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor:'black',
//         marginTop: StatusBar.currentHeight || 0,
//     }
// });
//
// export default HomeScreen;
import React from "react";
import { View, StyleSheet, Text, Button, SafeAreaView, Image, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
           <View style={styles.center}>
               <Text>This is the home screen</Text>
               <Button title="Go to details Screen" onPress={()=>navigation.navigate("Tab A", {
                   screen:'Details'
               })}/>
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

export default HomeScreen;