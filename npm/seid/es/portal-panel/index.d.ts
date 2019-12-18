import React, { Component, CSSProperties, ReactNode } from 'react';
import PropTypes from 'prop-types';
import LayoutItem from './LayoutItem';
import Breakpoint from './Breakpoint';
export declare type CompactType = 'horizontal' | 'vertical';
export interface WidgetItem {
    id: string;
    title?: string;
    widget: ReactNode;
    lazy?: boolean;
    closable?: boolean;
    layout?: LayoutItem;
}
export declare type Layouts = Array<LayoutItem>;
export interface GridLayoutProps {
    className?: string;
    style?: CSSProperties;
    widgets: Array<WidgetItem>;
    autoHideToolbar: boolean;
    onClose: (widgetId: string) => void;
    layouts?: {
        [key: string]: Layouts;
    };
    cols: Breakpoint;
    rowHeight: number;
    breakpoints: Breakpoint;
    compactType: CompactType;
    draggableHandle: string;
    onLayoutChange: (layout: Array<LayoutItem>, layouts: {
        [key: string]: Layouts;
    }) => void;
    isDraggable?: boolean;
    isResizable?: boolean;
}
declare type State = {
    layouts: {
        [key: string]: Layouts;
    };
    widgets: Array<WidgetItem>;
    breakpoint: string;
    cols: number;
};
declare class Index extends Component<GridLayoutProps, State> {
    static defaultProps: {
        autoHideToolbar: boolean;
        breakpoints: {
            lg: number;
            md: number;
            sm: number;
            xs: number;
            xxs: number;
        };
        cols: {
            lg: number;
            md: number;
            sm: number;
            xs: number;
            xxs: number;
        };
        rowHeight: number;
        widgets: never[];
        compactType: string;
        draggableHandle: string;
        isDraggable: boolean;
        isResizable: boolean;
    };
    static propTypes: {
        closable: PropTypes.Requireable<boolean>;
        title: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        compactType: PropTypes.Requireable<string>;
        draggableHandle: PropTypes.Requireable<string>;
    };
    constructor(props: GridLayoutProps);
    componentDidUpdate(_preProps: GridLayoutProps, preState: State): void;
    onLayoutChange: (layout: Layouts, layouts: {
        [key: string]: Layouts;
    }) => void;
    onBreakpointChange: (breakpoint: string, cols: number) => void;
    getWidgetLayout: (id: string) => LayoutItem | null;
    renderGridItem: () => JSX.Element[];
    renderPortal: () => React.ReactNode;
    render(): ReactNode;
}
export default Index;
