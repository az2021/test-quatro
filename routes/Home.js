import React from 'react';
import {View, StyleSheet,Text} from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from '../screen/HomeScreen';
const Tab = createBottomTabNavigator();
const Screen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
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
                name="Account"
                component={Screen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={Screen}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="shopping"
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
