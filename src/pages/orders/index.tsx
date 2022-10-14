import {Order as OrderType} from "../../models/core";
import {OrderClip} from "../../components/order";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {routes} from "../../data/routes";
import NavButton from "../../components/nav/navButton";

class Order {
    id: number;
    authorId: number;
    machinesIds: string[];
    status: number;

    public constructor(id: number) {
        this.id = id;
        this.authorId = Math.random();
        this.machinesIds = ["AAA", 'BBB'];
        this.status = 0;
    }
}

function OrdersPage() {
    // TODO: читать из базы данных
    // TODO: сделать стили

    let orders = [];
    let n = 100;
    for (let i = 0; i < n; i++) {
        orders.push(new Order(i));
    }

    return (
        <div className='container'>
            <div className='orders-list'>
                {orders.map(elem => <OrderClip order={elem} />)}
            </div>
            <NavButton link={routes.order}>Заказать</NavButton>
        </div>
    );
}


export default OrdersPage;