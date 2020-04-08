import React, { useEffect, useState } from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import HomeScreen from '../Screens/HomeScreen';
import ShowScreen from '../Screens/ShowScreen';

const ResolveScreen =({navigation})=>{

    const[loggedIn,setlogged] = useState(null);

    useEffect(()=>{
        try{
            firebase.initializeApp({
                    apiKey: "AIzaSyAQUG-k3rdZupALj-vJ7U90ziYKZZiqQ_w",
                    authDomain: "blog-da8d8.firebaseapp.com",
                    databaseURL: "https://blog-da8d8.firebaseio.com",
                    projectId: "blog-da8d8",
                    storageBucket: "blog-da8d8.appspot.com",
                    messagingSenderId: "246108563853",
                    appId: "1:246108563853:web:6a43be175e9bcf86ae35c4",
                    measurementId: "G-0FDV5F79ED"
            })
        }catch(err){
            console.log(err.message)
        }
    },[])
    
    let firebaseAppDefined=false;

    setInterval(()=>{
        if(!firebaseAppDefined){
            if(firebase.app()){
                firebase.auth().onAuthStateChanged((user)=>{
                    if(user){
                        navigation.navigate('loginflow')
                    }else{
                        navigation.navigate('Home')
                    }
                })

                firebaseAppDefined=true
            }
        }
    },100)

    // const RenderButton=()=>{
    //     switch(loggedIn){
    //         case true:{
    //             return <ShowScreen navigation={navigation}/>
    //         }
    //         case false:{
    //             return <HomeScreen navigation={navigation}/>
    //         }
    //         default:
    //             return<HomeScreen navigation={navigation}/>
    //     }
    // }
    // //console.log(loggedIn)

    return (
        null
    )
}

ResolveScreen.navigationOptions={
        headerShown:false
}

export default ResolveScreen;