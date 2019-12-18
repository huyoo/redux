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

import React, { PureComponent } from 'react';
import Card from 'antd/es/card';
import Divider from 'antd/es/divider';
import Icon from 'antd/es/icon';
import get from 'lodash/get';
import Detail from '../station-news-list/detail';
import { request } from '../utils';
import SeidLocaleReceiver from '../seid-locale-receiver';
import defaultLocale from './locale';

var StationNewsCard =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StationNewsCard, _PureComponent);

  function StationNewsCard(props) {
    var _this;

    _classCallCheck(this, StationNewsCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StationNewsCard).call(this, props)); // 获取未处理的站内消息

    _this.handleGet = function () {
      var _this$props = _this.props,
          getNewsListUrl = _this$props.getNewsListUrl,
          getNewsListParams = _this$props.getNewsListParams,
          showNum = _this$props.showNum;

      _this.setState({
        loading: true
      });

      request({
        url: getNewsListUrl,
        params: _extends({}, getNewsListParams)
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data === void 0 ? {} : _res$data;

        _this.setState({
          loading: false,
          data: data.list.slice(0, showNum)
        });
      })["catch"](function (error) {
        _this.setState({
          loading: true
        });

        console.error('error', error);
      });
    }; // 查看详情


    _this.onClick = function (event, messageId) {
      event.preventDefault();
      var handleClickItem = _this.props.handleClickItem;

      if (handleClickItem) {
        handleClickItem(messageId);
      }

      _this.setState({
        visible: true,
        messageId: messageId
      });
    };

    _this.handleCancel = function () {
      _this.setState({
        visible: false
      });
    }; // 点击'更多'


    _this.toMoreStations = function () {
      var handletoMoreStations = _this.props.handletoMoreStations;
      if (handletoMoreStations) handletoMoreStations();
    };

    _this.renderCom = function (locale) {
      var _this$props2 = _this.props,
          _this$props2$extraTxt = _this$props2.extraTxt,
          extraTxt = _this$props2$extraTxt === void 0 ? get(locale, 'more') : _this$props2$extraTxt,
          avatar = _this$props2.avatar,
          listTitle = _this$props2.listTitle,
          contentRight = _this$props2.contentRight,
          description = _this$props2.description,
          getNewsDetailUrl = _this$props2.getNewsDetailUrl,
          getNewsDetailUrlRequestMethod = _this$props2.getNewsDetailUrlRequestMethod,
          getNewsListParams = _this$props2.getNewsListParams,
          cardProps = _this$props2.cardProps,
          modalProps = _this$props2.modalProps,
          detailContent = _this$props2.detailContent;
      var _this$state = _this.state,
          data = _this$state.data,
          visible = _this$state.visible,
          messageId = _this$state.messageId,
          loading = _this$state.loading;
      var propsToDetail = {
        getNewsDetailUrl: getNewsDetailUrl,
        getNewsDetailUrlRequestMethod: getNewsDetailUrlRequestMethod,
        visible: visible,
        onCancel: _this.handleCancel,
        params: {
          userId: getNewsListParams.userId,
          messageId: messageId
        },
        modalProps: modalProps,
        detailContent: detailContent
      };
      return React.createElement(React.Fragment, null, React.createElement(Card, _extends({
        title: get(locale, 'message'),
        extra: React.createElement("a", {
          onClick: _this.toMoreStations
        }, extraTxt),
        style: {
          width: 300
        }
      }, cardProps, {
        loading: loading
      }), data.map(function (item, index) {
        return React.createElement("div", {
          className: "station-news--card-Wrapper",
          key: item.messageId,
          onClick: function onClick(e) {
            return _this.onClick(e, item.messageId);
          }
        }, React.createElement("li", null, React.createElement("div", {
          className: "station-news--card-top"
        }, React.createElement("div", null, avatar), React.createElement("div", {
          className: "station-news--card-right"
        }, React.createElement("h4", {
          className: "station-news--card-title"
        }, listTitle ? item[listTitle] : ''), description ? React.createElement("p", {
          className: "station-news--card-content",
          dangerouslySetInnerHTML: {
            __html: item[description]
          }
        }) : '')), React.createElement("div", {
          className: "station-news--card-bottom"
        }, React.createElement("p", null, contentRight ? item[contentRight] : ''))), data.length === index + 1 ? null : React.createElement(Divider, null));
      })), visible ? React.createElement(Detail, _extends({
        locale: locale
      }, propsToDetail)) : null);
    };

    _this.state = {
      data: [],
      loading: false,
      visible: false,
      messageId: ''
    };
    return _this;
  }

  _createClass(StationNewsCard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleGet();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.reload !== this.props.reload) {
        this.handleGet();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(SeidLocaleReceiver, {
        defaultLocale: defaultLocale,
        componentName: "StationNewsCard"
      }, this.renderCom);
    }
  }]);

  return StationNewsCard;
}(PureComponent);

StationNewsCard.defaultProps = {
  listIconStyle: {},
  avatar: React.createElement(Icon, {
    type: "mail",
    style: {
      fontSize: 16,
      marginTop: 4
    }
  }),
  listTitle: 'messageTitle',
  description: 'messageContent',
  contentRight: 'publishDate',
  getNewsDetailUrlRequestMethod: 'get',
  showNum: 3
};
export default StationNewsCard;
//# sourceMappingURL=index.js.map
