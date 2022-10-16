// Cars

type Car = {
    id: number,
    park: string,
    type: CarType,
    name: string,
    number: string,
    driver: User
}

type CarType = {
    description: string,
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
    number: string
}

// Tasks & Orders

type Order = {
    id: number,
    date: string,
    moderate: TaskModerate,
    place: string,
    car: Car,
}

type Task = {
    date: string,
    car_type: string,
    place: string,
}

type TaskModerate = {
    dispatcher: User,
    status: number,
}

// Other

type TimeInterval = {
    start: string,
    end: string,
}

export type {
    Order, Task,
    Car, User, Auth,
    TimeInterval,
    CarType,
}
