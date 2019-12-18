import { AxiosPromise, AxiosResponse } from 'axios';
export declare type CodeType = {
    [index: string]: any;
} | null;
export declare const codeMessage: {
    200: string;
    201: string;
    202: string;
    204: string;
    400: string;
    401: string;
    403: string;
    404: string;
    406: string;
    410: string;
    422: string;
    500: string;
    502: string;
    503: string;
    504: string;
};
export declare function isValidKey(key: string, obj: {
    [index: string]: any;
}): CodeType;
export interface ResponseResult extends AxiosResponse {
    success: boolean;
    message?: any;
    statusCode?: any;
}
export interface RequestPromise<T = any> extends AxiosPromise<T> {
}
declare const request: import("axios").AxiosInstance;
export default request;
