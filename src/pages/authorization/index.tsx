import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Button, TextField} from "@mui/material";
import {userApi} from "../../api";
import {routes} from "../../data/routes";
import "./styles.css"

function Authorization() {
    const navigate = useNavigate();
    let [error, setError] = useState<boolean>(false);
    let [login, setLogin] = useState<string>('');
    let [password, setPassword] = useState<string>('');

    function submitHandle() {
        userApi.login({
            login: login,
            password: password
        }).then(() => navigate(routes.orders)).catch(() => setError(true));
    }

    return (
        <div className="background">
            <img className="companyLogo" src="http://localhost:3000/images/logo.svg" alt="company logo"/>
            <div className="center">
                <div className="text">
                    <h1>{error ?
                        "Пользователь не найден. Пожалуйста, введите корректную пару логин-пароль." :
                        "Пожалуйста, войдите в систему."}
                    </h1>
                </div>
                <div className="input">
                    <TextField
                        error={error}
                        id="outlined-login-input"
                        label="Login"
                        type="login"
                        autoComplete="current-login"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
                    />
                </div>
                <div className="input">
                    <TextField
                        error={error}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    />
                </div>
                <div className="button">
                    <Button onClick={submitHandle}>Proceed.</Button>
                </div>
            </div>
        </div>
    );
}

export {Authorization}
