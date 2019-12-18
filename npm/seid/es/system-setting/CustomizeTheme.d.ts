import React from 'react';
export interface ICustomizeThemeProps {
    onChange?: (value: any) => void;
    value?: string;
    onApply?: (value: any) => void;
}
declare class CustomizeTheme extends React.PureComponent<ICustomizeThemeProps, any> {
    colorMap: any;
    constructor(props: ICustomizeThemeProps);
    setThemeColor: (obj: any) => void;
    submitTheme: () => void;
    render(): JSX.Element;
}
export default CustomizeTheme;
