import { useContext } from 'react';

import createDataContext from './createDataContext';

const defaultPosts = [
  { title: 'First past the post', content: 'Yes, I am content' },
  { title: 'Second in command', content: 'Contentious, eh?' },
];

// Actions
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';

export const addPost = dispatch => {
  return (title, content) => {
    dispatch({ type: ADD_POST, post: { title, content } });
  };
};

export const updatePost = dispatch => {
  return (title, content) => {
    dispatch({ type: UPDATE_POST, post: { title, content } });
  };
};

export const deletePost = dispatch => {
  return title => {
    dispatch({ type: DELETE_POST, post: { title } });
  };
};

const blogReducer = (posts, action) => {
  let newPosts = posts.filter(post => post.title !== action.post.title);

  switch (action.type) {
    case ADD_POST:
      return [...posts, action.post];

    case UPDATE_POST:
      return [...newPosts, action.post];

    case DELETE_POST:
      posts = posts.filter(post => post.title !== action.title);

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
