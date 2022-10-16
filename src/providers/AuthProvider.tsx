import React from "react";
import {authApi} from "../api";
import {AuthContext, AuthContextType} from "../contexts/AuthContext";

const USER = "USER_AUTHORIZED";

function AuthProvider({children}: { children: React.ReactNode }) {
    const value: AuthContextType = {
        getRole: () => authApi.checkAuthorization(),
        getUser: () => authApi.getUser()
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider;