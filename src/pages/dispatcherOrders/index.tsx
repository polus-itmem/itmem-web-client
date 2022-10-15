import {routes} from "../../data/routes";
import "./styles.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NavButton from "../../components/nav/navButton";
import Order from "../../models/Order";


const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'authorId', headerName: 'Customer', width: 130},
    {field: 'date', headerName: 'Execution time', width: 200},
    //{field: 'place', headerName: 'Place', width: 130},
    {field: 'status', headerName: 'Status', width: 90},
    {
        field: 'description',
        headerName: 'Description',
        width: 1000,
        description: 'This column can`t be sorted due to a meaningless of a sort.',
        sortable: false,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

let rows: Order[] = [];

function DispatcherOrdersPage() {
    for (let i = 0; i < 50; i++) {
        rows.push(new Order(i));
    }
    return (
        <div>
            <NavButton link={routes.default}>Выйти</NavButton>
            <div style={{height: 880, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default DispatcherOrdersPage;
