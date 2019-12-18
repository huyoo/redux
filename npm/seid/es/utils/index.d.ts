import { Path } from 'path-to-regexp';
export { default as ThemeUtils } from './themeUtils';
export { default as storage } from './storage';
export { default as constants } from './constants';
export { default as request } from './request';
/**
 * 通用将平级JSON数组转嵌套
 * @param {*} data
 * @param {*} parentId
 * @param {*} subParam
 * @param {*} dataId
 */
export declare const setCommonJsonArrayNest: (data: any, parentId?: string, subParam?: string, dataId?: string) => any[];
/**
 * 获取Pane包含的数据
 * @param {*} key 编号，一般对应Menu的Key
 * @param {*} title 标题，一般对应Menu的名称
 * @param {*} content 内容
 * @param {*} isWebDefault 是否网站首页
 * @param {*} url 菜单链接地址
 * @param {*} closable 是否可关闭
 * @param {*} isMenu 是否菜单页面
 * @param {*} refKey 来源Key值
 * @param {*} isExternal 是否为外部http|https地址
 */
export declare const getTabPaneData: ({ key, title, content, url, isWebDefault, closable, isMenu, refKey, isExternal, }: any) => any;
/**
 * 解析页面的主题
 * @param str
 * @return {any}
 */
export declare const parseThemes: (str: string) => any;
export declare const convertListToTreeJson: (data: any, subParam?: string, dataId?: string, leveParam?: string) => any[];
export declare function downloadFileByALink(url: string, saveName?: string): void;
export declare function objectAssignHave(o: any, c: any): any;
export declare function objectAssignAppend(o: any, c: any): any;
export declare function formatMsg(message: string, values: object): string;
/**
 * flatTreeParams: 将树型结构数据转化成扁平化的数组结构
 */
export declare function getFlatTree(arr: Array<any>, treeNodeKey?: string, result?: Array<any>): Array<any>;
export declare function getUUID(): any;
export declare function pathMatchRegexp(regexp: Path, pathname: string): RegExpExecArray | null;
export declare function jsonToParams(obj: object): string;
export declare function chineseAmount(amount: string | number): string;
declare function scrollToElement({ targetId, options }: {
    targetId?: string | undefined;
    options?: {} | undefined;
}): void;
export declare const authAction: (btn: any) => any;
export declare const setCursorPosition: (ctrl: any, pos: number) => void;
declare const _default: {
    getTabPaneData: ({ key, title, content, url, isWebDefault, closable, isMenu, refKey, isExternal, }: any) => any;
    parseThemes: (str: string) => any;
    convertListToTreeJson: (data: any, subParam?: string, dataId?: string, leveParam?: string) => any[];
    downloadFileByALink: typeof downloadFileByALink;
    objectAssignAppend: typeof objectAssignAppend;
    objectAssignHave: typeof objectAssignHave;
    formatMsg: typeof formatMsg;
    getFlatTree: typeof getFlatTree;
    chineseAmount: typeof chineseAmount;
    getUUID: typeof getUUID;
    pathMatchRegexp: typeof pathMatchRegexp;
    scrollToElement: typeof scrollToElement;
    jsonToParams: typeof jsonToParams;
    request: import("axios").AxiosInstance;
    constants: {
        CANCEL_REQUEST_MESSAGE: string;
        CONST_GLOBAL: {
            SESSION: string;
            TOKEN_KEY: string;
            AUTH: string;
            POLICY: string;
            CURRENT_LOCALE: string;
            CURRENT_USER: string;
            FEATURE_KEY: string;
        };
        AUTH_POLICY: {
            USER: string;
            TENANT_ADMIN: string;
            ADMIN: string;
        };
    };
    storage: {
        localStorage: {
            set(key: string, data: any): void;
            setWithPrefix(key: string, data: any, prefix?: string | undefined): void;
            get(key: string): any;
            getWithPrefix(key: string, prefix?: string | undefined): any;
            setNative(key: string, data: any): void;
            setNativeWithPrefix(key: string, data: any, prefix?: string | undefined): void;
            getNative(key: string): any;
            getNativeWithPrefix(key: string, prefix?: string | undefined): any;
            clear(key: string | string[]): void;
            clearWithPrefix(key: string | string[], prefix?: string | undefined): void;
        };
        sessionStorage: {
            set(key: string, data: any): void;
            setWithPrefix(key: string, data: any, prefix?: string | undefined): void;
            get(key: string): any;
            getWithPrefix(key: string, prefix?: string | undefined): any;
            setNative(key: string, data: any): void;
            setNativeWithPrefix(key: string, data: any, prefix?: string | undefined): void;
            getNative(key: string): any;
            getNativeWithPrefix(key: string, prefix?: string | undefined): any;
            clear(key: string | string[]): void;
            clearWithPrefix(key: string | string[], prefix?: string | undefined): void;
        };
    };
    ThemeUtils: {
        setThemes: (obj: any, func?: Function | undefined, set?: boolean) => void;
        parseThemes: (str: string) => any;
    };
    dvaModel: {
        modelExtend: any;
        model: {
            reducers: {
                updateState(state: any, { payload }: any): any;
            };
        };
        pageModel: any;
    };
    authAction: (btn: any) => any;
};
export default _default;
