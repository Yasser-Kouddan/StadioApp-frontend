import React,{useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/TabNavigator";
console.reportErrorsAsExceptions = false;




 const App = () => {
   
  return (
    
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    
    
  );
}
export default App