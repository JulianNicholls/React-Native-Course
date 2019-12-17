import { useContext } from 'react';

import createDataContext from './createDataContext';

const defaultPosts = [
  { id: 'ghfjeklg', title: 'First past the post', content: 'Yes, I am content' },
  { id: 'fdhsklj', title: 'Second in command', content: 'Contentious, eh?' },
];

// Actions
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export const addPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: ADD_POST, post: { title, content } });
    callback();
  };
};

export const updatePost = dispatch => {
  return (id, title, content) => {
    dispatch({ type: UPDATE_POST, post: { id, title, content } });
  };
};

export const deletePost = dispatch => {
  return id => {
    dispatch({ type: DELETE_POST, post: { id } });
  };
};

const blogReducer = (posts, action) => {
  let newPosts = posts.filter(post => post.id !== action.post.id);

  switch (action.type) {
    case ADD_POST:
      return [
        ...posts,
        { id: Math.floor(Math.random() * 9999999).toString(), ...action.post },
      ];

    case UPDATE_POST:
      return [...newPosts, action.post];

    case DELETE_POST:
      return newPosts;

    default:
      return posts;
  }
};

const { Context: BlogContext, Provider: BlogProvider } = createDataContext(
  blogReducer,
  { addPost, updatePost, deletePost },
  defaultPosts
);

export const useBlog = () => {
  const context = useContext(BlogContext);

  if (context === undefined)
    throw new Error('useBlog() must be inside a BlogProvider block');

  return context;
};

export { BlogProvider };
