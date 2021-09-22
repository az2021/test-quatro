import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity,Image} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Stepper from '../components/Stepper';
import BaseScreen from './BaseScreen';
const onBoardStepOneScreen = ({navigation}) => {
    return (
      <BaseScreen>
           <Stepper step="one" skip={()=> navigation.navigate("two")}/>
      </BaseScreen>
    );
}



export default onBoardStepOneScreen;
