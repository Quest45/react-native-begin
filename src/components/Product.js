import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, ScrollView, Image, Button, TouchableOpacity} from "react-native";
import {getOneProductFromApi} from "../api/produits";
import {observer} from "mobx-react";
import {MyContext} from "../Context";
// import {useNavigation} from "@react-navigation/native";

const Product = observer(({navigation, route})=>{
    // const myContext = useContext(MyContext);
    // const {cart} = myContext;
    const store = useContext(MyContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {idProduct} = route.params;
    const _displayLoading = ()=>{
        return (
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' color="#0000ff" />
            </View>
        );
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
    const _displayProduct = ()=>{
       if(product){
           return (
               <ScrollView style={styles.scroll_view_container}>
                   <View style={{height: 400}}>
                       <Image
                           style={styles.image}
                           source={{uri: product.image}}
                       />
                   </View>
                   <Text style={styles.title_text}>{product.title}</Text>
                   <Text style={styles.description_text}>{product.description}</Text>
                   <Text style={styles.default_text}>Category : {product.category}</Text>
                   <Text style={styles.default_text}>Id : {product.id}</Text>
                   <Text style={styles.default_text}>Price : {product.price} Euro</Text>
                   <TouchableOpacity style={[styles.default_text, {marginBottom : 20, marginTop: 20}]}>
                       <Button style={styles.cart} title="Add Cart" onPress={_addToCart}>Add Cart</Button>
                   </TouchableOpacity>
               </ScrollView>
           )
       }
    }
    useEffect(async()=>{
      const data = await getOneProductFromApi(idProduct);
      setProduct(data);
      setLoading(false);
    }, [product]);
    return (
        <View style={styles.main_container}>
            { loading ?
                _displayLoading()
                :
                _displayProduct()
            }
        </View>
    );
})

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll_view_container: {
        flex: 1,
        backgroundColor:'white'
    },
    image: {
        height: '100%',
        resizeMode:'contain',
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description_text: {
        color: 'black',
        margin: 5,
        fontSize: 15,
        marginBottom: 15
    },
    default_text: {
        fontSize: 25,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
})


export default Product;