import AuthApi from "./AuthApi";
import CarsApi from "./CarsApi";
import TasksApi from "./TasksApi";

const server = 'https://2bac-85-143-144-46.ngrok.io/';

const authApi = new AuthApi(server);
const tasksApi = new TasksApi(server);
const carsApi = new CarsApi(server);

export {authApi, tasksApi, carsApi}