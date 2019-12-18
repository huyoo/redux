import React from 'react';
import { WrappedFormUtils } from 'antd/es/form/Form';
export interface SystemSet {
    settingId?: string;
    sysName?: string;
    sysSkin?: string;
    loginCenter?: boolean;
    sysVersion?: string;
    sysHome?: string;
    appBasic?: string;
    sysLogin?: string;
    sysAlone?: boolean;
    sysLogo?: string;
    sysGlobal?: boolean;
}
export interface ICreateSystemSetFormProps {
    wrappedComponentRef?: any;
    children?: React.ReactNode;
    form: WrappedFormUtils<any>;
    editSystemSet?: SystemSet;
    removeTabPane?: (paneKey: string | undefined, refresh: boolean) => void;
    paneKey?: string;
}
declare interface ICreateSystemSetFormState {
    loading: boolean;
}
declare class CreateSystemSetForm extends React.Component<ICreateSystemSetFormProps, ICreateSystemSetFormState> {
    state: ICreateSystemSetFormState;
    formValueInit: SystemSet;
    constructor(props: ICreateSystemSetFormProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ICreateSystemSetFormProps): void;
    init: (editSystemSet: SystemSet) => void;
    handleSubmit: (e: any) => void;
    handelCancel: () => void;
    goBack: (isRefreshParent?: boolean) => void;
    render(): JSX.Element;
}
declare const _default: import("antd/es/form/interface").ConnectedComponentClass<typeof CreateSystemSetForm, Pick<ICreateSystemSetFormProps, "children" | "wrappedComponentRef" | "editSystemSet" | "removeTabPane" | "paneKey">>;
export default _default;
