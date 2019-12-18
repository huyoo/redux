import { ReactNode } from 'react';
export interface IFromEveryProps {
    value?: string;
    onChange?: (v: string) => void;
    front: ReactNode;
    middle: ReactNode;
    back: ReactNode;
    fromMin?: number;
    fromMax?: number;
    everyMin?: number;
    everyMax?: number;
    disabled?: boolean;
}
declare const FromEvery: ({ value, onChange, front, middle, back, fromMin, fromMax, everyMin, everyMax, disabled, }: IFromEveryProps) => JSX.Element;
export default FromEvery;
