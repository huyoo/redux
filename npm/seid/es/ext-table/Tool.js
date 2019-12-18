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

import React, { cloneElement, PureComponent } from 'react';
import Checkbox from 'antd/es/checkbox';
import Icon from 'antd/es/icon';
import Popover from 'antd/es/popover';
import Menu from 'antd/es/menu';
import get from 'lodash/get';
var SubMenu = Menu.SubMenu,
    Item = Menu.Item,
    Divider = Menu.Divider;

var Tool =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Tool, _PureComponent);

  function Tool(props) {
    var _this;

    _classCallCheck(this, Tool);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tool).call(this, props));

    _this.onChange = function () {
      var dataIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var selectedCols = _this.state.selectedCols;
      var checked = selectedCols.includes(dataIndex);

      var cols = _toConsumableArray(selectedCols);

      if (!checked) {
        cols.push(dataIndex);
      } else if (selectedCols.length > 1) {
        cols = selectedCols.filter(function (s) {
          return s !== dataIndex;
        });
      }

      _this.setState({
        selectedCols: cols
      });
    };

    _this.onFinishChange = function () {
      var _this$props = _this.props,
          onChangeCols = _this$props.onChangeCols,
          _this$props$selectedC = _this$props.selectedCols,
          cols = _this$props$selectedC === void 0 ? [] : _this$props$selectedC;
      var _this$state$selectedC = _this.state.selectedCols,
          selectedCols = _this$state$selectedC === void 0 ? [] : _this$state$selectedC;

      _this.setState({
        visible: false,
        openKeys: []
      }, function () {
        if (onChangeCols && cols.toString() !== selectedCols.toString()) {
          onChangeCols(selectedCols);
        }
      });
    };

    _this.onTitleClick = function (_ref) {
      var key = _ref.key;
      var openKeys = _this.state.openKeys;

      if (openKeys.includes(key)) {
        _this.setState({
          openKeys: openKeys.filter(function (k) {
            return k !== key;
          })
        });
      } else {
        _this.setState({
          openKeys: [].concat(_toConsumableArray(openKeys), [key])
        });
      }
    };

    _this.getColumnCheckbox = function () {
      var columns = _this.props.columns;
      var _this$state$selectedC2 = _this.state.selectedCols,
          selectedCols = _this$state$selectedC2 === void 0 ? [] : _this$state$selectedC2;
      return columns.map(function (col) {
        return React.createElement(Item, {
          unselectable: "on",
          key: col.dataIndex,
          onClick: function onClick() {
            return _this.onChange(col.dataIndex);
          }
        }, React.createElement("div", {
          className: "check-col"
        }, React.createElement(Checkbox, {
          checked: selectedCols.includes(col.dataIndex || '')
        }), React.createElement("span", null, col.title)));
      });
    };

    _this.onClick = function (param) {
      var key = param.key;

      if (key !== 'asc' && key !== 'desc') {
        return;
      }

      var _this$props2 = _this.props,
          _this$props2$sortConf = _this$props2.sortConfigs,
          sortConfigs = _this$props2$sortConf === void 0 ? [] : _this$props2$sortConf,
          dataIndex = _this$props2.dataIndex,
          onChangeSort = _this$props2.onChangeSort;
      var sortDirection = sortConfigs.find(function (s) {
        return s.sortCol === dataIndex;
      });

      if (sortDirection) {
        if (sortDirection.sort === key) {
          // 删除排序
          sortConfigs.forEach(function (s, inx) {
            if (s.sortCol === dataIndex) {
              sortConfigs.splice(inx, 1);
            }
          });
        } else {
          sortConfigs.forEach(function (s, inx) {
            // 修改排序方式
            if (s.sortCol === dataIndex) {
              sortConfigs.splice(inx, 1, _extends(_extends({}, s), {
                sort: key
              }));
            }
          });
        }
      } else {
        sortConfigs.push({
          sortCol: dataIndex,
          sort: key
        });
      }

      if (onChangeSort) {
        onChangeSort(_toConsumableArray(sortConfigs));
      }
    };

    var children = props.children;
    _this.node = cloneElement(React.Children.only(children), {
      onClick: function onClick(e) {
        _this.setState({
          visible: true
        });

        if (children && children.props && children.props.onClick) {
          children.props.onClick(e);
        }
      }
    });
    _this.state = {
      visible: false,
      openKeys: [],
      selectedCols: []
    };
    return _this;
  }

  _createClass(Tool, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          _this$props3$sortConf = _this$props3.sortConfigs,
          sortConfigs = _this$props3$sortConf === void 0 ? [] : _this$props3$sortConf,
          dataIndex = _this$props3.dataIndex,
          locale = _this$props3.locale;
      var _this$state = this.state,
          visible = _this$state.visible,
          openKeys = _this$state.openKeys;
      var sortDirection = sortConfigs.find(function (s) {
        return s.sortCol === dataIndex;
      });
      var selectedKeys = sortDirection ? [sortDirection.sort] : [];
      console.log(selectedKeys, openKeys, sortConfigs);
      return React.createElement(Popover, {
        visible: visible,
        placement: "bottomLeft",
        content: React.createElement(Menu, {
          onClick: this.onClick,
          selectedKeys: selectedKeys,
          style: {
            width: '124px'
          },
          openKeys: openKeys
        }, React.createElement(Item, {
          key: "asc"
        }, React.createElement(Icon, {
          type: "sort-ascending"
        }), get(locale, 'Ascending')), React.createElement(Item, {
          key: "desc"
        }, React.createElement(Icon, {
          type: "sort-descending"
        }), get(locale, 'Descending')), React.createElement(Divider, null), React.createElement(SubMenu, {
          key: "cols",
          popupClassName: "seid-custom-layout",
          title: [React.createElement(Icon, {
            key: "icon",
            type: "shrink"
          }), get(locale, 'Columns')],
          onTitleClick: this.onTitleClick
        }, this.getColumnCheckbox())),
        trigger: "hover",
        overlayClassName: "seid-custom-layout",
        onVisibleChange: function onVisibleChange(v) {
          if (!v) {
            _this2.onFinishChange();
          }
        }
      }, this.node);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!prevState.visible) {
        var selectedCols = nextProps.selectedCols;
        return {
          selectedCols: selectedCols
        };
      }

      return null;
    }
  }]);

  return Tool;
}(PureComponent);

export default Tool;
//# sourceMappingURL=Tool.js.map
