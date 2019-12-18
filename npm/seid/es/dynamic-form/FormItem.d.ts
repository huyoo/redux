import React, { ChangeEvent } from 'react';
import { Moment } from 'moment';
import { ValidationRule } from 'antd/es/form';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { RadioChangeEvent } from 'antd/es/radio';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
declare interface ISelectOptionProps {
    id: number | string;
    name: number | string | React.ReactNode;
}
export declare type TValue = string[] | string | undefined | number | CheckboxValueType[];
export interface IFieldProps {
    name: string;
    displayName: string;
    editor?: 'normal' | 'password' | 'number' | 'text' | 'select' | 'radio' | 'texarea' | 'checkbox' | 'bEditor' | 'hidden';
    unavailable?: boolean;
    value?: TValue;
    originValue?: string | Moment | undefined | number;
    rules?: ValidationRule[];
    range?: number[];
    opts?: ISelectOptionProps[];
}
declare interface IFormsItemProps {
    value?: TValue;
    unavailable?: boolean;
    onChange?: (event: TValue | ChangeEvent | RadioChangeEvent | CheckboxValueType[]) => void;
    item: IFieldProps;
    form: WrappedFormUtils<any>;
}
declare class FormsItem extends React.Component<IFormsItemProps, any> {
    render(): JSX.Element;
}
export default FormsItem;
