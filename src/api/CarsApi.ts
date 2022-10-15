import BaseApi from "./BaseApi";
import {CarsTypes, TimeInterval} from "../models/core";

export default class CarsApi {
    client: BaseApi;

    public constructor(url: string) {
        this.client = new BaseApi(url);
    }

    public carsFree(data: TimeInterval): Promise<CarsTypes> {
        return this.client.post('/api/cars/free', data);
    }

    public carsType(): Promise<CarsTypes> {
        return this.client.get('/api/cars/types');
    }
}