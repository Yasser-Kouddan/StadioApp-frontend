import React, { useState } from 'react'
import { View , ScrollView , Text , StyleSheet } from 'react-native'
import {IP} from '../../../global_ip'
import axios from 'axios'




function ListeReservation({navigation}){

     const [Res,setRes] = useState("")
  
      let url = IP.toString()+'/api/reservation/1'
      
       axios.get(url)
           .then( res => {
               setRes(res.data) 
           }).catch( err => {
             console.log(err)
           })

    return(
         <ScrollView>
            <View style={{backgroundColor:'#4FAEE9',borderRadius:40, marginVertical:15,alignSelf:'center',paddingHorizontal:40,paddingVertical:15}} >
                       <Text style={{fontSize:20,fontWeight:'700',textAlign:'center',marginVertical:5}}>Stade Al-atlas</Text>
                       <Text style={{fontSize:17,fontWeight:'500'}} >Locataire: {Res.porteur_carte}</Text>
                       <Text style={{fontSize:17,fontWeight:'500'}} >Date: 2022-07-07 </Text>
                       <Text style={{fontSize:17,fontWeight:'500'}} >Heure: {Res.time}</Text>
                       <Text style={{fontSize:17,fontWeight:'500'}} >Tarif: {Res.tarif}</Text>
                       <Text style={{fontSize:17,fontWeight:'500',color:'red'}} >Promotion: -{Res.promo}%</Text>
                       <Text style={{fontSize:17,fontWeight:'500'}} >Boisson: non</Text>
                       <Text style={{fontSize:17,fontWeight:'500'}} >Douche: oui</Text>
                       <Text style={{fontSize:17,fontWeight:'500'}} >Arbitre: non</Text>
                       <Text style={{fontSize:17,fontWeight:'500'}} >Gilet: oui</Text>
                                
                </View>   
         </ScrollView>
        
    );

}


export default ListeReservation;

