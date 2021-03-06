import { StyleSheet, Platform } from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
    container:{
        flex: 1,  
    },
    title: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
           
    },
    text:{
        textAlign:'justify',
        marginBottom: 10,
        marginTop: 20,
        marginHorizontal:15
    },
    generico: {
        alignItems:"center",
        justifyContent:"center"

    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    buttonHome: {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.homeButton,
        width:130,
        height:130,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 10
    },
    buttonText: {
        color: Colors.buttonText,
        fontSize: 20,
        textAlign: 'center'
    },
    imageBackground: {
        flex:1,
        justifyContent:'center',
        resizeMode: 'cover',
        alignItems: 'center',
        
    },
    buttonCourse: {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: Colors.homeButton,
        width:200,
        height:72,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10
    }
});