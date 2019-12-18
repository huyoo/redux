import React, { PureComponent } from 'react';
import { ModalProps } from 'antd/es/modal';
import { Method } from 'axios';
import { LocaleItem } from '../locale';
declare type DateType = Date | string | null;
export interface IStationNewsListDetailProps {
    getNewsDetailUrl?: string;
    getNewsDetailUrlRequestMethod: Method;
    visible: boolean;
    onCancel: Function;
    footer?: string | React.ReactNode;
    detailContent?: string | React.ReactNode;
    params?: object;
    modalProps?: ModalProps;
    propsData?: DataElement;
    locale: LocaleItem;
}
declare interface IStationNewsListDetailState {
    data: DataElement;
    loading: boolean;
}
declare interface DataElement {
    messageTitle?: string;
    messageContent?: string;
    messageStatus?: string;
    messageType?: string;
    publishDate?: DateType;
    publisherNick?: string | null;
    messageAttachment?: string | null;
}
declare class StationNewsListDetail extends PureComponent<IStationNewsListDetailProps, IStationNewsListDetailState> {
    constructor(props: IStationNewsListDetailProps);
    componentDidMount(): void;
    handleCancel: () => void;
    handleGetDetail: () => void;
    getMessageAttachment: (data: any) => any;
    render(): JSX.Element;
}
export default StationNewsListDetail;
