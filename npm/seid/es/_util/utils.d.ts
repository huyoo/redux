export declare function rounding(src: string | number | null, precision?: number): string | undefined;
export declare function isEmpty(value?: any): boolean;
export declare function isNotEmpty(value?: any): boolean;
export declare function getRowIdentity(row: Object, rowKey: any): any;
export declare function loadScript(src: string): Promise<any>;
export declare function setStringFormat(str: string, replaces?: string[]): string | false;
export declare const convertSearchFilter: (params: {
    [key: string]: any;
    quickSearchProperties: string[];
    pageInfo: {
        page: number;
        rows: number;
    };
    quickValue?: string | undefined;
}) => {
    quickSearchProperties: string[];
    quickSearchValue: string | undefined;
    filters: {
        operator: string;
        fieldName: string;
        fieldType: string;
        value: any;
    }[];
    sortOrders: {
        property: string;
        direction: any;
    }[];
    pageInfo: {
        page: number;
        rows: number;
    };
};
/**
 * [getLocale 获取多语言值]
 * @param  {[object]} locales  [多语言map]
 * @param  {[string]} key  [多语言键值]
 * @param  {[string]} desc [描述]
 * @param  {[array]} formatParams [格式化参数]
 * @return {[string]}      [返回key对应的值]
 */
export declare function getLocale(locales: any, { key, desc }: any, formatParams: any): any;
export declare function isPhoto(url: string): boolean;
export declare function getString(value: any): string | undefined;
export declare function compare(name: string, direction?: string, minor?: (a: any, b: any) => number): (a: any, b: any) => number;
