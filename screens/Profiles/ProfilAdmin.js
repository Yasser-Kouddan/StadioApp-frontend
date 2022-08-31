import React, { useState } from 'react'
import { View , ScrollView , Text , Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome , FontAwesome5  } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'
import {IP} from '../../global_ip'


function ProfilAdmin({navigation}){

    let executed = false;

    const [admin, setAdmin] = useState("");
  
      const getAdmin = () => {
        let url = IP.toString()+'/api/users/17'
        
         axios.get(url)
             .then( res => {
                setAdmin(res.data) 
             }).catch( err => {
               console.log(err)
             })
      };

      
      do{
          getAdmin()
          executed = true
      }while(executed == false)


    return(
        <ScrollView>

            <Image source={{uri: 'https://yasserkouddan.000webhostapp.com/stadio_assets/admin.jpg'}} 
                      style={{width: 180, height: 180, alignSelf: 'center' , justifyContent: 'center', marginTop:15 , borderRadius:400 , borderColor:'#4FAEE9', borderWidth:7}} />

                    <Text style={{
                        fontSize: 27,
                        fontWeight: '600',
                        color: '#191919',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginTop: 10,
                        marginBottom:25}}>{admin.name}</Text>

            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
                <Entypo name="email" size={30} color="#4FAEE9" style={{marginLeft:20}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>{admin.email}</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
                <FontAwesome name="phone" size={30} color="#4FAEE9" style={{marginLeft:20}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>0{admin.phone}</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <AntDesign name="calendar" size={30} color="#4FAEE9" style={{marginLeft:20}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>{admin.age} ans</Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <FontAwesome name="user"  size={30} color="#4FAEE9" style={{marginLeft:23}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>Autorisé <AntDesign name="checkcircle" size={24} color="green" /></Text>
            </View>
            <View style={{flexWrap:'wrap', flexDirection:'row',marginBottom:22,paddingHorizontal:10}}>
            <FontAwesome5 name="network-wired" size={30} color="#4FAEE9" style={{marginLeft:20}}/>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600',
                    alignSelf:'center',
                    marginLeft:25
                    }}>Support client</Text>
            </View>
            

            <View style={{flexDirection:'row',flexWrap:'wrap',marginBottom:10, alignSelf:'center'}}>

            <FontAwesome name="user-plus" size={50} color="#4FAEE9" style={{ borderWidth: 5, borderColor:"#4FAEE9", alignSelf:'center', borderRadius:30, marginHorizontal: 25,padding:15,paddingLeft:20,paddingTop:20}} onPress={() => navigation.navigate("AddPrest")} />
            <FontAwesome name="user-times" size={50} color="#4FAEE9" style={{ borderWidth: 5, borderColor:"#4FAEE9", alignSelf:'center', borderRadius:30, marginHorizontal: 25,padding:15,paddingLeft:20,paddingTop:20}}  onPress={() => navigation.navigate("DelUsers")} />

            </View>

        </ScrollView>
    );

}


export default ProfilAdmin;

