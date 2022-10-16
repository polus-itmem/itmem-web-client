import BaseApi from "./BaseApi";
import {Auth, User} from "../models/core";

export default class AuthApi {
    private readonly client: BaseApi;

    public constructor(url: string) {
        this.client = new BaseApi(url);
    }

    public authorization(data: Auth): Promise<User> {
        return this.client.post('/api/users/auth', data);
    }

    /**
     * Return values:
     * -1 - not auth
     * 0 - user
     * 1 - dispatcher
     * 2 - driver*
     */
    public checkAuthorization(): Promise<number> {
        return this.client.get('api/users/check_id');
    }

    public getUser(): Promise<User> {
        return this.client.get('api/users/get_info');
    }

    public exit() {
        return this.client.get('api/users/out');
    }
}