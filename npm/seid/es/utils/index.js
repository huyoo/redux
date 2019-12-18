function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import { isFinite, isNaN, isPlainObject } from 'lodash';
import pathToRegexp from 'path-to-regexp';
import * as Scroll from 'react-scroll';
import uuid from 'uuid/v4';
import { isNotEmpty } from '../_util/utils';
import request from './request';
import constants from './constants';
import storage from './storage';
import ThemeUtils from './themeUtils';
import dvaModel from './model';
var scroller = Scroll.scroller;
export { default as ThemeUtils } from './themeUtils';
export { default as storage } from './storage';
export { default as constants } from './constants';
export { default as request } from './request';

var findRootParentIds = function findRootParentIds(data, leveParam) {
  var rootParentIds = [];
  var minLevel = 0;
  var isFirst = true;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      var levelData = parseInt(item[leveParam], 10);

      if (isNaN(levelData)) {// pass
        // continue;
      } else if (isFirst) {
        minLevel = levelData;
        isFirst = false;
      } else if (minLevel > levelData) {
        minLevel = levelData;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (isNotEmpty(minLevel)) {
    var dataByMinLevel = data.filter(function (item) {
      return item[leveParam] && parseInt(item[leveParam], 10) === minLevel;
    });
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = dataByMinLevel[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var dataItem = _step2.value;
        var parentId = dataItem.parentId;

        if (parentId && !rootParentIds.includes(parentId)) {
          rootParentIds.push(parentId);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return rootParentIds;
};
/**
 * 通用将平级JSON数组转嵌套
 * @param {*} data
 * @param {*} parentId
 * @param {*} subParam
 * @param {*} dataId
 */


export var setCommonJsonArrayNest = function setCommonJsonArrayNest(data) {
  var parentId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
  var subParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'subMenu';
  var dataId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'menuId';
  var result = [];
  var temp;

  if (data) {
    data.forEach(function (json) {
      if (json.parentId === parentId) {
        temp = setCommonJsonArrayNest(data, json[dataId], subParam, dataId);

        if (isNotEmpty(temp)) {
          json[subParam] = temp;
        }

        result.push(json);
      }
    });
  }

  return result;
};
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

export var getTabPaneData = function getTabPaneData(_ref) {
  var key = _ref.key,
      title = _ref.title,
      content = _ref.content,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? '' : _ref$url,
      _ref$isWebDefault = _ref.isWebDefault,
      isWebDefault = _ref$isWebDefault === void 0 ? false : _ref$isWebDefault,
      _ref$closable = _ref.closable,
      closable = _ref$closable === void 0 ? false : _ref$closable,
      _ref$isMenu = _ref.isMenu,
      isMenu = _ref$isMenu === void 0 ? true : _ref$isMenu,
      _ref$refKey = _ref.refKey,
      refKey = _ref$refKey === void 0 ? '' : _ref$refKey,
      _ref$isExternal = _ref.isExternal,
      isExternal = _ref$isExternal === void 0 ? false : _ref$isExternal;
  return {
    key: key,
    title: title,
    content: content,
    url: url,
    isWebDefault: isWebDefault,
    closable: closable,
    isMenu: isMenu,
    refKey: refKey,
    isExternal: isExternal
  };
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
    } catch (e) {// empty
    }
  }

  return obj;
};
export var convertListToTreeJson = function convertListToTreeJson(data) {
  var subParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'subMenu';
  var dataId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'menuId';
  var leveParam = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'menuLevel';
  var result = [];

  if (data) {
    var rootParentIds = findRootParentIds(data, leveParam);

    if (rootParentIds.length > 0) {
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = rootParentIds[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var rootParentId = _step3.value;
          var tempResultArray = setCommonJsonArrayNest(data, rootParentId, subParam, dataId);
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = tempResultArray[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var tempResult = _step4.value;
              result.push(tempResult);
            }
          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                _iterator4["return"]();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }

  return result;
};
export function downloadFileByALink(url, saveName) {
  var aLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效

  var event;

  if (window.MouseEvent) {
    event = new MouseEvent('click');
  } else {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }

  aLink.dispatchEvent(event);
}
export function objectAssignHave(o, c) {
  if (o && c && _typeof(c) === 'object') {
    for (var p in o) {
      if (c[p] !== undefined && c[p] !== null) o[p] = c[p];
    }
  }

  return o;
}
export function objectAssignAppend(o, c) {
  if (o && c && _typeof(c) === 'object') {
    for (var p in c) {
      if (!o[p]) {
        o[p] = c[p];
      }
    }
  }

  return o;
}
export function formatMsg(message, values) {
  function isValidKey(key, obj) {
    if (obj[key]) {
      return obj[key];
    }

    return '';
  }

  return message.replace(/\{(\w+)\}/g, function (_k, v) {
    return isValidKey(v, values);
  });
}
/**
 * flatTreeParams: 将树型结构数据转化成扁平化的数组结构
 */

export function getFlatTree(arr) {
  var treeNodeKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';
  var result = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (arr && arr instanceof Array) {
    arr.forEach(function (item) {
      if (item[treeNodeKey]) {
        result.push(_extends({}, item));
        getFlatTree(item[treeNodeKey], treeNodeKey, result);
      } else {
        result.push(_extends({}, item));
      }
    });
  }

  return result;
}
export function getUUID() {
  return uuid();
}
export function pathMatchRegexp(regexp, pathname) {
  var regExp = pathToRegexp(regexp);
  return regExp.exec(pathname);
}
export function jsonToParams(obj) {
  try {
    if (isPlainObject(obj)) {
      var tempArr = [];
      Object.keys(obj).forEach(function (k) {
        var key = encodeURIComponent(k);
        var value = encodeURIComponent(obj[k]);
        tempArr.push("".concat(key, "=").concat(value));
      });
      return tempArr.join('&');
    }

    return '';
  } catch (err) {
    return '';
  }
}
export function chineseAmount(amount) {
  var hasPrefix = false; // eslint-disable-next-line no-nested-ternary

  var money = isFinite(amount) ? amount : isNaN(Number(amount)) ? 0 : Number(amount);

  if (Number(money) < 0) {
    hasPrefix = true;
    money = -1 * Number(money);
  }

  var upperCaseMoney = String(Math.round(Number(money) * 100));
  var upperValue = '';
  var minus = '负';
  var String1 = '零壹贰叁肆伍陆柒捌玖';
  var String2 = '万仟佰拾亿仟佰拾万仟佰拾元角分';
  var len = upperCaseMoney.length;
  var Ch1;
  var Ch2;
  var nZero = 0;
  var String3;

  if (len > 15) {
    return '超出计算范围';
  }

  if (Number(upperCaseMoney) === 0) {
    upperValue = '零元整';
    return upperValue;
  }

  String2 = String2.substr(String2.length - len, len);

  for (var i = 0; i < len; i++) {
    String3 = parseInt(upperCaseMoney.substr(i, 1), 10);

    if (i !== len - 3 && i !== len - 7 && i !== len - 11 && i !== len - 15) {
      if (String3 === 0) {
        Ch1 = '';
        Ch2 = '';
        nZero += 1;
      } else if (String3 !== 0 && nZero !== 0) {
        Ch1 = String1.substr(String3, 1);
        Ch2 = String2.substr(i, 1);
        nZero = 0;
      } else {
        Ch1 = String1.substr(String3, 1);
        Ch2 = String2.substr(i, 1);
        nZero = 0;
      }
    } else {
      if (String3 !== 0 && nZero !== 0) {
        Ch1 = "\u96F6".concat(String1.substr(String3, 1));
        Ch2 = String2.substr(i, 1);
        nZero = 0;
      } else if (String3 !== 0 && nZero === 0) {
        Ch1 = String1.substr(String3, 1);
        Ch2 = String2.substr(i, 1);
        nZero = 0;
      } else if (String3 === 0 && nZero >= 3) {
        Ch1 = '';
        Ch2 = '';
        nZero += 1;
      } else {
        Ch1 = '';
        Ch2 = String2.substr(i, 1);
        nZero += 1;
      }

      if (i === len - 11 || i === len - 3) {
        Ch2 = String2.substr(i, 1);
      }
    }

    upperValue = upperValue + Ch1 + Ch2;
  }

  if (String3 === 0) {
    upperValue += '整';
  }

  if (hasPrefix) {
    upperValue = minus + upperValue;
  }

  return upperValue;
}

function scrollToElement(_ref2) {
  var _ref2$targetId = _ref2.targetId,
      targetId = _ref2$targetId === void 0 ? '' : _ref2$targetId,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? {} : _ref2$options;

  if (targetId) {
    var scrollOptions = {
      smooth: true,
      container: document.querySelector('div.order-scroll-bar')
    };

    _extends(scrollOptions, options);

    scroller.scrollTo(targetId, scrollOptions);
  }
}

export var authAction = function authAction(btn) {
  var fmsAuth = storage.sessionStorage.get(constants.CONST_GLOBAL.AUTH) || [];
  var policy = storage.sessionStorage.get(constants.CONST_GLOBAL.POLICY);

  if (policy === constants.AUTH_POLICY.ADMIN || policy === constants.AUTH_POLICY.TENANT_ADMIN) {
    return btn;
  }

  if (fmsAuth.indexOf(btn.key) > -1 || btn.ignore || btn.props && (btn.props.ignore === 'true' || btn.props.ignore === true)) {
    return btn;
  }

  return '';
};
export var setCursorPosition = function setCursorPosition(ctrl, pos) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};
export default {
  getTabPaneData: getTabPaneData,
  parseThemes: parseThemes,
  convertListToTreeJson: convertListToTreeJson,
  downloadFileByALink: downloadFileByALink,
  objectAssignAppend: objectAssignAppend,
  objectAssignHave: objectAssignHave,
  formatMsg: formatMsg,
  getFlatTree: getFlatTree,
  chineseAmount: chineseAmount,
  getUUID: getUUID,
  pathMatchRegexp: pathMatchRegexp,
  scrollToElement: scrollToElement,
  jsonToParams: jsonToParams,
  request: request,
  constants: constants,
  storage: storage,
  ThemeUtils: ThemeUtils,
  dvaModel: dvaModel,
  authAction: authAction
};
//# sourceMappingURL=index.js.map
