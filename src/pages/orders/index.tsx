import {routes} from "../../data/routes";
import NavButton from "../../components/nav/navButton";
import "./styles.css"
import {Order} from "../../models/core";
import {DataGrid, GridColDef, GridValueGetterParams} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import ExitButton from "../../components/nav/exitButton";
import {useEffect, useState} from "react";
import {carsApi, tasksApi} from "../../api";

function OrdersPage() {

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'authorId', headerName: 'Customer', width: 130},
        {field: 'date', headerName: 'Execution time', width: 200},
        {field: 'place', headerName: 'Place', width: 130},
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

    let [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        tasksApi.getTasks().then(data => setOrders(data)).catch(() => console.log('yes'));
    }, []);


    return (
        <div>
            <div className="buttons">
                <NavButton className='order-button' link={routes.order}>Заказать</NavButton>
                <ExitButton className='exit' link={routes.default}>Выйти</ExitButton>
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
