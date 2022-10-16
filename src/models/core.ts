// Cars & Drivers

type Car = {
    id: number,
    park: string,
    description: string,
    name: string,
    number: string,
    driver: Driver
}

type CarType = {
    description: string,
}

type CarsTypes = {
    types: CarType[],
}

type Driver = {
    id: number,
    first_name: string,
    second_name: string,
}

// Authorization & Login

type Auth = {
    login: string;
    password: string;
}

type User = {
    id: number,
    role: number,
    first_name: string,
    second_name: string
}

// Tasks & Orders

type Order = {
    id: number,
    date: string,
    car_accept: boolean,
    car: Car
}

type Task = {
    date: string,
    car_type: string,
    place: string,
}

// Other

type TimeInterval = {
    start: string,
    end: string,
}

export type {
    Order, Task,
    Car, Driver,
    User, Auth,
    TimeInterval,
    CarType, CarsTypes,
}
