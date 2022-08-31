import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, AccountStackNavigator } from "./StackNavigator";
import Favoris from '../screens/Components/Favoris'
import Rechercher from "../screens/Components/Rechercher";
import { FontAwesome , FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (

    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => { let iconName;


        if (route.name === 'Home') {
             iconName = focused ? 'home' : 'home'; 
             return <Ionicons name={iconName} size={45} color={color} />;
        }
         else if (route.name === 'Rechercher') {
             iconName = focused ? 'searchengin' : 'searchengin';
             return <FontAwesome5 name={iconName} size={45} color={color} />;
        }
        else if (route.name === 'Favoris') {
             iconName = focused ? 'heart' : 'heart';
             return <FontAwesome name={iconName} size={45} color={color} />;
        }
        
        else if (route.name === 'Account') {
             iconName = focused ? 'user-circle-o' : 'user-circle-o';
             return <FontAwesome name={iconName} size={45} color={color} />;
        }
      },
      tabBarActiveTintColor: '#3BA1E0',
      tabBarInactiveTintColor: '#C6C6C6',
      headerShown: false,
      tabBarShowLabel:false,
      tabBarStyle: { 
            height:80,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 12 },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            elevation: 24
          },
    })}
      >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Rechercher" component={Rechercher} />
      <Tab.Screen name="Favoris" component={Favoris} />
      <Tab.Screen name="Account" component={AccountStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;