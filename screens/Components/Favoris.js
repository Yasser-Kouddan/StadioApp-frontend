import React, {useState} from 'react';
import { View , Text , Image , TouchableHighlight , ScrollView} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {IP} from '../../global_ip'
import axios from 'axios'
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';


function FavoriteStade(){


    const [stade, setStade] = useState("");
      
      const getStade = () => {
         let url = IP.toString()+'/api/stades/13'
         axios.get(url)
             .then( res => {
                 setStade(res.data)
             }).catch( err => {
               console.log(err)
             })
      };

 
      getStade()
      
      //Pour afficher review
      var review = []

      if(stade.nbr_etoile<5){
        for(let i=0;i<stade.nbr_etoile;i++){
            review.push(<Text style={{fontSize:18}} key={i}>⭐  </Text>);
          }
      }else {
        for(let i=0;i<stade.nbr_etoile;i++){
            review.push(<Text style={{fontSize:18}} key={i}>⭐ </Text>);
          }
      }
      

      

    return(

     
        <View style={{
            flexDirection:'row',
             flexWrap:'wrap',
              backgroundColor: '#77C6DF',
              padding: 15,
              marginHorizontal:20,
              alignSelf:'center',
              marginVertical:25,
              shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 18,
              
             }} >  

            <Image source={{uri: stade.imageUrl}} style={{width: 150, height: 140}} />

            {/*Titre , Prix et review */}
            <View style={{flex: 1 , marginLeft: 25 , color: '#191919'}}>
                         
                <Text
                       style={{
                            fontSize: 22, 
                            marginBottom: 7,
                            fontWeight:'500',
                            marginTop: 4
                    }}>{stade.name}</Text>

                <Text style={{
                    fontSize: 17 , marginBottom: 7
                    }}>{stade.ville}</Text>

                <Text style={{
                    fontSize: 17 , marginBottom: 7
                    }}>Prix : {stade.prix} dh/h</Text>

                <Text style={{
                    fontSize: 17 , marginBottom: 7
                    }}>{stade.nbr_joueur} joueur   <Text style={{color:'red',fontWeight:'500'}}>-{stade.promotion}%</Text></Text>
                <View style={{flexWrap:'wrap',flexDirection:'row'}}>
                        {review}
                </View>
               
            </View>              
         </View>
    

    );
}


function Favoris({navigation}) {
    
       //Alert Box
       const [visible, setVisible] = React.useState(false);
       const showDialog = () => setVisible(true);
       const hideDialog = () => setVisible(false);

       var Fav = []
      
       Fav.push( <TouchableHighlight onPress={() => showDialog() } underlayColor="white"> 
       <FavoriteStade/>
   </TouchableHighlight>)

       

    return(
        <>
        <View style={{marginTop:40}}>
               <View style={{height:70,backgroundColor:'#F69309',paddingVertical:10}}>
                    <Text style={{
                        fontSize:18,
                        fontWeight:'600',
                        textAlign:'center'
                    }}>Pour supprimer un stade de votre favoris</Text>
                    <Text style={{
                        fontSize:15,
                        fontWeight:'600',
                        textAlign:'center'
                    }}>Veuillez clicker sur le stade en question.</Text>
                </View>
                 {Fav}
        </View>

            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Attention!</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>êtes-vous sûr de vouloir supprimer ce stade de vos favoris ?</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => { FavDel(); hideDialog();}}>OK</Button>
                            <Button onPress={hideDialog}>Annuler</Button>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>

        </>


    );
}

export default Favoris;