import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from "./src/Navigation/StackNavigator";
// import {Cart, Data} from "./src/store/index";
import store from "./src/store/index";

import BottomTabNavigator from "./src/Navigation/TabNavigator";
import {MyContext} from "./src/Context";

// const cart = Cart.create({cartList:[]});
// const data = Data.create({products:[]});
// const context = { cart , data};

const  App = () => {
    return (
           <MyContext.Provider value={store}>
               <NavigationContainer>
                   <BottomTabNavigator/>
               </NavigationContainer>
           </MyContext.Provider>
        // <HomeScreen/>
    );
}

export default App;