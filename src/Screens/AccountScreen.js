import React from 'react';
import firebase from 'firebase';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const AccountScreen=()=>{

    return(
        <View>
            <Text style={styles.header}>AccountScreen</Text>
            <TouchableOpacity style={styles.buttonstyle} onPress={()=>{firebase.auth().signOut()}}>
                <Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

AccountScreen.navigationOptions=({
    title:'Profile',
    tabBarIcon:<MaterialIcons name="account-circle" size={30}/>
})
const styles=StyleSheet.create({
    header:{
        fontSize:30,
        marginTop:90,
        alignSelf:'center',
        fontWeight:'bold'
    },
    buttonstyle:{
        marginTop:60,
        borderWidth:2,
        height:70,
        width:350,
        borderRadius:10,
        alignItems:'center',
        borderColor:'black',
        backgroundColor:'skyblue',
        alignSelf:'center'
    }
})

export default AccountScreen;