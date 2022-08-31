import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Catalogue from '../screens/Components/Catalogue';
import Reservation from '../screens/Components/Reservation'
import ProfilUser from '../screens/Profiles/ProfilUser'
import ProfilPrest from '../screens/Profiles/ProfilPrest'
import AddStade from "../screens/Profiles/PrestOp/AddStade";
import ListeReservation from "../screens/Profiles/PrestOp/ListeReservation";
import ProfilAdmin from '../screens/Profiles/ProfilAdmin'
import LoginScreen from '../screens/Components/LoginScreen'
import SignupScreen from '../screens/Components/SignupScreen'
import AddPrest from '../screens/Profiles/AdminOp/AddPrest'
import DelUsers from "../screens/Profiles/AdminOp/DelUsers";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#6CBCED",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Catalogue" component={Catalogue} />
      <Stack.Screen name="Reservation" component={Reservation}/>
    </Stack.Navigator>
  );
}

const UserStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilUser" component={ProfilUser} />
    </Stack.Navigator>
  );
}

const AdminStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilAdmin" component={ProfilAdmin} />
      <Stack.Screen name="AddPrest" component={AddPrest} />
    
      <Stack.Screen name="DelUsers" component={DelUsers} />
    </Stack.Navigator>
  );
}


const PrestStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilPrest" component={ProfilPrest} />
      <Stack.Screen name="AddStade" component={AddStade} />
      <Stack.Screen name="ListeReservation" component={ListeReservation} />
    </Stack.Navigator>
  );
}

//   this is the correct stack
const AccountStackNavigator = () => {
 
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="User" component={UserStackNavigator} />
      <Stack.Screen name="Admin" component={AdminStackNavigator} />
      <Stack.Screen name="Prest" component={PrestStackNavigator} />
    </Stack.Navigator>
  );
}
/*
const AccountStackNavigator = () => {
   var ConditionalStack = []

   if(UserNow.ID != "none" && UserNow.ROLE != "user" ){
    ConditionalStack.push(<Stack.Screen name="User" component={UserStackNavigator} />)
   }

   if(UserNow.ID != "none" && UserNow.ROLE != "prest" ){
    ConditionalStack.push(<Stack.Screen name="Prest" component={PrestStackNavigator} />)
   }

   if(UserNow.ID != "none" && UserNow.ROLE != "admin" ){
    ConditionalStack.push(<Stack.Screen name="Admin" component={AdminStackNavigator} />)
   }

      ConditionalStack.push(<Stack.Screen name="Login" component={LoginScreen} />)
      ConditionalStack.push(<Stack.Screen name="Signup" component={SignupScreen} />)
  
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
         {ConditionalStack}
    </Stack.Navigator>
  );
}
*/



export { MainStackNavigator, AccountStackNavigator , UserStackNavigator , AdminStackNavigator , PrestStackNavigator };