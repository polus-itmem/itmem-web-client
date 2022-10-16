import React, {useEffect, useState} from 'react';
import {Button, TextField} from '@mui/material';
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
        dayjs('2014-08-18T21:11:54'),
    );

    const startChange = (newValue: Dayjs | null) => {
        setStart(newValue);
    };

    const [finish, setFinish] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const finishChange = (newValue: Dayjs | null) => {
        setFinish(newValue);
    };

    /*запрос в бд*/
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
            <div className="request-box">
                <div className="header">Создание заявки</div>
                <div className="body">
                    <form method="post" action=".">
                        <div className="field">
                            <div className="location">
                                <label className="local">Место подачи транспорта:</label>
                            </div>
                            <div className="place">
                                <Select
                                    value={position}
                                    onChange={positionChange}
                                    className="select">
                                    {locations.map(it => <MenuItem value={it}>{it}</MenuItem>)}
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
                                        value={start}
                                        onChange={startChange}
                                        renderInput={(params: any) =>
                                            <TextField {...params} />} /*TODO: change any type*/
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
