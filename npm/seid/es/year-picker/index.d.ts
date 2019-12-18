import * as React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
export interface YearProps {
    /**
     * zh-CN: 可以点击清除图标删除内容
     * en-US: Allow to remove input content with clear icon
     */
    allowClear: boolean;
    /**
     * zh-CN: 选择发生变化的回调
     * en-US: After select changing trigger this event
     */
    onChange?: (yearValue: string | number | undefined) => void;
    /**
     * zh-CN: 选择框样式名
     * en-US: ComboList className
     */
    className?: string;
    /**
     * zh-CN: 输入框默认内容
     * en-US: The initial input content
     */
    defaultValue?: string | number;
    /**
     * zh-CN: 组件失效状态
     * en-US: Disabled state of button
     */
    disabled?: boolean;
    /**
     * zh-CN: 年份格式化
     * en-US: Year format
     */
    format: string;
    /**
     * zh-CN: 选择框默认文字
     * en-US: Placeholder of select
     */
    placeholder?: string;
    /**
     * zh-CN: css属性配置
     * en-US: css properties
     */
    style?: React.CSSProperties;
    /**
     * zh-CN: 输入框内容
     * en-US: The input content value
     */
    value?: string | number;
}
declare class YearPicker extends React.Component<YearProps, any> {
    static defaultProps: {
        disabled: boolean;
        allowClear: boolean;
        placeholder: string;
        format: string;
    };
    static propTypes: {
        disabled: PropTypes.Requireable<boolean>;
        value: PropTypes.Requireable<string | number>;
        defaultValue: PropTypes.Requireable<string | number>;
        allowClear: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static getDerivedStateFromProps(nextProps: YearProps): string | number | null;
    constructor(props: YearProps);
    validValue: (v: string | number | undefined) => moment.Moment | undefined;
    triggerChange: (yearValue: string | number | undefined) => void;
    changeRender: (v: any) => void;
    clearValue: () => void;
    setOpenState: () => void;
    render(): JSX.Element;
}
export default YearPicker;
