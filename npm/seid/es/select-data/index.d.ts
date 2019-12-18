import React, { Component } from 'react';
import { LocaleItem } from '../locale';
declare type AttributeType = string;
declare interface IValue {
    id: AttributeType;
    code: AttributeType;
    name: AttributeType;
}
declare interface DataNode {
    id?: string;
    code?: string;
    name?: string;
    disabled?: boolean;
    itemData?: DataNode;
}
declare type DataType = Partial<DataNode>;
declare interface ISelectDataProps {
    value: IValue;
    optionId?: string;
    optionCode?: string;
    optionName?: string;
    params?: object;
    onChange?: (value: DataNode | null) => void;
    getData?: (params: object, callback: (error: object, response: any) => void) => void;
    showCode?: boolean;
    onlyCode?: boolean;
    showSearch?: boolean;
    disabled?: boolean;
    dropdownMatchSelectWidth?: boolean;
    allowClear?: boolean;
    showArrow?: boolean;
    className?: string;
    placeholder?: string;
}
declare interface ISelectDataState {
    code?: AttributeType;
    name?: AttributeType;
    data?: DataType[];
    fetching: boolean;
    params?: object;
}
/**
 * 主数据下拉选项
 */
declare class SelectData extends Component<ISelectDataProps, ISelectDataState> {
    static getDerivedStateFromProps(nextProps: ISelectDataProps): {
        name: undefined;
        code: undefined;
    } | {
        id: string;
        code: string;
        name: string;
    } | null;
    locale: LocaleItem;
    constructor(props: ISelectDataProps);
    handleCallBack: (err: object, res: any) => void;
    handleFocus: () => void;
    handleChange: (code: string, option: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => void;
    triggerChange: (changedValue: DataNode | null) => void;
    fetch: () => void;
    showLabel: (item: DataNode) => React.ReactNode;
    filterOption: (input: string, option: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => boolean;
    renderCom: (locale: LocaleItem) => JSX.Element;
    render(): JSX.Element;
}
export default SelectData;
