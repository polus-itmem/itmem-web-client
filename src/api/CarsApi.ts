import BaseApi from "./BaseApi";
import {Car, CarType} from "../models/core";

export default class CarsApi {
    private readonly client: BaseApi;

    public constructor(url: string) {
        this.client = new BaseApi(url);
    }

    public getTypes(): Promise<CarType[]> {
        return this.client.get('/api/cars/types');
    }

    public getCars(): Promise<Car[]> {
        return this.client.get('/api/cars/get_cars');
    }
}