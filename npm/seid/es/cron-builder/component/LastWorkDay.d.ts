declare const LastWorkDay: ({ onChange, value, disabled, }: {
    value: string;
    onChange: (v: string) => void;
    disabled?: boolean | undefined;
}) => JSX.Element;
export default LastWorkDay;
