import React, {useContext } from 'react';
import jsonServer from '../api/jsonServer';
import CreateDataContext from './CreateDataContext';


const blogReducer=(state,action)=>{

    switch(action.type){
        case 'set_error':{
            return{...state,error:action.payload}
        }
        case 'Authenticated':{
            return{...state,error:''}
        }
        case 'get_blogposts':{
            return{...state, blogPost:action.payload}
        }
        case 'add_blogpost':{
            return{...state, blogPost:[...state.blogPost,
                {
                    id : Math.floor(Math.random()*99999),
                    title:action.payload.title,
                    content:action.payload.content
                }] }
            }
        case 'edit_blogpost':{
            //console.log(action.payload.title)
            return {...state,blogPost:state.blogPost.map((blog)=>{
                if(blog.id == action.payload.id){
                    return action.payload
                }
                else{
                    return blog
                }
            })
            }
        }

        case 'delete_blogpost':{
            alert('Post Deleted')
            return {...state,blogPost:state.blogPost.filter((blog)=>blog.id != action.payload)};
        }
        default:
            return state;
    }
}

const displayError=dispatch=>{
    return(err)=>{
        //console.log(err.message);
        dispatch({type:'set_error',payload:err.message})
    }
}

const clearerror=dispatch=>()=>{
        dispatch({type:'Authenticated'})
}

const getBlogposts=dispatch=>{
    return async() =>{
        const response = await jsonServer.get('/blogposts')
        //console.log(response.data)
        dispatch({type:'get_blogposts', payload: response.data})
    }
}

const addBlogPost=dispatch=>{
        return async(title,content) => {
            await jsonServer.post('/blogposts',{title,content})
        }
        //dispatch({type:'add_blogpost',payload:{title, content}})
}

const editBlogPost=dispatch=>async (id,title,content)=>{
        await jsonServer.put(`/blogposts/${id}`, {title,content})
        //dispatch({type:'edit_blogpost',payload:{id,title,content}})
}

const deleteBlogPost=dispatch=>async (id)=>{
       await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type:'delete_blogpost',payload:id});
}

export const{Context, Provider} = CreateDataContext(blogReducer,
    {displayError,clearerror,addBlogPost,editBlogPost,deleteBlogPost,getBlogposts},
    {error:'',blogPost:[]}
)

