import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BlogPostForm from './BlogPostForm';

const Header = ({Headername, symboladd, symbolmenu,task}) => {

    return(
        <View style={{width:420,flexDirection:'row',borderBottomWidth:2}}>  
            <View style={styles.menuStyle}>
                <TouchableOpacity>
                    {symbolmenu}
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={{fontSize:30,marginTop:25,alignSelf:'center',fontWeight:'bold'}}>{Headername}</Text>
            </View>
            <View style={{flex:1,marginLeft:8}}>
                <TouchableOpacity style={styles.iconstyle} onPress={()=>{task()}}>
                    {symboladd}
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles=StyleSheet.create({
    container : {
        //borderWidth:2,
        height:50,
        width:200,
        justifyContent: "center",
        alignItems: "center",
        marginBottom:20,
        marginTop:20,
        flexDirection:'row',
        marginLeft:45,
    },
    iconstyle:{
        //borderWidth:2,
        height:50,
        width:50,
        marginTop:35,
        marginRight:10
    },
    menuStyle:{
        //borderWidth:2,
        marginTop:35,
        alignItems:'flex-start',
        marginLeft:10
    }
})

export default Header;
