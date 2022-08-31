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


function DelUsers({navigation}){

    const delUser = (DeleteId) => {

        let url = IP.toString()+'/api/users/'+ DeleteId.toString()
        console.log(url)

          axios.delete(url)
            .then( res => {
                console.log(res)
            }).catch( err => {
            console.log(err)
            })
      }

      //Alert Box
      const [visible, setVisible] = React.useState(false);
      const showDialog = () => setVisible(true);
      const hideDialog = () => setVisible(false);


    return(
        <>
            <ScrollView>
                <View style={{height:55,backgroundColor:'#F69309'}}>
                    <Text style={{
                        fontSize:20,
                        fontWeight:'600',
                        textAlign:'center'
                    }}>Pour supprimer un utilisateur</Text>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'600',
                        textAlign:'center'
                    }}>Veuillez clicker sur son profil</Text>
                </View>
             <TouchableHighlight onPress={() => showDialog() } underlayColor="white"> 
                    <ProfilUser id='15' imageUrl="https://yasserkouddan.000webhostapp.com/stadio_assets/soccer_player.jpg"/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>  delUser(1) } underlayColor="white"> 
                    <ProfilUser id='16' imageUrl='https://yasserkouddan.000webhostapp.com/stadio_assets/prest.jpg'/>
                </TouchableHighlight>
                <TouchableHighlight onPress={() =>  alert('Rechercher')} underlayColor="white"> 
                    <ProfilUser id='17' imageUrl='https://yasserkouddan.000webhostapp.com/stadio_assets/admin.jpg'/>
                </TouchableHighlight>
            </ScrollView>

            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Attention!</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>êtes-vous sûr de vouloir supprimer cet utilisateur "Abderrahim Sahimi" ?</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => {delUser(13); hideDialog();}}>OK</Button>
                            <Button onPress={hideDialog}>Annuler</Button>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>
        </>
        


        
    );

}


export default DelUsers;




