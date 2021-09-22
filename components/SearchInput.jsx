import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SearchInput = () => {
    return (
        <View styles={styles.container}>
            <MaterialCommunityIcons name="arrow-left" size={15} color="black"/>
            <TextInput style={styles.input}/>
            <MaterialCommunityIcons name="filter" size={15} color="black"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:40,
        flexDirection:"row",
    },
    styles:{
        
    }
})

export default SearchInput;
