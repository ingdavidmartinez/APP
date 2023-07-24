import {StyleSheet} from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container:{
      
        backgroundColor: colors.blue,
        paddingVertical:23,
        paddingHorizontal:120,
        borderRadius:8,
    },
    title:{
        color: colors.white,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        
    },
    
})