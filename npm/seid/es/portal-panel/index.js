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

import React, { Component, Suspense } from 'react';
import cls from 'classnames';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider } from 'react-grid-layout';
import omit from 'omit.js';
import isEqual from 'react-fast-compare';
import Panel from '../panel';
import ListLoader from '../list-loader';
import LocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';
var ResponsiveGridLayout = WidthProvider(Responsive);

var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _this.onLayoutChange = function (layout, layouts) {
      var onLayoutChange = _this.props.onLayoutChange;

      _this.setState({
        layouts: layouts
      }, function () {
        if (onLayoutChange) {
          onLayoutChange(layout, layouts);
        }
      });
    };

    _this.onBreakpointChange = function (breakpoint, cols) {
      _this.setState({
        breakpoint: breakpoint,
        cols: cols
      });
    };

    _this.getWidgetLayout = function (id) {
      var _this$state = _this.state,
          breakpoint = _this$state.breakpoint,
          layouts = _this$state.layouts;
      var lts = layouts[breakpoint];
      var layout = null;

      if (lts) {
        for (var i = 0; i < lts.length; i += 1) {
          if (lts[i].i === id) {
            layout = lts[i];
            break;
          }
        }
      }

      return layout;
    };

    _this.renderGridItem = function () {
      var widgets = _this.state.widgets;
      var _this$props = _this.props,
          autoHideToolbar = _this$props.autoHideToolbar,
          onClose = _this$props.onClose,
          isDraggable = _this$props.isDraggable;
      return widgets.map(function (widgetItem) {
        var draggable = isDraggable;
        var closable = widgetItem.closable === void 0 ? true : widgetItem.closable;

        if (widgetItem.layout && widgetItem.layout.isDraggable !== void 0) {
          draggable = widgetItem.layout.isDraggable;
        }

        var layout = _this.getWidgetLayout(widgetItem.id) || widgetItem.layout;

        if (widgetItem.lazy) {
          return React.createElement("div", {
            key: widgetItem.id,
            className: cls('seid-grid-item'),
            "data-grid": layout
          }, React.createElement(Panel, {
            key: "portal-".concat(widgetItem.id),
            panelKey: widgetItem.id,
            closable: closable,
            title: widgetItem.title,
            autoHideToolbar: autoHideToolbar,
            onClose: onClose,
            showDrag: draggable,
            isPortal: true
          }, React.createElement(Suspense, {
            fallback: React.createElement(ListLoader, null)
          }, widgetItem.widget)));
        }

        return React.createElement("div", {
          key: widgetItem.id,
          className: cls('seid-grid-item'),
          "data-grid": layout
        }, React.createElement(Panel, {
          key: "portal-".concat(widgetItem.id),
          panelKey: widgetItem.id,
          closable: closable,
          title: widgetItem.title,
          autoHideToolbar: autoHideToolbar,
          onClose: onClose,
          showDrag: draggable,
          isPortal: true
        }, widgetItem.widget));
      });
    };

    _this.renderPortal = function () {
      var _a = _this.props,
          className = _a.className,
          style = _a.style,
          rest = __rest(_a, ["className", "style"]);

      var layouts = _this.state.layouts;
      var gridLayoutProps = omit(rest, ['storageKey', 'widgets', 'autoHideToolbar', 'layouts']);
      return React.createElement("div", {
        className: cls('seid-portal-panel', className),
        style: style
      }, React.createElement(ResponsiveGridLayout, _extends({
        className: "layout",
        layouts: layouts
      }, gridLayoutProps, {
        onBreakpointChange: _this.onBreakpointChange,
        onLayoutChange: _this.onLayoutChange
      }), _this.renderGridItem()));
    };

    var widgets = props.widgets,
        layouts = props.layouts;
    _this.state = {
      layouts: layouts || {},
      widgets: widgets,
      breakpoint: 'lg',
      cols: 12
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_preProps, preState) {
      if (!isEqual(preState.widgets, this.props.widgets)) {
        var widgets = this.props.widgets;
        this.setState({
          widgets: widgets
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        defaultLocale: defaultLocale,
        componentName: "PortalPanel"
      }, this.renderPortal);
    }
  }]);

  return Index;
}(Component);

Index.defaultProps = {
  autoHideToolbar: false,
  breakpoints: {
    lg: 1200,
    md: 996,
    sm: 768,
    xs: 480,
    xxs: 0
  },
  cols: {
    lg: 12,
    md: 10,
    sm: 6,
    xs: 4,
    xxs: 2
  },
  rowHeight: 200,
  widgets: [],
  compactType: 'horizontal',
  draggableHandle: '.seid-drag-handler',
  isDraggable: true,
  isResizable: true
};
Index.propTypes = {
  closable: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  compactType: PropTypes.oneOf(['vertical', 'horizontal']),
  draggableHandle: PropTypes.string
};
export default Index;
//# sourceMappingURL=index.js.map
