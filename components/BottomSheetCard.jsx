import React from 'react';
import {View, StyleSheet,ScrollView ,Text} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import RestaurantCard from './RestaurantCard';

const BottomSheetCard = () => {
    return (
        <View style={{flex: 1}}>
        <BottomSheet isOpen>
            {(onScrollEndDrag) => (
            <ScrollView onScrollEndDrag={onScrollEndDrag}>
               <RestaurantCard rest="Karim 24" type="Fast Food Local" info="5km, Livraison en 24 Minutes" url={require("../assets/pizza.jpg")}/> 
               <RestaurantCard rest="Prince De Shawarma" type="Africain, Fast food" info="9km, Livraison en 30 Minutes" url={require("../assets/pizza.jpg")}/> 
               <RestaurantCard rest="Prince De Shawarma 58" type="Africain, Fast food" info="9km, Livraison en 30 Minutes" url={require("../assets/pizza.jpg")}/> 
            </ScrollView>
            )}
        </BottomSheet>
    </View>
    );
}

const styles = StyleSheet.create({})

export default BottomSheetCard;
