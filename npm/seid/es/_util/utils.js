function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

import isNaN from 'lodash/isNaN';
import isUndefined from 'lodash/isUndefined';
import get from 'lodash/get';
export function rounding(src) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (isUndefined(src) || src === null) return;
  var num = parseFloat(src.toString());
  if (isNaN(num)) return;
  var result = Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision);
  var s = result.toString();
  var rs = s.indexOf('.');

  if (rs < 0) {
    rs = s.length;
    s += '.';
  }

  while (s.length <= rs + precision) {
    s += '0';
  }

  return s;
}
export function isEmpty(value) {
  if (typeof value === 'undefined' || value === null || value === '') return true;
  return Object.keys(value).length < 1;
}
export function isNotEmpty(value) {
  return !isEmpty(value);
}
export function getRowIdentity(row, rowKey) {
  if (typeof rowKey === 'string') {
    return get(row, rowKey);
  }

  if (typeof rowKey === 'function') {
    return rowKey(row);
  }
}
export function loadScript(src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
export function setStringFormat(str) {
  var replaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return !!str && str.replace(/\{(\d+)\}/g, function (t, r) {
    return replaces[r] ? replaces[r] : t;
  });
}
export var convertSearchFilter = function convertSearchFilter(params) {
  var _a = params || {},
      _a$quickSearchPropert = _a.quickSearchProperties,
      quickSearchProperties = _a$quickSearchPropert === void 0 ? ['code', 'name'] : _a$quickSearchPropert,
      _a$pageInfo = _a.pageInfo,
      pageInfo = _a$pageInfo === void 0 ? {
    page: 1,
    rows: 15
  } : _a$pageInfo,
      search = __rest(_a, ["quickSearchProperties", "pageInfo"]);

  var keys = Object.keys(search);
  var quickSearchValue = keys.includes('quickValue') ? search.quickValue : '';
  var filtersKeys = keys.filter(function (item) {
    return item.includes('Q_');
  });
  var filters = filtersKeys.map(function (item) {
    var itemArr = item.split('_'); // Q_EQ_id_String

    return {
      operator: itemArr.length >= 2 ? itemArr[1] : 'EQ',
      fieldName: itemArr.length >= 3 ? itemArr[2] : '',
      fieldType: itemArr.length >= 4 ? itemArr[3] : 'String',
      value: search[item]
    };
  });
  var sortOrdersKeys = keys.filter(function (item) {
    return item.includes('S_');
  });
  var sortOrders = sortOrdersKeys.map(function (item) {
    var itemArr = item.split('_'); // S_id

    return {
      property: itemArr.length >= 2 ? itemArr[1] : '',
      direction: search[item]
    };
  });
  var otherParams = {};
  keys.filter(function (key) {
    // const bool = !key.includes('Q_') && !key.includes('S_') && !key.includes('quickValue');
    otherParams[key] = search[key];
    return true;
  });
  return _extends({
    quickSearchProperties: quickSearchProperties,
    quickSearchValue: quickSearchValue,
    filters: filters,
    sortOrders: sortOrders,
    pageInfo: pageInfo
  }, otherParams);
};
/**
 * [getLocale 获取多语言值]
 * @param  {[object]} locales  [多语言map]
 * @param  {[string]} key  [多语言键值]
 * @param  {[string]} desc [描述]
 * @param  {[array]} formatParams [格式化参数]
 * @return {[string]}      [返回key对应的值]
 */

export function getLocale(locales, _ref, formatParams) {
  var key = _ref.key,
      desc = _ref.desc;
  return setStringFormat(locales[key], formatParams) || desc;
}
/*
 * 解析url 判断当前文件是否为图片
 * @param {[string]} url [文件地址]
 */

export function isPhoto(url) {
  url = url || '';
  return url.toLowerCase().includes('png') || url.toLowerCase().includes('jpg') || url.toLowerCase().includes('gif') || url.toLowerCase().includes('jpeg');
}
export function getString(value) {
  if (value) {
    if (value.toString) {
      return value.toString();
    }

    return "".concat(value);
  }

  return value;
}
export function compare(name) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
  var minor = arguments.length > 2 ? arguments[2] : undefined;
  return function (o, p) {
    var a;
    var b;

    if (o && p && _typeof(o) === 'object' && _typeof(p) === 'object') {
      a = o[name];
      b = p[name];

      if (a === b) {
        return typeof minor === 'function' ? minor(o, p) : 0;
      }

      if (_typeof(a) === _typeof(b)) {
        if (direction === 'asc') {
          return a < b ? -1 : 1;
        }

        return a < b ? 1 : -1;
      }

      if (direction === 'asc') {
        return _typeof(a) < _typeof(b) ? -1 : 1;
      }

      return _typeof(a) < _typeof(b) ? 1 : -1;
    }

    throw new Error('error');
  };
}
//# sourceMappingURL=utils.js.map
