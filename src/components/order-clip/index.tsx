import {Order} from "../../models/core";

function OrderClip(props: {order: Order}) {
    let data = props.order;

    return (
        <div className='order-clip'>
            <a href="/orderInfo" className='order-clip-name'>
                Заказ №<span className='order-clip-id'>{data.id}</span>
            </a>
            <span> </span>
            <span className='order-clip-status'>
                {data.car_accept}
            </span>
        </div>
    )
}

export {OrderClip}
