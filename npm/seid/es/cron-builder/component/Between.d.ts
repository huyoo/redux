import { LocaleItem } from '../../locale';
export interface IBetweenProps {
    value: string;
    min?: number;
    max: number;
    onChange: (value: string) => void;
    disabled?: boolean;
    locale: LocaleItem;
}
declare const Between: ({ value, onChange, min, max, disabled, locale }: IBetweenProps) => JSX.Element;
export default Between;
