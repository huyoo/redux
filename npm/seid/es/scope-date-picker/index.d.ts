import React, { Component, ReactNode } from 'react';
import { DatePickerProps } from 'antd/es/date-picker/interface';
import moment, { Moment } from 'moment';
import { LocaleItem } from '../locale';
export interface IScopeDatePickerProps extends Omit<Omit<DatePickerProps, 'value'>, 'onChange'> {
    /** 日期变化时的回调函数 */
    onChange?: (values: (string | null)[]) => void;
    /** 开始时间placeholder */
    startDateHolder?: string;
    /** 结束时间placeholder */
    endDateHolder?: string;
    /** 连接字符串 */
    splitStr: string;
    /** 值 */
    value?: string[];
    /** 限制开始时间 */
    limitStartDate?: Moment;
    /** 限制结束时间 */
    limitEndDate?: Moment;
}
declare interface IScopeDatePickerState {
    startDate?: Moment;
    endDate?: Moment;
}
declare class ScopeDatePicker extends Component<IScopeDatePickerProps, IScopeDatePickerState> {
    static defaultProps: IScopeDatePickerProps;
    constructor(props: IScopeDatePickerProps);
    disabledStartDate: (startDate: moment.Moment) => boolean;
    disabledEndDate: (endDate: moment.Moment) => boolean;
    onChange: (changedValue: IScopeDatePickerState) => void;
    onStartChange: (startDate: moment.Moment) => void;
    onEndChange: (endDate: any) => void;
    renderPicker: (locale: LocaleItem) => React.ReactNode;
    render(): ReactNode;
}
export default ScopeDatePicker;
