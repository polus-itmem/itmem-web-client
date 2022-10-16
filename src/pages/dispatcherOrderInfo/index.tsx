import React from 'react';

import {Box, Button, Stack} from '@mui/material';
import './styles.css';
import {styled} from "@mui/material/styles";
import {ButtonProps} from "@mui/material/Button";
import {orange} from "@mui/material/colors";

function DispatcherOrderInfo() {
    let orderNumber: number = 15;
    let workLocation: string = "место 1";
    let timeStart: string = "28:11:2022-18:00";
    let timeFinish: string = "28:11:2023-19:00";
    let vehicle: string = "crane";
    let orderStatus: string = "в обработке";

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(orange[500]),
    }));

    return (
        <html>
        <div className="orderBox">
            <header>
                <div className="orderNumber">
                    Заявка №{orderNumber}
                </div>
                <Button className="exit">
                    x
                </Button>
            </header>
            <main>
                <text>
                    <div> Место работы:</div>
                    <p> {workLocation} </p>
                </text>

                <text>
                    <div> Время начала работ:</div>
                    <p> {timeStart} </p>
                </text>

                <text>
                    <div> Время конца работ:</div>
                    <p> {timeFinish} </p>
                </text>

                <text>
                    <div> Используемая техника:</div>
                    <p> {vehicle} </p>
                </text>

                <text>
                    <div> Статус заказа:</div>
                    <p> {orderStatus} </p>
                </text>

            </main>
            <footer>
                <Stack className="buttons" direction="row" spacing={2}>
                    <ColorButton className="finish">
                        Завершить
                    </ColorButton>
                    <ColorButton className="start">
                        Начать
                    </ColorButton>
                </Stack>
            </footer>
        </div>
        </html>
    );
}

export default DispatcherOrderInfo;
