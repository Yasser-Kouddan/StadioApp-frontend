import React, { useState } from 'react'
import { View , ScrollView , Text , Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome , FontAwesome5  } from '@expo/vector-icons';
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios'
import {IP} from '../../global_ip'
import call from 'react-native-phone-call'



function Pompier(){
    
    const args = {
        number: '15', 
        prompt: false,
        skipCanOpen: true 
      }

    return(call(args).catch(console.error))

}



function Police(){

    const args2 = {
        number: '112', 
        prompt: false,
        skipCanOpen: true 
      }

      return( call(args2).catch(console.error))

}


    



function ProfilUser({navigation}){

    
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);   

    const [user, setUser] = useState("");
  
      const getUser = () => {
        let url = IP.toString()+'/api/users/15'
        
         axios.get(url)
             .then( res => {
                 setUser(res.data) 
             }).catch( err => {
               console.log(err)
             })
      };

      
          getUser()
 

        
       

    return(<>
       
       <ScrollView>
                
            <Image source={{uri: 'https://yasserkouddan.000webhostapp.com/stadio_assets/soccer_player.jpg'}} style={{width: 180, height: 180, alignSelf: 'center' , justifyContent: 'center', marginTop:15 , borderRadius:400 , borderColor:'#4FAEE9', borderWidth:7}} />

                    <Text style={{
                            fontSize: 27,
                            fontWeight: '600',
                            color: '#191919',
                            alignSelf: 'center',
                            justifyContent: 'center',
                            marginTop: 10,
                            marginBottom:25}}>{user.name}</Text>
                   

            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
                <Entypo name="email" size={30} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>{user.email}</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
                <FontAwesome name="phone" size={30} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>0{user.phone}</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <AntDesign name="calendar" size={30} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>{user.age} ans</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <FontAwesome5 name="map-marked-alt" size={30} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>{user.ville}</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <Ionicons name="football"  size={30} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>24 match jouer</Text>
            </View>

            <View style={{flexDirection:'row',flexWrap:'wrap', alignSelf:'center'}}>
                <FontAwesome5 name="heartbeat" size={50} color="#4FAEE9"  style={{ borderWidth: 5, borderColor:"#4FAEE9", alignSelf:'center', borderRadius:30, marginHorizontal: 25,padding:15,paddingLeft:20,paddingTop:20}} onPress={()=>{showDialog()}} />
                <Entypo name="new-message" size={50} color="#4FAEE9" style={{ borderWidth: 5, borderColor:"#4FAEE9", alignSelf:'center', borderRadius:30, marginHorizontal: 25,padding:15,paddingLeft:20,paddingTop:20}}  onPress={() => {navigation.navigate('Signup') }}/>
            </View>

        </ScrollView>

               
                <Provider>
                <View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Attention!</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>Quel service d'urgence souhaitez-vous Appeler ?</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={Pompier}>Protection Civil</Button>
                            <Button onPress={Police}>Police</Button>
                            <Button onPress={hideDialog}>Annuler</Button>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
                </Provider>
    
   </> );
}


export default ProfilUser;
