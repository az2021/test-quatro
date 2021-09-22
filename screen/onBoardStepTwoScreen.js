import React from 'react';
import {View, StyleSheet,Text , TouchableOpacity, } from 'react-native';
import Stepper from '../components/Stepper';
import BaseScreen from './BaseScreen';

const onBoardStepTwoScreen = ({navigation}) => {
    return (
        <BaseScreen>
            <Stepper step="two" back={()=> navigation.navigate("one")} skip={()=> navigation.navigate("home")}/>
        </BaseScreen>
    );
}


export default onBoardStepTwoScreen;
