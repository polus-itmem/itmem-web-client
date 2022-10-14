import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {routes} from "./data/routes";
import OrdersPage from "./pages/orders";
import OrderPage from "./pages/order";

function App() {
  return (
      <Routes>
          <Route path={routes.default} element={<OrdersPage />} />
          <Route path={routes.orders} element={<OrdersPage/>} />
          <Route path={routes.order} element={<OrderPage />} />
      </Routes>
  );
}

export default App;
