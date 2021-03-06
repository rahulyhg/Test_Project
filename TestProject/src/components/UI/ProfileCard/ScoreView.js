import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image
} from 'react-native';
import { normalize } from '../../../../Constant';

const scoreView = props => (

     <View style={props.style} >
     <View style={scoreViewStyle.scoreView} backgroundColor = {props.backgroundColor}>
      <Text style = {{color : 'white' , fontSize : normalize(15) , fontWeight : '600'}}>{props.text[1]}</Text>
      </View>
      <Text style={scoreViewStyle.textView}>{props.text[0]}</Text>
    </View>

);


const scoreViewStyle = StyleSheet.create({

    scoreView: {
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        backgroundColor: 'white',
        width : (Dimensions.get('window').width /(100/65) )/4 - 5,
        height : (Dimensions.get('window').width /(100/65) )/4 - 5,
        borderRadius: (((Dimensions.get('window').width /(100/65) )/4) - 5)/2,
    },
    textView: {
        marginTop : 5,
        fontSize : normalize(12)
        // position: 'absolute',
        // backgroundColor: 'white',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        // borderRadius: 10,

    },
});

export default scoreView;