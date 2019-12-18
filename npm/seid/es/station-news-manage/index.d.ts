import React from 'react';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { ColumnProps } from 'antd/es/table';
import { ModalProps } from 'antd/es/modal';
import { Method } from 'axios';
import { DataElement } from './createAndEdit';
export interface IStationNewsListProps {
    form: WrappedFormUtils<any>;
    getNewsListUrl: string;
    getNewsListRequestMethod?: Method;
    setNewsStatusUrl: string;
    getNewsListParams?: NewsListParams;
    columns?: ColumnProps<any>[];
    getNewsDetailUrl: string;
    getNewsDetailUrlRequestMethod?: Method;
    saveNewsRequestMethod?: Method;
    editNewsRequestMethod: Method;
    delNewsRequestMethod: Method;
    saveNewsUrl: string;
    editNewsUrl: string;
    delNewsUrl: string;
    detailContent?: string | React.ReactNode;
    modalProps?: ModalProps;
    orgUrl: string;
    orgRequestMethod?: Method;
    uploadDocumentsAPI?: string;
    EDM_URL?: string;
    downloadDocumentAPI?: string;
    receiverUrl?: string;
    receiverUrlRequestMethod?: Method;
    userId?: string;
    initModalData?: DataElement;
}
export interface NewsListParams {
    userId: string;
    groupId: string;
}
export declare const handleMessageStatus: (status: string | undefined) => string;
export declare const handleMessageType: (status: string | undefined) => string;
declare const _default: any;
export default _default;
