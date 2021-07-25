import React from 'react'
import {View,Text, SafeAreaView} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import DefaultStylo from '../../styles/GlobalStyles'



export default function Ads(){
    return(
        <View>
            <ScrollView>
                <Text style={DefaultStylo.title}>
                    Graduação - Licenciatura em Química
                </Text> 
                <Text style={DefaultStylo.text}>
                O Curso Superior de Licenciatura em Química forma profissionais que são habilitados ao exercício do magistério na educação básica. Pode atuar na área de análises químicas e controle de qualidade, quer no desenvolvimento de novos métodos analíticos, quer na operação de equipamentos. Pode também se dedicar à pesquisa acadêmica, que visa a geração de novos conhecimentos, materiais didáticos e metodologias. Pode atuar nas diversas fases da produção industrial, em atividades que englobam: a supervisão da fabricação de produtos para o mercado consumidor doméstico (detergentes, cosméticos, outros), de insumos agrícolas (fertilizantes e defensivos), insumos industriais (corantes, estabilizantes, conservantes, aromatizantes e aditivos em geral para conferir propriedades específicas a certos produtos ou materiais), matérias-primas (solventes, plásticos, borrachas e produtos químicos em geral); o controle de qualidade de matérias-primas e produtos para que os produtos finais atinjam as especificações impostas pelo mercado ou pelos órgãos oficiais de controle sanitário; o tratamento de efluentes industriais, visando a proteção do meio ambiente e o reaproveitamento de subprodutos. Pode atuar também em outras áreas relacionadas aos processos produtivos. Possibilidades de atuação: instituições de ensino, incluindo as de Educação Básica, como professor; em indústrias químicas, petroquímicas, de alimentos e bebidas, de papel e celulose, de cerâmica, de fármacos, têxtil, de pigmentos e tintas, de plásticos e cimento; na área comercial, com vendas, representação e assistência técnica.

                {'\n'}{'\n'}Carga Horária do curso:
                3.404 horas {'\n'}

                Duração do curso:
                4 anos {'\n'}

                Resolução de criação do curso:
                Resolução Nº 08/2012-CONSUP/IFRN, de 01/03/2012. {'\n'}

                Campus autorizados a ofertar o curso:
                Apodi, Currais Novos, Ipanguaçu, Pau dos Ferros
                </Text>
            </ScrollView>
             
        </View>
    )
}