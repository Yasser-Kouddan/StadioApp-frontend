import React, { useState } from 'react'
import { View , ScrollView , Text , Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios'
import {IP} from '../../global_ip'


function ProfilPrest({navigation}){

    let executed = false;

    const [prest, setPrest] = useState("");
  
      const getPrest = () => {
        let url = IP.toString()+'/api/users/16'
        
         axios.get(url)
             .then( res => {
                 setPrest(res.data) 
             }).catch( err => {
               console.log(err)
             })
      };

      
      do{
          getPrest()
          executed = true
      }while(executed == false)

      
  
     
    return(
        <ScrollView>

            <Image source={{uri: 'https://yasserkouddan.000webhostapp.com/stadio_assets/prest.jpg'}} 
                       style={{width: 180, height: 180, alignSelf: 'center' , justifyContent: 'center', marginTop:15 , borderRadius:400 , borderColor:'#4FAEE9', borderWidth:7}} />

                    <Text 
                        style={{
                        fontSize: 27,
                        fontWeight: '600',
                        color: '#191919',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        marginBottom:25}}>{prest.name}</Text>

            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
                <Entypo name="email" size={27} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>{prest.email}</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
                <FontAwesome name="phone" size={27} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>0{prest.phone}</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <AntDesign name="calendar" size={27} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>{prest.age} ans</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <FontAwesome name="user"  size={27} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>Autorisé <AntDesign name="checkcircle" size={24} color="green" /></Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <MaterialCommunityIcons name="stadium"  size={27} color="#4FAEE9" style={{marginLeft:30}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>2 Terrain</Text>
            </View>
            

            <View style={{flexDirection:'row',flexWrap:'wrap', alignSelf:'center'}}>

            <AntDesign name="pluscircle" size={50} color="#4FAEE9" style={{ borderWidth: 5, borderColor:"#4FAEE9", alignSelf:'center', borderRadius:30, marginHorizontal: 25,padding:15,paddingLeft:20,paddingTop:20}}  onPress={() => navigation.navigate("AddStade")} />
            <Entypo name="list" size={50} color="#4FAEE9" style={{ borderWidth: 5, borderColor:"#4FAEE9", alignSelf:'center', borderRadius:30, marginHorizontal: 25,padding:15,paddingLeft:20,paddingTop:20}}  onPress={() => navigation.navigate("ListeReservation")} />
           {/* <MaterialIcons name="attach-money" size={55} color="#4FAEE9" style={{ borderWidth: 5, borderColor:"#4FAEE9", alignSelf:'center', borderRadius:30,margin: 30}}  onPress={() => { alert('Edit profile'); }}/>*/ }
           

            </View>

        </ScrollView>
    );

}


export default ProfilPrest;
    