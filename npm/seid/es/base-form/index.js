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
import PropTypes from 'prop-types';
import Input from 'antd/es/input';
import Form from 'antd/es/form/Form';
import Button from 'antd/es/button';
import DatePicker from 'antd/es/date-picker';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import InputNumber from 'antd/es/input-number';
import Checkbox from 'antd/es/checkbox';
import Radio from 'antd/es/radio';
import { isPlainObject, isEqual, isNil } from 'lodash';
import _CronInput from '../cron-input';
import _ScopeDatePicker from '../scope-date-picker';
var FormItem = Form.Item;
var _TextArea = Input.TextArea;
var _RangePicker = DatePicker.RangePicker;
var _RadioGroup = Radio.Group;

var BaseForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BaseForm, _React$Component);

  function BaseForm() {
    var _this;

    _classCallCheck(this, BaseForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BaseForm).apply(this, arguments));

    _this.handleSubmit = function () {
      var form = _this.props.form;
      var submitObj = null;
      return new Promise(function (resolve) {
        form.validateFields(function (err, values) {
          if (!err) {
            var onSubmit = _this.props.onSubmit;
            submitObj = _extends({}, values);

            if (onSubmit) {
              onSubmit(submitObj);
            }
          }

          resolve({
            err: err,
            values: submitObj
          });
        });
      });
    };

    _this.reset = function () {
      var form = _this.props.form;
      form.resetFields();
    };
    /** 根据字段获取初始值 */


    _this.getInitValueByFields = function (field, value) {
      var initData = _this.props.initData;

      if (!initData || !isPlainObject(initData)) {
        return value || null;
      }

      var fields = field.split('.');
      var tempData = initData;

      for (var i = 0; i < fields.length; i += 1) {
        tempData = tempData[fields[i]];

        if (!tempData) {
          break;
        }
      }

      if (isNil(tempData)) {
        return value || null;
      }

      return tempData;
    };

    _this.setFormValues = function () {
      var initData = {};
      var _this$props = _this.props,
          formList = _this$props.formList,
          form = _this$props.form;
      var setFieldsValue = form.setFieldsValue;

      if (formList && formList.length > 0) {
        formList.forEach(function (item) {
          var field = item.field,
              initValue = item.initValue;
          initData[field] = _this.getInitValueByFields(field, initValue);
        });
      }

      setFieldsValue(initData);
    };

    _this.getFormEle = function () {
      var DatePickerTemp = DatePicker;
      var InputTemp = Input;
      var InputNumberTemp = InputNumber;
      var CheckBox = Checkbox;
      return {
        TextArea: function TextArea(config) {
          return React.createElement(_TextArea, _extends({
            rows: 3
          }, config));
        },
        RadioGroup: function RadioGroup(config) {
          return React.createElement(_RadioGroup, config);
        },
        Checkbox: function Checkbox(config) {
          return React.createElement(CheckBox, config);
        },
        Input: function Input(config) {
          return React.createElement(InputTemp, config);
        },
        InputNumber: function InputNumber(config) {
          return React.createElement(InputNumberTemp, _extends({
            style: {
              width: '100%'
            }
          }, config));
        },
        DatePicker: function DatePicker(config) {
          return React.createElement(DatePickerTemp, _extends({}, _this.props, config, {
            style: {
              width: '100%'
            }
          }));
        },
        RangePicker: function RangePicker(config) {
          return React.createElement(_RangePicker, _extends({}, _this.props, config, {
            style: {
              width: '100%'
            }
          }));
        },
        ScopeDatePicker: function ScopeDatePicker(config) {
          return React.createElement(_ScopeDatePicker, _extends({}, _this.props, config));
        },
        CronInput: function CronInput(config) {
          return React.createElement(_CronInput, _extends({}, _this.props, config));
        }
      };
    };

    _this.initFormList = function () {
      var form = _this.props.form;
      var getFieldDecorator = form.getFieldDecorator;

      var strategy = _this.getFormEle();

      var _this$props2 = _this.props,
          formList = _this$props2.formList,
          _this$props2$columns = _this$props2.columns,
          columns = _this$props2$columns === void 0 ? 3 : _this$props2$columns,
          showOptBtn = _this$props2.showOptBtn,
          _this$props2$formItem = _this$props2.formItemLayout,
          formItemLayout = _this$props2$formItem === void 0 ? {
        labelCol: {
          span: 6
        },
        wrapperCol: {
          span: 18
        }
      } : _this$props2$formItem;
      var formItemList = [];
      var spanNum = 24 / columns;

      var baseFormProps = _extends({
        style: {
          margin: '0 auto'
        }
      }, formItemLayout);

      if (formList && formList.length > 0) {
        formList.forEach(function (item) {
          var label = item.label,
              field = item.field,
              hidden = item.hidden,
              type = item.type,
              _item$rules = item.rules,
              rules = _item$rules === void 0 ? [] : _item$rules,
              _item$comp = item.comp,
              comp = _item$comp === void 0 ? null : _item$comp,
              config = item.config;

          var temp = _extends({}, formItemLayout);

          if (!label) {
            temp.labelCol = {
              span: 0
            };
            temp.wrapperCol = {
              span: 24
            };
          }

          var formProps = _extends(_extends({
            label: label
          }, baseFormProps), temp);

          var component = strategy.Input(config);

          if (strategy[type]) {
            component = strategy[type](config);
          }

          if (comp) {
            component = comp;
          }

          if (component) {
            var decoratorConfig = {
              rules: rules
            };

            if (type === 'Checkbox') {
              decoratorConfig.valuePropName = 'checked';
            }

            formItemList.push(React.createElement(Col, {
              key: field,
              span: spanNum,
              style: {
                display: hidden ? 'none' : 'block'
              }
            }, React.createElement(FormItem, formProps, getFieldDecorator(field, decoratorConfig)(component))));
          }
        });
      }

      if (formItemList.length % columns !== 0) {
        _this.hasOptBtn = true;

        if (showOptBtn) {
          formItemList.push(React.createElement(Col, {
            key: "opt",
            span: spanNum
          }, React.createElement(FormItem, baseFormProps, React.createElement(Button, {
            type: "primary",
            style: {
              margin: '0 5px'
            },
            onClick: _this.handleSubmit
          }, "\u67E5\u8BE2"))));
        }
      }

      return formItemList;
    };

    return _this;
  }

  _createClass(BaseForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onRef = this.props.onRef;

      if (onRef) {
        onRef(this);
      }

      this.setFormValues();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var initData = this.props.initData;

      if (!isEqual(initData, prevProps.initData)) {
        this.setFormValues();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var showOptBtn = this.props.showOptBtn;
      return React.createElement(Form, null, React.createElement(Row, {
        gutter: 24
      }, this.initFormList()), showOptBtn && !this.hasOptBtn ? React.createElement(FormItem, {
        style: {
          textAlign: 'right',
          marginBottom: 0
        }
      }, React.createElement(Button, {
        type: "primary",
        style: {
          margin: '0 5px'
        },
        onClick: this.handleSubmit
      }, "\u67E5\u8BE2")) : null);
    }
  }]);

  return BaseForm;
}(React.Component);

BaseForm.propTypes = {
  /** 表单元素配置数组 */
  formList: PropTypes.array,

  /** 每行显示的表单元素数量 */
  columns: PropTypes.number,

  /** 是否展示操作按钮 */
  showOptBtn: PropTypes.bool,

  /** 表单元素标签和内容布局 */
  formItemLayout: PropTypes.object,

  /** 收集表单元素的值的回调函数 */
  onSubmit: PropTypes.func,

  /** 初始化值 */
  initData: PropTypes.object
};
BaseForm.defaultProps = {
  columns: 3,
  formItemLayout: {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 18
    }
  },
  showOptBtn: false,
  onSubmit: null,
  formList: [],
  initData: null
};
export default Form.create()(BaseForm);
//# sourceMappingURL=index.js.map
