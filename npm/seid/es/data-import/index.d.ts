import { Component, Key } from 'react';
import { UploadChangeParam, UploadProps } from 'antd/es/upload';
import { UploadFile } from 'antd/es/upload/interface';
import { ColumnProps } from 'antd/es/table';
import { LocaleItem } from '../locale';
export interface ITemplateFile {
    download?: string | Function;
    fileName?: string;
    key?: Key;
}
export interface IValidateData {
    status: string;
    statusCode: string;
    validate: boolean;
    message?: string;
    [key: string]: any;
}
export interface IDataImportProps extends UploadProps {
    templateFileList: ITemplateFile[];
    columns: ColumnProps<any>[];
    validateFunc?: (rows: any[]) => IValidateData[];
    importFunc?: (rows: any[]) => void;
}
declare interface IDataImportState {
    uploadVisible: boolean;
    fileList?: UploadFile[];
    currentTemplate?: ITemplateFile;
    remote: boolean;
    tableData: any[];
    dataShowVisible?: boolean;
    validated?: boolean;
    selectedTemplate?: string;
}
declare class DataImport extends Component<IDataImportProps, IDataImportState> {
    static defaultProps: {
        templateFileList: never[];
        columns: never[];
    };
    static getDerivedStateFromProps(nextProps: IDataImportProps): {
        fileList: UploadFile<any>[];
    } | null;
    locale: LocaleItem;
    constructor(props: IDataImportProps);
    getColumns: (locale: LocaleItem) => ColumnProps<any>[];
    handleChangeUploadVisible: () => void;
    handleChangeDataVisible: () => void;
    handleChange: (fileObj: UploadChangeParam<UploadFile<any>>) => void;
    analyzeXlsFile: (originFileObj?: File | Blob | undefined) => void;
    downloadTemplate: (value?: string | undefined) => void;
    beforeUpload: (file: UploadFile<any>) => boolean;
    freakCustomRequest: ({ file, onSuccess, onProgress }: any) => void;
    validateData: () => void;
    importData: () => void;
    renderComponent: (locale: LocaleItem) => JSX.Element;
    render(): JSX.Element;
}
export default DataImport;
