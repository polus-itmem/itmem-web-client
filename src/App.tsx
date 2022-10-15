import './App.css';
import {Route, Routes} from "react-router-dom";
import {routes} from "./data/routes";
import OrdersPage from "./pages/orders";
import OrderPage from "./pages/order";
import {Order} from "./models/core";
import OrderInfoPage from "./pages/orderInfo";
import {Authorization} from "./pages/authorization";
import DispatcherOrdersPage from "./pages/dispatcherOrders";

function App() {
  return (
      <Routes>
          <Route path={routes.default} element={<Authorization/>} />
          <Route path={routes.orders} element={<OrdersPage/>} />
          <Route path={routes.order} element={<OrderPage/>}/>
          <Route path={routes.login} element={<Authorization/>} />
          <Route path={routes.dispatcherOrders} element = {<DispatcherOrdersPage/>}/>
      </Routes>
  );
}

export default App;
