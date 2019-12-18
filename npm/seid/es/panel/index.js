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
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import cls from 'classnames';
import Popconfirm from 'antd/es/popconfirm';
import Animate from '../animate';
import isEqual from 'react-fast-compare';
import ExtIcon from '../ext-icon';
import ScrollBar from '../scroll-bar';
import ResizeMe from '../resize-me';
import { getUUID } from '../utils';
import LocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';

var Panel =
/*#__PURE__*/
function (_Component) {
  _inherits(Panel, _Component);

  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Panel).call(this, props));

    _this.setZIndex = function (e) {
      if (_this.panel && _this.panel.contains(e.target)) {
        var tDom = ReactDOM.findDOMNode(_this.panel);

        if (tDom && tDom instanceof HTMLElement && tDom.parentNode && tDom.parentNode instanceof HTMLElement && tDom.parentNode.parentNode && tDom.parentNode.parentNode instanceof HTMLElement) {
          tDom.parentNode.parentNode.style.zIndex = '20';
        }
      }
    };

    _this.resetZIndex = function () {
      var tDom = ReactDOM.findDOMNode(_this.panel);

      if (tDom && tDom instanceof HTMLElement && tDom.parentNode && tDom.parentNode instanceof HTMLElement && tDom.parentNode.parentNode && tDom.parentNode.parentNode instanceof HTMLElement) {
        tDom.parentNode.parentNode.style.zIndex = 'inherit';
      }
    };

    _this.onExpand = function () {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          isPortal = _this$props.isPortal;
      var originExpand = _this.state.expand;
      var expand = !originExpand;

      _this.setState({
        expand: expand,
        collapse: false
      });

      if (isPortal && _this.panel) {
        var tDom = ReactDOM.findDOMNode(_this.panel);

        if (tDom && tDom instanceof HTMLElement && tDom.parentNode && tDom.parentNode instanceof HTMLElement && tDom.parentNode.parentNode && tDom.parentNode.parentNode instanceof HTMLElement) {
          if (expand) {
            tDom.parentNode.parentNode.classList.add('expand');
          } else {
            tDom.parentNode.parentNode.classList.remove('expand');
          }
        }
      }

      if (onChange && onChange instanceof Function) {
        onChange({
          expand: expand,
          collapse: false
        });
      }
    };

    _this.onCollapse = function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          isPortal = _this$props2.isPortal;
      var _this$state = _this.state,
          parentHeight = _this$state.parentHeight,
          originCollapse = _this$state.collapse;
      var collapse = !originCollapse;

      _this.setState({
        collapse: collapse,
        expand: false
      });

      if (onChange && onChange instanceof Function) {
        onChange({
          collapse: collapse,
          expand: false
        });
      }

      if (isPortal && _this.panel) {
        var tDom = ReactDOM.findDOMNode(_this.panel);

        if (tDom && tDom instanceof HTMLElement && tDom.parentNode && tDom.parentNode instanceof HTMLElement && tDom.parentNode.parentNode && tDom.parentNode.parentNode instanceof HTMLElement) {
          if (collapse) {
            tDom.parentNode.parentNode.style.height = 'auto';
            tDom.parentNode.parentNode.classList.add('collapse');
          } else {
            tDom.parentNode.parentNode.style.height = "".concat(parentHeight, "px");
            tDom.parentNode.parentNode.classList.remove('collapse');
          }
        }
      }
    };

    _this.onRefresh = function () {
      var onRefresh = _this.props.onRefresh;

      _this.setState({
        refresh: getUUID(),
        animationName: 'fadeIn'
      });

      if (onRefresh && onRefresh instanceof Function) {
        onRefresh();
      }
    };

    _this.onClose = function () {
      var _this$props3 = _this.props,
          onClose = _this$props3.onClose,
          panelKey = _this$props3.panelKey;
      onClose && onClose(panelKey);
    };

    _this.animateCallback = function () {
      _this.setState({
        animationName: ''
      });
    };

    _this.renderBody = function () {
      var children = _this.props.children;
      var _this$state2 = _this.state,
          animationName = _this$state2.animationName,
          refresh = _this$state2.refresh;
      return React.createElement(Animate, {
        className: "panel-content",
        type: animationName,
        callback: function callback() {
          return _this.animateCallback;
        },
        key: refresh
      }, children);
    };

    _this.getToolBarBox = function (locale) {
      var _this$state3 = _this.state,
          expand = _this$state3.expand,
          collapse = _this$state3.collapse;
      var _this$props4 = _this.props,
          exp = _this$props4.expand,
          copse = _this$props4.collapse;
      var closable = _this.props.closable;
      return React.createElement("div", {
        className: "toolbox"
      }, React.createElement(ExtIcon, {
        type: "reload",
        className: "tool-item loader",
        onClick: _this.onRefresh,
        antd: true
      }), exp ? React.createElement(ExtIcon, {
        type: "".concat(expand ? 'panel-exit-full-screen' : 'panel-full-screen'),
        className: "tool-item full-screen",
        onClick: _this.onExpand
      }) : null, copse && !expand ? React.createElement(ExtIcon, {
        type: "".concat(collapse ? 'down-circle' : 'up-circle'),
        className: "tool-item full-screen",
        antd: true,
        onClick: _this.onCollapse
      }) : null, closable && !expand ? React.createElement(Popconfirm, {
        title: locale.closeConfirm,
        getPopupContainer: function getPopupContainer(triggerNode) {
          return triggerNode.parentNode;
        },
        placement: "bottom",
        onConfirm: function onConfirm() {
          return _this.onClose();
        }
      }, React.createElement(ExtIcon, {
        type: "close",
        className: "tool-item remove",
        antd: true
      })) : null);
    };

    _this.renderPanel = function (locale) {
      var _this$state4 = _this.state,
          expand = _this$state4.expand,
          collapse = _this$state4.collapse;
      var _this$props5 = _this.props,
          className = _this$props5.className,
          title = _this$props5.title,
          width = _this$props5.width,
          height = _this$props5.height,
          style = _this$props5.style,
          cover = _this$props5.cover,
          scroll = _this$props5.scroll,
          isPortal = _this$props5.isPortal,
          autoHideToolbar = _this$props5.autoHideToolbar,
          showDrag = _this$props5.showDrag;
      var cn = cls(className, {
        'panel-full-screen': expand,
        'panel-collapsed': collapse,
        'auto-hide-toolbar': !expand && isPortal && autoHideToolbar,
        portal: isPortal,
        'no-drag': !showDrag && !expand,
        cover: cover
      });

      var styles = _extends(_extends({}, style), {
        width: width
      });

      var bodyStyles = {};

      if (!expand) {
        if (collapse) {
          bodyStyles.height = 0;
          bodyStyles.maxHeight = 0;
        } else {
          bodyStyles.height = height;
          bodyStyles.maxHeight = height;
        }
      }

      if (isPortal) {
        bodyStyles.height = '100%';
        delete bodyStyles.maxHeight;
        styles.width = '100%';
        styles.height = '100%';
      }

      return React.createElement("div", {
        className: cls('seid-panel', cn),
        ref: function ref(node) {
          return _this.panel = node;
        },
        style: styles
      }, autoHideToolbar && showDrag && !expand ? React.createElement(ExtIcon, {
        type: "drag",
        className: "seid-drag-handler"
      }) : null, isPortal && autoHideToolbar && !expand ? _this.getToolBarBox(locale) : null, React.createElement("div", {
        className: "panel-header",
        ref: function ref(node) {
          return _this.panelHead = node;
        }
      }, !autoHideToolbar && showDrag && !expand ? React.createElement(ExtIcon, {
        type: "drag",
        className: "seid-drag-handler"
      }) : null, React.createElement("div", {
        className: "panel-header-title"
      }, title), isPortal && !autoHideToolbar || expand || !isPortal ? _this.getToolBarBox(locale) : null), React.createElement("div", {
        className: "panel-body",
        ref: function ref(node) {
          return _this.panelBody = node;
        },
        style: bodyStyles
      }, scroll ? React.createElement(ScrollBar, null, _this.renderBody()) : _this.renderBody()));
    };

    _this.state = {
      collapse: false,
      expand: false,
      refresh: getUUID(),
      animationName: '',
      parentHeight: 0,
      parentWidth: 0
    };
    return _this;
  }

  _createClass(Panel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
          isPortal = _this$props6.isPortal,
          size = _this$props6.size;

      if (isPortal) {
        this.panel.addEventListener('mouseenter', this.setZIndex, false);
        this.panel.addEventListener('mouseleave', this.resetZIndex, false);
        this.setState({
          parentHeight: size.height,
          parentWidth: size.width
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!isEqual(prevProps.size, this.props.size)) {
        var collapse = this.state.collapse;
        var _this$props7 = this.props,
            size = _this$props7.size,
            onResize = _this$props7.onResize;

        if (!collapse) {
          this.setState({
            parentHeight: size.height,
            parentWidth: size.width
          });
        }

        var _getComputedStyle = getComputedStyle(this.panel),
            height = _getComputedStyle.height,
            width = _getComputedStyle.width,
            borderLeftWidth = _getComputedStyle.borderLeftWidth,
            borderRightWidth = _getComputedStyle.borderRightWidth,
            borderTopWidth = _getComputedStyle.borderTopWidth,
            borderBottomWidth = _getComputedStyle.borderBottomWidth;

        var _getComputedStyle2 = getComputedStyle(this.panelHead),
            headHeight = _getComputedStyle2.height;

        var _getComputedStyle3 = getComputedStyle(this.panelBody),
            bodyPaddingLeft = _getComputedStyle3.paddingLeft,
            bodyPaddingRight = _getComputedStyle3.paddingRight,
            bodyPaddingTop = _getComputedStyle3.paddingTop,
            bodyPaddingBottom = _getComputedStyle3.paddingBottom;

        var newSize = {
          width: parseInt(width, 10),
          bodyWidth: 0,
          height: parseInt(height, 10),
          bodyHeight: 0
        };
        newSize.bodyWidth = parseInt(width, 10) - parseInt(bodyPaddingLeft, 10) - parseInt(bodyPaddingRight, 10) - parseInt(borderLeftWidth, 10) - parseInt(borderRightWidth, 10);
        newSize.bodyHeight = parseInt(height, 10) - parseInt(borderTopWidth, 10) - parseInt(borderBottomWidth, 10) - parseInt(headHeight, 10) - parseInt(bodyPaddingTop, 10) - parseInt(bodyPaddingBottom, 10);

        if (onResize && onResize instanceof Function) {
          onResize(newSize);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isPortal = this.props.isPortal;

      if (isPortal) {
        this.panel.removeEventListener('mouseenter', this.setZIndex);
        this.panel.removeEventListener('mouseleave', this.resetZIndex);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(LocaleReceiver, {
        defaultLocale: defaultLocale,
        componentName: "Panel"
      }, this.renderPanel);
    }
  }]);

  return Panel;
}(Component);

Panel.defaultProps = {
  closable: false,
  collapse: true,
  expand: true,
  showDrag: false,
  scroll: false,
  cover: false,
  isPortal: false,
  autoHideToolbar: false,
  width: '100%',
  height: 260
};
Panel.propTypes = {
  closable: PropTypes.bool,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
export default ResizeMe({
  refreshRate: 50
})(Panel);
//# sourceMappingURL=index.js.map
