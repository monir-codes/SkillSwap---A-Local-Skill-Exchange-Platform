import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

const AuthData = {

}

    return <AuthContext value={AuthData}>{children}</AuthContext>
};

export default AuthProvider;