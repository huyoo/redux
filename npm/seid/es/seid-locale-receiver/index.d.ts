import * as React from 'react';
import * as PropTypes from 'prop-types';
export interface LocaleReceiverProps {
    componentName?: string;
    defaultLocale?: object | Function;
    children: (locale: object, localeCode?: string, fullLocale?: object) => React.ReactNode;
}
interface LocaleInterface {
    [key: string]: any;
}
export interface LocaleReceiverContext {
    antLocale?: LocaleInterface;
}
export default class SeidLocaleReceiver extends React.Component<LocaleReceiverProps> {
    static defaultProps: {
        componentName: string;
    };
    static contextTypes: {
        antLocale: PropTypes.Requireable<object>;
    };
    context: LocaleReceiverContext;
    getLocale(): any;
    getLocaleCode(): any;
    render(): React.ReactNode;
}
export {};
