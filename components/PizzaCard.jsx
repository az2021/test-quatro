import React from 'react';
import {View, StyleSheet,Text,Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PizzaCard = ({url , title,price}) => {
    return (
        <View style={styles.container}>
            <View style={styles.description}>
                 <Text style={styles.title}>{title}</Text>
                 <View style={styles.info}>
                     <Text style={styles.price}>{price}</Text>
                     <MaterialCommunityIcons name="star" size={15} color="black"/>
                     <Text style={styles.starValue}>5.1</Text>
                 </View>
            </View>
            <Image source={url} style={styles.img}/>
            <View style={styles.addToCard}>
                 <MaterialCommunityIcons name="plus" size={30} color="white"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafafa",
        borderRadius: 10,
        elevation:6,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:10,
        marginTop:25,
        padding:20
    },
    description:{
        
    },
    img:{
        width: 80,
        height: 80,
        borderRadius: 10
    },
    price:{
        
    },
    title:{
    fontSize:20,
    fontWeight:"bold"
    },
    starValue:{

    },
    info:{
        flexDirection: "row",
        justifyContent:"space-around",
        marginTop: 5
    },
    addToCard:{
        position: "absolute",
        bottom:0,
        width:80,
        height:35,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor:"dodgerblue",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default PizzaCard;
