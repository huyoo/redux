function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

import * as React from 'react';
import BraftEditor from 'braft-editor';
import LocaleReceiver from '../seid-locale-receiver';
import request from '../utils/request';
import View from './View';
import polyfill from './richEditorPolyfill';
/** 富文本多语言 */

var bLocales = {
  'zh-cn': 'zh',
  en: 'en'
};

var RichEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RichEditor, _React$Component);

  function RichEditor(props) {
    var _this;

    _classCallCheck(this, RichEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RichEditor).call(this, props));

    _this.convertImageToBase64 = function (file) {
      return new Promise(function (resolve, reject) {
        try {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onloadend = function () {
            resolve(reader.result);
          };
        } catch (e) {
          reject(e);
        }
      });
    };
    /** 处理上传文件和视频媒体 */


    _this.handleUpload = function (param) {
      var _this$props = _this.props,
          onUpload = _this$props.onUpload,
          mediaUploadServer = _this$props.mediaUploadServer,
          host = _this$props.host,
          contextUrl = _this$props.contextUrl;
      var file = param.file,
          progress = param.progress,
          success = param.success,
          error = param.error;

      if (onUpload) {
        onUpload(param);
      } else {
        if (mediaUploadServer) {
          var fd = new FormData();
          fd.append('file', file);
          request.post("".concat(host).concat(contextUrl, "/upload"), fd, {
            onUploadProgress: function onUploadProgress(progressEvent) {
              var complete = progressEvent.loaded / progressEvent.total * 100;
              progress(complete);
            },
            headers: {
              neverCancel: true
            }
          }).then(function (result) {
            var data = result.data;

            if (data && data.length) {
              success({
                url: "".concat(host).concat(contextUrl, "/download?docId=").concat(data[0].id)
              });
            }
          })["catch"](function (err) {
            error({
              msg: err.message
            });
          });
        } else {
          _this.convertImageToBase64(param.file).then(function (url) {
            param.success({
              url: url
            });
          })["catch"](function (err) {
            error({
              msg: err.message
            });
          });
        }
      }
    };

    _this.handleChange = function (editorState) {
      var onChange = _this.props.onChange;

      _this.setState({
        editorState: editorState
      });

      if (onChange) {
        onChange(editorState.toHTML());
      }
    };
    /** 媒体资源上传前的验证回调事件 */


    _this.handleMediaValidate = function (file) {
      var beforeUpload = _this.props.beforeUpload;

      if (beforeUpload) {
        return beforeUpload(file);
      }

      return true;
    };
    /** 获取编辑器工具栏的控件列表 */


    _this.getControls = function () {
      var _this$props2 = _this.props,
          readOnly = _this$props2.readOnly,
          controls = _this$props2.controls;

      if (readOnly) {
        return [];
      }

      return controls;
    };

    _this.renderCmp = function (_, localeCode) {
      var _a = _this.props,
          language = _a.language,
          media = _a.media,
          rest = __rest(_a, ["language", "media"]);

      var editorState = _this.state.editorState;
      var localeStr = language || bLocales[localeCode] || 'zh';
      return React.createElement(BraftEditor, _extends({}, rest, {
        language: localeStr,
        controls: _this.getControls(),
        value: editorState,
        media: _extends({
          // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
          pasteImage: true,
          validateFn: _this.handleMediaValidate,
          uploadFn: _this.handleUpload
        }, media),
        onChange: _this.handleChange
      }));
    };

    polyfill.dataSetPolyfill();
    _this.state = {
      editorState: BraftEditor.createEditorState(props.value)
    };
    return _this;
  }

  _createClass(RichEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = this.props.value;

      if (value !== nextProps.value) {
        this.setState({
          editorState: BraftEditor.createEditorState(nextProps.value)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        componentName: "RichEditor"
      }, this.renderCmp);
    }
  }]);

  return RichEditor;
}(React.Component);
/** 属性默认值 */


export { RichEditor as default };
RichEditor.defaultProps = {
  readOnly: false,
  controls: ['undo', 'redo', 'separator', 'font-size', 'line-height', 'letter-spacing', 'separator', 'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator', 'superscript', 'subscript', 'remove-styles', 'emoji', 'separator', 'text-indent', 'text-align', 'separator', 'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator', 'link', 'separator', 'hr', 'separator', 'media', 'separator', 'clear'],
  contextUrl: '/edm-service',
  host: '',
  mediaUploadServer: true
};
RichEditor.View = View;
//# sourceMappingURL=index.js.map
