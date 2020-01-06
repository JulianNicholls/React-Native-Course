import { useContext } from 'react';

import createDataContext from './createDataContext';
import blogServer from '../api/posts';

// Actions
const LOAD_POSTS = 'LOAD_POSTS';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export const loadPosts = dispatch => {
  return async () => {
    try {
      const response = await blogServer.get('/posts');

      dispatch({ type: LOAD_POSTS, posts: response.data });
    } catch (err) {
      console.log('Error loading posts:', err);
    }
  };
};

export const addPost = dispatch => {
  return async (title, content, callback) => {
    try {
      const response = await blogServer.post('/posts', { title, content });

      dispatch({ type: ADD_POST, post: response.data });
      callback && callback();
    } catch (err) {
      console.log('Error adding post:', err);
    }
  };
};

export const updatePost = dispatch => {
  return async (id, title, content, callback) => {
    try {
      const response = await blogServer.put(`/posts/${id}`, { title, content });

      dispatch({ type: UPDATE_POST, post: response.data });
      callback && callback();
    } catch (err) {
      console.log('Error updating post:', err);
    }
  };
};

export const deletePost = dispatch => {
  return async (id, callback) => {
    try {
      await blogServer.delete(`/posts/${id}`);
      dispatch({ type: DELETE_POST, post: { id } });
      callback && callback();
    } catch (err) {
      console.log('Error deleting post:', err);
    }
  };
};

const blogReducer = (posts, action) => {
  let filteredPosts;

  switch (action.type) {
    case LOAD_POSTS:
      return action.posts;

    case ADD_POST:
      return [
        ...posts,
        { id: Math.floor(Math.random() * 9999999).toString(), ...action.post },
      ];

    case UPDATE_POST:
      filteredPosts = posts.filter(post => post.id !== action.post.id);
      return [...filteredPosts, action.post];

    case DELETE_POST:
      return posts.filter(post => post.id !== action.post.id);

    default:
      return posts;
  }
};

const { Context: BlogContext, Provider: BlogProvider } = createDataContext(
  blogReducer,
  { loadPosts, addPost, updatePost, deletePost },
  []
);

export const useBlog = () => {
  const context = useContext(BlogContext);

  if (context === undefined)
    throw new Error('useBlog() must be inside a BlogProvider block');

  return context;
};

export { BlogProvider };
