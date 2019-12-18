import PropTypes from 'prop-types';
import { Component } from 'react';
import { LocaleItem } from '../locale';
/**
 * @return {boolean}
 */
export declare function T(): boolean;
export default class FileUpload extends Component<any, any> {
    static displayName: string;
    static propTypes: {
        /** 附件列表显示方式 */
        viewType: PropTypes.Requireable<string>;
        /** 设置上传的请求头部，IE10 以上有效 */
        headers: PropTypes.Requireable<object>;
        /** 上传接口地址 */
        action: PropTypes.Validator<string>;
        /** 预览接口地址 */
        previewUrl: PropTypes.Validator<string>;
        /** 下载接口地址 */
        downloadUrl: PropTypes.Validator<string>;
        /** 批量下载接口地址 */
        batchDownloadUrl: PropTypes.Validator<string>;
        /** 是否只读 */
        disabled: PropTypes.Requireable<boolean>;
        /** 多文件上传 */
        multiple: PropTypes.Requireable<boolean>;
        /** 支持上传文件夹 */
        directory: PropTypes.Requireable<boolean>;
        /** 默认已经上传的文件列表 */
        defaultFileList: PropTypes.Requireable<any[]>;
        /** 发到后台的文件参数名 */
        name: PropTypes.Requireable<string>;
        /** 上传文件改变时的状态 上传中、完成、失败都会调用这个函数。 参照antd */
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        /** 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。参照antd */
        onRemove: PropTypes.Requireable<(...args: any[]) => any>;
        /** 上传相关接口域名 */
        domain: PropTypes.Requireable<string>;
        /** 上下文地址 */
        contextUrl: PropTypes.Requireable<string>;
        /** 批量下载文件名 */
        batchDownloadFileName: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        viewType: string;
        headers: null;
        disabled: boolean;
        multiple: boolean;
        directory: boolean;
        defaultFileList: never[];
        name: string;
        onChange: null;
        onRemove: typeof T;
        domain: string;
        contextUrl: string;
        batchDownloadFileName: string;
    };
    locale: LocaleItem;
    upload: any;
    constructor(props: any);
    initDefaultPhoto: (fileList?: any[]) => {
        original: string;
        id: any;
        name: any;
    }[];
    handlerViewType: (vt: any, e: any) => void;
    handlerPreviewCancel: () => void;
    handlerPreview: (file: any) => void;
    handlerDownload: () => void;
    chooseFileDownload: () => void;
    batchDownloadClose: () => void;
    handleChooseImgCheck: (id: any) => void;
    checkAll: (e: any) => void;
    handlerBatchDownload: () => void;
    handleChange: (fileObj: any) => void;
    renderCmp: (contextLocale: any) => JSX.Element;
    render(): JSX.Element;
}
