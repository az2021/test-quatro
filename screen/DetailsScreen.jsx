import React from 'react';
import {View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
const DetailsScreen = ({route}) => {
    const { rest, type,info,url } = route.params;
    return (
        <View style={styles.container}>
            <Image source={url} style={styles.img}/>
            <View style={styles.description}>
                 <Text style={styles.rest}>{rest}</Text>
                 <Text style={styles.type}>{type}</Text>
                 <Text style={styles.info}>{info}</Text>
            </View> 
            <TouchableOpacity style={styles.addToCard}>
                 <MaterialCommunityIcons name="plus" size={30} color="white"/>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
       
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        paddingHorizontal:30
    },
    description:{
       marginTop:20,
       alignSelf:"flex-start",
        marginLeft:10
    },
    img:{

        height: 250,
        width:250,
        borderRadius: 50,
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
    addToCard:{
        alignSelf:"stretch",
        backgroundColor:"dodgerblue",
        justifyContent: "center",
        alignItems: "center",
        marginTop:20,
        padding:10
    }
   
})
export default DetailsScreen;
