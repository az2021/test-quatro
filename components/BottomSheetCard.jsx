import React,{useCallback,useState,useEffect} from 'react';
import {View, StyleSheet,ScrollView ,Text} from 'react-native';
import BottomSheet from 'react-native-simple-bottom-sheet';
import RestaurantCard from './RestaurantCard';
import {useSelector,useDispatch} from 'react-redux'
import { getAll } from '../store/actions/restaurents';
const BottomSheetCard = () => {
    let dispatch = useDispatch()
    let data = useSelector(state => state.restaurants.data)
    useEffect(() => {
       dispatch(getAll())
    }, [dispatch]);
    return (
        <View style={{flex: 1}}>
        <BottomSheet isOpen>
            {(onScrollEndDrag) => (
            <ScrollView onScrollEndDrag={onScrollEndDrag}>
               {
                   data.map(el => (<RestaurantCard rest={el.rest} type={el.type} info={el.info} url={require("../assets/pizza.jpg")}/> ))
               }
               
            </ScrollView>
            )}
        </BottomSheet>
    </View>
    );
}

const styles = StyleSheet.create({})

export default BottomSheetCard;
