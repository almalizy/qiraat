import _ from 'lodash';
import React, { Component } from 'react';
import { Alert,View, Text, AsyncStorage ,Image} from 'react-native';
import Slides from './Slides';
import { AppLoading } from 'expo';
import { Entypo } from '@expo/vector-icons';

const first = require("./image/1.jpg");
const two = require("./image/3.jpg");
const three = require("./image/3.jpeg");

const firstLogo = require("./image/qiraatlogo.png");
const twoLogo = require("./image/qiraatlogo.png");
const threeLogo = require("./image/qiraatlogo.png");

const SLIDE_DATA = [
  { text: 'في ظل الصراعات التي تدور\n'+ 'بالقارة الافريقية      \t', color: 'grey'  ,imageBackground:first ,imageLogo:firstLogo },
  { text: 'في ظل التهميش الذي تتعرض له \n'+'               القارة الافريقية        \t', color: '#009688' ,imageBackground:two, imageLogo:twoLogo},
  { text: '  نحو مزيد من تسليط الضوء على' +  ' الأحداث بالقارة الأفريقية \t', color: '#03A9F4' ,imageBackground:three,imageLogo:threeLogo}
];

class WelcomeScreen extends Component {
  static navigationOptions = {
      
    title: 'الافتتاحية',
    drawerIcon: ({tintColor}) => (
         <Image
          source={require('./image/thumbnails.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />),

      tabBarIcon: () => (<Entypo  name=' text-document'  style={styles.icon}   />),
      
      };

  onSlidesComplete = () => {
    this.props.navigation.navigate('start'),Alert.alert('مرحبا بكم في مجلة قراءات افريقية');
  }

  render() {
  

    return (
      <Slides data={SLIDE_DATA} 
              onComplete={this.onSlidesComplete}
              style = {{justifyContent:'center',alignItems:'center'}}
              />

    );
  }
}

styles={
  icon:{
    width: 24,
    height: 24,
    // color :'#0066ff'
    // tintColor:'white'
  },
}
export default WelcomeScreen;
