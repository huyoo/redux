import { Component, CSSProperties, ReactNode } from 'react';
export interface IToolBarProps {
    /**
     * zh-CN: 左边内容，可传入按钮参数数组
     * en-US: Left Content. Receive Array of Button Props
     */
    left: ReactNode;
    /**
     *  zh-CN: 右边内容
     *  en-US: Right Content.
     */
    right: ReactNode;
    /**
     * zh-CN: 占比，根据栅栏配置
     * en-US: radio
     */
    layout?: {
        leftSpan?: number;
        rightSpan?: number;
    };
    /**
     * zh-CN: 样式作用于Row
     */
    rowStyle?: CSSProperties;
    /**
     * zh-CN: class作用于Row
     */
    rowClassName?: string;
    /**
     * zh-CN: 样式作用于左边区域
     */
    leftStyle?: CSSProperties;
    /**
     * zh-CN: 样式作用于右边区域
     */
    rightStyle?: CSSProperties;
    /**
     * zh-CN: class作用于左边区域
     */
    leftClassName?: string;
    /**
     * zh-CN: class作用于右边区域
     */
    rightClassName?: string;
}
declare interface IToolBarState {
    showLeft?: boolean;
    showRight?: boolean;
}
/**
 * 工具栏,监听宽度改变展示效果
 */
declare class ToolBar extends Component<IToolBarProps, IToolBarState> {
    static defaultProps: IToolBarProps;
    leftCol: any;
    rightCol: any;
    leftNode: HTMLDivElement | null;
    rightNode: HTMLDivElement | null;
    leftWidth: number;
    rightWidth: number;
    state: {
        showLeft: boolean;
        showRight: boolean;
    };
    constructor(props: IToolBarProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    calcDom: () => void;
    getLayout: () => {
        leftSpan: number;
        rightSpan: number;
    };
    getLeftComponent: () => JSX.Element;
    getRightComponent: () => JSX.Element;
    render(): JSX.Element | null;
}
export default ToolBar;
