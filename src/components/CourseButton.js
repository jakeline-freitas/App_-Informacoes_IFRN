import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DefaultStyles from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome5'

export function CourseButton (props ){

  return (
    <TouchableOpacity style={DefaultStyles.buttonCourse} activeOpacity={0.6} onPress={props.aoClicar}>
      <View style={DefaultStyles.generico} >
        <Text style={DefaultStyles.buttonText}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  )
};