import { Component } from 'react';
import PropTypes from 'prop-types';
import { IconProps } from 'antd/es/icon';
import { TooltipProps } from 'antd/es/tooltip';
export interface IExtIconProps extends IconProps {
    antd: boolean;
    font: string;
    type: string;
    tooltip?: TooltipProps;
    disabled: boolean;
}
declare class ExtIcon extends Component<IExtIconProps, any> {
    static propTypes: {
        prefixCls: PropTypes.Requireable<string>;
        type: PropTypes.Validator<string>;
        className: PropTypes.Requireable<string>;
        font: PropTypes.Requireable<string>;
        antd: PropTypes.Requireable<boolean>;
        spin: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
    };
    static defaultProps: {
        prefixCls: string;
        className: string;
        font: string;
        antd: boolean;
        spin: boolean;
        disabled: boolean;
    };
    constructor(props: IExtIconProps);
    renderIcon: () => JSX.Element;
    render(): JSX.Element;
}
export default ExtIcon;
