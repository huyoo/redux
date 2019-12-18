import React, { CSSProperties } from 'react';
import { LocaleItem } from '../locale';
export interface IDetailCardProps {
    /**
     * zh: 标题
     * en: Title
     */
    title: string;
    /** 头部样式 */
    headStyle: CSSProperties;
    /** 内用区域样式 */
    bodyStyle: CSSProperties;
    /** 外层包裹区域样式 */
    style: CSSProperties;
}
export default class DetailCard extends React.Component<IDetailCardProps, any> {
    static defaultProps: {
        headStyle: null;
        bodyStyle: null;
        style: null;
    };
    renderComponent: (locale: LocaleItem) => React.ReactNode;
    render(): JSX.Element;
}
