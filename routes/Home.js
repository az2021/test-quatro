import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons,MaterialIcons  } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screen/HomeScreen';
import MapScreen from '../screen/MapScreen';
const Tab = createBottomTabNavigator();
const Screen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Screen</Text>
    </View>
    );
}
const Home = () => {
	return (
    
		<Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            
            <Tab.Screen
                name="Restaurant"
                component={MapScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="shopping-cart" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={Screen}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
        </Tab.Navigator>
		);
}

const styles = StyleSheet.create({})

export default Home;
