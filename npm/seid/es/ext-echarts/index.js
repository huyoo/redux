function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React from 'react';
import ReactEcharts from 'echarts-for-react'; // 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';

import themeLight from './theme/light';

var ExtEcharts = function ExtEcharts(_a) {
  var style = _a.style,
      _a$notMerge = _a.notMerge,
      notMerge = _a$notMerge === void 0 ? true : _a$notMerge,
      _a$lazyUpdate = _a.lazyUpdate,
      lazyUpdate = _a$lazyUpdate === void 0 ? true : _a$lazyUpdate,
      _a$theme = _a.theme,
      theme = _a$theme === void 0 ? themeLight : _a$theme,
      _a$height = _a.height,
      height = _a$height === void 0 ? '100%' : _a$height,
      rest = __rest(_a, ["style", "notMerge", "lazyUpdate", "theme", "height"]);

  return React.createElement(ReactEcharts, _extends({
    style: _extends({
      height: height
    }, style),
    notMerge: notMerge,
    lazyUpdate: lazyUpdate,
    theme: theme
  }, rest));
};

export default ExtEcharts;
//# sourceMappingURL=index.js.map
