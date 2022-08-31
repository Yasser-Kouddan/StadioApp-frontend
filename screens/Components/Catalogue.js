import React, { useState } from 'react'
import { View , Text , Image, TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native';
import axios from 'axios';
import {IP} from '../../global_ip'
import { StadeContext } from '../../context';





function Stade(props){

    const [stade, setStade] = useState("");
      
      const getStade = () => {
         let url = IP.toString()+'/api/stades/'+ props.id.toString()
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
              marginVertical:10,
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




function Catalogue ({navigation}){

  
    //Send Id to reservation
    const [StadeNow , setStadeNow] = useState('')

     //Afficher tous les stades depuis la base de donnees
     var catalogue = []

     for(let i = 14 ; i <= 20 ; i++){

        
         if(i==14 || i==15 || i==16 || i==20 ){
            catalogue.push(
                <View key={i}>
                    <TouchableHighlight onPress={() => { setStadeNow(i);  navigation.navigate('Reservation'); } } underlayColor="white"> 
                           <Stade id = {i}/>
                     </TouchableHighlight>
                </View>
            )

         }
         
        

     }

      

        return(
         
            <><View style={{
                height:80,
                backgroundColor:'#D5D5D5',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,

                elevation: 4,}}>
                <Text style={{fontSize:25, textAlign:'center',marginTop:7}} >A l'occasion du Aid alfitr, des réductions jusqu'à 50% </Text>
            </View>


            <ScrollView>
           
            <View style={{marginVertical:12}}>
               <>
               <View style={{backgroundColor:'#FF2B2B',height:30,marginTop:15}}><Text style={{color:'white',textAlign:'center',fontSize:22,fontWeight:'400'}}>Meilleur offre</Text></View>
                        <TouchableHighlight onPress={() => { setStadeNow(13); navigation.navigate('Reservation'); } } underlayColor="white"> 
                                    <Stade id = "13" />
                            </TouchableHighlight>
                 <View style={{backgroundColor:'#888888',height:30,marginTop:15}}><Text style={{color:'white',textAlign:'center',fontSize:22,fontWeight:'400'}}>Nouveau offre</Text></View>
                            {catalogue}
               </>
            </View>
                  
            </ScrollView></>

            
        );
    }




export default Catalogue;