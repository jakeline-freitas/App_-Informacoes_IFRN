import React from 'react'
import {View,Text,Image} from 'react-native'
import Stylo from '../styles/GlobalStyles'
import { Linking } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Extension(){
    return(
        <View>
        
            <Image source={require('../img/image_large.jpg')}/>
            <Text style={Stylo.text}>
            Os princípios que orientam a composição dos Institutos Federais enaltecem a relevância da pesquisa e da extensão, em consonância indissociável com o ensino, viabilizando a relação transformadora entre os Institutos Federais e a Sociedade. Trata-se, portanto, de uma forma de interação que deve ser vivenciada com a comunidade na qual o Instituto está inserido.
            Os projetos de extensão têm, como eixo norteador de elaboração, os focos tecnológicos que foram definidos no Plano de Desenvolvimento Institucional-PDI do IFRN, sendo executados para atender aos objetivos dos Institutos Federais estabelecidos na Lei 11.892/2008.{"\n"}
            {'\n'}<Text style={[{color: 'blue'},{fontWeight: 'bold'}]} onPress={() => Linking.openURL('https://portal.ifrn.edu.br/campus/paudosferros/extensao')}><Icon name='link' size={15}/> Conheça os projetos de extensão vigentes no Campus Pau dos Ferros do IFRN</Text>
            </Text>   
        </View>
    )
}