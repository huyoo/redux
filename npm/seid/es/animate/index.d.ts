import { CSSProperties, PureComponent, ReactNode } from 'react';
import PropTypes from 'prop-types';
export interface IAnimateProps {
    type: string;
    callback?: () => void;
    duration?: number;
    delay?: number;
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}
declare class Animate extends PureComponent<IAnimateProps, any> {
    static propTypes: {
        type: PropTypes.Requireable<string>;
        callback: PropTypes.Requireable<(...args: any[]) => any>;
        duration: PropTypes.Requireable<number>;
        delay: PropTypes.Requireable<number>;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    animate: (type: string, callback?: Function | undefined) => void;
    render(): JSX.Element;
}
export default Animate;
