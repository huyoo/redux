import React, { CSSProperties } from 'react';
import { ISize } from '../resize-me';
export interface Size extends ISize {
    bodyWidth: number;
    bodyHeight: number;
}
export interface IChangeProps {
    collapse: boolean;
    expand: boolean;
}
export interface IPanelProps {
    closable?: boolean;
    className?: string;
    style?: CSSProperties;
    title?: string;
    collapse?: boolean;
    expand?: boolean;
    isPortal: boolean;
    panelKey: string;
    onChange?: (changeProps: IChangeProps) => void;
    onRefresh?: () => void;
    onClose?: (panelKey: string) => void;
    width: string | number;
    height: string | number;
    autoHideToolbar?: boolean;
    scroll?: boolean;
    showDrag?: boolean;
    cover?: boolean;
    size: Size;
    onResize?: (size: Size) => void;
}
declare const _default: {
    new (props: import("../resize-me").IResizeProps): {
        onResizeStrategy: any;
        resizeSensor: any;
        element: any;
        componentDidMount(): void;
        componentWillUnmount(): void;
        onResize: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends string | number | symbol>(state: any, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<any> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<any>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>): any;
        componentDidUpdate?(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<any>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export default _default;
