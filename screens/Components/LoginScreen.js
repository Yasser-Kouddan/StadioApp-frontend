import React, { useState } from 'react'
import { StyleSheet, Text, View , Image , TextInput , ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import {IP} from '../../global_ip'







  function LoginScreen({navigation}){

    const [ LogEmail , setLogEmail ] = useState("");
    const [ LogPass , setLogPass ] = useState("");

    //const [ dbPass , setdbPass ] = useState("");

    //Info for client
    const Useremail = "abdo_sahimi@gmail.com"
    const Usermdp = "sahimi"

    //Info for prest
    const Prestemail = "serghini@gmail.com"
    const Prestmdp = "serghini"

    //Info for prest
    const Adminemail = "maria@gmail.com"
    const Adminmdp = "maria"

     return(
  
      <ScrollView> 
      
      <View style={{ 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        paddingVertical:30
        }}>
            <Image source={{uri: 'https://yasserkouddan.000webhostapp.com/stadio_assets/WhatsApp%20Image%202022-05-07%20at%2021.15.18.jpeg'}}
                  style={{width: 250, height: 220,marginBottom:7}} />
                
            <Text style={styles.h2}>Veuillez vous connecter</Text>
            <Text style={styles.h2}>pour continuer</Text>
            
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    onChangeText={setLogEmail}
                    value={LogEmail}/>

                <TextInput
                    style={styles.input}
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                    onChangeText={setLogPass}
                    value={LogPass} />

                <View style={{marginTop:15,marginBottom:15}}></View>
                
                      <TouchableOpacity style={{backgroundColor:'dodgerblue',borderRadius:20,width:150,height:50}}
                          onPress={() => {  
                                          
                                    if(LogEmail == Useremail && LogPass == Usermdp){
                                           navigation.navigate("User"); 
                                    }else if(LogEmail == Prestemail && LogPass == Prestmdp){
                                           navigation.navigate("Prest"); 
                                    }else if(LogEmail == Adminemail && LogPass == Adminmdp){
                                           navigation.navigate("Admin");
                                    }else{
                                      alert("Email ou mot de passe incorrect!\nVeuillez vous reconnectez")
                                    }
     
                                          }} >
                            <Text style={{fontSize:20,textAlign:'center',fontWeight:'600',padding:10}}>Se connecter</Text>
                      </TouchableOpacity>

    
                    <View style={{marginTop:27}}></View>


                <Text style={styles.h3}>Si vous ne possèdez pas de compte</Text>
                <TouchableOpacity style={{backgroundColor:'#D5D5D5',borderRadius:100,width:130,height:35,marginTop:7}}
                  onPress={() => navigation.navigate("Signup")} >
                    <Text style={styles.h3}>Inscrivez-vous</Text>
                 </TouchableOpacity>
                
                
           </View>
        </ScrollView>

     );
  }



export default LoginScreen;

const styles = StyleSheet.create({

  h2: {
    flex: 1,
    fontSize: 20,
    color: '#191919',
    alignSelf: 'center',
    textAlign:'center',
    justifyContent: 'center',
    marginTop: 10
  },

  h3:{
    flex: 1,
    fontSize: 15,
    alignSelf: 'center',
    textAlign:'center',
    justifyContent: 'center',
    marginTop: 3
  },

  input: {
    height: 50,
    width:300,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 300
  },

});

