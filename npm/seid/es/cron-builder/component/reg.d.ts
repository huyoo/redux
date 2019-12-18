import React, { ReactNode } from 'react';
declare const index: {
    [key: string]: string;
};
export interface IRegProps {
    value?: string;
    currentIndex: string;
    onChange: (currentIndex: string, value?: string) => void;
}
export declare const getCurrentRegIndex: (cronText?: string | undefined, currentIndex?: string | undefined) => string | undefined;
declare class Reg extends React.Component<IRegProps, any> {
    value: undefined | string;
    constructor(props: IRegProps);
    componentWillReceiveProps(nextProps: IRegProps): void;
    updateCron: (cronText: string | undefined, currentIndex: string, onChange: (key: string, value?: string | undefined) => void) => void;
    render(): ReactNode;
}
export default Reg;
export { index };
