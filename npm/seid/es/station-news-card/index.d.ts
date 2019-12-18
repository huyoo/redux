import React, { PureComponent } from 'react';
import { CardProps } from 'antd/es/card';
import { ModalProps } from 'antd/es/modal';
import { Method } from 'axios';
import { NewsListParams } from '../station-news-list';
import { LocaleItem } from '../locale';
export interface IStationNewsCardProps extends CardProps {
    listIconStyle?: any;
    extraTxt?: string;
    avatar?: React.ReactNode;
    description?: string;
    listTitle?: string;
    contentRight?: string;
    getNewsListUrl: string;
    getNewsListParams: NewsListParams;
    getNewsDetailUrl: string;
    getNewsDetailUrlRequestMethod: Method;
    showNum?: number;
    handletoMoreStations: Function;
    detailContent?: string | React.ReactNode;
    modalProps?: ModalProps;
    cardProps?: CardProps;
    handleClickItem?: (item: any) => void;
    reload?: boolean;
}
declare interface IStationNewsCardState {
    data: Array<any>;
    loading: boolean;
    visible: boolean;
    messageId: string;
}
declare class StationNewsCard extends PureComponent<IStationNewsCardProps, IStationNewsCardState> {
    static defaultProps: {
        listIconStyle: {};
        avatar: JSX.Element;
        listTitle: string;
        description: string;
        contentRight: string;
        getNewsDetailUrlRequestMethod: string;
        showNum: number;
    };
    constructor(props: IStationNewsCardProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Readonly<IStationNewsCardProps>): void;
    handleGet: () => void;
    onClick: (event: any, messageId: string) => void;
    handleCancel: () => void;
    toMoreStations: () => void;
    renderCom: (locale: LocaleItem) => JSX.Element;
    render(): JSX.Element;
}
export default StationNewsCard;
