function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from 'react';
import Button from 'antd/es/button';
import Spin from 'antd/es/spin';
import Tree from 'antd/es/tree';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Card from 'antd/es/card';
import { apiConfig, appConfig, defaultHeader } from './setting';
import { isNotEmpty } from '../_util/utils';
import { request } from '../utils';
var TreeNode = Tree.TreeNode;

var SystemTenants =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SystemTenants, _React$PureComponent);

  function SystemTenants(props) {
    var _this;

    _classCallCheck(this, SystemTenants);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SystemTenants).call(this, props));

    _this.init = function () {
      _this.initTreeData();
    };

    _this.initTreeData = function () {
      _this.setState({
        loading: true
      });

      request({
        url: apiConfig.rui.basic.tenant.list,
        params: {
          pageIndex: 0,
          pageSize: appConfig.maxPageSize
        }
      }).then(function (res) {
        if (res.success) {
          var _res$data = res.data,
              data = _res$data === void 0 ? {} : _res$data;
          var tenants = [];

          if (data && data.list && data.list.length > 0) {
            tenants = _toConsumableArray(data.list);
          }

          _this.setState({
            loading: false,
            treeData: tenants
          }, function () {
            _this.initSystemSetTenants();
          });
        }
      })["catch"](function () {
        _this.setState({
          loading: false
        });
      });
    };

    _this.initSystemSetTenants = function () {
      _this.setState({
        loading: true
      });

      var _this$state$systemSet = _this.state.systemSet,
          systemSet = _this$state$systemSet === void 0 ? {} : _this$state$systemSet;
      request({
        url: apiConfig.rui.setting.findById,
        params: {
          settingId: systemSet.settingId
        }
      }).then(function (res) {
        if (res.success) {
          var _res$data2 = res.data,
              data = _res$data2 === void 0 ? {} : _res$data2;
          var checkedKeys = [];

          if (data && data.tenant) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = data.tenant[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var resItem = _step.value;

                if (resItem) {
                  checkedKeys.push(resItem.tenantId);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          _this.setState({
            loading: false,
            checkedKeys: checkedKeys
          });
        }
      })["catch"](function () {
        _this.setState({
          loading: false
        });
      });
    };

    _this.renderTreeNodes = function (data) {
      return data.map(function (item) {
        if (item) {
          return React.createElement(TreeNode, {
            title: item.tenantName,
            key: item.tenantId,
            value: item.tenantId,
            dataRef: item
          });
        }

        return null;
      });
    };

    _this.handleTreeCheck = function (checkedKeys) {
      _this.setState({
        checkedKeys: checkedKeys
      });
    };

    _this.handelCancel = function () {
      _this.goBack();
    };

    _this.handelSave = function () {
      var tenantIds = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = _this.state.checkedKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var checkKey = _step2.value;
          tenantIds += "".concat(checkKey, ",");
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (isNotEmpty(tenantIds)) {
        tenantIds = tenantIds.substr(0, tenantIds.length - 1);
      }

      _this.setState({
        loading: true
      });

      var _this$state$systemSet2 = _this.state.systemSet,
          systemSet = _this$state$systemSet2 === void 0 ? {} : _this$state$systemSet2;
      request({
        method: 'post',
        url: apiConfig.rui.setting.resetTenants,
        headers: _extends({}, defaultHeader),
        data: {
          settingId: systemSet.settingId,
          tenantIds: tenantIds
        }
      }).then(function () {
        _this.setState({
          loading: false
        }, function () {
          _this.goBack();
        });
      })["catch"](function () {
        _this.setState({
          loading: false
        });
      });
    };

    _this.goBack = function () {
      var _this$props = _this.props,
          removeTabPane = _this$props.removeTabPane,
          paneKey = _this$props.paneKey;

      if (removeTabPane) {
        removeTabPane(paneKey);
      }
    };

    _this.state = {
      loading: false,
      systemSet: props.systemSet,
      treeData: [],
      checkedKeys: []
    };
    return _this;
  }

  _createClass(SystemTenants, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.init();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var _this$props$systemSet = this.props.systemSet,
          systemSet = _this$props$systemSet === void 0 ? {} : _this$props$systemSet;

      if (nextProps.systemSet && nextProps.systemSet.settingId !== systemSet.settingId) {
        this.setState({
          systemSet: nextProps.systemSet
        }, function () {
          _this2.initSystemSetTenants();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          loading = _this$state.loading,
          treeData = _this$state.treeData,
          checkedKeys = _this$state.checkedKeys,
          _this$state$systemSet3 = _this$state.systemSet,
          systemSet = _this$state$systemSet3 === void 0 ? {} : _this$state$systemSet3;
      return React.createElement(Spin, {
        spinning: loading
      }, React.createElement(Card, {
        bordered: false
      }, React.createElement("div", {
        className: "operationTitle",
        style: {
          justifyContent: 'center'
        }
      }, React.createElement("h1", null, "\u8BBE\u7F6E\u3010".concat(systemSet.sysName, "\u3011\u7684\u79DF\u6237"))), React.createElement(Row, {
        gutter: 24
      }, React.createElement(Col, {
        span: 6,
        offset: 4
      }, React.createElement(Tree, {
        checkable: true,
        checkedKeys: checkedKeys,
        onCheck: this.handleTreeCheck
      }, this.renderTreeNodes(treeData)))), React.createElement(Row, {
        gutter: 24
      }, React.createElement(Col, {
        span: 24,
        className: "operationArea"
      }, React.createElement(Button, {
        onClick: this.handelCancel
      }, "\u53D6\u6D88"), React.createElement(Button, {
        type: "primary",
        loading: loading,
        onClick: this.handelSave
      }, "\u4FDD\u5B58")))));
    }
  }]);

  return SystemTenants;
}(React.PureComponent);

export default SystemTenants;
//# sourceMappingURL=SystemTenants.js.map
