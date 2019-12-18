function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import message from 'antd/es/message';
import 'antd/es/message/style';
import { isNotEmpty, loadScript } from '../_util/utils';
var lessLoaded = false;
/**
 * 设置页面的主题
 * @param obj
 * @param func
 * @param set
 */

export var setThemes = function setThemes(obj, func) {
  var set = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var changeColor = function changeColor() {
    window.less.modifyVars(_extends({}, obj)).then(function () {
      if (set) {
        message.destroy(); // 过快弹出多个

        message.success('预览主题成功.');
      }

      if (func) {
        func();
      }
    });
  };

  var lessUrl = 'https://gw.alipayobjects.com/os/es/less.js/3.8.1/less.min.js';

  if (lessLoaded) {
    changeColor();
  } else {
    window.less = {
      async: true,
      javascriptEnabled: true
    };
    loadScript(lessUrl).then(function () {
      lessLoaded = true;
      changeColor();
    });
  }
};
/**
 * 解析页面的主题
 * @param str
 * @return {any}
 */

export var parseThemes = function parseThemes(str) {
  var obj = {};

  if (isNotEmpty(str)) {
    try {
      obj = JSON.parse(str.replace('@header', '@head-back_color').replace('@sider', '@sider-back_color').replace('@font', '@sider-select_color').replace('@button', '@select-color').replace('@table', '@table_header_color'));
    } catch (e) {
      console.error(e.message);
    }
  }

  return obj;
};
export default {
  setThemes: setThemes,
  parseThemes: parseThemes
};
//# sourceMappingURL=themeUtils.js.map
