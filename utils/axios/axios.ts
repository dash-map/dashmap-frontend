import axios, { Method } from "axios";

interface AxiosProps {
    method: Method;
    url: string;
    headers: any;
    data: any;
}

const BASE_URL = "";
const ACCESS_TOKEN = "access_token";

export const requestWithOutAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers,
        data
    }).then((res) => {
        return res;
    }).catch((err) => {
        throw new Error(err);
    })
}

export const requestWithAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers: { ...headers, Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}` },
        data
    }).then((res) => {
        return res;
    }).catch((err) => {
        throw new Error(err);
    })
}