import React from 'react';
import { ColumnProps } from 'antd/es/table';
import { PaginationProps } from 'antd/es/pagination';
import { SystemSet } from './CreateSystemSetForm';
import { IData } from '../ext-table';
declare interface ISettingProps {
    reloadState?: boolean;
    selectedMenuKey: string;
    updateTabPane?: (tabPaneData: any) => void;
    removeTabPane?: (paneKey: string) => void;
    paneKey: string;
}
declare interface ISettingState {
    loading: boolean;
    selectedRows: any[];
    data: IData<any>;
    searchInitValue?: any;
    checkedKeys?: string[];
    systemSet?: SystemSet;
}
declare class SystemSetting extends React.Component<ISettingProps, ISettingState> {
    state: ISettingState;
    columns: ColumnProps<any>[];
    constructor(props: ISettingProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ISettingProps): void;
    fetch: (params: any) => void;
    handleSetOrg: (systemSet: SystemSet) => void;
    handleSetTenant: (systemSet: SystemSet) => void;
    handleSelectRows: (selectedRows: any[]) => void;
    handleStandardTableChange: ({ current, pageSize }: PaginationProps) => void;
    handleSearch: (searchValues: any) => void;
    handleEdit: (systemSet: SystemSet) => void;
    handleAdd: () => void;
    handleDelete: (systemSet: SystemSet) => void;
    handleDeleteAll: () => void;
    render(): React.ReactNode;
}
export default SystemSetting;
