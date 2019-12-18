import React from 'react';
export interface IAuthWidgetProps {
    authCode?: string;
    authorities?: string[];
}
declare function AuthWidget(WrappedComponent: React.ElementType): React.ElementType;
export default AuthWidget;
