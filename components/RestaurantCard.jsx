import React from 'react';
import {View, StyleSheet,Image,Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({info,type,rest,url}) => {
    navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.container} onPress= {() =>  navigation.navigate("Details",{
            rest: rest,
            type:type,
            info:info,
            url: url
          })}>
             <Image source={url} style={styles.img}/>
            <View style={styles.description}>
                 <Text style={styles.rest}>{rest}</Text>
                 <Text style={styles.type}>{type}</Text>
                 <Text style={styles.info}>{info}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
       
        borderRadius: 10,
        flexDirection:"row",
        marginHorizontal:10,
        marginTop:25,
    },
    description:{
       marginLeft:20
    },
    img:{
        width: 80,
        height: 80,
        borderRadius: 10
    },
    rest:{
        fontSize:20,
        fontWeight:"bold"
    },
    type:{
        fontSize:16,
        fontWeight:"bold"
    },
    info:{
        fontSize:12,
        fontWeight:"bold",
        color: "gray"
    },
   
})


export default RestaurantCard;
