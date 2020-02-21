import React, { useState } from 'react';
import Login from '../components/common-components/login';
import UserDashboard from '../components/user-components/user-dashboard';

export const AuthContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        sessionStorage.setItem("userData", JSON.stringify(action.payload));
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.name,
          id : action.payload._id
        };
      case "LOGOUT":
        sessionStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          id : null
        };
      default:
        return state;
    }
  };

export const LoginData = (props) => {

    const initialState = {
        isAuthenticated: false,
        user: null,
        id: null,
      };

      const [state, dispatch] = React.useReducer(reducer, initialState);
    
    return (
        <AuthContext.Provider  value={{
            state,
            dispatch
          }}> 
            {props.children}
            {/* {!state.isAuthenticated ? <Login /> : <UserDashboard />} */}
        </AuthContext.Provider>
    );
}