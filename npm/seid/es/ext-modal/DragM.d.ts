import React, { ReactElement } from 'react';
export interface IDragMProps {
    updateTransform: (transformStr: string, tx: number, ty: number, tdom: HTMLElement) => void;
    children: ReactElement;
}
export default class DragM extends React.Component<IDragMProps, any> {
    static defaultProps: {
        updateTransform: (transformStr: string, _: any, __: any, tdom: HTMLElement) => void;
    };
    position: {
        startX: number;
        startY: number;
        dx: number;
        dy: number;
        tx: number;
        ty: number;
    };
    tdom: HTMLElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    start: (event: MouseEvent) => void;
    docMove: (event: MouseEvent) => void;
    docMouseUp: () => void;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
