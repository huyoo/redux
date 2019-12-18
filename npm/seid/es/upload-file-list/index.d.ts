import React from 'react';
import { UploadFile, UploadChangeParam } from 'antd/es/upload/interface';
export interface IUploadFileListProps {
    del: boolean;
    preview: boolean;
    download: boolean;
    urlKey: string;
    thumbKey: string;
    fileTypes: string[];
    fileNum: number;
    fileSize: number;
    fileType: string;
    disable: boolean;
    btnText: string;
    beforeUpload?: (file: UploadFile) => boolean;
    beforeDel?: (file: UploadFile) => boolean;
    fileList?: UploadFile[];
    onChange?: (fileList: UploadFile[]) => void;
    downloadDocumentAPI: string;
    EDM_URL: string;
    uploadDocumentsAPI: string;
    entityId?: string;
    url?: string;
}
declare interface IUploadFileListState {
    fileList: UploadFile[];
}
declare class UploadFileList extends React.Component<IUploadFileListProps, IUploadFileListState> {
    static defaultProps: {
        del: boolean;
        preview: boolean;
        download: boolean;
        urlKey: string;
        thumbKey: string;
        fileTypes: never[];
        fileNum: number;
        fileSize: number;
        fileType: number;
        disable: boolean;
        btnText: string;
        downloadDocumentAPI: string;
        EDM_URL: string;
        uploadDocumentsAPI: string;
    };
    constructor(props: IUploadFileListProps);
    componentWillReceiveProps(nextProps: IUploadFileListProps): void;
    componentWillUnmount(): void;
    formatFiles: (fileList: any[] | UploadFile<any>[] | undefined) => UploadFile<any>[];
    showPreview: (visible: boolean, file: any) => JSX.Element | null;
    showDownload: (visible: boolean, file: any) => JSX.Element | null;
    handleRemove: (file: UploadFile<any>) => void;
    showDel: (visible: boolean, item: UploadFile<any>) => JSX.Element | null;
    getIcon: (file: any) => JSX.Element;
    handlePreview: (file: UploadFile<any>, status: boolean) => boolean;
    fileItem: (file: UploadFile<any>) => JSX.Element;
    uploadCard: (fileList: UploadFile<any>[]) => JSX.Element[];
    handleBeforeFile: (file: UploadFile<any>) => boolean;
    handleChange: (info: UploadChangeParam<UploadFile<any>>) => void;
    handleUpload: (option: any) => void;
    render(): JSX.Element;
}
export default UploadFileList;
