import React from 'react'
import {View,Text,Image} from 'react-native'
import Stylo from '../styles/GlobalStyles'
import { Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Paragraph, Avatar } from 'react-native-paper';

export default function Extension(){
    return(
        <View>
        
            <Image source={require('../img/image_large_calendar.jpg')}/>
            <Text style={Stylo.text}>
                <Text style={{fontWeight:'bold'}}>ANO LETIVO 2021</Text>{'\n'}

                1º semestre (2021.1):{'\n'}
                    <Paragraph><Icon name='angle-right' size={15}/> Início das aulas: 31/05/2021;</Paragraph>{'\n'}
                    <Paragraph><Icon name='angle-right' size={15}/> Término das aulas: 06/10/2021;</Paragraph>{'\n'}
                2º semestre (2021.2):{'\n'}
                    <Paragraph><Icon name='angle-right' size={15}/> Início das aulas: 05/11/2021;</Paragraph>{'\n'}
                    <Paragraph><Icon name='angle-right' size={15}/> Término das aulas: 25/03/2022.</Paragraph>{'\n'}
            {'\n'}<Text style={[{color: 'blue'},{fontWeight: 'bold'}]} onPress={() => Linking.openURL('https://portal.ifrn.edu.br/campus/paudosferros/servicos-1/calendario-academico-2021-campus-pau-dos-ferros/view')}><Icon name='link' size={15}/> Calendário Acadêmico Institucional 2021 - Campus Pau dos Ferros</Text>
            </Text>   
        </View>
    )
}