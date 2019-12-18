import React from 'react';
interface ChartReadyFunc {
    (echartInstance: object): any;
}
interface EventCallBackFunc {
    (echartOpts: object, echartInstance: object): void;
}
declare type Func = (...args: any[]) => any;
interface OnEvent {
    /** 鼠标点击事件 */
    click: EventCallBackFunc;
    /** 鼠标移动事件 */
    mousemove: EventCallBackFunc;
    /** 切换图例选中状态后的事件 */
    legendselectchanged: EventCallBackFunc;
    /** 其他的事件参考echarts */
    [key: string]: Func;
}
export interface ExtEchartProps {
    /** 图表的配置，同echart的配置方式相同 */
    option: object;
    /** 是否不跟之前设置的 option 进行合并，默认为 false，即合并 */
    notMerge: boolean;
    /** 在设置完 option 后是否不立即更新图表，默认为 false，即立即更新 */
    lazyUpdate: boolean;
    /** 图表的高度 */
    height: number | string;
    /** 包含echarts图表的div的样式 */
    style: React.CSSProperties;
    /** 自定义图标主题 */
    theme: object;
    /** 包含echarts图表的div的样式 */
    className: string;
    /** 当图表准备好时，将图表作为参数传给回调函数 */
    onChartReady: ChartReadyFunc;
    /** 为图表绑定事件 */
    onEvents: OnEvent;
}
declare const ExtEcharts: ({ style, notMerge, lazyUpdate, theme, height, ...rest }: ExtEchartProps) => JSX.Element;
export default ExtEcharts;
