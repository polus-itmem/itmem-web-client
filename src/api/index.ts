import BaseApi from "./BaseApi";
import UserApi from "./UserApi";
import CarsApi from "./CarsApi";

const server = 'https://7927-85-143-144-46.ngrok.io/';

const userApi = new UserApi(server);
const carsApi = new CarsApi(server);

export {userApi, carsApi}