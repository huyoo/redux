import React, { PureComponent } from 'react';
import { ColumnProps } from 'antd/es/table';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { ModalProps } from 'antd/es/modal';
import { PaginationProps } from 'antd/es/pagination';
import { Method } from 'axios';
import { IData } from '../ext-table';
import { LocaleItem } from '../locale';
export interface IStationNewsListProps {
    form: WrappedFormUtils<any>;
    getNewsListUrl: string;
    getNewsListRequestMethod?: Method;
    setNewsStatusUrl: string;
    setNewsStatusUrlRequestMethod?: Method;
    getNewsListParams: NewsListParams;
    columns?: ColumnProps<any>[];
    getNewsDetailUrl: string;
    getNewsDetailUrlRequestMethod?: any;
    detailContent?: string | React.ReactNode;
    modalProps?: ModalProps;
}
export interface NewsListParams {
    userId: string;
    groupId: string;
}
declare interface CurrentRecordStandard extends React.SyntheticEvent {
    messageId?: string;
}
declare interface IStationNewsListState {
    data: IData<any>;
    visible: boolean;
    loading: boolean;
    searchValues: object;
    selectedRows: any[];
    currentRecord: CurrentRecordStandard | undefined;
}
export declare const handleMessageStatus: (status: string | undefined, locale: LocaleItem) => string;
export declare const handleMessageType: (status: string | undefined, locale: LocaleItem) => string;
declare class StationNewsList extends PureComponent<IStationNewsListProps, IStationNewsListState> {
    static defaultProps: {
        getNewsListRequestMethod: Method;
        setNewsStatusUrlRequestMethod: Method;
        getNewsDetailUrlRequestMethod: Method;
    };
    defaultActionColumns: ColumnProps<any>[];
    locale: LocaleItem;
    defaultColumns: ColumnProps<any>[];
    constructor(props: IStationNewsListProps);
    componentDidMount(): void;
    getQueryParams: () => {};
    handleGet: (extraParams?: object | undefined) => void;
    getInitPagination: () => {
        pageIndex: number;
        pageSize: number | undefined;
    } | undefined;
    lookDetail: (record: CurrentRecordStandard) => void;
    onSearch: (value: any, id: string) => void;
    getPagination: () => false | {
        pageSize: number | undefined;
        current: number | undefined;
    };
    handleCancel: () => void;
    onTablePageChange: ({ current, pageSize }: PaginationProps) => void;
    handleSetStatus: (value: string) => void;
    handleEditType: (params: object) => void;
    onSelectRow: (selectedRows: string[] | number[]) => void;
    handleClearValue: (e: any, id: string) => void;
    renderCom: (locale: LocaleItem) => JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/es/form/interface").ConnectedComponentClass<typeof StationNewsList, Pick<import("antd/es/form/Form").FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
