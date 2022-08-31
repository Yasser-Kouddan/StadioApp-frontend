import React, { useState } from "react";
import { View , Text , TextInput , StyleSheet , TouchableOpacity , ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


const Rechercher = () => {

    //Selection de position
        const [open, setOpen] = useState(false);
        const [value, setValue] = useState(null);
        const [items, setItems] = useState([
          {label: 'Agadir', value: 'agadir'},
          {label: 'Sidi Youssef', value: 'sidi-youssef', parent: 'agadir'},
          {label: 'Riad Salam', value: 'riad-salam', parent: 'agadir'},
          {label: 'Anza', value: 'anza', parent: 'agadir'},
        
          {label: 'Béni Mellal', value: 'bm'},
          {label: 'Al Atlas', value: 'al-atlas', parent: 'bm'},
          {label: 'Taqadom', value: 'taqadom', parent: 'bm'},
          {label: 'Qods', value: 'qods', parent: 'bm'},
        ]);

    //Selection de nombre de joueur
          const [open2, setOpen2] = useState(false);
          const [value2, setValue2] = useState(null);
          const [items2, setItems2] = useState([
            {label: '12 Joueur ( 6 vs 6 )', value: '12J'},
            {label: '10 Joueuer ( 5 vs 5 )', value: '10J'}
          ]);

    //Selection de classement par etoile
          const [open3, setOpen3] = useState(false);
          const [value3, setValue3] = useState(null);
          const [items3, setItems3] = useState([
            {label: '⭐ ⭐ ⭐ ⭐ ⭐', value: '5stars'},
            {label: '⭐ ⭐ ⭐ ⭐', value: '4stars'},
            {label: '⭐ ⭐ ⭐', value: '3stars'},
            {label: '⭐ ⭐', value: '2stars'},
            {label: '⭐', value: '1stars'},
          ]);
    
  return (


    <ScrollView>

      <View style={styles.container}>
        <Text style={styles.h2}>Emplacement </Text>
              <DropDownPicker
               style={styles.select}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                searchable={true}
                categorySelectable={true}
              />

        <Text style={styles.h2}>Nombre de joueur: </Text>
            <DropDownPicker
               style={styles.select}
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
              />
    </View>

      

        <Text style={styles.h2}>Classement</Text>
            <DropDownPicker
                  style={styles.select}
                    open={open3}
                    value={value3}
                    items={items3}
                    setOpen={setOpen3}
                    setValue={setValue3}
                    setItems={setItems3}
                  />

        <Text style={styles.h2}>Prix</Text>
    
              <View style={{flexDirection:'row', flexWrap:'wrap',alignSelf:'center',marginVertical:20}}>
                  <TextInput 
                      keyboardType='numeric'
                      maxLength={5}
                      placeholder='prix min'
                      style={{borderWidth:1,borderRadius:10,width:100,padding:5,marginHorizontal:15}}  
                  /><Text>~</Text>
                  <TextInput 
                    keyboardType='numeric'
                    maxLength={5}
                    placeholder='prix max'
                    style={{borderWidth:1,borderRadius:10,width:100,padding:5,marginHorizontal:15}}  
                  /></View>
        
            <TouchableOpacity style={{backgroundColor:'dodgerblue',borderRadius:20,marginTop:25,width:150,height:40,alignSelf:'center'}}
                  onPress={() =>  alert('Rechercher')} >
                    <Text style={{fontSize:25,textAlign:'center',fontWeight:'500'}}>Rechercher</Text>
              </TouchableOpacity>

      </ScrollView>
    
     /* <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          searchable={true}
          categorySelectable={true}
      /> */
  );
};



export default Rechercher;


const styles = StyleSheet.create({
   container:{
    alignItems: 'center',
    justifyContent: 'center',
   },
   h2:{
    flex: 1,
    fontSize: 30,
    fontWeight:'500',
    color: '#191919',
    alignSelf: 'center',
    textAlign:'center',
    justifyContent: 'center',
    marginTop: 55
   },
   select:{
    alignSelf: 'center',
    fontSize: 25,
    textAlign:'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom:20,
    width: 200,
    height: 25
   }, 
   
})

