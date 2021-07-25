import React from 'react'
import {View,Text} from 'react-native'
import DefaultStylo from '../../styles/GlobalStyles'

export default function Ads(){
    return(
        <View>
            <Text style={DefaultStylo.title}>
            Graduação - Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)
            </Text>
            <Text style={DefaultStylo.text}>
            O Curso de Tecnólogo em Análise e Desenvolvimento de Sistemas forma profissionais que  analisam, projetam, documentam, especificam, testam, implantam e mantém sistemas computacionais de informação. Este profissional trabalha, também, com ferramentas computacionais, equipamentos de informática e metodologia de projetos na produção de sistemas. Raciocínio lógico, emprego de linguagens de programação e de metodologias de construção de projetos, preocupação com a qualidade, usabilidade, robustez, integridade e segurança de programas computacionais são fundamentais à atuação deste profissional.

            {'\n'}Carga Horária do curso:
            2.594 horas{'\n'}

            Duração do curso:
            3 anos{'\n'}

            Resolução de criação do curso:{'\n'}
            Resolução Nº 17/2012-CONSUP/IFRN, de 01/03/2012. 
            </Text> 
             
        </View>
    )
}