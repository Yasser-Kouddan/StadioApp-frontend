import React, { useState } from 'react'
import { View , Text , TouchableOpacity , TextInput , Image , StyleSheet} from 'react-native'
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';


function Payment(){


    //for handling payement data
    const [num_carte, setNum_carte] = useState('')
    const [porteur_carte , setPorteur_carte] = useState('')
    const [date_exp , setDate_exp] = useState('')
    const [code_carte , setCode_carte] = useState('')


    //Alert Box
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return(

        <View>
            <Image source={{uri: 'https://yasserkouddan.000webhostapp.com/stadio_assets/download%20(3).png'}} style={{width: 280, height: 80, alignSelf:'center',marginVertical:10}}/>

            <Text style={styles.h1}>Paiement</Text>

            <Text style={styles.h3} >Numéro de carte</Text>
            <TextInput
                placeholder="XXXX XXXX XXXX XXXX"
                style={styles.input}
            />
            <Text style={styles.h3} >porteur de la carte</Text>
            <TextInput
                placeholder="nom et prénom"
                style={styles.input}
            />
            <Text style={styles.h3} >Date d'exporation</Text>
            <TextInput
                placeholder="ex: 03/26"
                style={styles.input}
            />
            <Text style={styles.h3} >Code de sécurité</Text>
            <TextInput
                placeholder="••••••"
                secureTextEntry={true}
                style={styles.input}
            />

            <TouchableOpacity 
                    style={{backgroundColor:'dodgerblue',borderRadius:20,width:120,height:45,alignSelf: 'center',marginVertical:15}}
                    onPress={() => showDialog() }
                    >
                
                <Text style={styles.h2}>Réserver</Text>

            </TouchableOpacity>

            {/*     AlertBox   */}
            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Attention!</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>êtes-vous sûr de vouloir effectuer cette reservation?</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={() => {console.log("reservation effectuer"); hideDialog();}}>OK</Button>
                            <Button onPress={hideDialog}>Annuler</Button>
                        </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>

    </View>

    );
}


export default Payment;


const styles = StyleSheet.create({

    h1:{
        flex: 1,
        fontSize: 30,
        fontWeight: '500',
        color: '#191919',
        alignSelf: 'center',
        textAlign:'center',
        justifyContent: 'center',
        marginBottom:15
       },

    h2:{
        flex: 1,
        fontSize: 27,
        fontWeight: '500',
        color: '#191919',
        alignSelf: 'center',
        textAlign:'center',
        justifyContent: 'center',
       },
  
    h3:{
      flex: 1,
      fontSize: 20,
      alignSelf: 'center',
      textAlign:'center',
      justifyContent: 'center',
    },
  
    input: {
      height: 50,
      width:330,
      marginVertical: 15,
      borderWidth: 1,
      padding: 10,
      borderRadius: 300,
      alignSelf:'center'
    },
  
  });