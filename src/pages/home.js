import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity} from 'react-native';
import { HomeButton } from '../components/HomeButton';
import HomeStyles from '../styles/HomeStyles';
import DefaultStyles from '../styles/GlobalStyles';
// import api from '../services/api'

// async function handleSearchUser( ){
//     try {
//       response = await api.get();
//     //   const {data} = response;
//       console.log(response)
//     }catch (error) {
//         console.error(error);
//     }
// }

export default function Home( { navigation} ){
    return(
        
        <View style={DefaultStyles.container}>
            <ImageBackground source= {require('../img/image_ifrn.jpg')} style={DefaultStyles.imageBackground} imageStyle= 
{{opacity:0.2}}>
                <View style ={HomeStyles.containerButtons}>
                    <HomeButton label="Notícias" icone = "newspaper" aoClicar= {() => navigation.navigate('Noticias')}/>
                    <HomeButton label="Institucional" icone = "school" aoClicar= {() => navigation.navigate('Institucional')}/>
                    <HomeButton label="Extensão" icone = "puzzle-piece" aoClicar= {() => navigation.navigate('Extensão')}/>
                    <HomeButton label="Calendário" icone = "calendar-alt" aoClicar= {() => navigation.navigate('Calendário')}/>
                </View>
            </ImageBackground>
            
        </View>
    )
}