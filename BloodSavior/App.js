import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,Image,Button, Modal,Text, Pressable, ActivityIndicator, Alert} from 'react-native';
import { useState } from 'react';
const STYLE = ['default', 'dark-content', 'light-content']; 
export default function App() {
  const [press,setPress]=useState(false)
  let index = 0; 
  const [hidden , sethidden] = useState(false); 
  const [styleBar , setBar] = useState(STYLE[0]); 
  const changeStyle = () => { 
    index += 1; 
    if(index == 3) 
    { 
      index = 0; 
    } 
    setBar(STYLE[index]); 
  } 
  return (
    <View style={styles.container}>

<StatusBar 
          hidden={hidden} 
          animated={true} 
          backgroundColor="red"
          barStyle={styleBar} 
          showHideTransition={'fade'} 
        /> 
  <View style={styles.button}> 
        <Button 
          title={"Hide StatusBar"} 
          onPress={()=>{sethidden(!hidden)}} 
        /> 
        </View> 
        <View style={styles.button}> 
        <Button 
          title={"Change Style"} 
          onPress={changeStyle} 
        /> 
        </View>
      

      
      <Pressable onPress={()=> console.log("Image pressed")}>
      <Image  source ={require("./assets/saveImage.jpeg")}
        style={styles.photo}
        resizeMode='contain'/>
     </Pressable>
     <Pressable onPress={()=> console.log("Text pressed")}>
      <Text>Hi Good Morning</Text>
      </Pressable>
     
     <View> 
      <Button
      title="Donor"
      onPress={()=>setPress(true)}
      color='red'>
     </Button>
    <Modal visible={press}
     onRequestClose={()=>setPress(false)}>
      <View style={{flex:1,backgroundColor:'lightblue'}}>
      <Text>Hello guys</Text>
      <Button 
      title="Close"
      onPress={()=>setPress(false)}
      color='red'></Button>
      </View>
     </Modal> 
 </View> 
 <View>
 <ActivityIndicator />
 <ActivityIndicator size='large' color='red' />
 <ActivityIndicator size='large' color='skyblue' animation={false} />
 </View>
 <View >
  <Button
  title="submit"
  onPress={()=>Alert.alert("Invalid data")}/>
   <Button style={{marginTop:10}}
  title="submit"
  onPress={()=>Alert.alert("Invalid data","Bob InCorrect", [
    { 
      text :'Delete',
      onPress:()=>console.log("delete pressed")
    },
    { 
      text :'Yes',
      onPress:()=>console.log("yes pressed")
    },
    { 
      text :'No',
      onPress:()=>console.log("No pressed")
    },
    
    ])
    }/>

  
  
 
 </View>
</View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 5,
  },

  
photo: {
  alignItems:'center',
  width:400,
  height:150,
  padding:10,
  marginTop:20,
   },
   text : { 
    fontSize : 40, 
    marginBottom : 30 
  }, 
  button : { 
    margin : 20, 
    width:200, 
  } 

  
});
