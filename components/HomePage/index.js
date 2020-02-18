import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Body, Right, Title,Content} from 'native-base'
import Qrscanner from '../QRscanner';

const HomePage=(props)=>{
  const [issue,setIssue]=React.useState(true);
    return (<View style={styles.container}>
        {/* <View style={{backgroundColor:'green',height:'10%'}}><Text>hi</Text></View> */}
   

      <Container style={styles.Button}>
      <View style={{width:'50%'}}>
      <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('QRcode')}>
  <Text>issue</Text>
    </TouchableOpacity>
          </View>
      <View style={{width:'50%'}}>
      <TouchableOpacity style={styles.button}>
  <Text>return book</Text>
    </TouchableOpacity>
          </View>
      <View style={{width:'50%'}}> 
      <TouchableOpacity style={styles.button}>
      <Text>issue history</Text>
    </TouchableOpacity>
      </View>
      </Container>
     
    
    </View>);
}

const styles=StyleSheet.create({
 
  Qrcamera:{
   height:'40%',
   width:'50%',
  },

    container:{
        display:'flex',
        flex:1
    },

    appBar:{
        flex:0.1
    },
    Button:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },

    ButtonText:{
        color:'white',
        fontSize:24,
       
    }

})

export default HomePage;