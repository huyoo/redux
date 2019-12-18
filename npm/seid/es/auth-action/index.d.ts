import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
export interface IAuthAction {
    key: string;
    ignore: boolean;
    children: React.ReactNode;
}
declare class AuthAction extends PureComponent<IAuthAction, any> {
    static defaultProps: {
        ignore: boolean;
    };
    static propTypes: {
        key: PropTypes.Validator<string>;
        ignore: PropTypes.Requireable<boolean>;
        children: PropTypes.Validator<any>;
    };
    render(): JSX.Element;
}
export default AuthAction;
