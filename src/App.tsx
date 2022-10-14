import './App.css';
import {Route, Routes, useNavigate} from "react-router-dom";
import {routes} from "./data/routes";
import OrdersPage from "./pages/orders";
import OrderPage from "./pages/order";
import {useState} from "react";
import {Button, TextField} from "@mui/material";

function App() {
  return (
      <Routes>
          <Route path={routes.default} element={<OrdersPage />} />
          <Route path={routes.orders} element={<OrdersPage/>} />
          <Route path={routes.order} element={<OrderPage />} />
          <Route path={routes.login} element={<Loginner />} />
      </Routes>
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
