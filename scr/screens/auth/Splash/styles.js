import {  StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";


export const styles =  StyleSheet.create({
    
    container:{
        padding:1,
    },
    
     image: {
        width:80,
        height:80,
        top:"20%",
        left:"3%",    
    } ,
    imageUSTA: {
        position:"absolute",
        top:"310%",
        left:"0%",
        width:350,
        height:350,
    } ,
    imageBGA400: {
        position:"absolute",
        top:"420%",
        left:"0%",
        width:230,
        height:230,
    } ,
    imageFCV: {
        position:"absolute",
        top:"450%",
        left:"65%",
        width:145,
        height:145,
    } ,
    head:{
     
        position:"absolute",
        top:"19%",
        left:"27%",
        fontFamily:"serif",
        fontSize:28,
        fontWeight:'900',
        color: colors.blue,
    },

    head2:{
     
        position:"absolute",
        top:"45%",
        left:"27%",
        fontFamily:'Gill Sans',
        fontSize:18,
        fontWeight:'bold',
        color:colors.white,
        backgroundColor: colors.red,  
    },
    head3:{
     
        position:"absolute",
        top:"65%",
        left:"27%",
        fontFamily:'Verdana',
        fontSize:17,
        color:'blue',
        letterSpacing:2

    },
    head4:{
     
        position:"absolute",
        top:"107%",
        left:"27%",
        color: colors.red,
        fontWeight:'bold',
        fontSize:14,
     
    },

    head5:{
     
        position:"absolute",
        top:"112%",
        left:"27%",
        fontSize:44,
        color: colors.blue,
        fontWeight:'bold',
    },
    head6:{
     
        position:"absolute",
        top:"149%",
        left:"27%",
        color: colors.blue,
        fontWeight:'bold',
        fontSize:16,
        backgroundColor: colors.lightblue,  

       
    },
    img: {
        position:"absolute",
        top:"180%",
        left:"2%",
        width:"100%",
        height:"150%",
        opacity: 0.25
      },
    button:{
        position:"absolute",
        top:"250%",
        left:"13%",
    },

    footerText:{
        
        top:"590%",
        left:"0%",
        color: colors.blue,
        textAlign:'center',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold',
        marginTop:30
      },
      
   
    
})