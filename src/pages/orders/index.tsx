import {routes} from "../../data/routes";
import NavButton from "../../components/nav/navButton";
import "./styles.css"
import {Order} from "../../models/core";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

class OrderFabric {
    public constructor() {

    }

    public create(n: number) {
        let orders: Order[] = [];
        for (let i = 0; i < n; i++) {
            orders.push({
                id: i,
                date: new Date().toDateString(),
                car_accept: Math.random() % 2 == 0,
                car: {
                    id: i * 100,
                    park: "центр",
                    description: "самосвал",
                    name: `ААА93-${i}`,
                    number: `${i}${i}${i}`,
                    driver: {
                        id: i * 111,
                        first_name: `Иван-${i}`,
                        second_name: `Иванович-${i}`
                    }
                }
            })
        }
        return orders;
    }
}

function OrdersPage() {
    // TODO: читать из базы данных
    // TODO: сделать стили

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'authorId', headerName: 'Customer', width: 130},
        {field: 'date', headerName: 'Execution time', width: 200},
        //{field: 'place', headerName: 'Place', width: 130},
        {field: 'status', headerName: 'Status', width: 230},
        {
            field: 'description',
            headerName: 'Description',
            width: 1000,
            description: 'This column can`t be sorted due to a meaningless of a sort.',
            sortable: false,
            valueGetter: (params: GridValueGetterParams) => `${params.row.machinesIds}`,
        },
    ];

    let orders: Order[] = new OrderFabric().create(100);

    let dates = Array.from(new Set(orders.map(order => order.date)));

    console.log(dates);


    return (
        <div>
            <div className="buttons">
                <NavButton className='order-button' link={routes.order}>Заказать</NavButton>
                <NavButton className='exit' link={routes.default}>Выйти</NavButton>
            </div>
            <div style={{height: 800, width: '100%'}} className="table">
                <DataGrid
                    rows={orders}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}


export default OrdersPage;
