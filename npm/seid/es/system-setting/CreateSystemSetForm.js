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

import React from 'react';
import Form from 'antd/es/form';
import Spin from 'antd/es/spin';
import Card from 'antd/es/card';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Input from 'antd/es/input';
import Checkbox from 'antd/es/checkbox';
import Button from 'antd/es/button';
import message from 'antd/es/message';
import get from 'lodash/get';
import { isNotEmpty } from '../_util/utils';
import { apiConfig, appConfig, defaultHeader } from './setting';
import SysSkinCheck from './SysSkinCheck';
import SysLogoUpload from './SysLogoUpload';
import { request } from '../utils';
var FormItem = Form.Item;
var formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 6
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 18
    }
  }
};

var CreateSystemSetForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CreateSystemSetForm, _React$Component);

  function CreateSystemSetForm(props) {
    var _this;

    _classCallCheck(this, CreateSystemSetForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateSystemSetForm).call(this, props));

    _this.init = function (editSystemSet) {
      _this.setState({
        loading: true
      });

      var form = _this.props.form;
      request({
        url: apiConfig.rui.setting.findById,
        params: {
          settingId: editSystemSet.settingId
        }
      }).then(function (res) {
        if (res.success) {
          var _res$data = res.data,
              data = _res$data === void 0 ? {} : _res$data;
          var obj = isNotEmpty(data.sysSkin) ? JSON.parse(data.sysSkin) : {};

          _extends(data, {
            loginCenter: isNotEmpty(obj['@center']) ? obj['@center'] : appConfig.loginCenter
          });

          _this.formValueInit = _extends({}, data);

          _this.setState({
            loading: false
          }, function () {
            form.setFieldsValue({
              sysName: data.sysName,
              sysSkin: data.sysSkin,
              sysVersion: data.sysVersion,
              // appBasic: data.appBasic,
              sysHome: data.sysHome,
              loginCenter: data.loginCenter,
              sysLogin: data.sysLogin,
              sysAlone: data.sysAlone,
              sysLogo: data.sysLogo,
              sysGlobal: data.sysGlobal
            });
          });
        }
      })["catch"](function () {
        _this.setState({
          loading: false
        });
      });
    };

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var form = _this.props.form;
      form.validateFields(function (err, values) {
        if (!err) {
          var data;
          var url;
          var obj = {};

          if (isNotEmpty(values.sysSkin)) {
            obj = JSON.parse(values.sysSkin);
          }

          _extends(obj, {
            '@center': values.loginCenter
          });

          values.sysSkin = JSON.stringify(obj);

          if (!_this.props.editSystemSet) {
            url = apiConfig.rui.setting.addByJson;
            data = _extends({}, values);
          } else {
            url = apiConfig.rui.setting.editByJson;
            data = _extends({
              settingId: _this.formValueInit.settingId
            }, values);
          }

          _this.setState({
            loading: true
          });

          request({
            method: 'post',
            url: url,
            data: data,
            headers: _extends({}, defaultHeader)
          }).then(function (res) {
            if (res.success) {
              message.success('保存成功');

              _this.setState({
                loading: false
              }, function () {
                _this.goBack(true);
              });
            } else {
              message.error("\u4FDD\u5B58\u5931\u8D25!".concat(res.message));

              _this.setState({
                loading: false
              });
            }
          })["catch"](function () {
            _this.setState({
              loading: false
            });
          });
        }
      });
    };

    _this.handelCancel = function () {
      _this.goBack(false);
    };

    _this.goBack = function () {
      var isRefreshParent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var _this$props = _this.props,
          removeTabPane = _this$props.removeTabPane,
          paneKey = _this$props.paneKey;

      if (removeTabPane) {
        removeTabPane(paneKey, isRefreshParent);
      }
    };

    _this.state = {
      loading: false
    };
    return _this;
  }

  _createClass(CreateSystemSetForm, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var editSystemSet = this.props.editSystemSet;

      if (editSystemSet) {
        this.init(editSystemSet);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var editSystemSet = this.props.editSystemSet;

      if (nextProps.editSystemSet && nextProps.editSystemSet.settingId !== get(editSystemSet, 'settingId')) {
        this.init(nextProps.editSystemSet);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var form = this.props.form;
      var loading = this.state.loading;
      return React.createElement(Spin, {
        spinning: loading
      }, React.createElement(Card, {
        style: {
          height: '100vh'
        },
        bordered: false
      }, React.createElement(Form, {
        onSubmit: this.handleSubmit
      }, React.createElement(Row, {
        gutter: 24
      }, React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u7CFB\u7EDF\u540D\u79F0"
      }), form.getFieldDecorator('sysName', {
        rules: [{
          required: true,
          message: '请输入系统名称'
        }, {
          max: 6,
          message: '最多输入6个字'
        }]
      })(React.createElement(Input, {
        placeholder: "\u8BF7\u8F93\u5165"
      })))), React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u4E3B\u9898\u98CE\u683C"
      }), form.getFieldDecorator('sysSkin', {
        rules: [{
          pattern: /^[^\s]*$/,
          message: '请不要输入空格'
        }]
      })(React.createElement(SysSkinCheck, null))))), React.createElement(Row, {
        gutter: 24
      }, React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u7248\u672C\u53F7"
      }), form.getFieldDecorator('sysVersion', {
        rules: [{
          required: true,
          message: '请输入版本号'
        }]
      })(React.createElement(Input, {
        placeholder: "\u8BF7\u8F93\u5165"
      })))), React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u5E94\u7528\u57FA\u5730\u5740"
      }), form.getFieldDecorator('appBasic', {
        rules: [{
          pattern: /^[^\s]*$/,
          message: '请不要输入空格'
        }]
      })(React.createElement(Input, {
        placeholder: "\u8BF7\u8F93\u5165"
      }))))), React.createElement(Row, {
        gutter: 24
      }, React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u9996\u9875\u5730\u5740"
      }), form.getFieldDecorator('sysHome', {
        rules: [// {required: true, message: '请输入首页地址'},
        {
          pattern: /^[^\s]*$/,
          message: '请不要输入空格'
        }]
      })(React.createElement(Input, {
        placeholder: "\u8BF7\u8F93\u5165"
      })))), React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u662F\u5426\u767B\u5F55\u6846\u5C45\u4E2D"
      }), form.getFieldDecorator('loginCenter', {
        valuePropName: 'checked',
        initialValue: false
      })(React.createElement(Checkbox, null))))), React.createElement(Row, {
        gutter: 24
      }, React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u767B\u5F55\u80CC\u666F"
      }), form.getFieldDecorator('sysLogin', {})(React.createElement(SysLogoUpload, {
        altValue: "\u767B\u5F55\u80CC\u666F",
        isSyslogin: true
      })))), React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u662F\u5426\u9650\u5236\u5355\u5904\u767B\u5F55"
      }), form.getFieldDecorator('sysAlone', {
        valuePropName: 'checked',
        initialValue: false
      })(React.createElement(Checkbox, null))))), React.createElement(Row, {
        gutter: 24
      }, React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "logo\u56FE\u6807"
      }), form.getFieldDecorator('sysLogo', {})(React.createElement(SysLogoUpload, {
        altValue: "logo\u56FE\u6807",
        isSyslogin: false
      })))), React.createElement(Col, {
        span: 12
      }, React.createElement(FormItem, _extends({}, formItemLayout, {
        label: "\u662F\u5426\u9ED8\u8BA4\u5168\u5C40\u8BBE\u7F6E"
      }), form.getFieldDecorator('sysGlobal', {
        valuePropName: 'checked',
        initialValue: false
      })(React.createElement(Checkbox, null))))), React.createElement(Row, {
        gutter: 24
      }, React.createElement(Col, {
        span: 24,
        className: "operationArea"
      }, React.createElement(Button, {
        onClick: this.handelCancel
      }, "\u53D6\u6D88"), React.createElement(Button, {
        type: "primary",
        htmlType: "submit",
        loading: loading
      }, "\u4FDD\u5B58"))))));
    }
  }]);

  return CreateSystemSetForm;
}(React.Component);

var create = Form.create;
export default create()(CreateSystemSetForm);
//# sourceMappingURL=CreateSystemSetForm.js.map
