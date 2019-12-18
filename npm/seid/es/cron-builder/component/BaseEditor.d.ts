import React, { CSSProperties } from 'react';
import { LocaleItem } from '../../locale';
export interface ValueInterface {
    [key: string]: string;
}
export interface IBaseEditorProps {
    onChange: (value: string) => void;
    value?: string;
    radioStyle?: CSSProperties;
    locale: LocaleItem;
}
declare interface IBaseEditorState {
    value: ValueInterface;
    radio?: string;
}
declare class BaseEditor<P> extends React.Component<IBaseEditorProps & P, IBaseEditorState> {
    constructor(props: IBaseEditorProps & P);
    notifyChange: (_: any, value: string) => void;
    handleRadioChange: ({ target: { value: radio } }: any) => void;
    handleValueChange: (radio: string, v: string) => void;
}
export default BaseEditor;
