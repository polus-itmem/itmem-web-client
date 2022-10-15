import axios, {AxiosInstance, AxiosResponse} from "axios";

class BaseApi {
    client: AxiosInstance | null = null

    public constructor(url: string) {
        this.client = axios.create({baseURL: url});
    }

    public get<R>(url: string): Promise<R> {
        if (!this.client) {
            throw new Error();
        }
        return this.client.
        get(url).
        then(response => response.data);
    }

    public post<R, T>(url: string, data: T): Promise<R> {
        if (!this.client) {
            throw new Error();
        }
        return this.client.
        post(url, data).
        then(response => response.data);
    }
}

export default BaseApi;
