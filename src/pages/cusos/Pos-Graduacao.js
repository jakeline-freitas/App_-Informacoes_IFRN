import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import DefaultStylo from '../../styles/GlobalStyles'




export default function Ads(){
    return(
        <View>
            <ScrollView>
                <Text style={DefaultStylo.title}>
                Pós-Graduação
                </Text>
                <Text style={DefaultStylo.text}>
                   <Text style={{fontWeight:'bold'}}>::: Especialização em Ensino de Ciências Naturais e Matemática (VIGENTE){'\n'}</Text>
                   O curso de especialização em Ensino de Ciências Naturais e Matemática têm como objetivo capacitar professores das áreas de Física, Química, Biologia e Matemática, com base em saberes específicos, curriculares e experiências, visando contribuir para um desenvolvimento qualificado da educação básica do estado do Rio Grande do Norte e do país. Dentre os objetivos específicos do curso podemos citar: possibilitar aos profissionais de docência um aperfeiçoamento voltado ao Ensino de Ciências Naturais e Matemática; aprofundar conhecimentos específicos no ensino de Biologia, Física, Química e Matemática; desenvolver as habilidade comunicativas e da capacidade de expressão, oral e escrita, nos diferentes sistemas simbólicos de representação científica; promover a valorização, na dimensão da formação continua de professores da área de Ciências Naturais e Matemática, a partir de conhecimentos acerca da profissionalização docente. 
                   {'\n'}<Text style={{fontWeight:'bold'}}>::: Programa de Pós-Graduação em Ensino (Mestrado){'\n'}</Text>
                   O Programa de Pós-Graduação em Ensino (PPGE), criado em 2013, oferece o Curso de Mestrado Acadêmico em Ensino (CMAE) e está vinculado ao Departamento de Educação do Campus Avançado de Pau dos Ferros (CAPF), da Universidade do Estado do Rio Grande do Norte (UERN). O CMAE é ofertado pela UERN, em parceria com o Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN) e com a Universidade Federal Rural do Semi-Árido (UFERSA), por meio de Acordo Formal de Cessão de Servidor, respeitando e articulando as normas internas do Regimento Geral de cada uma das instituições parceiras.
                   {'\n'}<Text style={{fontWeight:'bold'}}>Outras pós-graduações já realizadas no Campus Pau dos Ferros:{'\n'}</Text>
                   Especialização em educação Ambiental e Geografia do Semiárido{'\n'}
                    - Modalidade: presencial.{'\n'}
                    - Carga horária do curso: 400 horas.{'\n'}
                    - Duracão do curso: 1 ano e 6 meses.{'\n'}
                    - Resolucão de criacão do curso: Resolução Nº 69/2009-CONSUP/IFRN, de 20/10/2009.
                </Text>

            </ScrollView>
             
        </View>
    )
}