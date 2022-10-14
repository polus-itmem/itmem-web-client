import NavButton from "../../components/nav/navButton";
import {routes} from "../../data/routes";

export default function OrderPage() {
    return (
        <NavButton link={routes.orders}>Назад</NavButton>
    )
}