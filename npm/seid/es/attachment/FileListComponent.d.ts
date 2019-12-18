import { Component, ReactNode } from 'react';
import { UploadFile } from 'antd/es/upload/interface';
export interface IFileListComponentProps {
    fileList: UploadFile[];
    mode?: 'normal' | 'simple';
    getItemDescription?: (file: UploadFile, index?: number) => ReactNode | string;
    getUploadUser?: (file: UploadFile, index?: number) => ReactNode | string;
    getUploadTime?: (file: UploadFile, index?: number) => ReactNode | string;
    deleteFile?: (file: UploadFile) => void;
    downloadFile?: (file: UploadFile) => void;
    onPreview?: (file: UploadFile) => void;
    onShare?: (file: UploadFile) => void;
    showByFileType: boolean;
    typeList?: {
        code: string;
        name: string;
    }[];
    getFileType: (file: UploadFile) => {
        code: string;
        name: string;
    };
}
declare interface IFileListComponentState {
    categoryList: {
        code: string;
        name: string;
        fileList?: [];
    }[];
    noCategoryList: UploadFile[];
}
declare class FileListComponent extends Component<IFileListComponentProps, IFileListComponentState> {
    static getDerivedStateFromProps(nextProps: IFileListComponentProps): {
        categoryList: {
            code: string;
            name: string;
            fileList?: UploadFile<any>[] | undefined;
        }[];
        noCategoryList: UploadFile<any>[];
    } | null;
    constructor(props: IFileListComponentProps);
    render(): JSX.Element;
}
export default FileListComponent;
