import React from 'react'
import {View,Text} from 'react-native'
import DefaultStylo from '../styles/GlobalStyles'
import { CourseButton } from '../components/CourseButton'



export default function Courses( { navigation} ){
    return(
        <View>
            <Text style={DefaultStylo.title}>
                Ensino | Cursos
            </Text> 
            <View style={DefaultStylo.generico}>
                <CourseButton label="Técnicos Integrados" aoClicar={()=> navigation.navigate("Técnicos")}/>
                <CourseButton label="Graduação - ADS" aoClicar={()=> navigation.navigate('ADS')}/>
                <CourseButton label="Graduação - Licenciatura em Química" aoClicar={()=> navigation.navigate('Química')}/>
                <CourseButton label="Pós-Graduação" aoClicar={()=> navigation.navigate('Pós-Graduação')}/>
                <CourseButton label="Formação Inicial e Continuada (FIC)" aoClicar={()=> navigation.navigate('FIC')}/>
            </View>  
        </View>
    )
}