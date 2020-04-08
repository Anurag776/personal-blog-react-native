import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import {Context} from '../Context/BlogContext';

const BlogPostForm =({etitle,econtent,saved})=> {

    const [title,setTitle]=useState(etitle);
    const [content,setContent]=useState(econtent);

    const{addBlogPost} = useContext(Context) 

    return(
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.header}>Enter Title</Text>
                <TextInput style={styles.input}
                    value={title}
                    placeholder="Title"
                    onChangeText={(newTitle)=>setTitle(newTitle)}
                />
                <Text style={styles.header}>Enter Content</Text>
                <TextInput style={styles.input}
                    value={content}
                    placeholder="Content"
                    onChangeText={setContent}
                />
                <TouchableOpacity style={styles.buttonstyle} onPress={()=>{saved({title,content})}}>
                     <Text style={{marginTop:20,fontSize:20,fontWeight:'bold'}}>Save Post</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

BlogPostForm.navigationOptions={
        headerShown:false
}

const styles = StyleSheet.create({
    header:{
        fontSize:30,
        marginBottom:10,
        marginLeft:10,
        fontWeight:'bold',
        marginTop:20
    },
    container:{
        //borderWidth:2,
        flex:1
    },
    container2:{
        borderWidth:4,
        borderColor:'black',
        height:450,
        marginTop:100
    },
    input:{
        fontSize:26,
        marginBottom:10,
        borderBottomWidth:1,
        height:50,
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        paddingLeft:10
    },
    buttonstyle:{
        marginTop:30,
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
export default BlogPostForm;