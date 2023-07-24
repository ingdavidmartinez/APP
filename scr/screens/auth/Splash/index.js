import React from "react";
import { Text,Image, View,ImageBackground, Pressable} from "react-native";
import { styles } from './styles'
import Button from "../../../components/Button";

const Splash = () => {
    return(

        <View style = {styles.container}>
        <Text  style = {styles.head}>CONGRESO BIS 2023</Text>
        <Text  style = {styles.head2}>BIENESTAR Y SALUD PARA TODOS</Text>
        <Text  style = {styles.head3}>BUCARAMANGA-SANTANDER</Text>      
        <Image resizeMode="contain" style = {styles.image} source={require('../../../assets/MEJORALOG.png')}/>
        
        <Text  style = {styles.head4}>ENFERMEDADES SILECIONSAS:</Text>
        <Text  style = {styles.head5}>DIABETES</Text>
        <Text  style = {styles.head6}>"Un abordaje multidiciplinar"</Text>      
        
        <Image resizeMode="contain" style = {styles.imageUSTA} source={require('../../../assets/USTA.png')}/>
        <Image resizeMode="contain" style = {styles.imageBGA400} source={require('../../../assets/BGA400.png')}/>
        <Image resizeMode="contain" style = {styles.imageFCV} source={require('../../../assets/FCV.png')}/>
        
        
        <ImageBackground source={require('../../../assets/Diabetes.jpg')} style={styles.img}/>
        
        <Button style={styles.button} title={"Sign Up"}/>
        <Pressable  hitSlop={20}>
            <Text style = {styles.footerText} >Sign In</Text>
        </Pressable>
        
       

        </View>
    )
          
}

export default React.memo(Splash);