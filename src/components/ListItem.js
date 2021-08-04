import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, TouchableHighlight, Button} from "react-native";
import {observer} from "mobx-react";
import {MyContext} from "../Context";

const ListItem = ({product, navigation}) =>{
    // const navigation = useNavigation();
    // const {cart} = useContext(MyContext);
    const store = useContext(MyContext);
    const _productItem = ()=>{
        navigation.navigate('Product', {idProduct: product.id});
    }
    const _addToCart = ()=>{
        const element =  {
            id : product.id,
            nom: product.title,
            price: product.price,
            quantity:1
        };
        // cart.addToCart(element);
        store.addToCart(element);
    }
    return (
        <TouchableOpacity onPress={_productItem} style={styles.main_container}>
            <Image
                style={styles.image}
                source={{uri: product.image}}
            />
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.title_text}>{product.title}</Text>
                    <Text style={styles.vote_text}>{product.price} Euro</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_text} numberOfLines={4}>{product.description}</Text>
                </View>
                <View style={styles.cart_container}>
                    <Button style={styles.cart} title="Add Cart"  onPress={_addToCart}>Add Cart</Button>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
        main_container: {
            height: 190,
            flexDirection: 'row',
            marginBottom:30,
        },
        image: {
            width: 120,
            height: 180,
            margin: 5,
            resizeMode:'cover',
            backgroundColor: 'gray'
        },
        content_container: {
            flex: 1,
            margin: 5
        },
        header_container: {
            flex: 3,
            flexDirection: 'row'
        },
        title_text: {
            fontWeight: 'bold',
            fontSize: 20,
            flex: 1,
            flexWrap: 'wrap',
            paddingRight: 5
        },
        vote_text: {
            fontWeight: 'bold',
            fontSize: 26,
            color: '#666666'
        },
        description_container: {
            flex: 6
        },
        description_text: {
            fontStyle: 'italic',
            color: '#666666'
        },
        cart_container: {
            flex: 2,
        },
        cart:{
            textAlign: 'center',
            backgroundColor: 'red',
            color:'red',
            fontSize: 14
        },
        date_text: {
            textAlign: 'right',
            fontSize: 14
        }
    // item: {
    //     flex: 1,
    //     flexDirection:'row',
    //     backgroundColor: '#718687',
    //     padding: 20,
    //     marginVertical: 8,
    // },
    // title: {
    //     fontSize: 20,
    //     fontStyle: 'italic',
    //     textTransform:'uppercase',
    //     fontWeight:'bold'
    // },
    // body:{
    //     fontSize: 16,
    //     marginLeft:10
    // },
    // image:{
    //     borderRadius:50,
    //     width: '100%',
    //     height: '100%'
    // },
    // imageView:{
    //     width:100,
    //     height:100
    // },
    // button:{
    //     backgroundColor: '#BAACEB',
    //     alignItems:'center',
    //     width: 150,
    //     paddingTop: 10,
    //     paddingBottom: 10,
    //     marginTop: 20,
    //     borderRadius: 10,
    // }
})
export default observer(ListItem);
