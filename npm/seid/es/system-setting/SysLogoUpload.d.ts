import React from 'react';
import { RcFile } from 'antd/es/upload';
export interface ISysLogoUploadProps {
    value?: string | null;
    isSyslogin: boolean;
    altValue?: any;
    onChange?: (value: string) => void;
}
declare interface ISysLogoUploadState {
    value?: string | null;
}
declare class SysLogoUpload extends React.Component<ISysLogoUploadProps, ISysLogoUploadState> {
    static getDerivedStateFromProps(nextProps: ISysLogoUploadProps, prevState: ISysLogoUploadState): ISysLogoUploadState | null;
    constructor(props: ISysLogoUploadProps);
    shouldComponentUpdate(nextState: Readonly<ISysLogoUploadState>): boolean;
    beforeUpload: (file: RcFile) => boolean;
    getBase64: (img: RcFile, callback: (value: string) => void) => void;
    handleDealResult: (imageUrl: string) => void;
    triggerChange: (changedValue: string) => void;
    render(): JSX.Element;
}
export default SysLogoUpload;
