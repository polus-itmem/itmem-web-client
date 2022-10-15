import {routes} from "../../data/routes";
import NavButton from "../../components/nav/navButton";
import {OrderClip} from "../../components/order-clip";
import "./styles.css"
import {Order} from "../../models/core";

function OrdersPage() {
    // TODO: читать из базы данных
    // TODO: сделать стили

    let orders: Order[] = [];

    let dates = Array.from(new Set(orders.map(order => order.date)));

    console.log(dates);

    return (
        <div className='container'>
            <NavButton className='order-button' link={routes.order}>Заказать</NavButton>
            <NavButton link={routes.default}>Выйти</NavButton>
            <div className='orders-list'>
                {dates.map(date => {
                    return <div className='orders-list-date'>
                        <div className='orders-list-date-header'>{new Date(date).toDateString()}:</div>
                        {
                        orders.filter(order => new Date(order.date).getDay() === new Date(date).getDay()).
                        map(elem => <OrderClip order={elem}/>)
                    }
                    </div>;
                })}
            </div>
        </div>
    );
}


export default OrdersPage;
