import * as React from 'react';
import PropTypes from 'prop-types';
export interface IAmount {
    amount: string | number;
    className: string;
    style: React.CSSProperties;
}
declare class ChineseAmount extends React.Component<IAmount, any> {
    static propTypes: {
        amount: PropTypes.Requireable<string | number>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
    };
    constructor(props: IAmount);
    componentDidUpdate(prevProps: IAmount): void;
    render(): JSX.Element;
}
export default ChineseAmount;
