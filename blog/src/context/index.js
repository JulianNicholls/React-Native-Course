import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const BlogContext = React.createContext();

const defaultPosts = [
  { id: '0', title: 'First past the post', content: 'Yes, I am content' },
  { id: '1', title: 'Second in command', content: 'Contentious, eh?' },
];

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState(defaultPosts);
  const [nextId, setNextId] = useState(defaultPosts.length);

  const addPost = (title, content) => {
    setPosts([...posts, { id: nextId.toString(), title, content }]);
    setNextId(nextId + 1);
  };

  const state = {
    posts,
    addPost,
  };

  return <BlogContext.Provider value={state}>{children}</BlogContext.Provider>;
};

BlogProvider.propTypes = {
  children: PropTypes.element,
};

export const usePosts = () => {
  const value = useContext(BlogContext);

  if (value === undefined)
    throw new Error('usePosts() must be inside a BlogProvider block');

  return value;
};
