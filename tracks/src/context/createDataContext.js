import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

export default (reducer, actions, defaultState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const boundActions = {};

    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  Provider.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return { Context, Provider };
};
