import React from 'react';
import { SystemSet } from './CreateSystemSetForm';
export interface ISystemTenantsProps {
    systemSet?: SystemSet;
    removeTabPane?: (paneKey: string | undefined) => void;
    paneKey?: string;
}
declare interface ISystemTenantsState {
    loading: boolean;
    systemSet?: SystemSet;
    treeData: any[];
    checkedKeys: string[];
}
declare class SystemTenants extends React.PureComponent<ISystemTenantsProps, ISystemTenantsState> {
    constructor(props: ISystemTenantsProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ISystemTenantsProps): void;
    init: () => void;
    initTreeData: () => void;
    initSystemSetTenants: () => void;
    renderTreeNodes: (data: any[]) => (JSX.Element | null)[];
    handleTreeCheck: (checkedKeys: string[]) => void;
    handelCancel: () => void;
    handelSave: () => void;
    goBack: () => void;
    render(): JSX.Element;
}
export default SystemTenants;
