import { PureComponent, ReactElement, ReactNode } from 'react';
import { ColumnProps } from 'antd/es/table';
import { ClickParam } from 'antd/es/menu';
import { SortConfig } from './index';
import { LocaleItem } from '../locale';
export interface IToolProps {
    children: ReactElement;
    columns: ColumnProps<any>[];
    selectedCols: string[];
    onChangeCols?: (cols: string[]) => void;
    dataIndex: string;
    sortConfigs?: SortConfig[];
    onChangeSort?: (sc: SortConfig[]) => void;
    locale: LocaleItem;
}
declare interface IToolState {
    visible: boolean;
    openKeys: string[];
    selectedCols: string[];
}
declare class Tool extends PureComponent<IToolProps, IToolState> {
    static getDerivedStateFromProps(nextProps: IToolProps, prevState: IToolState): {
        selectedCols: string[];
    } | null;
    node: ReactNode;
    constructor(props: IToolProps);
    onChange: (dataIndex?: string) => void;
    onFinishChange: () => void;
    onTitleClick: ({ key }: {
        key: string;
    }) => void;
    getColumnCheckbox: () => JSX.Element[];
    onClick: (param: ClickParam) => void;
    render(): JSX.Element;
}
export default Tool;
