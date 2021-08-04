import React, {useEffect,useState, useContext} from 'react';
import {View, TextInput, Button, FlatList, Text, StyleSheet, ActivityIndicator} from 'react-native';
import  {getPostsFromApi} from '../api/produits';
// import store from '../store/index';
import {observer} from  'mobx-react';
import ListItem from "./ListItem";
import {MyContext} from "../Context";

const Search = ({navigation}) => {
    // const [data , setData] = useState([]);
    const store = useContext(MyContext);
    // const myContext = useContext(MyContext);
    // const {data} = myContext;

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
      useEffect(async ()=>{
          const apiData = await getPostsFromApi();
          // data.addProduct(apiData);
          store.setData(apiData);
          setLoading(false);
      });
    const _displayLoading = ()=>{
        return (
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' color="#0000ff" />
            </View>
        );
    }
    const _searchData = ()=>{
        // if(search.length > 0){
        //
        // }
        console.log('my search', search);
    }

    return (
        <View style={styles.main_container}>
            <TextInput placeholder='Titre du film' onChangeText={(e)=>setSearch(e)} style={[styles.inputStyle, { marginBottom: 10 }]}/>
            <Button title='Rechercher' onPress={()=>{}}/>
            {loading ? _displayLoading() : (
                <FlatList
                    // data={ data.products }
                    data={ store.data }
                    keyExtractor={(item) => item.id }
                    renderItem={({item}) => <ListItem product={item} navigation={navigation}/>}
                />
            )}
        </View>
        )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    inputStyle: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})
export default observer(Search);