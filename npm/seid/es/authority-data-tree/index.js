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
import message from 'antd/es/message';
import Icon from 'antd/es/icon';
import Spin from 'antd/es/spin';
import TreeSelect from 'antd/es/tree-select';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import LocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';
import { request } from '../utils';
var TreeNode = TreeSelect.TreeNode;

var AuthorityDataTree =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AuthorityDataTree, _React$Component);

  function AuthorityDataTree(props) {
    var _this;

    _classCallCheck(this, AuthorityDataTree);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorityDataTree).call(this, props));

    _this.handleCallBack = function (res) {
      var _this$props$orgParams = _this.props.orgParams,
          orgParams = _this$props$orgParams === void 0 ? {} : _this$props$orgParams;

      _this.setState({
        fetching: false
      });

      var data = res.data;

      if (res.success && res.statusCode === 200) {
        // 调用成功后再把参数值orgParams复制给state的params，若在之前赋值而此时调用又失败了，则不会再次触发调用
        _this.setState({
          params: _extends({}, orgParams),
          data: [data],
          // initTitle: Object.keys(data).length ? '' : '未找到数据',
          expandedKeys: _this.findExpandedKeys([data]),
          expandedKeysOrigin: _this.findExpandedKeys([data])
        });
      } else {
        message.error(res.message === null ? get(_this.locale, 'serverError') : res.message);
      }
    }; // 获取组织机构数据


    _this.getOrgData = function () {
      _this.setState({
        // data: [],
        fetching: true
      });

      var _this$props = _this.props,
          orgUrl = _this$props.orgUrl,
          orgRequestMethod = _this$props.orgRequestMethod,
          _this$props$orgParams2 = _this$props.orgParams,
          orgParams = _this$props$orgParams2 === void 0 ? {} : _this$props$orgParams2;
      var promise = request({
        method: orgRequestMethod,
        url: orgUrl,
        params: orgParams,
        timeout: 25000
      });
      promise.then(function (res) {
        _this.handleCallBack(res);
      })["catch"](function (error) {
        _this.setState({
          fetching: false
        });

        console.error('error', error);
      });
    };

    _this.handleChange = function (v, _, extra) {
      // 如果两次选择的值一样，则不调用change的回调函数
      if (v === undefined || extra.triggerNode === undefined) {
        _this.setState({
          id: undefined
        });

        _this.triggerChange(undefined);
      } else {
        var valueProps = extra.triggerNode.props;

        _this.setState({
          id: valueProps.id
        });

        _this.triggerChange(_extends({}, valueProps.itemData));
      }
    };

    _this.triggerChange = function (changedValue) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(changedValue);
      }
    };

    _this.findExpandedKeys = function (data) {
      var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      data.forEach(function (item) {
        if (item.children && item.children.length !== 0) {
          if (item.code) {
            arr.push(item.code);
          }

          _this.findExpandedKeys(item.children, arr);
        }
      });
      return arr;
    };

    _this.loopOrgan = function (data) {
      if (!data) return null;
      return data.map(function (item) {
        // forbid：需不需要显示禁用的数据
        var _this$props$forbid = _this.props.forbid,
            forbid = _this$props$forbid === void 0 ? true : _this$props$forbid;

        if (item.children && item.children.length !== 0) {
          return React.createElement(TreeNode, {
            disabled: forbid ? item.frozen : false,
            icon: React.createElement(Icon, {
              type: "folder"
            }),
            key: item.code || item.id,
            value: item.id,
            title: item.code ? "".concat(item.code, "-").concat(item.name) : item.name,
            itemData: item
          }, _this.loopOrgan(item.children));
        }

        return React.createElement(TreeNode, {
          disabled: forbid ? item.frozen : false,
          icon: React.createElement(Icon, {
            type: "file-text"
          }),
          id: item.id,
          value: item.id,
          title: item.code ? "".concat(item.code, "-").concat(item.name) : item.name,
          key: item.code,
          itemData: item
        });
      });
    };

    _this.onTreeExpand = function (expandedKeys) {
      _this.setState({
        expandedKeys: expandedKeys
      });
    };

    _this.onSearch = function () {
      var expandedKeysOrigin = _this.state.expandedKeysOrigin;

      _this.setState({
        expandedKeys: expandedKeysOrigin
      });
    };

    _this.handleFocus = function () {
      var _this$state = _this.state,
          data = _this$state.data,
          params = _this$state.params;
      var _this$props$orgParams3 = _this.props.orgParams,
          propsParams = _this$props$orgParams3 === void 0 ? {} : _this$props$orgParams3;

      if (!isEqual(params, propsParams) || data.length === 0) {
        _this.getOrgData();
      }
    };

    _this.renderComponent = function (locale) {
      var disabled = _this.props.disabled;
      _this.locale = locale;
      var _this$state2 = _this.state,
          id = _this$state2.id,
          fetching = _this$state2.fetching,
          _this$state2$data = _this$state2.data,
          data = _this$state2$data === void 0 ? [] : _this$state2$data,
          expandedKeys = _this$state2.expandedKeys;

      var treeNode = _this.loopOrgan(data);

      return React.createElement(Spin, {
        spinning: fetching,
        size: "small"
      }, React.createElement(TreeSelect, {
        loading: fetching,
        className: "seid-authority-data-tree",
        treeExpandedKeys: expandedKeys,
        showSearch: true,
        onFocus: _this.handleFocus,
        value: id,
        dropdownStyle: {
          maxHeight: 300
        },
        onChange: _this.handleChange,
        placeholder: locale.placeholder,
        allowClear: true,
        treeNodeFilterProp: "title",
        onTreeExpand: _this.onTreeExpand,
        onSearch: _this.onSearch,
        disabled: disabled
      }, treeNode));
    };

    var _props$value = props.value,
        value = _props$value === void 0 ? {} : _props$value;
    _this.getOrgData = debounce(_this.getOrgData, 200);
    _this.state = {
      id: value.id,
      data: [{
        id: value.id,
        code: value.code,
        name: value.name
      }] || [],
      params: undefined,
      fetching: false,
      // initTitle: '查询中……',
      expandedKeys: [],
      expandedKeysOrigin: []
    };
    return _this;
  }

  _createClass(AuthorityDataTree, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = this.props.value;
      var _nextProps$value = nextProps.value,
          nextValue = _nextProps$value === void 0 ? {} : _nextProps$value;

      if ('value' in nextProps) {
        if (isEmpty(nextValue) && !isEqual(nextValue, value)) {
          this.setState({
            id: undefined,
            data: []
          });
          return;
        }

        this.setState({
          id: nextValue.id
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        componentName: "AuthorityDataTree",
        defaultLocale: defaultLocale
      }, this.renderComponent);
    }
  }]);

  return AuthorityDataTree;
}(React.Component);

AuthorityDataTree.defaultProps = {
  orgRequestMethod: 'get'
};
export default AuthorityDataTree;
//# sourceMappingURL=index.js.map
