import {Order} from "../../models/core";
import {useState} from "react";

function statusToString(status: number) {
    let results = ['in-progress', 'end', 'waiting'];
    return results[status];
}

function OrderClip(props: {order: Order}) {
    let data = props.order;

    return (
        <div className='order-clip'>
            <span className='order-clip-name'>
                Заказ №<span className='order-clip-id'>{data.id}</span>
            </span>
            <span> </span>
            <span className='order-clip-status'>
                {statusToString(data.status)}
            </span>
        </div>
    )
}

export {OrderClip}