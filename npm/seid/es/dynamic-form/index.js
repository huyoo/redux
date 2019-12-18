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

import * as React from 'react';
import Form from 'antd/es/form/Form';
import Button from 'antd/es/button';
import FormsItem from './FormItem';

var DynamicForms =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DynamicForms, _React$Component);

  function DynamicForms() {
    var _this;

    _classCallCheck(this, DynamicForms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DynamicForms).apply(this, arguments));

    _this._onSubmit = function (event) {
      var _this$props = _this.props,
          onSubmit = _this$props.onSubmit,
          form = _this$props.form;
      event.preventDefault();

      if (onSubmit) {
        onSubmit(form);
      }
    };

    return _this;
  }

  _createClass(DynamicForms, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          form = _this$props2.form,
          fieldsList = _this$props2.fieldsList,
          formItemLayout = _this$props2.formItemLayout,
          columns = _this$props2.columns,
          _this$props2$submitTe = _this$props2.submitText,
          submitText = _this$props2$submitTe === void 0 ? '确定' : _this$props2$submitTe;
      var getFieldDecorator = form.getFieldDecorator;
      var FormItem = Form.Item;
      return React.createElement(Form, {
        onSubmit: this._onSubmit
      }, fieldsList.map(function (item) {
        return React.createElement(FormItem, _extends({
          className: columns ? "seid-formItem-columns".concat(columns) : ''
        }, formItemLayout, {
          label: item.displayName,
          key: item.name
        }), getFieldDecorator(item.name, {
          initialValue: item.value,
          rules: item.rules,
          validateFirst: true
        })(React.createElement(FormsItem, {
          item: item,
          form: form
        })));
      }), React.createElement(FormItem, {
        className: "seid-formItem-submit"
      }, React.createElement(Button, {
        htmlType: "submit"
      }, submitText)));
    }
  }]);

  return DynamicForms;
}(React.Component);

var create = Form.create;
export default create()(DynamicForms);
//# sourceMappingURL=index.js.map
