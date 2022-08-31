import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';


function SelectHour(){

      //Selection de l'heure
      const [open, setOpen] = useState(false);
      const [value, setValue] = useState(null);
      const [items, setItems] = useState([
        {label: '8  ~  9', value: '8_9'},
        {label: '9  ~  10', value: '9_10'},
        {label: '10  ~  11', value: '10_11'},
        {label: '11  ~  12', value: '11_12'},
        {label: '14  ~  15', value: '14_15'},
        {label: '15  ~  16', value: '15_16'},
        {label: '16  ~  17', value: '16_17'},
        {label: '17  ~  18', value: '17_18'},
        {label: '19  ~  20', value: '19_20'},
        {label: '20  ~  21', value: '20_21'},  
      ]);

  return(
    <View style={{backgroundColor:'white'}}>
          <Text style={styles.h2}>Selectionner l'heure </Text>
              <DropDownPicker
                style={styles.select}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  listMode='SCROLLVIEW'
                  dropDownDirection="TOP"
                  dropDownContainerStyle={{ backgroundColor: "white" , width:100 , textAlign:'center' , paddingVertical:20 }}
                  listItemLabelStyle={{
                    color: "#4280DB",
                    fontWeight:'700',
                    paddingVertical:7
                  }}
                />
        </View>
  );
}

export default SelectHour;


const styles = StyleSheet.create({
  
     h2:{
      flex: 1,
      fontSize: 27,
      fontWeight: '500',
      color: '#191919',
      alignSelf: 'center',
      textAlign:'center',
      justifyContent: 'center',
     },
  
     select:{
      alignSelf: 'center',
      textAlign:'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom:70,
      width: 200,
      height: 25
     }, 
     
  });