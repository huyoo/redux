import React from 'react';
import { WrappedFormUtils } from 'antd/es/form/Form';
export interface ISearchFormProps {
    wrappedComponentRef?: any;
    children?: React.ReactNode;
    form: WrappedFormUtils<any>;
    handleSearch: (values: any | null) => void;
    searchInitValue: any;
}
declare class SearchForm extends React.Component<ISearchFormProps, any> {
    handleSubmit: (e: React.FormEvent<Element>) => void;
    handleFormReset: () => void;
    render(): JSX.Element;
}
declare const _default: import("antd/es/form/interface").ConnectedComponentClass<typeof SearchForm, Pick<ISearchFormProps, "children" | "wrappedComponentRef" | "handleSearch" | "searchInitValue">>;
export default _default;
