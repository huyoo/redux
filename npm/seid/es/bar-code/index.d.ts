import React from 'react';
export interface BarCodeProps {
    /** 生成条形码的字符串 */
    encodeText: string;
    /** 覆盖显示的文本 */
    text: string;
    /** 条形码类型 */
    format: string;
    /** 设置文本的垂直位置 */
    textPosition: string;
    /** 设置文本的水平对齐方式 */
    textAlign: string;
    /** 设置文本字体的大小 */
    fontSize: number;
    /** 条形码背景 */
    background: string;
    /** 是否在条形码下面显示文本 */
    displayValue: boolean;
    /** 条形码高度 */
    height: number;
    /** 容器元素的样式类 */
    wrapperClassName: string;
    /** 容器元素的内联样式 */
    style: object;
}
declare class BarCode extends React.Component<BarCodeProps> {
    static defaultProps: {
        encodeText: string;
        format: string;
        textAlign: string;
        textPosition: string;
        background: string;
        height: number;
        displayValue: boolean;
        fontSize: number;
    };
    /** 条形码容器元素的引用 */
    barRef: any;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    /** 根据参数使用JsBarcode生成对应的条形码 */
    private createBarcode;
}
export default BarCode;
