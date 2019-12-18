import React, { Component, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { LocaleItem } from '../locale';
import ComboProps from './comboProps';
declare class ComboGrid<T> extends Component<ComboProps<T>, any> {
    static defaultProps: {
        remotePaging: boolean;
        showPaging: boolean;
        disabled: boolean;
        showSearch: boolean;
        store: null;
        dataSource: never[];
        columns: never[];
        height: number;
        allowClear: boolean;
        placeholder: string;
        searchPlaceHolder: string;
        searchProperties: string[];
        rowKey: string;
        name: string;
        field: never[];
    };
    static propTypes: {
        cascadeParams: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean>;
        value: PropTypes.Requireable<any>;
        defaultValue: PropTypes.Requireable<any>;
        allowClear: PropTypes.Requireable<boolean>;
        classNames: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        store: PropTypes.Requireable<PropTypes.InferProps<{
            type: PropTypes.Requireable<string>;
            url: PropTypes.Requireable<string>;
            params: PropTypes.Requireable<object>;
            autoLoad: PropTypes.Requireable<boolean>;
        }>>;
        reader: PropTypes.Validator<PropTypes.InferProps<{
            data: PropTypes.Requireable<string>;
            name: PropTypes.Requireable<string>;
            field: PropTypes.Requireable<any[]>;
        }>>;
        remotePaging: PropTypes.Requireable<boolean>;
        showPaging: PropTypes.Requireable<boolean>;
        showSearch: PropTypes.Requireable<boolean>;
        width: PropTypes.Requireable<number>;
        searchPlaceHolder: PropTypes.Requireable<string>;
        searchProperties: PropTypes.Requireable<any[]>;
        dataSource: PropTypes.Requireable<any[]>;
        afterLoaded: PropTypes.Requireable<(...args: any[]) => any>;
        afterSelect: PropTypes.Requireable<(...args: any[]) => any>;
        afterClear: PropTypes.Requireable<(...args: any[]) => any>;
        rowKey: PropTypes.Requireable<string>;
        name: PropTypes.Validator<string>;
        field: PropTypes.Requireable<any[]>;
    };
    protected loaded: boolean;
    protected data: object[];
    protected comboGrid: HTMLDivElement;
    protected select: any;
    protected dataTable: any;
    protected scrollBar: any;
    protected quickSearchValue: string;
    protected searchInput: any;
    constructor(props: ComboProps<T>);
    onResize: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    hideComboGrid: (e: MouseEvent) => void;
    componentDidUpdate(prevProps: ComboProps<T>): void;
    showComboGrid: (showGrid: boolean) => void;
    getReaderData: (obj: any) => any;
    getReader: (readerField: string, obj: any) => any;
    getData: () => void;
    loadData: (params: any) => void;
    onPageChange: (current: number, pageSize: number) => void;
    afterSelect: (item: T, index: number) => void;
    onClearValue: () => void;
    getLocalFilterData: () => object[];
    onSearchChange: (e: any) => void;
    focus: () => void;
    onSearch: () => void;
    initComboGrid: (ref: any) => void;
    onRowEventChange: (record: T, idx: number) => {
        onClick: () => void;
    };
    getRowKey: (item: any) => any;
    showTotal: (total: number, locale: LocaleItem) => string;
    getTableWidth: () => number;
    renderComboGrid: (locale: LocaleItem) => React.ReactNode;
    render(): ReactNode;
}
export default ComboGrid;
