import {Order} from "../../models/core";
import {CarClip} from "../../components/car";
import NavButton from "../../components/nav/navButton";
import {routes} from "../../data/routes";

export default function OrderInfoPage(props: { order: Order }) {
    let data = props.order;
    let result: Order[] = []
    // TODO: читать из базы данных
    // TODO: добавить стили
    return (
        <div className='container'>
            <div className='orders-infos-list'>
                {result.map(elem => <CarClip id={elem.id} car={elem.car}/>)}
            </div>
            <NavButton link={routes.orders}>Назад</NavButton>
        </div>);
}
