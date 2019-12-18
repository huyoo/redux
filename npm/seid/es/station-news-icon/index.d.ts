import { PureComponent } from 'react';
import { BadgeProps } from 'antd/es/badge';
import SocketMessage from './socketMessage';
export interface IStationNewsIconProps extends BadgeProps {
    iconType: string;
    iconStyle?: any;
    targetUrl: string;
    requestParams?: object;
    openStationNewsList?: Function;
    timeInterval: number;
    overflowCount?: number;
}
export declare interface IStationNewsIconState {
    count?: number;
    requestParams?: object;
}
declare class StationNewsIcon extends PureComponent<IStationNewsIconProps, IStationNewsIconState> {
    static defaultProps: {
        iconType: string;
        timeInterval: number;
    };
    static SocketMessage: typeof SocketMessage;
    timer: number;
    state: {
        count: number;
        requestParams: {};
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: IStationNewsIconProps): void;
    handleGet: () => void;
    redirectToPages: () => void;
    render(): JSX.Element;
}
export default StationNewsIcon;
