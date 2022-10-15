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
    const order: Order = {id: 1, authorId: 2, machinesIds: ["Crane", "Crane", "Car", "AttackHelicopter"], status: "In progress", date: 10000};
  return (
      <Routes>
          <Route path={routes.default} element={<Authorization/>} />
          <Route path={routes.orders} element={<OrdersPage/>} />
          <Route path={routes.order} element={<OrderPage/>}/>
          <Route path={routes.orderInfo} element={<OrderInfoPage order={order}/>}/>
          <Route path={routes.login} element={<Authorization/>} />
          <Route path={routes.dispatcherOrders} element = {<DispatcherOrdersPage/>}/>
      </Routes>
  );
}

export default App;
