import React from 'react'
import {View,Text,Image} from 'react-native'
import Stylo from '../styles/GlobalStyles'
import { Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Extension(){
    return(
        <View>
        
            <Image source={require('../img/image_large_calendar.jpg')}/>
            <Text style={Stylo.text}>
            ANO LETIVO 2021

            1º semestre (2021.1):
                 Início das aulas: 31/05/2021;
                 Término das aulas: 06/10/2021;
            2º semestre (2021.2):
                 Início das aulas: 05/11/2021;
                 Término das aulas: 25/03/2022.
            {'\n'}<Text style={[{color: 'blue'},{fontWeight: 'bold'}]} onPress={() => Linking.openURL('https://portal.ifrn.edu.br/campus/paudosferros/extensao')}><Icon name='link' size={15}/> Conheça os projetos de extensão vigentes no Campus Pau dos Ferros do IFRN</Text>
            </Text>   
        </View>
    )
}