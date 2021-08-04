import React from "react";
import { createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "../components/screens/HomeScreen";
import DetailsScreen from "../components/screens/DetailsScreen";
import ContactScreen from "../components/screens/ContactScreen";
import AboutScreen from "../components/screens/AboutScreen";
import CustomerHeader from "../CustomerHeader";
import Search from "../components/Search";
import Product from "../components/Product";

const Stack = createStackNavigator();

const MainStackNavigator = () =>{
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:"#9AC4F8",
                }
            }}
        >
            <Stack.Screen name="Home" component={Search}/>
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    );
}

// const ContactStackNavigator = ({navigation})=>{
//     return (
//         <Stack.Navigator  screenOptions={{
//             headerStyle:{
//                 backgroundColor:"#9AC4F8",
//             }
//         }}>
//             <Stack.Screen name="Contact" component={ContactScreen} options={{
//                 headerLeft: ()=> <CustomerHeader navigation={navigation}/>
//             }}/>
//             <Stack.Screen name="About" component={AboutScreen} />
//         </Stack.Navigator>
//     );
// }

export  default MainStackNavigator;