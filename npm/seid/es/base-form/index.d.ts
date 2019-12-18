import React from 'react';
import PropTypes from 'prop-types';
declare class BaseForm extends React.Component<any, any> {
    static propTypes: {
        /** 表单元素配置数组 */
        formList: PropTypes.Requireable<any[]>;
        /** 每行显示的表单元素数量 */
        columns: PropTypes.Requireable<number>;
        /** 是否展示操作按钮 */
        showOptBtn: PropTypes.Requireable<boolean>;
        /** 表单元素标签和内容布局 */
        formItemLayout: PropTypes.Requireable<object>;
        /** 收集表单元素的值的回调函数 */
        onSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        /** 初始化值 */
        initData: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        columns: number;
        formItemLayout: {
            labelCol: {
                span: number;
            };
            wrapperCol: {
                span: number;
            };
        };
        showOptBtn: boolean;
        onSubmit: null;
        formList: never[];
        initData: null;
    };
    hasOptBtn: boolean;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    handleSubmit: () => Promise<unknown>;
    reset: () => void;
    /** 根据字段获取初始值 */
    getInitValueByFields: (field: any, value: any) => any;
    setFormValues: () => void;
    getFormEle: () => {
        TextArea: (config: any) => JSX.Element;
        RadioGroup: (config: any) => JSX.Element;
        Checkbox: (config: any) => JSX.Element;
        Input: (config: any) => JSX.Element;
        InputNumber: (config: any) => JSX.Element;
        DatePicker: (config: any) => JSX.Element;
        RangePicker: (config: any) => JSX.Element;
        ScopeDatePicker: (config: any) => JSX.Element;
        CronInput: (config: any) => JSX.Element;
    };
    initFormList: () => JSX.Element[];
    render(): JSX.Element;
}
declare const _default: import("antd/es/form/interface").ConnectedComponentClass<typeof BaseForm, Pick<import("antd/es/form/Form").FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
