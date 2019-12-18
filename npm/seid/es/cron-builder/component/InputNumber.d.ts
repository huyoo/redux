import React, { CSSProperties } from 'react';
export interface IInputNumberProps {
    value: number;
    defaultValue?: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    style?: CSSProperties;
    placeholder?: string;
    disabled?: boolean;
}
declare class InputNumber extends React.Component<IInputNumberProps, any> {
    constructor(props: IInputNumberProps);
    componentWillReceiveProps(nextProps: any): void;
    getValue: (value: string, min: number, max: number) => number;
    handleChange: ({ target: { value } }: any) => void;
    handleBlur: () => void;
    handleEnter: () => void;
    notify: () => void;
    render(): JSX.Element;
}
export default InputNumber;
