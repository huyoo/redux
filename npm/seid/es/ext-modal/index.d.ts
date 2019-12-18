import { Component } from 'react';
import { ModalProps } from 'antd/es/modal';
import DragWrapper from './DragWrapper';
export interface IExtModalProps extends ModalProps {
}
/**
 * 其他属性配置参考antd中的Modal组件
 */
export default class ExtModal extends Component<IExtModalProps, any> {
    static DragWrapper: typeof DragWrapper;
    render(): JSX.Element;
}
