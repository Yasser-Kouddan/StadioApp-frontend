import React, { useState } from 'react'
import { View , ScrollView , Text , Image , TouchableHighlight } from 'react-native'
import axios from 'axios'
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';
import {IP} from './../../../global_ip'


function ProfilUser(props){

    const [user, setUser] = useState("");

    const getUser = () => {
        
        let url = IP.toString()+'/api/users/'+ props.id.toString()

         axios.get(url)
             .then( res => {
                 setUser(res.data) 
             }).catch( err => {
               console.log(err)
             })
      };

      getUser()

    return(
        <View style={{backgroundColor:'#4FAEE9',margin:10,borderRadius:40,flexDirection:'row',flexWrap:'wrap', marginVertical:10}}>
              <Image source={{uri: props.imageUrl }} 
                       style={{width: 140, height: 150, margin:10 ,borderRadius:40, borderColor:'#4FAEE9'}} />
            
              <View style={{alignSelf:'center',marginVertical:10}}>
                <Text style={{fontSize:20,fontWeight:'700'}}>{user.name}</Text>
                <Text style={{fontSize:17,fontWeight:'500'}}>{user.email}</Text>
                <Text style={{fontSize:17,fontWeight:'500'}}>0{user.phone}</Text>
                <Text style={{fontSize:17,fontWeight:'500'}}>{user.age} ans</Text>
                <Text style={{fontSize:17,fontWeight:'500'}}>{user.ville}</Text>
                <Text style={{fontSize:17,fontWeight:'500'}}>{user.role}</Text>        
              </View>

        </View>
    );
}


function AddPrest({navigation}){

      //Alert Box
      const [visible, setVisible] = React.useState(false);
      const showDialog = () => setVisible(true);
      const hideDialog = () => setVisible(false);

    return(
        <>
            <ScrollView>
                <View style={{height:55,backgroundColor:'#20D640'}}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'600',
                        textAlign:'center'
                    }}>Pour autoriser un prestataire</Text>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'600',
                        textAlign:'center'
                    }}>Veuillez clicker sur son profil</Text>
                </View>

                <TouchableHighlight onPress={() => showDialog() } underlayColor="white"> 
                    <ProfilUser id='16' imageUrl='https://yasserkouddan.000webhostapp.com/stadio_assets/prest.jpg'/>
                </TouchableHighlight>
            </ScrollView>

            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Attention!</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>êtes-vous sûr de vouloir autoriser ce prestataire "Khalid Serghini" ?</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog} >OK</Button>
                            <Button onPress={hideDialog}>Annuler</Button>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>
        </>
        


        
    );

}


export default AddPrest;




