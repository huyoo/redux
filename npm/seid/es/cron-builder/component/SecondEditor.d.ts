import { CSSProperties } from 'react';
import BaseEditor, { IBaseEditorProps } from './BaseEditor';
export interface ISecondEditorProps {
    value?: string;
    radioStyle?: CSSProperties;
}
declare class SecondEditor extends BaseEditor<ISecondEditorProps> {
    constructor(props: IBaseEditorProps);
    render(): JSX.Element;
}
export default SecondEditor;
