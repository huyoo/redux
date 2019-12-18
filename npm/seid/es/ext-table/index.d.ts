import React, { Component, ReactNode, ReactText } from 'react';
import { ColumnProps, TableEventListeners, TableProps, TableRowSelection } from 'antd/es/table';
import { PaginationProps } from 'antd/es/pagination';
import PerfectScrollbar from 'perfect-scrollbar';
import { IToolBarProps } from '../tool-bar';
import { LocaleItem } from '../locale';
export interface IData<T> {
    list: T[];
    pagination?: PaginationProps | false;
}
export interface IColumnProps<T> extends ColumnProps<T> {
    originalWidth: ReactText;
}
export interface IExtTableProps<T> extends Omit<TableProps<T>, 'rowSelection'> {
    toolBar?: IToolBarProps;
    height?: ReactText;
    data?: IData<T>;
    selectedRows?: T[];
    rowSelection?: boolean | TableRowSelection<T>;
    containerClassName?: string;
    wrapperClassName?: string;
    onSelectRows?: (selectedRowKeys: string[], selectedRows: T[]) => void;
    resizeColumns?: boolean;
    align?: 'left' | 'right' | 'center';
    ellipsis?: boolean;
    columnTool: boolean;
    offsetBottom: number;
}
export interface SortConfig {
    sortCol: string;
    sort: 'asc' | 'desc';
}
declare interface IExtTableState<T> {
    columns: IColumnProps<T>[];
    tableWrapperHeight: ReactText;
    calcWidth: number;
    totalWidth: number;
    selectedRowKeys: string[];
    selectedRows: T[];
    selectedCols: string[];
    sortConfigs?: SortConfig[];
    groupConfigs?: string[];
}
export default class ExtTable<T> extends Component<IExtTableProps<T>, IExtTableState<T>> {
    static defaultProps: {
        offsetBottom: number;
        rowKey: string;
        ellipsis: boolean;
        columnTool: boolean;
    };
    components: {
        header: {
            cell: any;
        };
    };
    ps: PerfectScrollbar | null;
    wrapper: HTMLDivElement | null;
    container: HTMLDivElement | null;
    toolBar: HTMLDivElement | null;
    locale: LocaleItem;
    constructor(props: IExtTableProps<T>);
    static getDerivedStateFromProps(nextProps: IExtTableProps<any>, prevState: IExtTableState<any>): object | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateSize: () => void;
    handleResize: (index: number) => (_: never, { size }: {
        size: {
            width: string | number;
        };
    }) => void;
    getToolBar: () => JSX.Element | null;
    handleSelectChange: (selectedRowKeys: string[] | number[], selectedRows: T[]) => void;
    handleSelectRows: (record: T, selected: boolean, sRows: T[], nativeEvent: Event) => void;
    handleSelectAllRows: (selected: boolean, sRows: T[], changeRows: T[]) => void;
    onTableRow: (reord: T, index: number) => TableEventListeners;
    getColumns: (cols: IColumnProps<T>[], selectedCols: string[], resizeColumns?: boolean | undefined) => ({
        ellipsis: boolean;
        onHeaderCell: (column: ColumnProps<T>) => {
            width: string | number | undefined;
            onResize: (_: never, { size }: {
                size: {
                    width: string | number;
                };
            }) => void;
            dataIndex: string | undefined;
        };
        originalWidth: string | number;
        title?: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((options: {
            filters: import("antd/es/table").TableStateFilters;
            sortOrder?: "descend" | "ascend" | undefined;
            sortColumn?: ColumnProps<T> | null | undefined;
        }) => React.ReactNode) | null | undefined;
        key?: string | number | undefined;
        dataIndex?: string | undefined;
        render?: ((text: any, record: T, index: number) => React.ReactNode) | undefined;
        align?: "left" | "right" | "center" | undefined;
        filters?: import("antd/es/table").ColumnFilterItem[] | undefined;
        onFilter?: ((value: any, record: T) => boolean) | undefined;
        filterMultiple?: boolean | undefined;
        filterDropdown?: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((props: import("antd/es/table").FilterDropdownProps) => React.ReactNode) | null | undefined;
        filterDropdownVisible?: boolean | undefined;
        onFilterDropdownVisibleChange?: ((visible: boolean) => void) | undefined;
        sorter?: boolean | import("antd/es/table").CompareFn<T> | undefined;
        defaultSortOrder?: "descend" | "ascend" | undefined;
        colSpan?: number | undefined;
        width?: string | number | undefined;
        className?: string | undefined;
        fixed?: boolean | "left" | "right" | undefined;
        filterIcon?: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((filtered: boolean) => React.ReactNode) | null | undefined;
        filteredValue?: any[] | null | undefined;
        sortOrder?: boolean | "descend" | "ascend" | undefined;
        children?: ColumnProps<T>[] | undefined;
        onCellClick?: ((record: T, event: Event) => void) | undefined;
        onCell?: ((record: T, rowIndex: number) => TableEventListeners) | undefined;
        sortDirections?: import("antd/es/table").SortOrder[] | undefined;
    } | {
        ellipsis: boolean;
        onHeaderCell: () => {
            dataIndex: string | undefined;
        };
        originalWidth: string | number;
        title?: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((options: {
            filters: import("antd/es/table").TableStateFilters;
            sortOrder?: "descend" | "ascend" | undefined;
            sortColumn?: ColumnProps<T> | null | undefined;
        }) => React.ReactNode) | null | undefined;
        key?: string | number | undefined;
        dataIndex?: string | undefined;
        render?: ((text: any, record: T, index: number) => React.ReactNode) | undefined;
        align?: "left" | "right" | "center" | undefined;
        filters?: import("antd/es/table").ColumnFilterItem[] | undefined;
        onFilter?: ((value: any, record: T) => boolean) | undefined;
        filterMultiple?: boolean | undefined;
        filterDropdown?: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((props: import("antd/es/table").FilterDropdownProps) => React.ReactNode) | null | undefined;
        filterDropdownVisible?: boolean | undefined;
        onFilterDropdownVisibleChange?: ((visible: boolean) => void) | undefined;
        sorter?: boolean | import("antd/es/table").CompareFn<T> | undefined;
        defaultSortOrder?: "descend" | "ascend" | undefined;
        colSpan?: number | undefined;
        width?: string | number | undefined;
        className?: string | undefined;
        fixed?: boolean | "left" | "right" | undefined;
        filterIcon?: string | number | boolean | {} | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactNodeArray | React.ReactPortal | ((filtered: boolean) => React.ReactNode) | null | undefined;
        filteredValue?: any[] | null | undefined;
        sortOrder?: boolean | "descend" | "ascend" | undefined;
        children?: ColumnProps<T>[] | undefined;
        onCellClick?: ((record: T, event: Event) => void) | undefined;
        onCell?: ((record: T, rowIndex: number) => TableEventListeners) | undefined;
        sortDirections?: import("antd/es/table").SortOrder[] | undefined;
    })[];
    getRowSelectProps: (rowSelection?: boolean | TableRowSelection<T> | undefined, selectedRowKeys?: string[] | number[] | undefined) => TableRowSelection<T> | undefined;
    getPaginationProps: (pagination?: boolean | PaginationProps | undefined) => false | {
        total?: number | undefined;
        defaultCurrent?: number | undefined;
        disabled?: boolean | undefined;
        current?: number | undefined;
        defaultPageSize?: number | undefined;
        pageSize?: number | undefined;
        onChange?: ((page: number, pageSize?: number | undefined) => void) | undefined;
        hideOnSinglePage?: boolean | undefined;
        showSizeChanger: boolean;
        pageSizeOptions?: string[] | undefined;
        onShowSizeChange?: ((current: number, size: number) => void) | undefined;
        showQuickJumper: boolean | {
            goButton?: React.ReactNode;
        };
        showTotal: ((total: number, range: [number, number]) => React.ReactNode) | ((total: number) => string);
        size: string;
        simple?: boolean | undefined;
        style?: React.CSSProperties | undefined;
        locale?: Object | undefined;
        className?: string | undefined;
        prefixCls?: string | undefined;
        selectPrefixCls?: string | undefined;
        itemRender?: ((page: number, type: "page" | "prev" | "next" | "jump-prev" | "jump-next", originalElement: React.ReactElement<HTMLElement, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => React.ReactNode) | undefined;
        role?: string | undefined;
        showLessItems?: boolean | undefined;
    };
    getDataList: () => T[];
    handleExpandRow: (expand: boolean, record: T) => void;
    renderTable: () => JSX.Element | null;
    renderCom: (locale: LocaleItem) => JSX.Element;
    render(): ReactNode;
}
export {};
