import React, { PureComponent } from 'react';
import { ArgsProps } from 'antd/es/notification';
import { Method } from 'axios';
import { LocaleItem } from '../locale';
interface InotificationParmas extends ArgsProps {
    iconTypeConfig?: (messageType: string) => React.ReactNode;
    messageKey?: string;
    descriptionKey?: string;
    customNotificationTemplate?: Function;
    getNewsDetailUrl?: string;
    getNewsDetailUrlRequestMethod: Method;
    needDetail?: boolean;
}
interface SocketParams {
    socketUrl: string;
    getCountUrl: string;
    userId: string;
    groupId?: string;
    callback?: Function;
}
interface DataFormat {
    messageId?: string;
    [propName: string]: any;
}
interface IStationNewsNotificationProps {
    notificationParmas: InotificationParmas;
    socketParams: SocketParams;
}
interface IStationNewsNotificationState {
    data: DataFormat;
    visible: boolean;
}
declare class StationNewsNotification extends PureComponent<IStationNewsNotificationProps, IStationNewsNotificationState> {
    state: {
        visible: boolean;
        data: {};
    };
    userId: string;
    groupId?: string;
    getCountUrl: string;
    componentDidMount(): void;
    componentWillUnmount(): void;
    disconnect: () => void;
    defaultIcon: (type: string) => JSX.Element | undefined;
    openNotification: (result: any) => void;
    onCancel: () => void;
    renderCom: (locale: LocaleItem) => false | JSX.Element;
    render(): JSX.Element;
}
export default StationNewsNotification;
