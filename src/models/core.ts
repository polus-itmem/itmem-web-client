type Order = {
    id: number,
    authorId: number,
    machinesIds: string[],
    status: number,
    date: number
}

type Machine = {
    id: string,
    name: string,
    descriptions: string[],
    park: string
}

type EnumerateMachines = {
    id: number,
    machine: Machine
}

type Author = {
    id: number,
    name: string
}

type Driver = {
    id: number,
    name: string
}

export type {
    Order, Machine,
    Author, Driver
}
