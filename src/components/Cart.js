import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {observer} from 'mobx-react';
import {MyContext} from "../Context";

const Cart = ()=>{
    // const {cart} = useContext(MyContext);
    const store = useContext(MyContext);
    const _deleteOne = (value)=>{
        // cart.deleteOne(value);
        store.deleteToCart(value);
    }
    const _deleteAll = ()=>{
        store.deleteAll();
    }
    return (
        <View style={{marginTop:40}}>
            <View>
                <Text style={{textAlign:'center'}}>My Cart</Text>
            </View>
            <View>
                {/*header*/}
                <View style={{
                    flexDirection: 'row',
                    width: '100%',
                }}>
                    {/*Quantity*/}
                    <View style={{
                        width: '10%',
                        borderWidth: 1,
                    }}>
                        <Text style={{margin:10}}>Qty.</Text>
                    </View>
                    {/*Nom*/}
                    <View style={{
                        width: '50%',
                        borderWidth: 1,
                    }}>
                        <Text style={{margin:10}}>Nom</Text>
                    </View>
                    {/*Prix*/}
                    <View style={{
                        width: '20%',
                        borderWidth: 1,
                    }}>
                        <Text style={{margin:10}}>Prix</Text>
                    </View>
                    {/*Action*/}
                    <View style={{
                        width: '20%',
                        borderWidth: 1,
                    }}>
                        <Text style={{margin:10}}>Action</Text>
                    </View>
                </View>
                {/*body*/}
                { store.cartElement.map((value, key)=>{
                    return (<View key={key.toString()}>
                        <View style={{
                            flexDirection: 'row',
                            width: '100%',
                        }}>
                            {/*Quantity*/}
                            <View style={{
                                width: '10%',
                                borderWidth: 1,
                            }}>
                                <Text style={{margin:10}}>{value.quantity}</Text>
                            </View>
                            {/*Nom*/}
                            <View style={{
                                width: '50%',
                                borderWidth: 1,
                            }}>
                                <Text style={{margin:10}}>{value.nom}</Text>
                            </View>
                            {/*Prix*/}
                            <View style={{
                                width: '20%',
                                borderWidth: 1,
                            }}>
                                <Text style={{margin:10}}>{value.price} </Text>
                            </View>
                            {/*Action*/}
                            <View style={{
                                width: '20%',
                                borderWidth: 1,
                            }}>
                                <TouchableOpacity
                                    onPress={(value)=>{_deleteOne(value)}}
                                    style={{maxWidth: 100, margin:2, marginTop:15, borderRadius: 2, backgroundColor: '#bb0a1e', padding: 2,}}>
                                    <Text style={{color:'white', textAlign:'center'}}>Delete</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>)
                })}
                {/*les boutons*/}
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-end', padding: 10,}}>
                    <TouchableOpacity
                        onPress={_deleteAll}
                        style={{maxWidth: 200, borderRadius: 5, backgroundColor: '#bb0a1e', padding: 10,}}>
                        <Text style={{color: 'white'}}>Remove All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{maxWidth: 200, borderRadius: 5,  backgroundColor: '#619ed6', padding: 10, marginLeft: 20,}}>
                        <Text style={{color: 'white'}}>Buy Cart </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default observer(Cart);