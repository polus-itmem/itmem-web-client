import BaseApi from "./BaseApi";
import {Order, Task} from "../models/core";

export default class TasksApi {
    private readonly client: BaseApi;

    public constructor(url: string) {
        this.client = new BaseApi(url);
    }

    // Allowed: user
    public getTasks(): Promise<Order[]> {
        return this.client.get('/api/users/task');
    }

    // Allowed: none
    public getAllTasks(): Promise<Order[]> {
        return this.client.get('/api/tasks/all');
    }

    public setTask(data: Task): Promise<Order> {
        return this.client.post('/api/users/create_task', data);
    }
}