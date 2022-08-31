import React , { useState } from 'react'
import { View , Text , TextInput , StyleSheet , TouchableOpacity , ScrollView } from 'react-native'
import ImagePickerComponent from '../../Components/ImagePicker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {IP} from './../../../global_ip'


function AddStade({navigation}){

    //variable du formulaire
    const [name,setName] = useState('')
    const [prix,setPrix] = useState('')
    const [promo,setPromo] = useState('')
    
    const [X,setX] = useState('')
    const [Y,setY] = useState('')

     //Selection de nombre de joueur
     const [open2, setOpen2] = useState(false);
     const [value2, setValue2] = useState(null);
     const [items2, setItems2] = useState([
       {label: '12 Joueur ( 6 vs 6 )', value: 12},
       {label: '10 Joueuer ( 5 vs 5 )', value: 10}
     ]);

     const postStade = () => {
      let url = IP.toString()+'/api/stades'
      
      axios.post( url , {
        "name": name,
        "prix": prix,
        "promotion": promo,
        "nbr_joueur":value2,
        "nbr_etoile":0,
        "loc_x": X,
        "loc_y": Y
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    return(

        <ScrollView>
              <Text style={styles.h1}>Ajouter un terrain</Text>

            <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                <Text style={styles.h2}>Choisir une photo</Text>
                <ImagePickerComponent/>
            </View>
            <TextInput style={styles.input} 
                       placeholder='Nom du stade'
                       onChangeText={setName}
                       value={name}
                       />
            <TextInput style={styles.input} 
                       placeholder='Prix : dh par heure'
                       onChangeText={setPrix}
                       value={prix}
                       />
            <TextInput style={styles.input} 
                       placeholder='Promotion en %'
                       onChangeText={setPromo}
                       value={promo}
                       />
            <Text style={{
                fontSize: 23,
                color: '#191919',
                alignSelf: 'center',
                textAlign:'center',
                justifyContent: 'center',
                marginTop:25}}>Nombre de joueur: </Text>
            <DropDownPicker
               style={styles.select}
                open={open2}
                value={value2}
                items={items2}
                setOpen={setOpen2}
                setValue={setValue2}
                setItems={setItems2}
              />

               <Text style={styles.h2}>Coordonnées GPS : </Text>
            <View style={{flexDirection:'row',flexWrap:'wrap',marginTop:5,alignItems:'center'}}>
                {/* Longitude=Y, Latitude=X  exemple: (Y=600'000, X=200'000)*/}
                <TextInput style={styles.cood} 
                           placeholder='longitude ( Y )'
                           onChangeText={setY}
                           value={Y}
                           />           
                <TextInput style={styles.cood} 
                           placeholder='latitude ( X )'
                           onChangeText={setX}
                           value={X}
                           />

                      

            </View>
              
            <TouchableOpacity style={{backgroundColor:'dodgerblue',borderRadius:20,width:200,height:40,marginVertical:30,alignSelf:'center'}}
                  onPress={() =>  {
                                    postStade()
                                    alert('Terrain ajouté :)')
                                    navigation.navigate("ProfilPrest")
                                  }}>
                    <Text style={{fontSize:25,textAlign:'center',fontWeight:'500'}}>Ajouter terrain</Text>
                 </TouchableOpacity>
           

        </ScrollView>
        
    );

}


export default AddStade;


const styles = StyleSheet.create({
    h1: {
      flex: 1,
      fontSize: 37,
      color: '#191919',
      fontWeight: '500',
      alignSelf: 'center',
      justifyContent: 'center',
      marginVertical: 25
    },
  
    h2: {
      flex: 1,
      fontSize: 23,
      color: '#191919',
      alignSelf: 'center',
      textAlign:'center',
      justifyContent: 'center',
      marginTop:7,
      marginLeft:10
    },
  
    input: {
      height: 45,
      width:320,
      marginTop: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 300,
      alignSelf:'center'
    },

    select:{
        alignSelf: 'center',
        textAlign:'center',
        justifyContent: 'center',
        width:200,
        marginTop: 15,
        marginBottom:15,
        flexDirection:'row',
        flexWrap:'wrap'
       },

    cood: {
        height: 45,
        width:170,
        marginTop: 20,
        borderWidth: 1,
        padding: 10,
        marginHorizontal:10,
        borderRadius: 300,
        alignSelf:'center'
    }
  
  });