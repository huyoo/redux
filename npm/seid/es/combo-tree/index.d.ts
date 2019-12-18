import * as React from 'react';
import PropTypes from 'prop-types';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { AntTreeNodeSelectedEvent } from 'antd/es/tree';
export interface StoreProps {
    /**
     * zh-CN: 数据请求参数
     * en-US: request params
     */
    params?: object;
    /**
     * zh-CN: 数据请求类型
     * en-US: Data request method
     */
    type: 'GET' | 'POST';
    /**
     * zh-CN: 接口地址
     * en-US: interface address
     */
    url: string;
    /**
     * zh-CN: 初始化时自动获取数据
     * en-US: Automatically acquire data during initialization
     */
    autoLoad: boolean;
}
export interface Reader {
    /**
     * zh-CN: 截取的数据节点
     * en-US: data node
     */
    data?: string;
    /**
     * zh-CN: ComboList属性field映射,属性名必须一一对应
     * en-US: display property name
     */
    field?: string[];
    /**
     * zh-CN: 显示的属性名
     * en-US: display property name
     */
    name: string;
    /**
     * zh-CN: 子节点的属性名
     */
    childKey: string;
}
export interface ComboProps<T> {
    /**
     * zh-CN: 可以点击清除图标删除内容
     * en-US: Allow to remove input content with clear icon
     */
    allowClear: boolean;
    /**
     * zh-CN: 选择数据行后触发该事件
     * en-US: After select will trigger this event
     */
    afterSelect?: (item: any) => void;
    /**
     * zh-CN: 清空数据触发该事件
     * en-US: After clear will trigger this event
     */
    afterClear?: () => void;
    /**
     * zh-CN: 数据请求完成调用该事件，返回接口请求的数据
     * en-US: Data record array to be displayed
     */
    afterLoaded?: (data: object[]) => void;
    /**
     * zh-CN: 级联参数配置
     * en-US: Cascade parameter configuration
     */
    cascadeParams?: object;
    /**
     * zh-CN: 选择框样式名
     * en-US: ComboList className
     */
    className?: string;
    /**
     * zh-CN: 输入框默认内容
     * en-US: The initial input content
     */
    defaultValue?: string;
    /**
     * zh-CN: 组件失效状态
     * en-US: Disabled state of button
     */
    disabled?: boolean;
    /**
     * zh-CN: 静态数据源
     * en-US: Data record array to be displayed
     */
    dataSource?: object[];
    /**
     * zh-CN: 额外提交的表单字段属性名，表单受控
     * en-US: Attribute name of extra submitted form field, controlled form
     */
    field?: string[];
    /**
     * zh-CN: antd表单组件form
     * en-US: antd Form
     */
    form?: WrappedFormUtils;
    /**
     * zh-CN: 填充输入框显示的表单字段属性名，表单受控
     * en-US: Fill in the attribute name of the form field displayed in the input box. The form is controlled
     */
    name: string;
    /**
     * zh-CN: 选择框默认文字
     * en-US: Placeholder of select
     */
    placeholder?: string;
    /**
     * zh-CN: 接口数据解析适配
     * en-US: Data map object
     */
    reader: Reader;
    /**
     * zh-CN: 设置列表项唯一的key，可以是返回字符串的字符串或函数
     * en-US: Item's unique key, could be a string or function that returns a string
     */
    rowKey: ((item: T) => string) | string;
    /**
     * zh-CN: css属性配置
     * en-US: css properties
     */
    style?: React.CSSProperties;
    /**
     * zh-CN: 数据接口对象
     * en-US: Data interface object
     */
    store?: StoreProps;
    /** s
     * zh-CN: 显示快速搜索
     * en-US: Show search
     */
    showSearch: boolean;
    /**
     * zh-CN: 搜索框默认文字
     * en-US: Placeholder of search
     */
    searchPlaceHolder?: string;
    /**
     * zh-CN: 搜索属性配置
     * en-US: Properties of search
     */
    searchProperties?: string[];
    /**
     * zh-CN: 输入框内容
     * en-US: The input content value
     */
    value?: string;
    /** s
     * zh-CN: 数据面板宽度
     * en-US: Data list width
     */
    width?: number;
}
declare class ComboTree<T> extends React.Component<ComboProps<T>, any> {
    static defaultProps: {
        disabled: boolean;
        showSearch: boolean;
        store: null;
        dataSource: never[];
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
            childKey: PropTypes.Requireable<string>;
        }>>;
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
    protected comboList: HTMLDivElement;
    protected select: React.ReactNode;
    protected quickSearchValue: string;
    protected searchInput: any;
    constructor(props: ComboProps<T>);
    componentDidMount(): void;
    componentWillUnmount(): void;
    hideComboList: (e: MouseEvent) => void;
    componentDidUpdate(prevProps: ComboProps<T>): void;
    showComboList: (showTree: boolean) => void;
    getReaderData: (obj: any) => any;
    getReader: (readerField: string, obj: any) => any;
    getData: () => void;
    loadData: (params: any) => void;
    onClearValue: () => void;
    filterNodes: (filterName: string, valueKey: string, treeData: object[], expandedKeys: string[]) => object[];
    getLocalFilterData: () => {
        treeData: object[];
        expandedKeys: string[];
    };
    onExpand: (expandedKeys: string[]) => void;
    onSearchChange: (e: any) => void;
    focus: () => void;
    onSearch: () => void;
    initComboList: (ref: any) => void;
    getRowKey: (item: any) => any;
    getItemBySelectedKeys: (selectedKeys: string[]) => object[];
    getTreeNodeByKey: (treeNodes: object[], nodeData: object[], key: string) => void;
    onSelect: (selectedKeys: string[], e: AntTreeNodeSelectedEvent) => void;
    renderTreeNodes: (data: object[]) => JSX.Element[];
    render(): JSX.Element;
}
export default ComboTree;
