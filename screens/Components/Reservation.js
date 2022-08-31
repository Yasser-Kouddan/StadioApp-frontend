import React, { useState , useContext , useEffect } from 'react'
import { ScrollView , Image , Text , View } from 'react-native';
import Mycheckbox from '../Components/ServiceSup';
import MyMap from '../Components/Maps';
import Calendrier from '../Components/Calendrier';
import SelectHour from '../Components/SelectHour'
import Payment from './Payement';
import axios from 'axios'
import {IP} from '../../global_ip'
import { StadeContext } from '../../context';









function Terrain(){

        const [stade, setStade] = useState("");  
        const StadeNowId = React.useContext(StadeContext)

        useEffect(() => {
              
            let url = IP.toString()+'/api/stades/13'
            axios.get(url)
                .then( res => {
                    setStade(res.data)
                }).catch( err => {
                console.log(err)
                })
          });
            
        /*const getStade = () => {
            let id = 13
            let url = IP.toString()+'/api/stades/'+ id.toString()
            axios.get(url)
                .then( res => {
                    setStade(res.data)
                }).catch( err => {
                console.log(err)
                })
        };


      getStade()*/

    
   return(
     <>
      
      <View style={{flex: 1 , color: '#191919', alignItems:'center',marginBottom:50,marginTop:25}}>
            
            <Text style={{ fontSize: 35, marginBottom:10, fontWeight:'600', 
                   }}>{stade.name}</Text>
            
            <Text style={{fontSize: 25 , marginBottom: 10 , fontWeight:'500'}}>{stade.prix} dh/h
                     <Text style={{color:'red',fontWeight:'500',marginLeft:25}}>-{stade.promotion}%</Text>
             </Text>

            <Text style={{
                fontSize: 25 , marginBottom: 10 , fontWeight:'500'
                }}>{stade.nbr_joueur} joueur</Text>

            <Text style={{fontSize:22}}>⭐ ⭐ ⭐ ⭐ ⭐</Text>
           
            <Image source={{uri: stade.imageUrl}} style={{width: 380, height: 300, marginVertical: 25}} />  
                
            </View>
     </>
    
   );
}

export default function Reservation(){

    //Recuperation des infos du terrains
        const [stade, setStade] = useState("");
        const StadeNowId = React.useContext(StadeContext)

            
      const getStade = () => {
            let url = IP.toString()+'/api/stades/'+ StadeNowId.toString()
            axios.get(url)
                .then( res => {
                    setStade(res.data)
                }).catch( err => {
                console.log(err)
                })
        };

        getStade()

        
        

    return(
          <ScrollView style={{backgroundColor:'white'}}>
              <Terrain/>
              <View style={{ marginVertical:25}}/>

              {/* Longitude=Y, Latitude=X  exemple: (Y=600'000, X=200'000)
                    
                    <MyMap latitude={32.331468929637} longitude={-6.356108845624795}/>
              */}
              
              <MyMap latitude={stade.loc_x} longitude={stade.loc_y}/>
              

              <Calendrier/>

              <SelectHour/>
              <Mycheckbox/>
              <Payment/>
              
          
           </ScrollView>
    );
}
