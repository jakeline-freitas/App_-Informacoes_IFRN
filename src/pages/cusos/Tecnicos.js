import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import DefaultStylo from '../../styles/GlobalStyles'




export default function Ads(){
    return(
        <View>
            <ScrollView>
                <Text style={DefaultStylo.title}>
                    Técnicos Integrados
                </Text>
                <Text style={DefaultStylo.text}>
                São cursos cujo candidato aprovado cursará, juntamente com o ensino médio, o curso técnico escolhido.

                - ProITEC: O Programa de Iniciação Tecnológica e Cidadania é um curso na modalidade a distância voltado para alunos do 9º ano da rede pública de ensino. O programa prepara os estudantes por meio de livros e teleaulas para o ingresso no ensino técnico integrado ministrado pelo IFRN.

                - Exame de Seleção: Processo seletivo voltado para alunos que estão concluindo ou já concluíram o 9º ano do ensino fundamental. Diz respeito às Vagas Gerais dos Cursos Técnicos de Nível Médio na Forma Integrada. Os alunos aprovados vão cursar o ensino médio integrado ao técnico-profissionalizante do IFRN.
                {'\n'}<Text style={{fontWeight:'bold'}}>::: Curso Técnico Integrado em Alimentos</Text>{'\n'}

                Atua no processamento e conservação de matérias-primas, produtos e subprodutos da indústria alimentícia e de bebidas, realizando análises físico- químicas, microbiológicas e sensoriais. Auxilia no planejamento, coordenação e controle de atividades do setor. Realiza a sanitização das indústrias alimentícias e de bebidas. Controla e corrige desvios nos processos manuais e automatizados. Acompanha a manutenção de equipamentos. Participa do desenvolvimento de novos produtos e processos Possibilidades de atuação: Indústrias de alimentos e bebidas. Entrepostos de armazenamento e beneficiamento. Laboratórios, institutos de pesquisa e consultoria. Órgãos de fiscalização sanitária e proteção ao consumidor. Indústria de insumos para processos e produtos.   
                - Modalidade: Presencial.   
                - Carga horária do curso: 3.480h.
                - Duracão do curso: 4 anos. 
                - Resolucão de criacão do curso: Resolução Nº 18/2006-CONSUP/IFRN, de 26/07/2006.
                {'\n'}<Text style={{fontWeight:'bold'}}>::: Curso Técnico Integrado em Apicultura</Text>{'\n'}
                Executa o planejamento, a implantação, a manutenção e a gestão de apiários. Atua no beneficiamento e processamento de mel, própolis, geléia real e demais produtos da atividade apícola. Acompanha pesquisas sobre produção intensiva e artesanal, terapias com mel, controle de qualidade e aprimoramento de espécies. Comercializa produtos apícolas, organiza feiras e exposições da atividade apicultora, incentivando a realização de negócios no setor ou mesmo a criação artesanal de abelhas. Possibilidades de atuação Apiários e demais estabelecimentos de beneficiamento e processamento e comercialização de produtos da apicultura.
                - Modalidade: Presencial.   
                - Carga horária do curso: 4.010h. 
                - Duracão do curso:4 anos.
                - Resolucão de criacão do curso: Resolução Nº 24/2011-CONSUP/IFRN, de 09/10/2011.
                {'\n'}<Text style={{fontWeight:'bold'}}>::: Curso Técnico Integrado em Informática</Text>{'\n'}
                Desenvolve programas de computador, seguindo as especificações e paradigmas da lógica de programação e das linguagens de programação. Utiliza ambientes de desenvolvimentos de sistemas, sistemas operacionais e banco de dados. Realiza testes de software, mantendo registro que possibilitem análises e refinamento dos resultados. Executa manutenção de programas de computadores implantados. Possibilidades de atuação: Instituições públicas, privadas e do terceiro setor que demandem sistemas computacionais, especialmente envolvendo programação de computadores   
                - Modalidade: Presencial.   
                - Carga horária do curso: 3880h.    
                - Duracão do curso: 4 anos.    
                - Resolucão de criacão do curso: Resolução Nº 13/2009-CONSUP/IFRN, de 22/05/2009.
                </Text> 
            </ScrollView>
       
        </View>
    )
}