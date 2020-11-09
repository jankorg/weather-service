import axios, {AxiosResponse} from 'axios';


export class ApiRepositoryClass {
   getAmoutRainfallByDay(){
        return axios.get('http://private-4945e-weather34.apiary-proxy.com/weather34/rain');   
    }
    getMenu(){
        return axios.get('http://localhost:3002/api/getMenu');
    }
    getFooter(){
        return axios.get('http://localhost:3002/api/getfooter');
    }
    getHeader(){
        return axios.get('http://localhost:3002/api/getContent');
    }
}