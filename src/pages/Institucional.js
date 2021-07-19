import React from 'react'
import {View,Text, Image} from 'react-native'

import DefaultStyles from '../styles/GlobalStyles';
import Stylo from '../styles/Institucional'


export default function News( { navigation} ){
    return(
        <View style={DefaultStyles.generico}>
            <Text style={DefaultStyles.title}>
               Sobre o instituto
            </Text> 
            <Image style={Stylo.img} source={require('../img/ghj.jpg')}/>
            <Text style={Stylo.text}>
            O Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN), Campus Pau dos Ferros, inaugurado em 2009, integra a II Fase do Plano de Expansão da Rede Federal de Educação Profissional, Científica e Tecnológica do Ministério da Educação, iniciada em 2007. O Campus do IFRN em Pau dos Ferros está instalado num terreno cedido pela prefeitura, com área de 28.820 m², localizado no Bairro Chico Cajá, BR 405, estando localizado na Região do Alto Oeste Potiguar, a cerca de 430 km da capital do Estado.
            </Text>
        </View>
    )
}