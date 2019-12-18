import { PureComponent } from 'react';
import { IStationNewsIconProps, IStationNewsIconState } from './index';
interface IStationNewsIconForSocketProps extends IStationNewsIconProps {
    socketUrl: string;
    callback?: Function;
    requestParams: {
        targetUrl?: string;
        userId?: string;
        groupId?: string;
        [propName: string]: any;
    };
}
declare class SocketMessage extends PureComponent<IStationNewsIconForSocketProps, IStationNewsIconState> {
    static defaultProps: {
        iconType: string;
    };
    state: {
        count: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    initCount: () => void;
    calcCount: (result: any) => void;
    messageJudgment: (result: any) => void;
    disconnect: () => void;
    redirectToPages: () => void;
    render(): JSX.Element;
}
export default SocketMessage;
