import React, { createContext, useReducer } from 'react';
import { CREATE_ONE_INCIDENT } from './actions';

export const initialState = {
  incidents: [
    { key: 'bcg_1', title: 'First incident', assignee: 'Admin', status: 'Resolved' }
  ]
};

export const reducer = (state, { type, payload }) => {
  Object.freeze(state);

  /* eslint-disable no-fallthrough */
  switch(type) {
    case CREATE_ONE_INCIDENT: {
      if (payload) {
        console.log(payload);
        return {...state, incidents: [...state.incidents, payload]};
      }
    }
    default:
      return state;
  }
  /* eslint-enable no-fallthrough */
};

  export const IncidentContext = createContext(null);

  export const IncidentProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <IncidentContext.Provider value={{ state, dispatch }}>
        {children}
      </IncidentContext.Provider>
    );
  }