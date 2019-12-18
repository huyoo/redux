import * as React from 'react';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { IFieldProps } from './FormItem';
export interface IDynamicFormsProps {
    form: WrappedFormUtils<any>;
    fieldsList: IFieldProps[];
    formItemLayout: Object;
    columns: boolean | number;
    onSubmit?: Function;
    submitText?: string;
    wrappedComponentRef?: any;
    children?: React.ReactNode;
}
declare class DynamicForms extends React.Component<IDynamicFormsProps, any> {
    _onSubmit: (event: React.SyntheticEvent<Element, Event>) => void;
    render(): React.ReactNode;
}
declare const _default: import("antd/es/form/interface").ConnectedComponentClass<typeof DynamicForms, Pick<IDynamicFormsProps, "children" | "onSubmit" | "columns" | "wrappedComponentRef" | "formItemLayout" | "fieldsList" | "submitText">>;
export default _default;
