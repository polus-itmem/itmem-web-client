import {routes} from "../../data/routes";
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';
import NavButton from "../../components/nav/navButton";
import {Order} from "../../models/core";


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

let rows: Order[] = [];

function DispatcherOrdersPage() {
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
