import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';


const Mycheckbox = () => {
   const [checked1, setChecked1] = React.useState(false);
   const [checked2, setChecked2] = React.useState(false);
   const [checked3, setChecked3] = React.useState(false);
   const [checked4, setChecked4] = React.useState(false);

   return (
    <View>
       <Text style={styles.h3}>Selectionner les services supplémentaires </Text>
         <View style={styles.container}>
               <View style={styles.checkbox}>
                  <Checkbox
                     status={checked1 ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setChecked1(!checked1);
                     }}
                     color={'#4FAEE9'}
                     uncheckColor={'red'}
                  />
               <Text>Gilet</Text>
               </View>

               <View style={styles.checkbox}>
                  <Checkbox
                     status={checked2 ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setChecked2(!checked2);
                     }}
                     color={'#4FAEE9'}
                     uncheckColor={'red'}
                  />
               <Text >Boisson</Text>
               </View>

               <View style={styles.checkbox}>
                  <Checkbox
                     status={checked3 ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setChecked3(!checked3);
                     }}
                     color={'#4FAEE9'}
                     uncheckColor={'red'}
                  />
               <Text>Douche</Text>
               </View>

               <View style={styles.checkbox}>
                  <Checkbox
                     status={checked4 ? 'checked' : 'unchecked'}
                     onPress={() => {
                        setChecked4(!checked4);
                     }}
                     color={'#4FAEE9'}
                     uncheckColor={'red'}
                  />
               <Text>Arbitre</Text>
               </View>

            </View>

    </View>
      
    
    
   );
};
const styles = StyleSheet.create({
   checkbox: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },

   container:{
       flexWrap:'wrap',
       flexDirection:'row',
       marginBottom:50
   },

     h3:{
      flex: 1,
      fontSize: 27,
      fontWeight: '500',
      color: '#191919',
      alignSelf: 'center',
      textAlign:'center',
      justifyContent: 'center',
      marginBottom: 15
     },

  
});
export default Mycheckbox;