function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import axios from 'axios';
import { constants, storage } from '.';
export var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
export function isValidKey(key, obj) {
  if (obj[key]) {
    return obj[key];
  }

  return null;
}
/* 防止重复提交，利用axios的cancelToken */

var pending = []; // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识

var CancelToken = axios.CancelToken;

var removePending = function removePending(config, f) {
  // 获取请求的url
  var flagUrl = config.url; // 判断该请求是否在请求队列中

  if (pending.indexOf(flagUrl) !== -1) {
    // 如果在请求中，并存在f,f即axios提供的取消函数
    if (f) {
      f(constants.CANCEL_REQUEST_MESSAGE); // 执行取消操作
    } else {
      pending.splice(pending.indexOf(flagUrl), 1); // 把这条记录从数组中移除
    }
  } else if (f) {
    // 如果不存在在请求队列中，加入队列
    pending.push(flagUrl);
  }
};
/* 创建axios实例 */


var request = axios.create({
  timeout: 5000
});
/* request拦截器 */

request.interceptors.request.use(function (config) {
  var _config$method = config.method,
      method = _config$method === void 0 ? 'get' : _config$method,
      headers = config.headers;
  var _headers$needToken = headers.needToken,
      needToken = _headers$needToken === void 0 ? true : _headers$needToken,
      neverCancel = headers.neverCancel; // neverCancel 配置项，允许多个请求

  if (!neverCancel) {
    // 生成cancelToken
    config.cancelToken = new CancelToken(function (c) {
      removePending(config, c);
    });
  } // cache control


  if (method.toLocaleLowerCase() === 'get' && process.env.NODE_ENV === 'production') {
    var cacheControl = 'cache-control';
    var pragma = 'Pragma';
    config.headers[cacheControl] = 'no-cache';
    config.headers[pragma] = 'no-cache';
  } // tokens


  var token = storage.sessionStorage.get(constants.CONST_GLOBAL.TOKEN_KEY);

  if (token && needToken) {
    config.headers[constants.CONST_GLOBAL.TOKEN_KEY] = token;
  }

  return config;
}, function (error) {
  Promise.reject(error);
});
/* response拦截器 */

request.interceptors.response.use(function (response) {
  // 移除队列中的该请求，注意这时候没有传第二个参数f
  removePending(response.config); // 获取返回数据，并处理。按自己业务需求修改。

  var statusText = response.statusText,
      status = response.status,
      restData = response.data,
      headers = response.headers,
      config = response.config;

  if (_typeof(restData) === 'object') {
    /** 依赖后台接口响应返回作了特殊判断 */
    if ('status' in restData && restData.status && restData.status !== 200 && restData.status !== 'SUCCESS' || 'success' in restData && !restData.success) {
      return Promise.resolve({
        success: false,
        message: restData.message || restData.msg,
        statusCode: restData.status || 600,
        data: restData.data || restData || null,
        status: status,
        statusText: statusText,
        headers: headers,
        config: config
      });
    }
  }

  return Promise.resolve({
    data: restData.data || restData || null,
    success: true,
    message: statusText,
    statusCode: status,
    status: status,
    statusText: statusText,
    headers: headers,
    config: config
  });
}, function (error) {
  // 异常处理
  pending = [];
  var response = error.response,
      message = error.message;

  if (message === constants.CANCEL_REQUEST_MESSAGE) {
    return Promise.reject({
      message: message,
      success: false,
      data: null
    });
  }

  var msg;
  var statusCode;

  if (response && response instanceof Object) {
    var resData = response.data,
        statusText = response.statusText,
        status = response.status;
    statusCode = status;
    msg = resData.message || statusText;
  } else {
    statusCode = 600;
    msg = message || 'Network Error';
  }

  return Promise.reject({
    success: false,
    statusCode: statusCode,
    message: msg
  });
});
export default request;
//# sourceMappingURL=request.js.map
