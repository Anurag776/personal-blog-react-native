import React, { useContext } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Context} from '../Context/BlogContext';
import BlogPostForm from '../Components/BlogPostForm';

const EditScreen=({navigation})=>{
    
    //console.log(navigation.getParam('id'))
    const {state:{blogPost},editBlogPost}=useContext(Context);

    //console.log(blogPost)

    const editblog=blogPost.find(
        editblog => editblog.id == navigation.getParam('id')
    )

    const savepost=({title,content})=>{
        editBlogPost(editblog.id,title,content)
        navigation.navigate('Show')
        alert("Saved Successfully")
    }

    // console.log(editblog.id)
    // console.log(editblog.title)

    return(
        <BlogPostForm
                etitle={editblog.title}
                econtent={editblog.content}
                saved={savepost}    
        />
    )
}

EditScreen.navigationOptions={
    headerShown:false
}

export default EditScreen;