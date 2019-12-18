import React from 'react';
import { InputProps } from 'antd/es/input';
import { LocaleItem } from '../locale';
declare type TNumber = number | string | undefined;
declare interface IValue {
    number: TNumber;
}
declare interface IAmountInputProps extends InputProps {
    [propName: string]: any;
}
declare interface IAmountInputState {
    number: TNumber;
}
export default class AmountInput extends React.Component<IAmountInputProps, IAmountInputState> {
    constructor(props: IAmountInputProps);
    componentWillReceiveProps(nextProps: IAmountInputProps): void;
    handleNumberChange: (e: any) => void;
    handlePressEnter: (e: any) => void;
    handleToDecimal: (e: any) => void;
    triggerChange: (changedValue: IValue) => void;
    renderInput: (locale: LocaleItem) => JSX.Element;
    render(): JSX.Element;
}
export {};
