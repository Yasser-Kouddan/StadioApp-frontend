import React, { useState } from 'react'
import { StyleSheet, Text, View , Image , TextInput , ScrollView , TouchableOpacity } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import {IP} from '../../global_ip'

 //Role : user or prest
 /*const radioButtonsData = [{
  id: '1', // acts as primary key, should be unique and non-empty string
  label: 'Client',
  value: 'client'
}, {
  id: '2',
  label: 'Prestataire',
  value: 'prest'
}]
*/





function SignupScreen({navigation}){

  
   //Radio elements
   const [role, setRole] = React.useState('client');


  /* const [radioButtons, setRadioButtons] = useState(radioButtonsData)
   function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }*/
 
 

   // recuperation de la saisie de l'utilisateur
      const [ name , setName ] = useState("");
      const [ email , setEmail ] = useState("");
      const [ pass , setPass ] = useState("");
      const [ pass2 , setPass2 ] = useState("");
      const [ ville , setVille ] = useState("");
      const [ phone , setPhone ] = useState("");
      const [ age , setAge ] = useState("");

      

  

  
  const postUser = () => {
        let url = IP.toString()+'/api/users'
        
        axios.post( url , {
              "name": name,
              "email": email,
              "password": pass,
              "ville": ville,
              "phone": phone,
              "age": age,
              "role": role
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
      
          <View style={{ 
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'white',
            paddingVertical:25
            }}>

                <Image source={{uri: 'https://yasserkouddan.000webhostapp.com/stadio_assets/WhatsApp%20Image%202022-05-07%20at%2021.15.18.jpeg'}}
                       style={{width: 250, height: 250,marginBottom:15}} />
                <Text style={styles.h2}>Veuillez vous s'inscrire pour continuer</Text>
                                    
                    <TextInput 
                          style={styles.input} 
                          placeholder='Nom complet'
                          onChangeText={setName}
                          value={name} />
                        

                    <TextInput style={styles.input}
                               placeholder='E-mail'
                               onChangeText={setEmail}
                               value={email}/>


                    <TextInput style={styles.input}  
                               placeholder='Télèphone'
                               keyboardType='numeric'
                               onChangeText={setPhone}
                               value={phone} />

                    <TextInput style={styles.input}
                               placeholder='Mot de passe'
                               secureTextEntry={true}
                               onChangeText={setPass}
                               value={pass}/>


                    <TextInput style={styles.input}  
                               placeholder='Confirmer le mot de passe'
                               secureTextEntry={true}
                               onChangeText={setPass2}
                               value={pass2}/>

                    <TextInput style={styles.input} 
                               placeholder='Ville'
                               onChangeText={setVille}
                               value={ville}/>


                    <TextInput style={styles.input}  
                               placeholder='Age'  
                               keyboardType='numeric'                             
                               onChangeText={setAge}
                               value={age}/>


                    <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                      
                      <View style={{marginHorizontal:30,marginVertical:10}}>
                          <Text style={{textAlign:'center'}}>Client</Text>
                          <RadioButton
                                value="client"
                                status={ role === 'client' ? 'checked' : 'unchecked' }
                                onPress={() => setRole('client')}
                              />
                      </View>
                      
                      <View style={{marginHorizontal:30,marginVertical:10}}>
                          <Text style={{textAlign:'center'}}>Prestataire</Text>
                          <RadioButton
                                value="prest"
                                status={ role === 'prest' ? 'checked' : 'unchecked' }
                                onPress={() => setRole('prest')}
                              />
                      </View>
                      
                    </View>



                    

                <View style={{marginTop:15,marginBottom:15}}></View>
                    
                <TouchableOpacity style={{backgroundColor:'dodgerblue',borderRadius:20,width:170,height:55,alignSelf:'center'}}
                                  onPress={() => {  
                                        if(name=="" || email=="" || phone=="" || ville=="" || pass=="" || age==""){
                                              alert("il y a des champs vide!\nVeuillez remplir tous les champs")
                                        }else{
                                          
                                          if(pass == pass2){
                                            console.log("mot de passe correct!");
                                            postUser(); 
                                            navigation.navigate("Login")
                                            }else{ alert("mot de passe incorrect!\nVeuillez resaisir le mot de passe")} 
                                            
                                        }

                                    }}>
                    <Text style={{fontSize:35,textAlign:'center',fontWeight:'500'}}>S'inscrire</Text>
                 </TouchableOpacity>

                <View style={{marginBottom:10}}></View>
              
            </View>
      </ScrollView>

    );
}


export default SignupScreen;

const styles = StyleSheet.create({
  h1: {
    flex: 1,
    fontSize: 37,
    color: '#191919',
    fontWeight: '500',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50
  },

  h2: {
    flex: 1,
    fontSize: 25,
    color: '#191919',
    alignSelf: 'center',
    textAlign:'center',
    justifyContent: 'center',
    marginTop: 15
  },

  input: {
    height: 55,
    width:320,
    marginTop: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 300
  },

  checkbox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },


});


