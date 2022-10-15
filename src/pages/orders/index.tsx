import {Order as OrderType} from "../../models/core";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {routes} from "../../data/routes";
import NavButton from "../../components/nav/navButton";
import {OrderClip} from "../../components/order-clip";
import "./styles.css"

class Order {
    id: number;
    authorId: number;
    machinesIds: string[];
    status: number;
    date: number;

    public constructor(id: number) {
        this.id = id;
        this.authorId = Math.random();
        this.machinesIds = ["AAA", 'BBB'];
        this.status = 0;
        this.date = new Date().getTime();
    }
}

function OrdersPage() {
    // TODO: читать из базы данных
    // TODO: сделать стили

    let orders: Order[] = [];
    let n = 100;
    for (let i = 0; i < n; i++) {
        orders.push(new Order(i));
    }

    let dates = Array.from(new Set(orders.map(order => order.date)));

    console.log(dates);

    return (
        <div className='container'>
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
            <NavButton className='order-button' link={routes.order}>Заказать</NavButton>
        </div>
    );
}


export default OrdersPage;

