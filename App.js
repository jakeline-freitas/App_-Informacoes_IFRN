
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes'; 
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from "react-native";



export default function App() {
  return (
      /**
       * O navigationContainer Precisar ficar sob as rotas, 
       * é responsável eme gerenciar todaas as rotas.
       * O SafeAreaView é Utilizar para controler da área de renderização. 
       */

    <NavigationContainer>
      
      <SafeAreaView style={styles.droidSafeArea}>
          <Routes/>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  droidSafeArea: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 40 : 0
  }
});
