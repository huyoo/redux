import { LocaleItem } from '../../locale';
declare const WeekDay: ({ value, onChange, disabled, locale, }: {
    value: string;
    onChange: (v: string) => void;
    disabled?: boolean | undefined;
    locale: LocaleItem;
}) => JSX.Element;
export default WeekDay;
