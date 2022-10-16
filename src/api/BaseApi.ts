import axios, {AxiosInstance} from "axios";

class BaseApi {
    private readonly client: AxiosInstance | null = null
    private readonly url: string;

    public constructor(url: string) {
        this.url = url;
        this.client = axios.create({baseURL: url});
        this.client.defaults.headers['Access-Control-Allow-Origin'] = this.url;
    }

    public get<R>(url: string): Promise<R> {
        if (!this.client) {
            throw new Error();
        }

        return this.client.get(url, {
            withCredentials: true
        }).then(response => response.data);
    }

    public post<T, R>(url: string, data: T): Promise<R> {
        if (!this.client) {
            throw new Error();
        }

        return this.client.post(url, data, {
            withCredentials: true
        }).then(response => response.data);
    }
}

export default BaseApi;
