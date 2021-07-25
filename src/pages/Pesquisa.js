import React from 'react'
import {View,Text, ScrollView, Linking} from 'react-native'
import DefaultStylo from '../styles/GlobalStyles'
import { List } from 'react-native-paper';


export default function News(){

    return(
        <View>
            <ScrollView>
                <Text style={DefaultStylo.title}>
                    Pesquisa e Inovação
                </Text>
                <Text style={DefaultStylo.text}>A Coordenação de Pesquisa e Inovação (COPEIN) do Campus Pau dos Ferros está alinhada à política de trabalho da Pró-Reitoria de Pesquisa e Inovação (PROPI) do IFRN, que tem como objetivo estratégico promover a pesquisa científica básica e avançada entre os estudantes e servidores da instituição, bem como estimular o desenvolvimento de soluções, processos e produtos técnicos, tecnológicos e inovadores, de forma a estender seus benefícios não só à comunidade acadêmica, mas também toda comunidade civil. Além de realizar ações para difundir a pesquisa em todas as áreas do conhecimento como elemento formador da pesquisa de qualidade e associá-la com o desenvolvimento socioeconômico da região do Alto Oeste Potiguar.</Text>   
                <List.Section>
                <List.Accordion
                    title="LINKS ÚTEIS"
                    left={props => <List.Icon {...props} icon="link" />}>
                    <List.Item title="Editais de pesquisa" onPress={() => Linking.openURL('https://portal.ifrn.edu.br/pesquisa/editais')}/>
                    <List.Item title="Resultados" onPress={() => Linking.openURL('https://portal.ifrn.edu.br/pesquisa/editais')}/>
                    <List.Item title="Programas de bolsas" onPress={() => Linking.openURL('https://portal.ifrn.edu.br/pesquisa/projetos/programas-bolsas-pesquisa')}/>
                    <List.Item title="Requisitos para concessão de bolsas" onPress={() => Linking.openURL('https://portal.ifrn.edu.br/pesquisa/projetos/requisitos-concessao-bolsas')}/>
                    <List.Item title="Revistas científicas institucionais" onPress={() => Linking.openURL('https://portal.ifrn.edu.br/pesquisa/revistas-cientificas')}/>
                </List.Accordion>
                
                </List.Section>
            </ScrollView>
        </View>
    )
}