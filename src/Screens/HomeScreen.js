import React, { useState, useContext } from 'react';
import firebase from 'firebase';
import {View, Text, Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {Entypo,AntDesign} from '@expo/vector-icons';
import {Context} from '../Context/BlogContext';

const HomeScreen =({navigation})=>{
    //console.log(props.navigation)

    const{state, displayError,clearerror} = useContext(Context) 

    const[Username,setusername] = useState('');
    const[password,setpassword] = useState('');


    const Render =()=> {
        firebase.auth().signInWithEmailAndPassword(Username,password)
        .then(onLoginSuccess())
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(Username,password)
            .then(onLoginSuccess())
            .catch((err)=>{
                //console.log(err.message);
                onLoginFail(err);
            })
        })
    }

    function onLoginFail(err){
        displayError(err);
    }

    const onLoginSuccess=()=>{
        setusername('')
        setpassword('')
        clearerror()
       // console.log(state.error)
    }
    
    return(
        <View style={styles.conatainer1}>
            <View style={styles.conatainer2}>
                <Text style={styles.headertext}>User Login</Text>
                <Entypo name='login' size={90} style={styles.iconstyle}/>
                <TextInput style={styles.Input}
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Username'
                    value={Username}
                    onChangeText={setusername}
                />
                <TextInput style={styles.Input}
                    placeholder='Password'
                    secureTextEntry
                    value={password}
                    onChangeText={setpassword}
                />

                { state.error? <Text style={styles.errortext}>{state.error}</Text>:null} 

                <TouchableOpacity style={{marginTop:25}} onPress={()=>{Render()}}> 
                    <AntDesign name='login' style={styles.iconstylelogin}/>
                    <Text style={styles.ButtonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

HomeScreen.navigationOptions = () => {
    return{
        headerShown : false
    }
}

const styles = StyleSheet.create({
    headertext:{
        fontSize:50,
        fontWeight:'bold',
        alignSelf:'center'
    },
    iconstyle:{
        alignSelf:'center',
        marginTop:10,
        marginRight:20,
        marginBottom:10
    },
    conatainer1:{
        flex:1,
        backgroundColor:'skyblue',
        //borderColor:'red',
        //borderWidth:10
    },
    conatainer2:{
        backgroundColor:'skyblue',
        // borderColor:'black',
        // borderWidth:10,
        height:500,
        marginTop:100
    },
    Input:{
        height:60,
        borderWidth:1,
        fontSize:20,
        backgroundColor:'white',
        marginLeft:30,
        marginRight:30,
        padding:10,
        borderRadius:10,
        marginTop:15
    },
    ButtonText:{
        fontSize:30,
        alignSelf:'center',
        fontWeight:'bold'
    },
    iconstylelogin:{
        fontSize:60,
        alignSelf:'center',
        marginTop:10,
        fontWeight:'bold'
    },
    errortext:{
        fontSize:15,
        color:'red',
        alignSelf:'center',
        marginTop:10
    }
})

export default HomeScreen;