import React from 'react';
import {View, StyleSheet,Image,Text} from 'react-native';

const FastFoodCard = ({url,text,color,background}) => {
    return (
        <View style={[styles.container,background]}>
            <Image source={url}/>
            <Text style={[styles.text,color]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:15,
        height:150,
        width: 100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
        elevation:6,
        marginHorizontal:10,
        marginVertical:25,
       
    },
    text:{
        marginTop:15,
        textAlign: "center",
        fontWeight: "bold"
    }

})

export default FastFoodCard;
