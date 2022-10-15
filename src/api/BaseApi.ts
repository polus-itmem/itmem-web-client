import axios, {AxiosInstance, AxiosResponse} from "axios";

type Response<T> = {
    status: number,
    exception: string,
    data: T,
}

class BaseApi {
    client: AxiosInstance | null = null

    public constructor(url: string) {
        this.client = axios.create({baseURL: url});
    }

    public get<T>(url: string): Promise<T> {
        if (!this.client) {
            throw new Error();
        }
        return this.client.
        get(url).
        then(response => response.data).
        then(response => this.checkResponse(response));
    }

    public post<T>(url: string, data: T): Promise<T> {
        if (!this.client) {
            throw new Error();
        }
        return this.client.
        post(url, data).
        then(response => response.data).
        then(response=>this.checkResponse(response));
    }

    public put<T>(url: string, data: T): Promise<T> {
        if (!this.client) {
            throw new Error();
        }
        return this.client.
        put(url, data).
        then(response => response.data).
        then(response=>this.checkResponse(response));
    }

    private checkResponse<T>(response: Response<T>) {
        if (response.status !== 200) {
            throw new Error(response.exception);
        }
        return response.data;
    }
}

export default BaseApi;
