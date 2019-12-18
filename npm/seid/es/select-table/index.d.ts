import React from 'react';
import { ColumnProps } from 'antd/es/table';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { PaginationProps } from 'antd/es/pagination';
import { Method } from 'axios';
import { LocaleItem } from '../locale';
export interface ITableCol {
    key?: React.Key;
    name: string;
    hidden?: boolean;
    code: string;
    sort: number;
    width?: number | string;
    render?: (text: string, record: any, index: number) => React.ReactNode;
}
export interface ISelectTableProps {
    value?: any | any[];
    showKey: string;
    multi: boolean;
    columns: ITableCol[];
    values?: any[];
    dataSourceUrl?: string;
    unionKey?: string | string[];
    searchColumn?: string | string[];
    requestMethod?: Method;
    returnKey?: string;
    onSelect?: (record: any) => void;
    onChange?: (record: any) => void;
    map?: any[];
    form?: WrappedFormUtils;
    elementCode?: string;
    parameter?: {
        [key: string]: string;
    };
    rowKey: string;
    content?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    onBlur?: (event?: React.SyntheticEvent) => {};
    autoFocus?: boolean;
    width?: string | number;
    placeholder?: string;
}
declare interface ISelectTableState {
    loading: boolean;
    inputContent?: string;
    data?: any[];
    totalSize?: number;
    currentPage?: number;
    pageSize?: number;
    searchContent?: string;
    visible: boolean;
}
declare class SelectTable extends React.Component<ISelectTableProps, ISelectTableState> {
    static defaultProps: {
        multi: boolean;
        showKey: string;
        rowKey: string;
    };
    static getDerivedStateFromProps: (props: ISelectTableProps, state: ISelectTableState) => {
        inputContent: any;
    } | null;
    paramValue: object;
    finalColumns: ColumnProps<any>[];
    elementId: string;
    locale: LocaleItem;
    constructor(props: ISelectTableProps);
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: ISelectTableProps, nextState: ISelectTableState): boolean;
    componentDidUpdate(nextProps: ISelectTableProps): void;
    initColumns: () => void;
    setDefaultBox: (text: string, width?: string | number | undefined) => JSX.Element;
    callback: (data: any[] | undefined, totalSize: number, pageNum: number, pageSize: number) => void;
    handleSearch: () => void;
    handleTableChange: (pagination: PaginationProps) => void;
    handleDoubleClickRow: (record: any) => void;
    handleFocus: () => void;
    handleChangeInputContent: (v?: any) => void;
    onSelectChange: (record: any, selected: boolean) => void;
    onSelectAllChange: (selected: boolean, _: any[], changeRows: any[]) => void;
    getRowKey: (r: any, rowkey: TimerHandler) => any;
    getTableRowKey: (rowkey?: string | ((record: any) => string) | undefined) => string | ((r: any) => any) | undefined;
    requestData: (url: string, payload: any, requestMethod: Method) => void;
    renderCom: (locale: LocaleItem) => React.ReactNode;
    render(): JSX.Element;
}
export default SelectTable;
