import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';

const deleteButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={props.style}>
      <Image
        source={require ('../../assets/gallery.png')}
        style={[props.style, {height: 20, width: 20}]}
      />
    </TouchableOpacity>
  );
};

export default deleteButton;