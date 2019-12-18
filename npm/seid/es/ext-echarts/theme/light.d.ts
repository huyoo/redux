declare const _default: {
    color: string[];
    title: {
        textStyle: {
            fontWeight: string;
            color: string;
        };
    };
    visualMap: {
        color: string[];
    };
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: string;
            };
        };
    };
    tooltip: {
        backgroundColor: string;
        axisPointer: {
            type: string;
            lineStyle: {
                color: string;
                type: string;
            };
            crossStyle: {
                color: string;
            };
            shadowStyle: {
                color: string;
            };
        };
    };
    dataZoom: {
        dataBackgroundColor: string;
        fillerColor: string;
        handleColor: string;
    };
    categoryAxis: {
        axisLine: {
            lineStyle: {
                color: string;
            };
        };
        splitLine: {
            show: boolean;
        };
    };
    valueAxis: {
        axisLine: {
            show: boolean;
        };
        splitArea: {
            show: boolean;
        };
        splitLine: {
            lineStyle: {
                color: string[];
                type: string;
            };
        };
    };
    timeline: {
        lineStyle: {
            color: string;
        };
        controlStyle: {
            normal: {
                color: string;
                borderColor: string;
            };
        };
        symbol: string;
        symbolSize: number;
    };
    line: {
        itemStyle: {
            normal: {
                borderWidth: number;
                borderColor: string;
                lineStyle: {
                    width: number;
                };
            };
            emphasis: {
                borderWidth: number;
            };
        };
        symbol: string;
        symbolSize: number;
    };
    candlestick: {
        itemStyle: {
            normal: {
                color: string;
                color0: string;
                lineStyle: {
                    width: number;
                    color: string;
                    color0: string;
                };
            };
        };
    };
    graph: {
        color: string[];
    };
    map: {
        label: {
            normal: {
                textStyle: {
                    color: string;
                };
            };
            emphasis: {
                textStyle: {
                    color: string;
                };
            };
        };
        itemStyle: {
            normal: {
                areaColor: string;
                borderColor: string;
            };
            emphasis: {
                areaColor: string;
            };
        };
    };
    gauge: {
        axisLine: {
            lineStyle: {
                color: (string | number)[][];
            };
        };
        axisTick: {
            splitNumber: number;
            length: number;
            lineStyle: {
                color: string;
            };
        };
        axisLabel: {
            textStyle: {
                color: string;
            };
        };
        splitLine: {
            length: string;
            lineStyle: {
                color: string;
            };
        };
        title: {
            offsetCenter: number[];
        };
    };
};
export default _default;
