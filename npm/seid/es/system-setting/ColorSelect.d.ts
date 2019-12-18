import React from 'react';
import { ColorResult } from 'react-color';
export interface IColorSelectProps {
    varKey: string;
    onChange: (value: any) => void;
    placeholder?: string;
    value?: string;
}
export interface IColorSelectState {
    visible: boolean;
}
declare class ColorSelect extends React.PureComponent<IColorSelectProps, IColorSelectState> {
    chooseValue: string;
    color: ColorResult;
    constructor(props: IColorSelectProps);
    colorClick: (v: boolean) => void;
    handleInput: (value: string) => void;
    colorPick: (color: ColorResult) => void;
    render(): JSX.Element;
}
export default ColorSelect;
