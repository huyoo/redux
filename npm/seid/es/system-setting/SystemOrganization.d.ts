import React from 'react';
import { AntTreeNodeProps } from 'antd/es/tree';
import { SystemSet } from './CreateSystemSetForm';
declare interface ISystemOrganizationProps {
    reloadState?: boolean;
    selectedMenuKey?: string;
    updateTabPane?: (tabPaneData: any) => void;
    removeTabPane?: (paneKey: string) => void;
    paneKey: string;
    systemSet?: SystemSet;
}
declare interface ISystemOrganizationState {
    loading: boolean;
    treeData?: AntTreeNodeProps[];
    checkedKeys?: string[];
    systemSet?: SystemSet;
}
declare class SystemOrganization extends React.Component<ISystemOrganizationProps, ISystemOrganizationState> {
    state: ISystemOrganizationState;
    constructor(props: ISystemOrganizationProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ISystemOrganizationProps): void;
    init: () => void;
    initTreeData: () => void;
    initSystemSetOrgs: () => void;
    renderTreeNodes: (data: any[]) => JSX.Element[];
    handleTreeCheck: (checkedKeys: string[]) => void;
    handelCancel: () => void;
    handelSave: () => void;
    goBack: () => void;
    render(): JSX.Element;
}
export default SystemOrganization;
