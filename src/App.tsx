import './App.css';
import React, {useState} from 'react';
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

function App() {
  return (
      <Loginner/>
  );
}

function Loginner() {
    const navigate = useNavigate();
    let [error, setError] = useState<boolean>(false);

    function checkLoginAndPassword() {
        if (false /*some magic*/) {
            navigate("/user");
        } else if (false /*some magic*/) {
            navigate("/dispatcher");
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
                        id="outlined-password-input"
                        label="Login"
                        type="login"
                        autoComplete="current-password"
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
                    id="outlined-password-input"
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

export default App;
