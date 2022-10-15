import React from 'react';
import {Box, Button, Stack, TextField} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import '../css/OrderPage.css';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

function OrderPage() {

    const [position, setPosition] = React.useState('');

    const positionChange = (event: SelectChangeEvent) => {
        setPosition(event.target.value as string);
    };

    let orderNumber: number = 15;
    let workLocation: string = "место 1";
    let timeStart: string = "28:11:2022-18:00";
    let timeFinish: string = "28:11:2023-19:00";
    let vehicle: string = "cran";
    let orderStatus: string = "в обработке";

    return (
        <html>
        <Box className="orderBox">
            <header>
                <div className="orderNumber">
                    Заказ №{orderNumber}
                </div>
                <Button className="exit">
                    x
                </Button>
            </header>
            <main>
                <text>
                    Место работы: <a> {workLocation} </a>
                </text>

                <text>
                    Время начала работ: <a> {timeStart} </a>
                </text>

                <text>
                    Время конца работ: <a> {timeFinish} </a>
                </text>

                <text>
                    Используемая техника: <a> {vehicle} </a>
                </text>

                <text>
                    Статус заказа: <a> {orderStatus} </a>
                </text>

            </main>
            <footer>
                <Stack className="buttons" direction="row" spacing={2}>
                    <Button className="start" variant="contained">
                        Начать
                    </Button>
                    <Button className="finish" variant="contained">
                        Завершить
                    </Button>
                </Stack>
            </footer>
        </Box>
        </html>
    );
}

export default OrderPage;
