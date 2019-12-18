import { Component } from 'react';
import PropTypes from 'prop-types';
declare class FormModal extends Component<any, any> {
    static propTypes: {
        /** modal props */
        modalProps: PropTypes.Requireable<object>;
        /** BaseForm props */
        formProps: PropTypes.Requireable<object>;
    };
    static defaultProps: {
        modalProps: {};
        formProps: {};
    };
    BaseForm: any;
    componentDidMount(): void;
    handleOk: () => Promise<void>;
    render(): JSX.Element;
}
export default FormModal;
