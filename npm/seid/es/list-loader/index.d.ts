import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
export interface LoadProps {
    spinning: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare class ListLoader extends PureComponent<LoadProps, any> {
    static defaultProps: {
        spinning: boolean;
    };
    static propTypes: {
        spinning: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
    };
    render(): JSX.Element;
}
export default ListLoader;
