import React from 'react';
export interface IDetailPaneProps {
    /** 标题 */
    title: String;
    /** 外层包裹区域样式 */
    style?: Object;
    /** 标题右部区域 */
    extra: React.ReactNode;
}
declare class DetailPane extends React.Component<IDetailPaneProps, any> {
    static defaultProps: IDetailPaneProps;
    state: any;
    getBaseToolBarProps: () => {
        wrapperStyle: {
            margin: string;
            height: number;
        };
        left: JSX.Element;
        right: React.ReactNode;
    };
    render(): JSX.Element;
}
export default DetailPane;
