import { PureComponent, ReactNode } from 'react';
import { UploadFile } from 'antd/es/upload/interface';
import { AxiosResponse } from 'axios';
import { LocaleItem } from '../locale';
export interface IDownloadModalProps {
    locale: LocaleItem;
    fileList: UploadFile[];
    visible?: boolean;
    onClose?: () => void;
    batchDownloadFileName?: string;
    batchDownloadUrl?: string;
    downloadFiles?: (files: UploadFile[]) => Promise<any> | undefined;
}
declare interface IDownloadModalState {
    checkAll: boolean;
    batchVisible: boolean;
    downloading: boolean;
    batchDownloadList?: string[];
}
export declare const blobToFile: (res: AxiosResponse<any>, filename?: string | undefined) => void;
declare class DownloadModal extends PureComponent<IDownloadModalProps, IDownloadModalState> {
    state: IDownloadModalState;
    locale: LocaleItem;
    static getDerivedStateFromProps(nextProps: IDownloadModalProps, prevState: IDownloadModalState): {
        batchVisible: boolean | undefined;
    } | null;
    checkAll: (e: any) => void;
    batchDownloadClose: () => void;
    handlerBatchDownload: () => void;
    handleChooseImgCheck: (fileId: string) => void;
    render(): ReactNode;
}
export default DownloadModal;
