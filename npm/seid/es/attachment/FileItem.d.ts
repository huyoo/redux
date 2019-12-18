import React, { PureComponent, ReactNode } from 'react';
import { UploadFile } from 'antd/es/upload/interface';
export declare function getAvatar(file: UploadFile, size: number): JSX.Element;
export interface IFileItemProps extends UploadFile {
    index?: number;
    getItemDescription?: (file: UploadFile, index?: number) => ReactNode | string;
    getUploadUser?: (file: UploadFile, index?: number) => ReactNode | string;
    getUploadTime?: (file: UploadFile, index?: number) => ReactNode | string;
    mode: 'simple' | 'normal';
    deleteFile?: (file: UploadFile) => void;
    downloadFile?: (file: UploadFile) => void;
    previewFile?: (file: UploadFile) => void;
    shareFile?: (file: UploadFile) => void;
}
declare class FileItem extends PureComponent<IFileItemProps, any> {
    static defaultProps: {
        getUploadUser: string;
        getItemDescription: string;
        getUploadTime: string;
    };
    getStatus: () => "success" | "normal" | "exception" | "active" | undefined;
    downloadFile: () => void;
    deleteFile: () => void;
    previewFile: () => void;
    shareFile: () => void;
    getProcess: () => React.ReactNode;
    render(): JSX.Element;
}
export default FileItem;
