import { Component } from 'react';
export interface ISystemLoginProps {
    src: string;
}
declare class SystemLogin extends Component<ISystemLoginProps, any> {
    shouldComponentUpdate(nextProps: Readonly<ISystemLoginProps>): boolean;
    render(): false | JSX.Element;
}
export default SystemLogin;
