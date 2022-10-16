import React from "react";
import {User} from "../models/core";

type AuthContextType = {
    getRole: () => Promise<number>
    getUser: () => Promise<User>
};

const AuthContext = React.createContext<AuthContextType>(null!);

export {AuthContext};
export type {AuthContextType};
