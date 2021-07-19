  
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultStyles from '../styles/GlobalStyles';
import Colors from '../styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5'

export function HomeButton (props ){

  return (
    <TouchableOpacity style={DefaultStyles.buttonHome} activeOpacity={0.6} onPress={props.aoClicar}>
      <View style={DefaultStyles.generico} >
        <Icon name={props.icone} color="#FFF" size={50}/>
        <Text style={DefaultStyles.buttonText}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )
};