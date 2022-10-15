import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import {Button, TextField} from "@mui/material";

function Authorization() {
    const navigate = useNavigate();
    let [error, setError] = useState<boolean>(false);

    function checkLoginAndPassword() {
        let givenLogin = (document.getElementById("outlined-login-input") as HTMLInputElement).value;
        let givenPassword = (document.getElementById("outlined-password-input") as HTMLInputElement).value;
        let info: any;

        /* TODO: CHANGE ANY TO A CONCRETE TYPE */
        axios.post(
            "expectaservertobehere",
            {},
            {
                params: {
                    givenLogin,
                    givenPassword
                }
            }
        )
            .then(response => {
                info = JSON.parse(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        console.log(givenLogin);
        if (givenLogin === "user") { //(mode == 0 || info != null && info.type == "user") {
            navigate("/orders");
        } else if (givenLogin === "dispatcher") {//(mode == 1 || info != null && info.type == "dispatcher") {
            navigate("/dispatcherOrders/");
        } else {
            setError(true);
        }
    }

    if (error) {
        return (
            <div className="center">
                <div className="text">
                    <h1>Пользователь не найден. Пожалуйста, введите корректную пару логин-пароль.</h1>
                </div>
                <div className="input">
                    <TextField
                        error
                        id="outlined-login-input"
                        label="Login"
                        type="login"
                        autoComplete="current-login"
                    />
                </div>
                <div className="input">
                    <TextField
                        error
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </div>
                <div className="button">
                    <Button onClick={checkLoginAndPassword}>Proceed.</Button>
                </div>
            </div>
        );
    }
    return (
        <div className="center">
            <div className="text">
                <h1>Пожалуйста, войдите в систему.</h1>
            </div>
            <div className="input">
                <TextField
                    id="outlined-login-input"
                    label="Login"
                    type="login"
                    autoComplete="current-password"
                />
            </div>
            <div className="input">
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
            <div className="button">
                <Button onClick={checkLoginAndPassword}>Proceed.</Button>
            </div>
        </div>
    );
}

export {Authorization}
