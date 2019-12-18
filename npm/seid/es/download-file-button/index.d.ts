import React from 'react';
import { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import { LocaleItem } from '../locale';
export interface IExportExcelProps {
    style?: React.CSSProperties;
    getData?: (callback: (res: AxiosResponse) => void) => void;
    requestMethod?: Method;
    requestConfig?: AxiosRequestConfig;
    buttonText?: string;
}
declare interface IExportExcelState {
    loading?: boolean;
}
declare class DownloadFileButton extends React.Component<IExportExcelProps, IExportExcelState> {
    static defaultProps: {
        requestMethod: string;
    };
    state: IExportExcelState;
    locale: LocaleItem;
    complete: () => void;
    handleClick: () => void;
    renderComponent: (locale: LocaleItem) => JSX.Element;
    render(): JSX.Element;
}
export default DownloadFileButton;
