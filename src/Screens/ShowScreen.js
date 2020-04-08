import React, { useContext, useEffect } from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity, Button} from 'react-native';
import Header from '../Components/Header';
import {Feather} from '@expo/vector-icons';
import {Context} from '../Context/BlogContext';

const ShowScreen = ({navigation}) =>{
    var signadd=<Feather name='plus' size={45}/>
    var signmenu=<Feather name='menu' size={45}/>

    const {state:{blogPost},deleteBlogPost,getBlogposts} = useContext(Context)

    useEffect(()=>{
        getBlogposts()

        const listener = navigation.addListener('didFocus',()=>{
            getBlogposts();
        })
    },[])

    function add(){
       navigation.navigate('Create')
    }
    
    return(
        <View style={{flex:1}}>
            <Header
                Headername='My Blogs'
                symboladd={signadd}
                symbolmenu={signmenu}
                task={add}
            />
            <FlatList
                data={blogPost}
                keyExtractor={blogPosts=>blogPosts.id}
                renderItem={({item})=>{
                    return(
                    <TouchableOpacity onPress={()=>{navigation.navigate('Content',{id: item.id})}}>
                        <View style={styles.blogcontainer}>
                            <View style={{marginLeft:10,width:300,height:60}}>
                                <Text style={{fontSize:27,fontWeight:'700'}}>{item.title}</Text>
                                <Text tyle={{fontSize:1,marginLeft:10,justifyContent:'space-around'}}>{item.content+'...'}</Text>
                            </View>
                            <TouchableOpacity style={styles.iconstyle} onPress={()=>{deleteBlogPost(item.id)}}>
                                <Feather name='trash-2' size={35}/>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

ShowScreen.navigationOptions={
    headerShown: false
}

const styles=StyleSheet.create({
    blogcontainer:{
        flexDirection:'row',
        flex:1,
        borderWidth:4,
        justifyContent:'space-between',
        marginBottom:1,
        marginTop:1,
        height:80,
        borderRadius:5,
        marginLeft:1,
        marginRight:1,
        borderColor:'black',
        alignItems:'center'
    },
    iconstyle:{
        paddingTop:5,
        marginRight:10
    }
})

export default ShowScreen;