import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SearchInput = () => {
    return (
      <>
        <MaterialCommunityIcons name="arrow-left" size={15} color="black" style={styles.iconLeft}/>
        <TextInput style={styles.input}/>
        <MaterialCommunityIcons name="filter" size={15} color="black" style={styles.iconRight}/>
      </>
    );
}

const styles = StyleSheet.create({
    
    iconRight:{
        marginRight:30,
        // width:30
    },
    iconLeft:{
        marginLeft:30,
        // width:30
    },
    input:{
        flex:1,
        marginHorizontal:10
    }
})

export default SearchInput;
