import React, { useContext } from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Context} from '../Context/BlogContext';
import Header from '../Components/Header';
import {EvilIcons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';

const ContentScreen=({navigation})=>{

    //console.log(navigation.getParam('id'));
    const id = navigation.getParam('id')
    const {state:{blogPost}}=useContext(Context);

    //console.log(blogPost)

    const currentBlog = blogPost.find(
        currentBlog => currentBlog.id == navigation.getParam('id')
    )

    const Goto=()=>{
        navigation.navigate('Edit',{id:navigation.getParam('id')})
    }

    var sign=<EvilIcons name="pencil" size={45}/>
    var signmenu=<Feather name='menu' size={45}/>

    return(
        <View style={{borderWidth:4,flex:1}}>
            <Header
                Headername='Content'
                symboladd={sign}
                symbolmenu={signmenu}
                task={Goto}
            />
            <View style={styles.container}>
                <View style={{marginLeft:20}}>
                    <Text style={styles.title}>Title</Text>
                </View>
                <View style={styles.titlecontainer}>
                    <Text style={styles.content}>{currentBlog.title}</Text>
                </View>
                <View style={{marginLeft:20}}>
                    <Text style={styles.title}>Content</Text>
                </View>
                <View style={styles.titlecontainer}>
                    <Text style={styles.content}>{currentBlog.content}</Text>
                </View>
            </View>
        </View>
    )
}

ContentScreen.navigationOptions={
    headerShown: false
}

const styles = StyleSheet.create({
    titlecontainer:{
        borderBottomWidth:2,
        marginLeft:20,
        marginRight:30,
        width:300,
        marginBottom:10,
        marginTop:10
    },
    container:{
        //borderWidth:2,
        marginTop:50,
        justifyContent:'space-around'
    },
    title:{
        fontSize:30,
        marginLeft:10,
        fontWeight:'bold',

    },
    content:{
        fontSize:25,
        marginLeft:20
    }
})
export default ContentScreen;