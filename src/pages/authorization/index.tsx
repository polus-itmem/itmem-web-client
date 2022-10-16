import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Button, TextField} from "@mui/material";
import {authApi} from "../../api";
import {routes} from "../../data/routes";
import { styled } from '@mui/material/styles';
import { ButtonProps } from '@mui/material/Button';
import "./styles.css"
import { orange } from "@mui/material/colors";
import {User} from "../../models/core";


function Authorization() {
    const navigate = useNavigate();
    let [error, setError] = useState<boolean>(false);
    let [login, setLogin] = useState<string>('');
    let [password, setPassword] = useState<string>('');

    function chooseNavigate(user: User) {
        if (user.role === 0) {
            navigate(routes.orders);
        } else if (user.role === 1) {
            navigate(routes.dispatcherOrders);
        }
    }

    function submitHandle() {
        authApi.authorization({
            login: login,
            password: password
        }).then(chooseNavigate).catch(() => setError(true));
    }

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(orange[500]),
    }));
    
    useEffect(() => {
        authApi.getUser().then(chooseNavigate);
    }, []);

    return (
        <div className="background">
            <svg className="companyLogo" width="270" height="80" viewBox="0 0 148 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clipLogo)">
                    <path d="M148 11.3527C146.336 8.52918 143.601 7.05859 139.797 7.05859C134.686 7.05859 130.763 10.2939 130.763 15.4704C130.763 20.6468 134.626 23.8821 139.797 23.8821C143.601 23.8821 146.336 22.4115 148 19.588L145.147 17.9409C143.899 19.7057 142.294 20.6468 139.738 20.6468C136.588 20.6468 134.389 18.588 134.389 15.4704C134.389 12.2939 136.469 10.2939 139.738 10.2939C142.294 10.2939 143.899 11.2351 145.147 12.9998L148 11.3527ZM114.477 15.4704C114.477 12.1762 116.26 10.1762 119.708 10.1762C123.155 10.1762 124.938 12.1762 124.938 15.4704C124.938 18.7645 123.155 20.7645 119.708 20.7645C116.26 20.7645 114.477 18.7645 114.477 15.4704ZM104.848 7.47036V23.4704H108.474V16.7057H110.911C111.446 21.2939 115.19 23.8821 119.708 23.8821C124.581 23.8821 128.564 20.8233 128.564 15.4704C128.564 10.1174 124.581 7.05859 119.708 7.05859C115.487 7.05859 111.921 9.35271 111.089 13.4115H108.474V7.47036H104.848ZM88.4433 7.47036L86.3035 18.9409C86.1252 19.8233 85.5902 20.1762 84.6987 20.1762H82.9155V23.4704H84.877C87.5517 23.4704 89.3348 22.2351 89.8698 19.4115L91.534 10.7057H97.7155V23.4704H101.401V7.47036H88.4433ZM81.7862 15.4704C81.7862 10.4115 77.6256 7.05859 72.6923 7.05859C67.7589 7.05859 63.5983 10.4115 63.5983 15.4704C63.5983 20.5292 67.7589 23.8821 72.6923 23.8821C77.6256 23.8821 81.7862 20.5292 81.7862 15.4704ZM67.2834 15.4704C67.2834 12.1762 69.6609 10.1762 72.6923 10.1762C75.7236 10.1762 78.1011 12.1762 78.1011 15.4704C78.1011 18.7645 75.7236 20.7645 72.6923 20.7645C69.6609 20.7645 67.2834 18.7645 67.2834 15.4704ZM44.9943 7.47036V23.4704H48.62V10.6468H57.2979V23.4704H60.983V7.47036H44.9943Z" fill="#FDFDFD"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.7994 13.4706L20.2685 15.1765C19.9713 15.2353 19.793 15 19.793 14.7059L20.1496 8.58823C20.2091 7.82353 20.6251 7.47059 21.2195 7.35294L28.5898 6.23529C29.1842 6.17647 29.7191 6.41176 29.9568 7.11765L32.0966 12.8235C32.2155 13.1765 32.0372 13.4118 31.7994 13.4706ZM23.3593 29.6471L18.0693 19.3529C17.9504 19.1176 18.1287 18.8235 18.3665 18.7647L24.3103 17.1765C25.0235 17 25.5585 17.2353 25.8556 17.7647L29.2436 24.3529C29.5408 24.8824 29.4219 25.4706 28.8275 25.9412L24.0131 29.7647C23.8348 29.8824 23.4781 29.8824 23.3593 29.6471ZM5.11187 26.7059L13.4332 18.5882C13.6115 18.4118 13.9681 18.4706 14.087 18.7059L17.4155 23.8235C17.8315 24.4706 17.7127 25 17.2966 25.4706L12.0066 30.6471C11.5906 31.0588 10.9962 31.1765 10.3424 30.7647L5.23075 27.3529C4.993 27.1765 4.87412 26.8824 5.11187 26.7059ZM2.3183 8.64706L12.6605 13.9412C12.8982 14.0588 12.9577 14.4118 12.7793 14.5882L8.91589 19.3529C8.44039 19.9412 7.84601 20 7.31107 19.7059L0.654041 16.3529C0.119102 16.0588 -0.178087 15.5882 0.0596639 14.8235L1.72392 8.94118C1.78336 8.70588 2.08055 8.52941 2.3183 8.64706ZM18.842 0.470588L16.94 11.8235C16.8805 12.1176 16.5834 12.2353 16.3456 12.1176L10.5801 9.94118C9.86689 9.64706 9.62914 9.11765 9.74802 8.52941L10.9962 1.23529C11.1151 0.647059 11.4717 0.235294 12.2444 0.176471L18.3665 0C18.6637 0 18.9014 0.176471 18.842 0.470588Z" fill="#FFB71B"></path>
                </g>
                <defs>
                    <clipPath id="clipLogo">
                        <rect width="148" height="31" fill="white"></rect>
                    </clipPath>
                </defs>
            </svg>
            <div className="center">
                <div className="text">
                    <h1>{error ?
                        "Пользователь не найден. Пожалуйста, введите корректную пару логин-пароль." :
                        "Пожалуйста, войдите в систему."}
                    </h1>
                </div>
                <div className="input">
                    <TextField className="login"
                        error={error}
                        id="outlined-login-input"
                        label="Login"
                        type="login"
                        autoComplete="current-login"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
                    />
                </div>
                <div className="input">
                    <TextField className="password"
                        error={error}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    />
                </div>
                <div className="button">
                    <ColorButton onClick={submitHandle}>Proceed</ColorButton>
                </div>
            </div>
        </div>
    );
}

export {Authorization}
