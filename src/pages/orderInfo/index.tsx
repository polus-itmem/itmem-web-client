import {Order} from "../../models/core";
import {MachineClip} from "../../components/machine";
import NavButton from "../../components/nav/navButton";
import {routes} from "../../data/routes";

export default function OrderInfoPage(props: {order: Order}) {
    let data = props.order;
    let result: Order[] = []
    // TODO: читать из базы данных
    // TODO: добавить стили
    return (
        <div className='container'>
            <div className='orders-infos-list'>
                {result.map(elem => <MachineClip id={elem.id} car={elem.car}/>)}
            </div>
            <NavButton link={routes.orders}>Назад</NavButton>
        </div>);
}
