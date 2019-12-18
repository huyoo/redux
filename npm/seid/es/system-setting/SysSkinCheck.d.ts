import React from 'react';
export interface ISysSkinCheckProps {
    value?: string;
    onChange?: (value: string | null) => void;
}
declare interface ITheme {
    key: React.Key;
    name: string;
    className: string;
    active: boolean;
    colorMap: object;
    [propName: string]: any;
}
declare interface ISysSkinCheckState {
    loading?: boolean;
    show: boolean;
    themes?: ITheme[];
}
declare class SysSkinCheck extends React.Component<ISysSkinCheckProps, ISysSkinCheckState> {
    state: ISysSkinCheckState;
    colorClick: () => void;
    applyCustomizeTheme: (item: ITheme) => void;
    setCustomizeTheme: (item: ITheme) => void;
    render(): JSX.Element;
}
export default SysSkinCheck;
