import { Component, CSSProperties, ReactNode } from 'react';
import { LocaleItem } from '../locale';
declare interface ICronBuilderState {
    cron: string[];
}
export interface ICronBuilderProps {
    /**
     * zh-CN: 默认值
     * en-US: Default Value
     */
    defaultValue?: string;
    /**
     * zh-CN: 值
     * en-US: Value
     */
    value?: string | null;
    /**
     * zh-CN: 修改回调
     * en-US: Callback
     */
    onChange?: (value: string) => void;
    /**
     * zh-CN: 样式
     * en-US: Style
     */
    style?: CSSProperties;
    /**
     * zh-CN: 作用于最外层
     * en-US: Used to outside Layout
     */
    className?: string;
}
/**
 * 任务调度编辑器
 */
declare class CronBuilder extends Component<ICronBuilderProps, ICronBuilderState> {
    static defaultProps: {
        style: {
            padding: string;
        };
    };
    cron: string[];
    constructor(props: ICronBuilderProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ICronBuilderProps): void;
    updateCron: (cronText?: string | null | undefined, isSet?: boolean) => void;
    cronChange: (value: string, index: number) => void;
    secondChange: (value: string) => void;
    minuteChange: (value: string) => void;
    hourChange: (value: string) => void;
    dayChange: (value: string) => void;
    monthChange: (value: string) => void;
    weekChange: (value: string) => void;
    yearChange: (value: string) => void;
    renderComponent: (locale: LocaleItem) => JSX.Element;
    render(): ReactNode;
}
export default CronBuilder;
