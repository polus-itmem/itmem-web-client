import BaseApi from "./BaseApi";
import {Auth, Order, Task, User} from "../models/core";

export default class UserApi {
    client: BaseApi;

    public constructor(url: string) {
        this.client = new BaseApi(url);
    }

    public login(data: Auth): Promise<User> {
        return this.client.post('/api/users/auth', data);
    }

    public createTask(data: Task): Promise<Order> {
        return this.client.post('/api/users/create_task', data);
    }
}