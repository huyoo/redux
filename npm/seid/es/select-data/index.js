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

import React, { Component } from 'react';
import message from 'antd/es/message';
import Select from 'antd/es/select';
import Spin from 'antd/es/spin';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import isUndefined from 'lodash/isUndefined';
import { isEmpty, isNotEmpty } from '../_util/utils';
import defaultLocale from './locale';
import SeidLocaleReceiver from '../seid-locale-receiver';
var Option = Select.Option;
/**
 * 主数据下拉选项
 */

var SelectData =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectData, _Component);

  function SelectData(props) {
    var _this;

    _classCallCheck(this, SelectData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectData).call(this, props));

    _this.handleCallBack = function (err, res) {
      var lists = [];

      _this.setState({
        fetching: false
      });

      if (isEmpty(err)) {
        var _res$body$data = res.body.data,
            data = _res$body$data === void 0 ? [] : _res$body$data;
        var _this$props = _this.props,
            optionId = _this$props.optionId,
            optionCode = _this$props.optionCode,
            optionName = _this$props.optionName;

        if (res.ok && res.body.success) {
          if (isNotEmpty(data)) {
            data.forEach(function (item) {
              lists.push({
                id: optionId ? get(item, optionId) : item.id,
                code: optionCode ? get(item, optionCode) : item.code,
                name: optionName ? get(item, optionName) : item.name,
                itemData: item
              });
            });
          }

          _this.setState({
            data: lists.length === 0 ? [{
              id: '1',
              code: 'INIT',
              name: get(_this.locale, 'notFound'),
              disabled: true
            }] : lists
          });
        } else {
          _this.setState({
            data: [{
              id: '1',
              code: 'INIT',
              name: get(_this.locale, 'notFound'),
              disabled: true
            }]
          });

          message.error(res.body.message === null ? get(_this.locale, 'serverError') : res.body.message);
        }
      } else {
        _this.setState({
          data: [{
            id: '1',
            code: 'INIT',
            name: get(_this.locale, 'notFound'),
            disabled: true
          }]
        });

        message.error(get(_this.locale, 'loadError'));
      }
    };

    _this.handleFocus = function () {
      var _this$state = _this.state,
          data = _this$state.data,
          params = _this$state.params;
      var _this$props$params = _this.props.params,
          propsParams = _this$props$params === void 0 ? {} : _this$props$params;

      if (!isEqual(params, propsParams) || !data || data.length === 0 || data[0].id === '1') {
        _this.setState({
          data: []
        });

        _this.fetch();
      }
    };

    _this.handleChange = function (code, option) {
      var value = _this.props.value; // 选择相同的值不触发change事件

      if (isNotEmpty(value) && isNotEmpty(value.code) && value.code === code) return;

      if (isEmpty(code) || isEmpty(option)) {
        // 清除掉值时
        _this.setState({
          name: undefined
        });

        _this.triggerChange(null);

        return;
      }

      if (!('value' in _this.props)) {
        _this.setState({
          name: option.props.children
        });
      }

      _this.triggerChange({
        code: code || undefined,
        name: option ? option.props.children : undefined,
        id: option ? option.props.id : undefined,
        itemData: option ? option.props.dataitem : undefined
      });
    };

    _this.triggerChange = function (changedValue) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(isUndefined(changedValue) ? null : _extends({}, changedValue));
      }
    };

    _this.fetch = function () {
      var _this$props2 = _this.props,
          getData = _this$props2.getData,
          _this$props2$params = _this$props2.params,
          params = _this$props2$params === void 0 ? {} : _this$props2$params;
      if (!getData) return;

      _this.setState({
        data: [],
        fetching: true,
        params: params
      }, function () {
        getData(params, _this.handleCallBack);
      });
    };

    _this.showLabel = function (item) {
      var _this$props3 = _this.props,
          _this$props3$showCode = _this$props3.showCode,
          showCode = _this$props3$showCode === void 0 ? true : _this$props3$showCode,
          _this$props3$onlyCode = _this$props3.onlyCode,
          onlyCode = _this$props3$onlyCode === void 0 ? false : _this$props3$onlyCode; // 只显示name

      if (!showCode) {
        return item.name;
      } // 只显示code


      if (onlyCode) {
        return item.code;
      }

      return "".concat(item.code, "-").concat(item.name);
    };

    _this.filterOption = function (input, option) {
      return option.props.children.indexOf(input) >= 0;
    };

    _this.renderCom = function (locale) {
      _this.locale = locale;
      var _this$state2 = _this.state,
          name = _this$state2.name,
          data = _this$state2.data,
          fetching = _this$state2.fetching;
      var _this$props4 = _this.props,
          _this$props4$showSear = _this$props4.showSearch,
          showSearch = _this$props4$showSear === void 0 ? true : _this$props4$showSear,
          disabled = _this$props4.disabled,
          _this$props4$dropdown = _this$props4.dropdownMatchSelectWidth,
          dropdownMatchSelectWidth = _this$props4$dropdown === void 0 ? true : _this$props4$dropdown,
          _this$props4$allowCle = _this$props4.allowClear,
          allowClear = _this$props4$allowCle === void 0 ? true : _this$props4$allowCle,
          _this$props4$showArro = _this$props4.showArrow,
          showArrow = _this$props4$showArro === void 0 ? true : _this$props4$showArro,
          _this$props4$classNam = _this$props4.className,
          className = _this$props4$classNam === void 0 ? '' : _this$props4$classNam,
          _this$props4$placehol = _this$props4.placeholder,
          placeholder = _this$props4$placehol === void 0 ? get(locale, 'selectPlaceholder') : _this$props4$placehol;
      var options = data ? data.map(function (d) {
        return React.createElement(Option, {
          key: d.id,
          value: d.code,
          disabled: d.disabled
        }, _this.showLabel(d));
      }) : null;
      return React.createElement(Select, {
        style: {
          width: '100%'
        },
        disabled: disabled,
        placeholder: placeholder,
        dropdownMatchSelectWidth: dropdownMatchSelectWidth,
        value: name,
        showSearch: showSearch,
        showArrow: showArrow,
        allowClear: allowClear,
        defaultActiveFirstOption: false,
        filterOption: _this.filterOption,
        onChange: _this.handleChange,
        onFocus: _this.handleFocus,
        notFoundContent: fetching ? React.createElement(Spin, {
          size: "small"
        }) : null,
        className: className
      }, options);
    };

    var value = props.value || {};
    _this.fetch = debounce(_this.fetch, 200);
    _this.state = {
      name: value.name,
      data: [],
      fetching: false
    };
    return _this;
  }

  _createClass(SelectData, [{
    key: "render",
    value: function render() {
      return React.createElement(SeidLocaleReceiver, {
        defaultLocale: defaultLocale,
        componentName: "SelectData"
      }, this.renderCom);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        if (!nextProps.value) {
          return {
            name: undefined,
            code: undefined
          };
        } // 清空form表单的值


        var name = nextProps.value.name;
        if (!name) return {
          name: undefined,
          code: undefined
        };
        return _extends({}, nextProps.value || {});
      }

      return null;
    }
  }]);

  return SelectData;
}(Component);

export default SelectData;
//# sourceMappingURL=index.js.map
