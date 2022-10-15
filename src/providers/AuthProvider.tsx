import {userApi} from "../api";
import {Auth, User} from "../models/core";
import React, {useState} from "react";

const AuthContext = React.createContext<User | null>(null);

const STORAGE_USER = "USER";

function AuthProvider({children}: {children: React.ReactNode}) {
    // const loginData = localStorage.getItem(STORAGE_USER);
    //
    // const login = (params: Auth) => {
    //     if (loginData) {
    //         userApi.login(JSON.parse())
    //     }
    //     userApi.login(JSON.parse(loginData));
    // }
    const user = null;

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export default AuthProvider;