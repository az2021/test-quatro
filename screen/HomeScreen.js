import React from 'react';
import {View, StyleSheet,Text, ScrollView,ImageBackground} from 'react-native';
import FastFoodCard from '../components/FastFoodCard';
import PizzaCard from '../components/PizzaCard';
import SearchInput from '../components/SearchInput';
import BaseScreen from './BaseScreen';

const HomeScreen = () => {
    return (
        <BaseScreen>
            <ScrollView style={{
              backgroundColor:"#f9f9fa"
            }}>
                <View style={styles.container}
                 >
                 
                  <ImageBackground source={require("../assets/restaurant1.jpg")} resizeMode="cover" style={styles.img} />
                  <View style={styles.fastFood}>
                      <FastFoodCard url={require("../assets/Angular_i18n.png")} text="Combo Meal " background={styles.activeBackground} color={styles.activeColor}/>
                      <FastFoodCard url={require("../assets/Datatables.png")} text="Fast food "  background={styles.inactiveBackground} color={styles.inactiveColor}/>
                      <FastFoodCard url={require("../assets/Yarn.png")} text="Drinks  "  background={styles.inactiveBackground} color={styles.inactiveColor}/>
                  </View>
                  <View style={styles.pizzasTitleContainer}>
                     <Text style={styles.pizzasTitle}>Pizzas</Text>
                  </View>
                  <PizzaCard url={require("../assets/pizza.jpg")} title="Pizza Senorita" price="XOF 15,000"/>
                  <PizzaCard url={require("../assets/pizza.jpg")} title="Pizza Senorita" price="XOF 1G,000"/>
                 
                </View>
                <View style={styles.search}>
                  <SearchInput/>
                </View>
            </ScrollView>
        </BaseScreen>
    );
}

const styles = StyleSheet.create({
    fastFood:{
        flexDirection: "row",
        justifyContent: "flex-start",
        // backgroundColor:"green"
    },
    img: {
      height: 200
    },
    container:{
      flex: 1,
      // backgroundColor: "#fafafa"
    },
    activeColor:{
      color:"white"
    },
    activeBackground:{
      backgroundColor:"#2180ef"
    },
    inactiveColor:{
      color: "black"
    },
    inactiveBackground:{
      backgroundColor:"#fafafa"
    },
    pizzasTitle:{
      fontWeight:"bold",
      fontSize: 30,
    },
    pizzasTitleContainer:{
      paddingHorizontal:10,
    },
    search:{
      position: "absolute",
      backgroundColor:"white",
      top:15,
      borderRadius: 15,
      width:"90%",
      height:50,
      alignSelf:"center",
      flexDirection:"row",
      justifyContent:"space-evenly",
      alignItems:"center"
    }
})

export default HomeScreen;
