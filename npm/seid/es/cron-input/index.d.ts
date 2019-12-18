import { Component, CSSProperties } from 'react';
export interface ICronInputProps {
    value?: string;
    defaultValue?: string;
    onChange?: (value?: string) => void;
    className?: string;
    style?: CSSProperties;
}
declare interface ICronInputState {
    value?: string;
}
declare class CronInput extends Component<ICronInputProps, ICronInputState> {
    static getDerivedStateFromProps(nextProps: ICronInputProps, prevState: ICronInputState): {
        value: string | undefined;
    } | null;
    loader: HTMLDivElement | null;
    constructor(props: ICronInputProps);
    onChange: (value: string) => void;
    onInputChange: () => void;
    render(): JSX.Element;
}
export default CronInput;
