import './App.css';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {routes} from "./data/routes";
import OrdersPage from "./pages/orders";
import OrderPage from "./pages/order";
import {Authorization} from "./pages/authorization";
import DispatcherOrdersPage from "./pages/dispatcherOrders";
import DispatcherOrderInfo from "./pages/dispatcherOrderInfo";
import {useContext, useEffect} from "react";
import {AuthContext} from "./contexts/AuthContext";

function App() {
    return (
        <Routes>
            <Route path={routes.default} element={<Authorization/>}/>
            <Route path={routes.orders} element={<OrdersPage/>}/>
            <Route path={routes.order} element={<OrderPage/>}/>
            <Route path={routes.login} element={<Authorization/>}/>
            <Route path={routes.dispatcherOrders} element={<DispatcherOrdersPage/>}/>
            <Route path={routes.dispatcherOrderInfo} element={<DispatcherOrderInfo/>}/>
        </Routes>
    );
}
export default App;
