import {StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      alignItems: 'center'
    },
    line:{
      color: colors.lightgrey, 
      height:1,
      backgroundColor: colors.lightgrey,
      flex:1, 
      marginVertical:20, 
    },
    text:{
        color: colors.blue,
        fontWeight:'500',
        marginHorizontal:8,
    },
    
})