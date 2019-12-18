export interface ICheckBoxEditorProps {
    onChange?: (value: string) => void;
    min?: number;
    max: number;
    value: string;
    disabled?: boolean;
}
declare const CheckBoxEditor: ({ onChange, min, max, value, disabled }: ICheckBoxEditorProps) => JSX.Element;
export default CheckBoxEditor;
