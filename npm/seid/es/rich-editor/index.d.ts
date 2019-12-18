import * as React from 'react';
import { ControlType } from 'braft-editor';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { LocaleItem } from '../locale';
import View from './View';
export interface UploadProps {
    file: File;
    progress: (progress: number) => void;
    libraryId: string;
    success: (res: {
        url: string;
        meta?: {
            id: string;
            title: string;
            alt: string;
            loop: boolean;
            autoPlay: boolean;
            controls: boolean;
            poster: string;
        };
    }) => void;
    error: (err: {
        msg: string;
    }) => void;
}
export interface RichEditorProps {
    form?: WrappedFormUtils<any>;
    /** 富文本框的值 */
    value?: number | string;
    /** 是否只读 */
    readOnly?: boolean;
    /** 占位字符串 */
    placeholder?: string;
    /** 上传多媒体的域名 */
    host?: string;
    /** 上传多媒体的上下文地址 */
    contextUrl?: string;
    /** 多媒体文件是否上传到服务器 */
    mediaUploadServer?: boolean;
    /** 编辑器工具栏的控件列表 */
    controls: Array<ControlType>;
    /** 语种 */
    language?: string;
    /** 该属性为一个对象，用于配置编辑器媒体库相关的功能。具体参考BraftEditor */
    media?: object;
    /** 编辑器的样式名 */
    className?: string;
    /** 编辑器的内联样式 */
    style?: React.CSSProperties;
    /** 编辑器编辑区域容器的内联样式 */
    contentStyle?: React.CSSProperties;
    /** 富文本框内容变化的回调函数 */
    onChange?: (content: string) => void;
    /** 在编辑器内按下Command/Ctrl + s时触发的函数 */
    onSave?: () => void | undefined;
    /** 如果未指定onUpload，添加到媒体库的图片将会自动转换为base64的形式，而视频和音频则无法被添加到媒体库。 */
    onUpload?: (param: UploadProps) => void;
    /** 上传之前回调事件 */
    beforeUpload?: (file: File) => boolean | PromiseLike<any>;
}
export default class RichEditor extends React.Component<RichEditorProps, any> {
    static View: typeof View;
    /** 属性默认值 */
    static defaultProps: {
        readOnly: boolean;
        controls: string[];
        contextUrl: string;
        host: string;
        mediaUploadServer: boolean;
    };
    constructor(props: RichEditorProps);
    componentWillReceiveProps(nextProps: RichEditorProps): void;
    convertImageToBase64: (file: File) => Promise<unknown>;
    /** 处理上传文件和视频媒体 */
    handleUpload: (param: UploadProps) => void;
    handleChange: (editorState: any) => void;
    /** 媒体资源上传前的验证回调事件 */
    handleMediaValidate: (file: File) => boolean | PromiseLike<any>;
    /** 获取编辑器工具栏的控件列表 */
    getControls: () => ControlType[];
    renderCmp: (_: LocaleItem, localeCode: string) => JSX.Element;
    render(): JSX.Element;
}
