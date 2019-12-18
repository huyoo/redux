function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import Button from 'antd/es/button';
import Form from 'antd/es/form/Form';
import Select from 'antd/es/select';
import Input from 'antd/es/input';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Card from 'antd/es/card';
import Icon from 'antd/es/icon';
import DatePicker from 'antd/es/date-picker';
import message from 'antd/es/message';
import Detail from './detail';
import StandardTable from '../ext-table';
import { request } from '../utils';
import defaultLocale from './locale';
import SeidLocaleReceiver from '../seid-locale-receiver';
var ButtonGroup = Button.Group;
var Option = Select.Option;
var RangePicker = DatePicker.RangePicker;
var Search = Input.Search;
var defautlRequestMethod = 'get'; // 默认请求方式

var defautlNewsStatusRequestMethod = 'put'; // 改变消息状态的默认请求方式
// 转义消息状态

export var handleMessageStatus = function handleMessageStatus(status, locale) {
  switch (status) {
    case '0':
      return get(locale, 'unread');

    case '1':
      return get(locale, 'read');

    case '2':
      return get(locale, 'deleted');

    default:
      return get(locale, 'none');
  }
}; // 转义消息类型

export var handleMessageType = function handleMessageType(status, locale) {
  switch (status) {
    case '0':
      return get(locale, 'systemMessage');

    case '1':
      return get(locale, 'groupMessage');

    case '2':
      return get(locale, 'personalMessage');

    default:
      return get(locale, 'none');
  }
};

var StationNewsList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StationNewsList, _PureComponent);

  function StationNewsList(props) {
    var _this;

    _classCallCheck(this, StationNewsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StationNewsList).call(this, props));
    _this.defaultActionColumns = [{
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      width: 50,
      align: 'center',
      render: function render(_, record) {
        return React.createElement("span", null, React.createElement("a", {
          key: "look",
          onClick: function onClick(event) {
            event.preventDefault();

            _this.lookDetail(record);
          }
        }, "\u67E5\u770B"));
      }
    }];
    _this.defaultColumns = [{
      title: get(_this.locale, 'index'),
      dataIndex: 'index',
      key: 'index',
      width: 80,
      align: 'center',
      render: function render(_, __, index) {
        return index + 1;
      }
    }, {
      title: get(_this.locale, 'status'),
      dataIndex: 'messageStatus',
      key: 'messageStatus',
      width: 120,
      align: 'center',
      render: function render(text, record) {
        return React.createElement("div", null, handleMessageStatus(text, _this.locale), record.messageAttachment ? React.createElement(Icon, {
          type: "link",
          style: {
            color: 'rgba(0,0,0,0.45)',
            marginLeft: 2
          }
        }) : null);
      }
    }, {
      title: get(_this.locale, 'date'),
      dataIndex: 'publishDate',
      key: 'publishDate',
      width: 200,
      align: 'center'
    }, {
      title: get(_this.locale, 'category'),
      dataIndex: 'messageType',
      key: 'messageType',
      width: 130,
      align: 'center',
      render: function render(text) {
        return handleMessageType(text, _this.locale);
      }
    }, {
      title: get(_this.locale, 'title'),
      dataIndex: 'messageTitle',
      key: 'messageTitle'
    }, {
      title: get(_this.locale, 'publisher'),
      dataIndex: 'publisherNick',
      key: 'publisherNick',
      width: 160,
      align: 'center'
    }]; // 获取查询列表的参数(分页信息和查询参数)

    _this.getQueryParams = function () {
      var searchValues = _this.state.searchValues;
      return _extends(_extends({}, _this.getInitPagination()), searchValues);
    }; // 获取未处理的站内消息


    _this.handleGet = function () {
      var extraParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          getNewsListUrl = _this$props.getNewsListUrl,
          getNewsListParams = _this$props.getNewsListParams,
          getNewsListRequestMethod = _this$props.getNewsListRequestMethod;
      if (!getNewsListRequestMethod) return;

      _this.setState({
        loading: true
      });

      request({
        method: getNewsListRequestMethod,
        url: getNewsListUrl,
        params: _extends(_extends(_extends({}, _this.getQueryParams()), getNewsListParams), extraParams)
      }).then(function (res) {
        var _res$data = res.data,
            data = _res$data === void 0 ? {} : _res$data;

        _this.setState({
          loading: false,
          data: {
            list: data.list || [],
            pagination: {
              current: data.pageNum,
              pageSize: data.pageSize,
              total: data.total
            }
          }
        });
      })["catch"](function (error) {
        _this.setState({
          loading: false
        });

        console.error('error', error);
      });
    }; // 获取当前的页码信息


    _this.getInitPagination = function () {
      var _this$state$data$pagi = _this.state.data.pagination,
          pagination = _this$state$data$pagi === void 0 ? {} : _this$state$data$pagi;
      if (!pagination) return;
      var _pagination$current = pagination.current,
          current = _pagination$current === void 0 ? 1 : _pagination$current,
          pageSize = pagination.pageSize;
      return {
        pageIndex: current - 1,
        pageSize: pageSize
      };
    };

    _this.lookDetail = function (record) {
      _this.setState({
        visible: true,
        currentRecord: record
      });
    }; // 查询


    _this.onSearch = function (value, id) {
      var searchValues = _this.state.searchValues;
      var params = {};

      if (id === 'pDateBegin') {
        params = {
          pDateBegin: value.length ? value[0].format('YYYY-MM-DD 00:00:00') : undefined,
          pDateEnd: value.length ? value[1].format('YYYY-MM-DD 23:59:59') : undefined
        };
      } else {
        params = _defineProperty({}, id, value);
      }

      _this.setState({
        searchValues: _extends(_extends({}, searchValues), params)
      }, function () {
        _this.handleGet({
          pageIndex: 0
        });
      }); // 调用接口查询数据

    };

    _this.getPagination = function () {
      var data = _this.state.data;
      var pagination = data.pagination;
      return pagination ? {
        pageSize: pagination.pageSize,
        current: pagination.current
      } : false;
    };

    _this.handleCancel = function () {
      _this.setState({
        visible: false
      });
    };

    _this.onTablePageChange = function (_ref) {
      var current = _ref.current,
          pageSize = _ref.pageSize;
      var data = _this.state.data;

      _this.setState({
        data: _extends(_extends({}, data), {
          pagination: {
            current: current,
            pageSize: pageSize
          }
        })
      }, function () {
        _this.handleGet();
      });
    };

    _this.handleSetStatus = function (value) {
      var getNewsListParams = _this.props.getNewsListParams;
      var selectedRows = _this.state.selectedRows;

      if (!selectedRows.length) {
        message.warn(get(_this.locale, 'processWarning'));
        return;
      }

      var messageIds = selectedRows.map(function (item) {
        return item.messageId;
      });
      var params = {
        userId: getNewsListParams.userId,
        messageIds: messageIds.toString(),
        messageStatus: value
      };

      _this.handleEditType(params);
    }; // 修改消息类型


    _this.handleEditType = function (params) {
      var _this$props2 = _this.props,
          setNewsStatusUrl = _this$props2.setNewsStatusUrl,
          setNewsStatusUrlRequestMethod = _this$props2.setNewsStatusUrlRequestMethod;
      if (!setNewsStatusUrlRequestMethod) return;

      _this.setState({
        loading: true
      });

      request({
        method: setNewsStatusUrlRequestMethod,
        url: setNewsStatusUrl,
        params: params
      }).then(function () {
        message.success(get(_this.locale, 'successful'));

        _this.setState({
          loading: false,
          selectedRows: []
        }, function () {
          _this.handleGet({
            pageIndex: 0
          });
        });
      })["catch"](function (error) {
        _this.setState({
          loading: true
        });

        console.error('error', error);
      });
    }; // 获取表格的选中项


    _this.onSelectRow = function (selectedRows) {
      _this.setState({
        selectedRows: selectedRows
      });
    }; // 清空标题搜索值


    _this.handleClearValue = function (e, id) {
      var value = e.target.value;

      if (isEmpty(value)) {
        _this.onSearch('', id);
      }
    };

    _this.renderCom = function (locale) {
      var _this$props3 = _this.props,
          form = _this$props3.form,
          _this$props3$columns = _this$props3.columns,
          columns = _this$props3$columns === void 0 ? _this.defaultColumns : _this$props3$columns,
          getNewsDetailUrl = _this$props3.getNewsDetailUrl,
          getNewsListParams = _this$props3.getNewsListParams,
          getNewsDetailUrlRequestMethod = _this$props3.getNewsDetailUrlRequestMethod,
          modalProps = _this$props3.modalProps,
          detailContent = _this$props3.detailContent;
      var _this$state = _this.state,
          visible = _this$state.visible,
          loading = _this$state.loading,
          currentRecord = _this$state.currentRecord,
          selectedRows = _this$state.selectedRows;

      var finalColumns = _this.defaultActionColumns.concat(columns);

      var getFieldDecorator = form.getFieldDecorator;
      var data = _this.state.data;
      var newsType = React.createElement(Select, {
        className: "whole-width",
        allowClear: true,
        onChange: function onChange(value) {
          _this.onSearch(value, 'messageType');
        }
      }, React.createElement(Option, {
        value: 0
      }, get(locale, 'systemMessage')), React.createElement(Option, {
        value: 1
      }, get(locale, 'groupMessage')), React.createElement(Option, {
        value: 2
      }, get(locale, 'personalMessage')), React.createElement(Option, {
        value: ""
      }, get(locale, 'all')));
      var newsState = React.createElement(Select, {
        className: "whole-width",
        allowClear: true,
        onChange: function onChange(value) {
          _this.onSearch(value, 'messageStatus');
        }
      }, React.createElement(Option, {
        value: "0"
      }, get(locale, 'unread')), React.createElement(Option, {
        value: "1"
      }, get(locale, 'read')), React.createElement(Option, {
        value: "2"
      }, get(locale, 'deleted')), React.createElement(Option, {
        value: ""
      }, get(locale, 'all')));
      var propsToDetail = {
        getNewsDetailUrl: getNewsDetailUrl,
        getNewsDetailUrlRequestMethod: getNewsDetailUrlRequestMethod,
        visible: visible,
        onCancel: _this.handleCancel,
        params: {
          userId: getNewsListParams.userId,
          messageId: currentRecord ? currentRecord.messageId : undefined
        },
        modalProps: modalProps,
        detailContent: detailContent
      };
      return React.createElement(Card, null, React.createElement("div", {
        className: "station-news-list-action-btn"
      }, React.createElement("div", {
        className: "station-news-btn-left"
      }, React.createElement(ButtonGroup, null, React.createElement(Button, {
        onClick: function onClick() {
          return _this.handleSetStatus('1');
        },
        value: "1",
        type: "primary",
        key: "haveRead"
      }, get(locale, 'setToRead')), React.createElement(Button, {
        onClick: function onClick() {
          return _this.handleSetStatus('0');
        },
        value: "0",
        key: "unread"
      }, get(locale, 'setToUnread')), React.createElement(Button, {
        onClick: function onClick() {
          return _this.handleSetStatus('2');
        },
        value: "2",
        key: "del"
      }, get(locale, 'delete')))), React.createElement(Form, {
        className: "station-news-btn-right"
      }, React.createElement(Row, {
        style: {
          width: '100%'
        },
        type: "flex",
        justify: "end"
      }, React.createElement(Col, {
        xs: 0,
        sm: 0,
        md: 10,
        lg: 8,
        xl: 5,
        xxl: 6
      }, React.createElement(Form.Item, {
        label: get(locale, 'messageCategory'),
        labelCol: {
          md: 8,
          xl: 9
        },
        wrapperCol: {
          md: 15,
          lg: 16,
          xl: 15
        }
      }, getFieldDecorator('messageType')(newsType))), React.createElement(Col, {
        xs: 0,
        sm: 0,
        lg: 0,
        xl: 8,
        xxl: 6
      }, React.createElement(Form.Item, {
        label: get(locale, 'sendDate'),
        labelCol: {
          span: 8,
          xl: 6
        },
        wrapperCol: {
          span: 16,
          xl: 18
        }
      }, getFieldDecorator('pDateBegin')(React.createElement(RangePicker, {
        allowClear: true,
        onChange: function onChange(value) {
          _this.onSearch(value, 'pDateBegin');
        }
      })))), React.createElement(Col, {
        xs: 0,
        sm: 0,
        md: 0,
        lg: 8,
        xl: 5,
        xxl: 6
      }, React.createElement(Form.Item, {
        label: get(locale, 'messageStatus'),
        labelCol: {
          lg: 8,
          xl: 9
        },
        wrapperCol: {
          md: 15,
          xl: 14
        }
      }, getFieldDecorator('messageStatus', {
        initialValue: '0'
      })(newsState))), React.createElement(Col, {
        xs: 20,
        sm: 20,
        md: 12,
        lg: 8,
        xl: 6,
        xxl: 5
      }, React.createElement(Form.Item, {
        wrapperCol: {
          span: 24
        }
      }, getFieldDecorator('keyword')(React.createElement(Search, {
        placeholder: get(locale, 'typeKeyWords'),
        className: "whole-width",
        allowClear: true,
        onSearch: function onSearch(value) {
          return _this.onSearch(value, 'keyword');
        },
        onChange: function onChange(e) {
          return _this.handleClearValue(e, 'keyword');
        }
      }))))))), React.createElement(StandardTable, {
        selectedRows: selectedRows,
        columns: finalColumns,
        data: data,
        rowKey: "messageId",
        loading: loading,
        onChange: _this.onTablePageChange,
        onRow: function onRow(record) {
          return {
            onClick: function onClick() {
              return _this.lookDetail(record);
            }
          };
        }
      }), visible ? React.createElement(Detail, _extends({
        locale: locale
      }, propsToDetail)) : null);
    };

    _this.state = {
      data: {
        list: [],
        pagination: {
          pageSize: 15,
          current: 1,
          total: 0
        }
      },
      visible: false,
      loading: false,
      searchValues: {
        messageStatus: '0'
      },
      // selectedRow: [],
      selectedRows: [],
      currentRecord: undefined
    };
    return _this;
  }

  _createClass(StationNewsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleGet();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(SeidLocaleReceiver, {
        componentName: "StationNewList",
        defaultLocale: defaultLocale
      }, this.renderCom);
    }
  }]);

  return StationNewsList;
}(PureComponent);

StationNewsList.defaultProps = {
  getNewsListRequestMethod: defautlRequestMethod,
  setNewsStatusUrlRequestMethod: defautlNewsStatusRequestMethod,
  getNewsDetailUrlRequestMethod: defautlRequestMethod
};
export default Form.create()(StationNewsList);
//# sourceMappingURL=index.js.map
