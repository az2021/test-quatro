import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stepper = ({skip ,step,back}) => {
    return ( 
        <View style={styles.main}>
            {renderHeader(step,skip,back)}
            <View style={styles.middle}>
               {renderBody(step)}
            </View>
            <View style={styles.bottom}>
                    {renderBottom(step)}
            </View>
    </View>
    );
}

const renderHeader =(step,skip,back)=>{
    if (step=="one") {
        return (
            <View style={[styles.topOne,styles.top]}>
                <TouchableOpacity onPress={skip}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
        );
    }else{
        return (
            <View style={[styles.topTwo,styles.top]}>
                <TouchableOpacity onPress={back}>
                    <Text>back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={skip}>
                    <Text>Skip</Text>
                </TouchableOpacity>
        </View>
        )
    }
}

const renderBody = (step) => {
    let title = "Find The food you want"
    let description = "Our app help you find the right food for every mood,any time & day say"
    let url = require("../assets/laravel.png")
    if (step=="two") {
        title="We'll have it delivered"
        description = "Our hassle free delivery service is world class and will have your order delivered to any address of your specification."
        url = require("../assets/laravel.png")
    }
    
    return (
        <>
             <View>
                     <Image source={url}/>
                </View>
                 <View style={styles.text}>
                     <Text  style={styles.title}>{title}</Text>
                     <Text  style={styles.description}>{description}</Text>
                 </View>
        </>
    )
}

const renderBottom = (step)=>{
    return (
    <>
                    <View style={ step == "one"?styles.dotContainer:styles.dotContainerReverse}>
                        <View style={styles.dotWidth}></View>
                        <View style={[styles.dotRadius,step == "one"?styles.left:styles.right]}></View>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.fab}>
                            
                            <MaterialCommunityIcons name="arrow-right" color="white"  size={25}/>
                        </View>
                    </TouchableOpacity>
    </>
    )
}
const styles = StyleSheet.create({ 
    main:{
        paddingHorizontal: 20,
        flex: 1 ,
        backgroundColor:"white",
        alignItems: "stretch"

    },
    top:{
        height: 70,
        paddingTop:22,
        flexDirection: "row",
        alignItems: "center"
    },
    topOne:{
        justifyContent: "flex-end",
       
    },
    topTwo:{
        justifyContent: "space-between",
       
    },
    middle:{
        flex: 1  ,
        justifyContent:"center",
        alignItems: "center",
    },
    bottom:{

        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
        color: "white",
        height:100,
    },
    fab:{
        width:40,
        height: 40,
        backgroundColor: "dodgerblue",
        justifyContent:"center",
        alignItems: "center",
        borderRadius:40
    },
    dotContainer:{
        flexDirection: "row", 
    },
    dotContainerReverse:{
        flexDirection: "row-reverse", 
    },
    title:{
        fontSize:35,
        textAlign: "center",
        color:"dodgerblue"
    },
    dotWidth:{
     backgroundColor:"dodgerblue",
     height:10,
     width: 35,
     borderRadius:5
    },
    dotRadius:{
        width:10,
        height:10,
        borderRadius:20,
        backgroundColor: "#e6e6e6"
    },
    left:{
        marginLeft:5,
    },
    right:{
        marginRight:5,
    },
    description:{
        textAlign: "center",
        marginTop:5,
    },
        text:{
            marginTop:10,
            justifyContent: "center",
            alignItems: "center"
        }
    })

export default Stepper;