import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Button,Image,Linking,ImageBackground,Platform} from 'react-native';
import Blink from './Blink' ;
import { Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

const three = require("./screens/image/1.jpeg");


class StartScreen extends React.Component  {
  static navigationOptions = { title:'الرئيسة ' ,
  drawerIcon: ({tintColor}) => (
    <Image
          source={require('./screens/image/home.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />),
  tabBarIcon: () => (<Icon  name='home'     />),
}
  render(){
    let pic = {uri: 'http://www.qiraatafrican.com/images/logo1.png'};
  
  return ( 
<View>
     <TouchableOpacity  onPress={() => this.props.navigation.navigate('DrawerOpen')} >
            <Entypo
              name='dots-three-vertical'
              size={32}
              style={{ width: 44,
                height: 44,
                marginTop:30,
                color: 'blue',
              left:10}}
            />
      </TouchableOpacity>
      
     <ImageBackground style={styles.imageBackground} source ={three} >
            <View style={styles.listContainer}>
              <TouchableOpacity  onPress={() => this.props.navigation.navigate('DrawerOpen')} >
                  <Entypo
                    // name='grid'
                    size={32}
                    style={styles.icon}
                  />
              </TouchableOpacity>
              
          </View>

          

            <View style={styles.container} >
          {/* <Blink  text='مرحبا بكم في  قراءات افريقية' style={styles.text}/> */}
                <View   >
                <Image source={pic} style={{width: 350, height: 200 ,right:25,}}/>
                </View>
            </View>
    </ImageBackground>

    <View style={styles.buttonSTyles}>
       <Button 
          // icon={{name:'code'}}
          title="لتصفح ءاخر الاخبار من خلال موقع المجلة"
          style={{right:30,padding:10}}
          onPress={() => Linking.openURL('http://www.qiraatafrican.com/home/category/18')}
          backgroundColor='#00000000'
          />
      
   </View>
   <View style={styles.buttonSTyles}>
   <Button 
          // icon={{name:'code'}}
          title="الرئيسة"
          style={{right:30,padding:10,color:'#00000000',backgroundColor:'yellow'}}
          onPress={() => this.props.navigation.navigate('Home')}         
          />
     </View>
</View>

     );
   }
}
  
const styles = StyleSheet.create({
  container : {
      padding :20 ,
      justifyContent: 'flex-end', 
      alignSelf:'flex-start',
      flex:0.75,
      marginTop:30
      
    },
    listContainer:{
      flex:1,
      alignItems:'flex-end',
      justifyContent:'flex-start',
      paddingTop:60,
      padding:20
     
    },
    icon:{
      width: 24,
      height: 24,
      // marginTop:30,
      // color: 'blue'
    },
    arrow:{
      width: 50,
      height: 50,
      marginTop : 100
    },
  button :{
      backgroundColor : '#c0392b',
      paddingVertical : 10,
      alignItems:'center',
      justifyContent:'center',

    },
  text :{ 
     fontSize: 5,
    },
    
        imageBackground:{
          backgroundColor: '#00000000' ,
          // borderRadius:5,
          height:300,
          // padding:5,
          // paddingTop:16,
          // bottom :20 ,
          width:380,
          // right :10,
          // left : 10 ,
          // borderWidth:1,
          // borderColor:'green',
          // flex:1,
          marginTop:50

       },
       buttonSTyles:{
        justifyContent:'center' ,
        alignItems: 'center',
        margin:30 ,
        flexDirection: 'column',
        justifyContent: 'space-between',

       }
    
  });

export default StartScreen ;