import { Component, CSSProperties, Key, ReactNode } from 'react';
import { BreadcrumbProps } from 'antd/es/breadcrumb';
export interface PathItem {
    path: string;
    key: Key;
    name: string;
}
export interface IExtBreadcrumbProps extends BreadcrumbProps {
    /** 路径地址 */
    pathData: PathItem[];
    /** 是否有滚动条 */
    autoScroll: boolean;
    /** 右上角操作 */
    rightExtra?: ReactNode;
    /** 右上角操作样式 */
    rightExtraClass?: string;
    /** 是否显示 */
    hidden?: boolean;
    /** 主区域显示内容 */
    extra?: ReactNode;
    /** 主区域className */
    extraClassName?: string;
    /** 主区域样式 */
    extraStyle?: CSSProperties;
    children: ReactNode;
}
export default class ExtBreadcrumb extends Component<IExtBreadcrumbProps, any> {
    static defaultProps: {
        pathData: never[];
        autoScroll: boolean;
        rightExtra: null;
        rightExtraClass: string;
    };
    getBreadcrumbItems: () => JSX.Element[];
    render(): JSX.Element;
}
