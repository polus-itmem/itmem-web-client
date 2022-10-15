import NavButton from "../../components/nav/navButton";
import {routes} from "../../data/routes";
import axios from "axios";
import {Order} from "../../models/core";
import {MachineClip} from "../../components/machine";

export default function OrderPage(props: {order: Order}) {
    let data = props.order;
    let result = []
    // TODO: читать из базы данных
    // TODO: добавить стили
    for (let i = 0; i < data.machinesIds.length; i++) {
        result.push({id: i, machine: {id: data.machinesIds[i], name: "ill parse name there", descriptions: ["Ill parse description here"], park: "i dont need it"}});
    }
    return (
        <div className='container'>
            <div className='orders-list'>
                {result.map(elem => <MachineClip id={elem.id} machine={elem.machine}/>)}
            </div>
            <NavButton link={routes.orders}>Назад</NavButton>
        </div>
    );
}