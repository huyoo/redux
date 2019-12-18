import React, { ReactElement } from 'react';
export interface IDragWrapperProps {
    children: ReactElement;
}
export default class DragWrapper extends React.Component<IDragWrapperProps, any> {
    modalDom: Element | Text | null;
    ref: any;
    container: any;
    curNode: Element | Text | null;
    componentDidMount(): void;
    getCurrentNode: () => void;
    /** 根据类名获取祖先dom */
    findDomByClassName: (className: string) => Element | null;
    updateTransform: (transformStr: string) => void;
    render(): JSX.Element;
}
