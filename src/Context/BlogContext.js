/* eslint-disable prettier/prettier */
import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogPost':
            console.log(action.payload.title);
            return [...state, {id: Math.floor(Math.random()*9999999999),title: action.payload.title,content: action.payload.content}];
        case 'delete_blogPost':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content, callback) =>{
        dispatch({type: 'add_blogPost', payload: {title, content}});
        callback();
    }
}

const deleteBlogPost = dispatch => {
    return id => {
        dispatch({type: 'delete_blogPost', payload: id})
    }
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, []);