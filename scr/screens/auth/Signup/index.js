import React, { useState } from "react";
import { ScrollView, Text, View} from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Checkbox from "../../../components/Checkbox";
import Input from "../../../components/Input";

import { styles } from './styles'
import Button from "../../../components/Button";
import Seperator from "../../../components/Seperator";
import GoogleLogin from "../../../components/GoogleLogin";


const Signup = () => {
    
    const[checked, setChecked] = useState(false);
    
    const onSignIn = () => {
        console.log('Hello');
    }


    return(
        <ScrollView style={styles.container}>
            <AuthHeader title="Sign Up" />               
            <Input label="Name" placeholder = "Cesar Valencia"/>
            <Input label="E-mail" placeholder = "example@gmail.com"/>
            <Input isPassword label="Password" placeholder = "*******"/>
            <View style={styles.agreeRow}>
                <Checkbox checked ={checked} onCheck={setChecked}/>
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
            </View>
            <Button style={styles.button} title="Sign Up"/>   
            
            <Seperator text ={"Or sign up with"} />
            <GoogleLogin/>
            <Text style={styles.footerText}>
                already have an account?
                <Text onPress={onSignIn} style = {styles.footerLink}>Sign In</Text>    
            </Text>    
        </ScrollView>
        

    )
          
}

export default React.memo(Signup);