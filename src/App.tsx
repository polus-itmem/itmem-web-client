import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {routes} from "./data/routes";
import OrdersPage from "./pages/orders";
import OrderPage from "./pages/order";
import { useFormControl } from '@mui/material/FormControl';
import {useState} from "react";
import {Button, TextField} from "@mui/material";
import axios from "axios";

function App() {
  return (
      <Routes>
          <Route path={routes.default} element={<OrdersPage />} />
          <Route path={routes.orders} element={<OrdersPage/>} />
          <Route path={routes.order} element={<OrderPage />} />
          <Route path={routes.login} element={<Authorization />} />
      </Routes>
  );
}

function Authorization() {
    const navigate = useNavigate();
    let [error, setError] = useState<boolean>(false);

    function checkLoginAndPassword() {
        let given_login = (document.getElementById("outlined-password-input") as HTMLInputElement).value;
        let given_password = (document.getElementById("outlined-password-input") as HTMLInputElement).value;
        let info: any;
        /* :NOTE: CHANGE ANY TO A CONCRETE TYPE */
        axios.post(
            "expectaservertobehere",
            {},
            {
                params: {
                    given_login,
                    given_password
                }
            }
        )
            .then(response => {
                info = JSON.parse(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        if (info != null && info.type == "user") {
            navigate("/user/" + info.user);
        } else if (info != null && info.type == "dispatcher") {
            navigate("/dispatcher/" + info.user);
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

export default App;
