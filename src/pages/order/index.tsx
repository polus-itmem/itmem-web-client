import React, {useEffect, useState} from 'react';
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from '@mui/material';
import dayjs, {Dayjs} from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import './styles.css';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import NavButton from "../../components/nav/navButton";
import {routes} from "../../data/routes";
import {carsApi, tasksApi} from "../../api";
import {CarType} from "../../models/core";
import {useNavigate} from "react-router-dom";

export default function OrderPage() {
    const navigate = useNavigate();
    const [position, setPosition] = React.useState('');

    const positionChange = (event: SelectChangeEvent) => {
        setPosition(event.target.value as string);
    };

    const [vehicle, setVehicle] = React.useState('');

    const vehicleChange = (event: SelectChangeEvent) => {
        setVehicle(event.target.value as string);
    };

    const [start, setStart] = React.useState<Dayjs | null>(
        dayjs(new Date().toDateString()),
    );

    const startChange = (newValue: Dayjs | null) => {
        setStart(newValue);
    };

    const [finish, setFinish] = React.useState<Dayjs | null>(
        dayjs(new Date().toDateString()),
    );

    const finishChange = (newValue: Dayjs | null) => {
        setFinish(newValue);
    };

    let locations: string[] = ["не выбранно", "место 1", "место 2", "место 3"];
    let [freeVehicle, setFreeVehicle] = useState<CarType[]>([]);

    useEffect(() => {
        carsApi.getTypes().then(data => setFreeVehicle(data));
    }, [])

    function submitHandle() {
        const day = start?.day();
        const month = start?.month();
        const year = start?.year();

        tasksApi.setTask({
            date: `${year}-${month}-${day}`,
            car_type: vehicle,
            place: position
        }).then(() => navigate(routes.orders));
    }

    return (
        <main>
            <span className="calendar-box">{calendar()}</span>
            <div className="request-box">
                <div className="header">Создание заявки</div>
                <div className="body">
                    <form method="post" action=".">
                        <div className="field">
                            <div className="location">
                                <label className="local">Место подачи транспорта:</label>
                            </div>
                            <div className="place" >
                                <Select
                                    value={position}
                                    onChange={positionChange}
                                    className="select"
                                    autoFocus
                                    >
                                    {locations.map(it => <MenuItem autoFocus className="text" value={it}>{it}</MenuItem>)}
                                </Select>
                            </div>
                        </div>
                        <div className="field">
                            <div className="date-start">
                                <label className="time-start">Начало работ:</label>
                            </div>
                            <div className="start">

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        className="dataPik"
                                        value={start}
                                        onChange={startChange}
                                        renderInput={(params: any) =>
                                            <TextField className="dataStart" {...params} />} /*TODO: change any type*/
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="field">
                            <div className="date-finish">
                                <label className="time-finish">Конец работ:</label>
                            </div>
                            <div className="finish">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateTimePicker
                                        value={finish}
                                        onChange={finishChange}
                                        renderInput={(params: any) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="field">
                            <div className="vehicle">
                                <label className="free-vehicles">Тип транспорта</label>
                            </div>
                            <div className="chosen-vehicle">
                                <Select
                                    value={vehicle}
                                    onChange={vehicleChange}
                                    className="select">
                                    {freeVehicle.map(it =>
                                        <MenuItem value={it.description}>{it.description}</MenuItem>
                                    )}
                                </Select>
                            </div>
                        </div>
                    </form>
                    <div className="buttons">
                        <NavButton link={routes.orders} className="navButton">Отмена</NavButton>
                        <Button className="confirm" variant="contained" color="success"
                                onClick={submitHandle}
                        >Подтвердить</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

function calendar() {
    function getDayCount(month: number, year: number): number {
        if (month === 0) {
            month = 12;
            year--;
        }
        if (month === 2) {
            if (year % 4 === 0) {
                return 29;
            }
            return 28;
        }
        if (month < 8) {
            return 31 - (1 - month % 2);
        }
        return 31 - month % 2;
    }

    let foo = new Date();

    let cur = foo.toUTCString();
    let day = cur.substring(0, 3);
    let date = parseInt(cur.substring(5, 7));
    let month = foo.getMonth() + 1;
    let offset = 0;
    switch (day) {
        case "Mon":
            offset = 0;
            break;
        case "Tue":
            offset = 1;
            break;
        case "Wed":
            offset = 2;
            break;
        case "Thu":
            offset = 3;
            break;
        case "Fri":
            offset = 4;
            break;
        case "Sat":
            offset = 5;
            break;
        default:
            offset = 6;
            break;
    }

    let last_this_month = getDayCount(month, foo.getFullYear());
    let last_previous_month = getDayCount(month - 1, foo.getFullYear());
    let arr = [];
    let board: {d: number, c: number, f: boolean}[][] = [];

    let count = 1;
    if (date <= offset) {
        for (let i = last_previous_month - (offset - date); i < last_previous_month + 1; i++) {
            arr.push({d: i, c: count, f: false});
            if (count % 7 === 0) {
                board.push(arr);
                arr = [];
            }
            count++;
        }
    }
    for (let i = date - offset; i < last_this_month + 1; i++) {
        arr.push({d: i, c: count, f: i > date});
        if (count % 7 === 0) {
            board.push(arr);
            arr = [];
        }
        count++;
    }
    for (let i = 1; i < 32 && arr.length < 32; i++) {
        arr.push({d: i, c: count, f: true});
        if (count % 7 === 0) {
            board.push(arr);
            arr = [];
        }
        count++;
    }

    return (
        <TableContainer component={Paper} sx={{maxWidth: 500}}>
            <Table size="small" aria-label="a dense table">
                <TableHead>
                    <TableCell>{cur.substring(7, 11)}</TableCell>
                    <TableRow>
                        <TableCell align="left">Mon</TableCell>
                        <TableCell align="left">Tue</TableCell>
                        <TableCell align="left">Wed</TableCell>
                        <TableCell align="left">Thu</TableCell>
                        <TableCell align="left">Fri</TableCell>
                        <TableCell align="left">Sat</TableCell>
                        <TableCell align="left">Sun</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {board.map((board) => (
                        <TableRow>
                            <TableCell align="left">{format(board[0].d, board[0].f)}</TableCell>
                            <TableCell align="left">{format(board[1].d, board[1].f)}</TableCell>
                            <TableCell align="left">{format(board[2].d, board[2].f)}</TableCell>
                            <TableCell align="left">{format(board[3].d, board[3].f)}</TableCell>
                            <TableCell align="left">{format(board[4].d, board[4].f)}</TableCell>
                            <TableCell align="left">{format(board[5].d, board[5].f)}</TableCell>
                            <TableCell align="left">{format(board[6].d, board[6].f)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function format(day: number, flag: boolean) {
    let result = "";
    if (day < 10) {
        result = "0" + day + " ";
    }
    else {
        result = day + " ";
    }
    if (flag) { //(flag && request()) {
        return <span className="free">{result}</span>;
    }
    return <span className="busy">{result}</span>;
}
