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
import Input from 'antd/es/input';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import AuthButton from '../auth-button';
var FormItem = Form.Item;

var SearchForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchForm, _React$Component);

  function SearchForm() {
    var _this;

    _classCallCheck(this, SearchForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchForm).apply(this, arguments));

    _this.handleSubmit = function (e) {
      e.preventDefault();
      var form = _this.props.form;
      form.validateFields(function (err, values) {
        if (!err) {
          for (var p in values) {
            // 遍历json对象的每个key/value对,p为key
            if (values[p] === '') {
              values[p] = null;
            }
          }

          _this.props.handleSearch(values);
        }
      });
    };

    _this.handleFormReset = function () {
      var _this$props = _this.props,
          form = _this$props.form,
          handleSearch = _this$props.handleSearch;
      form.resetFields();
      handleSearch(null);
    };

    return _this;
  }

  _createClass(SearchForm, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          getFieldDecorator = _this$props2.form.getFieldDecorator,
          searchInitValue = _this$props2.searchInitValue;
      var formItemLayout = {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      };
      return React.createElement(Form, {
        onSubmit: this.handleSubmit,
        layout: "inline",
        className: "SearchForm"
      }, React.createElement(Row, null, React.createElement(Col, {
        span: 6
      }, React.createElement(FormItem, _extends({
        label: ""
      }, formItemLayout), getFieldDecorator('keyword', {
        initialValue: searchInitValue.keyword,
        rules: [{
          pattern: /^[^\s]*$/,
          message: '请不要输入空格'
        }]
      })(React.createElement(Input, {
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u8BE2"
      })))), React.createElement(Col, {
        span: 4,
        className: "operation"
      }, React.createElement(AuthButton, {
        style: {
          marginLeft: -50
        },
        type: "primary",
        htmlType: "submit"
      }, "\u67E5\u8BE2"), React.createElement(AuthButton, {
        style: {
          marginLeft: 0
        },
        onClick: this.handleFormReset
      }, "\u91CD\u7F6E"))));
    }
  }]);

  return SearchForm;
}(React.Component);

var create = Form.create;
export default create()(SearchForm);
//# sourceMappingURL=SearchForm.js.map
