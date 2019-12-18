export declare type StorageType = 'localStorage' | 'sessionStorage';
export declare const mergeKey: (key: string, prefix?: string | undefined) => string;
declare const _default: {
    localStorage: {
        /** base64加密存储 */
        set(key: string, data: any): void;
        setWithPrefix(key: string, data: any, prefix?: string | undefined): void;
        /** 解密取出 */
        get(key: string): any;
        getWithPrefix(key: string, prefix?: string | undefined): any;
        /** 非加密存储 */
        setNative(key: string, data: any): void;
        setNativeWithPrefix(key: string, data: any, prefix?: string | undefined): void;
        /** 取值 */
        getNative(key: string): any;
        getNativeWithPrefix(key: string, prefix?: string | undefined): any;
        clear(key: string | string[]): void;
        clearWithPrefix(key: string | string[], prefix?: string | undefined): void;
    };
    sessionStorage: {
        /** base64加密存储 */
        set(key: string, data: any): void;
        setWithPrefix(key: string, data: any, prefix?: string | undefined): void;
        /** 解密取出 */
        get(key: string): any;
        getWithPrefix(key: string, prefix?: string | undefined): any;
        /** 非加密存储 */
        setNative(key: string, data: any): void;
        setNativeWithPrefix(key: string, data: any, prefix?: string | undefined): void;
        /** 取值 */
        getNative(key: string): any;
        getNativeWithPrefix(key: string, prefix?: string | undefined): any;
        clear(key: string | string[]): void;
        clearWithPrefix(key: string | string[], prefix?: string | undefined): void;
    };
};
export default _default;
