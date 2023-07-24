
import React,{useEffect} from 'react';
import {  SafeAreaView,} from 'react-native';
//import Signup from './scr/screens/auth/Signup';
//import Splash from './scr/screens/auth/Splash';
import Signin from './scr/screens/auth/Signin';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
//const WEB_CLIENT_ID = '995159156276-nn0ufr2s32ff4ji68l4v9kqo6nqjnavq.apps.googleusercontent.com'
//const IOS = '995159156276-i9jouustuo995d8mi8p4i9a4k8lnroh4.apps.googleusercontent.com'
//const IOS_REVERSE = 'com.googleusercontent.apps.995159156276-i9jouustuo995d8mi8p4i9a4k8lnroh4'


const App = () => {

  useEffect(()=>{
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID , // client ID of type WEB for your server (needed to verify user ID and offline access)
      iosClientId: Config.GOOGLE_IOS_CLIENT_ID , // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  },[])

  return (
    <SafeAreaView>
      <Signin/>
    </SafeAreaView>
  );
};


/*  const styles = StyleSheet.create({
    themeHeader:{margin: 16, fontSize:24, backgroundColor: 'yellow', textAlign: 'center'}
}) */
 

export default App;
