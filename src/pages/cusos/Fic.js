import React from 'react'
import {View,Text, ScrollView} from 'react-native'
import DefaultStylo from '../../styles/GlobalStyles'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Ads(){
    return(
        <View>
            <ScrollView>
                <Text style={DefaultStylo.title}>
                Formação Inicial e Continuada (FIC)
                </Text>
                <Text style={DefaultStylo.text}>
                <Text style={{fontWeight:"bold"}}>Saiba de cursos de formação inicial e continuada (FIC) que já foram ofertados pelo Campus Pau dos Ferros do IFRN.{'\n'}</Text>
                <Icon name='star-of-life' size={7}/> Costureira (turmas nível básico) do Programa Mulheres Mil (via extensão do IFRN).{'\n'}
                <Icon name='star-of-life' size={7}/>Costureira (turmas nível avançado) do Programa Mulheres Mil (via extensão do IFRN).{'\n'}
                <Icon name='star-of-life' size={7}/>Processamento de alimentos do Programa Mulheres Mil (via extensão do IFRN).{'\n'}
                <Icon name='star-of-life' size={7}/>Beneficiamento de produtos apícolas e meliponícolas do Programa Mulheres Mil (via extensão do IFRN).{'\n'}
                <Icon name='star-of-life' size={7}/>Abelha Rainha Artesã - Mulher e Geração de Renda (via extensão do IFRN).{'\n'}
                <Icon name='star-of-life' size={7}/>Abelha Operária Empoderada:geração de renda utilizando os produtos apícolas.{'\n'}
                <Icon name='star-of-life' size={7}/>Avaliação da Aprendizagem no Contexto Escolar (via Instituição).{'\n'}
                <Icon name='star-of-life' size={7}/>Preparador de Produtos Lácteos (via Unidade Industrial-Escola).{'\n'}
                <Icon name='star-of-life' size={7}/>Preparador de Molhos e temperos (via Unidade Industrial-Escola).{'\n'}
                <Icon name='star-of-life' size={7}/>Preparador de Doces (via Unidade Industrial-Escola).{'\n'}
                <Icon name='star-of-life' size={7}/>Processamento de produtos de origem vegetal - Beneficiando o pedúnculo do caju e frutas torpicais (Via Projeto Fábrica-Escola).{'\n'}
                {'\n'}
                <Text style={{fontWeight:"bold"}}>Cursos FIC que foram ofertados via Pronatec</Text>{'\n'}
                <Icon name='star-of-life' size={7}/> Operador de computadores.{'\n'}
                <Icon name='star-of-life' size={7}/> Montador e reparador de computadores.{'\n'}
                <Icon name='star-of-life' size={7}/> Programador de sistemas.{'\n'}
                <Icon name='star-of-life' size={7}/> Instalador e reparador de redes de computadores.{'\n'}
                <Icon name='star-of-life' size={7}/> Agente de gestão de resíduos sólidos.{'\n'}
                <Icon name='star-of-life' size={7}/> Agente de combate às endemias.{'\n'}
                <Icon name='star-of-life' size={7}/> Auxiliar de arquivo.{'\n'}
                <Icon name='star-of-life' size={7}/> Auxiliar de recursos humanos.{'\n'}
                <Icon name='star-of-life' size={7}/> Espanhol básico.{'\n'}
                <Icon name='star-of-life' size={7}/> Produtor de produtos apícolas.{'\n'}
                <Icon name='star-of-life' size={7}/> Apicultor.{'\n'}
                <Icon name='star-of-life' size={7}/> Operador de processamento de produtos apícolas.{'\n'}
                <Icon name='star-of-life' size={7}/> Monitor de recreação/recreador.{'\n'}
                <Icon name='star-of-life' size={7}/> Eletricista instalador predial de baixa tensão.{'\n'}
                <Icon name='star-of-life' size={7}/> Operador em beneficiamento de pescado.{'\n'}
                </Text>
            </ScrollView>
             
             
        </View>
    )
}