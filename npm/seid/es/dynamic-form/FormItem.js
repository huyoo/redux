function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import InputNumber from 'antd/es/input-number';
import Input from 'antd/es/input';
import Checkbox from 'antd/es/checkbox';
import Select from 'antd/es/select';
import Radio from 'antd/es/radio';
import BEditor from '../rich-editor';

var FormsItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormsItem, _React$Component);

  function FormsItem() {
    _classCallCheck(this, FormsItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormsItem).apply(this, arguments));
  }

  _createClass(FormsItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          value = _this$props.value,
          onChange = _this$props.onChange,
          form = _this$props.form;
      return function (option) {
        var _option$unavailable = option.unavailable,
            unavailable = _option$unavailable === void 0 ? false : _option$unavailable,
            displayName = option.displayName;

        switch (item.editor) {
          case 'normal':
            return React.createElement(Input, {
              disabled: unavailable,
              placeholder: "\u8BF7\u8F93\u5165".concat(displayName) // @ts-ignore
              ,
              value: value,
              onChange: onChange
            });

          case 'password':
            return React.createElement(Input, {
              disabled: unavailable,
              type: "password",
              placeholder: "\u8BF7\u8F93\u5165".concat(displayName) // @ts-ignore
              ,
              value: value,
              onChange: onChange
            });

          case 'number':
            return React.createElement(InputNumber, {
              disabled: unavailable,
              placeholder: "\u8BF7\u8F93\u5165".concat(displayName) // @ts-ignore
              ,
              value: value,
              onChange: onChange,
              min: item.range ? item.range[0] : undefined,
              max: item.range ? item.range[1] : undefined
            });

          case 'text':
            return React.createElement("div", {
              className: "ant-form-item-control-wrapper"
            }, value);

          case 'select':
            return React.createElement(Select, {
              disabled: unavailable,
              value: value,
              onChange: onChange
            }, item.opts && item.opts.map(function (opt) {
              return React.createElement(Select.Option, {
                key: opt.id,
                value: opt.id
              }, opt.name);
            }));

          case 'radio':
            return React.createElement(Radio.Group, {
              disabled: unavailable,
              value: value,
              onChange: onChange
            }, item.opts && item.opts.map(function (opt) {
              return React.createElement(Radio, {
                key: opt.id,
                value: opt.id
              }, opt.name);
            }));

          case 'texarea':
            return React.createElement(Input.TextArea, {
              disabled: unavailable,
              placeholder: "\u8BF7\u8F93\u5165".concat(displayName) // @ts-ignore
              ,
              value: value,
              onChange: onChange
            });

          case 'checkbox':
            return React.createElement(Checkbox.Group, {
              disabled: unavailable // @ts-ignore
              ,
              value: value,
              onChange: onChange
            }, item.opts && item.opts.map(function (opt) {
              return React.createElement(Checkbox, {
                key: opt.id,
                value: opt.id
              }, opt.name);
            }));

          /* case "table-select":
              return <TableSelect disabled={unavailable} item={item} form={form} value={value} onChange={onChange} />
          case "file-upload":
              return <FileUpLoad disabled={unavailable} item={item} form={form} value={value} onChange={onChange} /> */

          case 'bEditor':
            return React.createElement(BEditor, {
              disabled: unavailable,
              form: form // @ts-ignore
              ,
              value: value,
              onChange: onChange
            });

          case 'hidden':
            return React.createElement(Input // @ts-ignore
            , {
              value: value,
              onChange: onChange
            });

          default:
            return React.createElement(Input, {
              disabled: unavailable,
              placeholder: "\u8BF7\u8F93\u5165".concat(displayName) // @ts-ignore
              ,
              value: value,
              onChange: onChange
            });
        }
      }(item);
    }
  }]);

  return FormsItem;
}(React.Component);

export default FormsItem;
//# sourceMappingURL=FormItem.js.map
