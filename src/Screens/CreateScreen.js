import React, { useContext } from 'react';
import {View,Text, StyleSheet} from 'react-native';
import BlogPostForm from '../Components/BlogPostForm';
import {Context} from '../Context/BlogContext';

const CreateScreen=({navigation})=>{

    const {state,addBlogPost} = useContext(Context);

    function saved({title,content}){
        alert('Created Post Successfully')
        addBlogPost(title,content)
        navigation.navigate('Show')
    }

    return(
        <View>
            <BlogPostForm 
                saved ={saved}
            />
        </View>
    )
}

CreateScreen.navigationOptions={
    headerShown:false
}

export default CreateScreen;