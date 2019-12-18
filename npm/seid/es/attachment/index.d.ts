import React from 'react';
import Upload, { RcFile, UploadChangeParam, UploadProps } from 'antd/es/upload';
import { RcCustomRequestOptions, UploadFile } from 'antd/es/upload/interface';
import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { ResponseResult } from '../utils/request';
import { LocaleItem } from '../locale';
export declare type fileCategory = {
    code: string;
    value: string;
    description?: string;
};
export interface IAttachmentProps extends UploadProps {
    maxUploadNum?: number;
    uploadUrl?: string;
    entityId?: string;
    fileType?: string;
    fileCategories?: fileCategory[] | Promise<fileCategory[]>;
    categoryControl?: boolean;
    downloadable?: boolean;
    getThumbUrl?: (file: UploadFile) => string;
    downloadFile?: (files: UploadFile | UploadFile[]) => AxiosRequestConfig;
    deleteFiles?: (files: UploadFile[]) => AxiosRequestConfig;
    onShare?: (file: UploadFile) => void;
    typeList?: {
        code: string;
        name: string;
    }[];
    getFileType: (file: UploadFile) => {
        code: string;
        name: string;
    };
    showByFileType: boolean;
}
declare interface IAttachmentState {
    fileList?: UploadFile[];
    downloadVisible: boolean;
    viewType: 'normal' | 'simple';
}
declare class Attachment extends React.Component<IAttachmentProps, IAttachmentState> {
    static defaultProps: {
        showUploadList: boolean;
        showByFileType: boolean;
        getFileType: (file: UploadFile<any>) => {
            code: any;
            name: any;
        };
    };
    static getDerivedStateFromProps: (nextProps: IAttachmentProps, prevState: IAttachmentState) => {
        fileList: UploadFile<any>[] | undefined;
    } | null;
    promiseList: Array<Promise<{
        response: ResponseResult;
        option: RcCustomRequestOptions;
    }>>;
    uploadFileListLength: number;
    processedFileNumber: number;
    processArgs: RcCustomRequestOptions[];
    upload: Upload | null;
    state: IAttachmentState;
    beforeUpload: (file: RcFile, fileList: RcFile[]) => boolean | PromiseLike<void>;
    handleUpload: (option: RcCustomRequestOptions) => void;
    startUpload: () => Promise<void>;
    processRequest: (data: FormData, option: RcCustomRequestOptions) => Promise<{
        response: ResponseResult;
        option: RcCustomRequestOptions;
    }>;
    onChange: (info: UploadChangeParam<UploadFile<any>>) => void;
    handlerViewType: (viewType: "simple" | "normal") => void;
    onChangeDownloadVisible: () => void;
    deleteFile: (file: UploadFile<any>) => void;
    downloadFile: (file: UploadFile<any> & UploadFile<any>[]) => AxiosPromise<any> | undefined;
    renderComponent: (locale: LocaleItem) => JSX.Element;
    render(): JSX.Element;
}
export default Attachment;
