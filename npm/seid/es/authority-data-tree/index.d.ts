import React from 'react';
import { TreeNodeValue } from 'antd/es/tree-select/interface';
import { Method } from 'axios';
import { LocaleItem } from '../locale';
declare type AttributeType = string;
declare interface IValue {
    id?: AttributeType;
    code?: AttributeType;
    name?: AttributeType;
}
declare interface DataNode {
    code?: AttributeType;
    id?: AttributeType;
    name?: AttributeType;
    children?: DataNode[];
    frozen?: boolean;
}
declare interface IChangeValue {
    code: string;
    id: AttributeType;
    name: String;
    dataItem: object;
    itemData: object;
}
export interface IAuthorityDataTreeProps {
    value?: IValue;
    onChange?: (value: IChangeValue | undefined) => void;
    forbid?: boolean;
    disabled?: boolean;
    orgUrl: string;
    orgRequestMethod: Method;
    orgParams: any;
}
declare interface IAuthorityDataTreeState {
    value?: IValue;
    id?: AttributeType;
    name?: AttributeType;
    code?: AttributeType;
    data: DataNode[];
    params?: IValue;
    fetching: boolean;
    initTitle?: string;
    expandedKeys: AttributeType[];
    expandedKeysOrigin: AttributeType[];
}
declare class AuthorityDataTree extends React.Component<IAuthorityDataTreeProps, IAuthorityDataTreeState> {
    static defaultProps: {
        orgRequestMethod: string;
    };
    locale: LocaleItem;
    constructor(props: IAuthorityDataTreeProps);
    componentWillReceiveProps(nextProps: IAuthorityDataTreeProps): void;
    handleCallBack: (res: any) => void;
    getOrgData: () => void;
    handleChange: (v: TreeNodeValue, _: any, extra: any) => void;
    triggerChange: (changedValue: IChangeValue | undefined) => void;
    findExpandedKeys: (data: DataNode[], arr?: any[]) => string[];
    loopOrgan: (data?: DataNode[] | undefined) => JSX.Element[] | null;
    onTreeExpand: (expandedKeys: string[]) => void;
    onSearch: () => void;
    handleFocus: () => void;
    renderComponent: (locale: LocaleItem) => JSX.Element;
    render(): JSX.Element;
}
export default AuthorityDataTree;
