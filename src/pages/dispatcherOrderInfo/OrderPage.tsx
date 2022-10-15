import React from 'react';
import {Box, Button, Stack} from '@mui/material';
import 'OrderPage.css';
function OrderPage() {

    let orderNumber: number = 15;
    let workLocation: string = "место 1";
    let timeStart: string = "28:11:2022-18:00";
    let timeFinish: string = "28:11:2023-19:00";
    let vehicle: string = "crane";
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
                    <div> Место работы:</div> <a> {workLocation} </a>
                </text>

                <text>
                    <div> Время начала работ:</div> <a> {timeStart} </a>
                </text>

                <text>
                    <div> Время конца работ:</div> <a> {timeFinish} </a>
                </text>

                <text>
                    <div> Используемая техника:</div> <a> {vehicle} </a>
                </text>

                <text>
                    <div> Статус заказа:</div> <a> {orderStatus} </a>
                </text>

            </main>
            <footer>
                <Stack className="buttons" direction="row" spacing={2}>
                    <Button className="start" variant="contained" color="error">
                        Завершить
                    </Button>
                    <Button className="finish" variant="contained" color="success">
                        Начать
                    </Button>
                </Stack>
            </footer>
        </Box>
        </html>
    );
}

export default OrderPage;
