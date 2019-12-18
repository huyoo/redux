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
import Button from 'antd/es/button';
import Form from 'antd/es/form/Form';
import Select from 'antd/es/select';
import Input from 'antd/es/input';
import Card from 'antd/es/card';
import message from 'antd/es/message';
import Divider from 'antd/es/divider';
import DatePicker from 'antd/es/date-picker';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import CreateAndEdit from './createAndEdit';
import ExTable from '../ext-table';
import { request } from '../utils';
var Option = Select.Option;
var Search = Input.Search;
var RangePicker = DatePicker.RangePicker;
var defaultRequestMethodGet = 'get'; // 默认请求方式

var defaultRequestMethodPost = 'post'; // 改变消息状态的默认请求方式

var defaultRequestMethodDel = 'delete'; // 改变消息状态的默认请求方式
// 转义消息状态

export var handleMessageStatus = function handleMessageStatus(status) {
  switch (status) {
    case '0':
      return '未读';

    case '1':
      return '已读';

    case '2':
      return '删除';

    default:
      return '无';
  }
}; // 转义消息类型

export var handleMessageType = function handleMessageType(status) {
  switch (status) {
    case '0':
      return '系统消息';

    case '1':
      return '群组消息 ';

    case '2':
      return '个人消息';

    default:
      return '无';
  }
};

var StationNewsManage =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(StationNewsManage, _PureComponent);

  function StationNewsManage(props) {
    var _this;

    _classCallCheck(this, StationNewsManage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StationNewsManage).call(this, props));
    _this.defaultActionColumns = [{
      title: '操作',
      key: 'action',
      dataIndex: 'action',
      width: 100,
      align: 'center',
      render: function render(_, record) {
        return React.createElement("span", null, React.createElement("a", {
          key: "look",
          onClick: function onClick() {
            return _this.lookDetail(record, 'look');
          }
        }, "\u67E5\u770B"), React.createElement(Divider, {
          type: "vertical"
        }), React.createElement("a", {
          key: "edit",
          onClick: function onClick() {
            return _this.lookDetail(record, 'edit');
          }
        }, "\u7F16\u8F91"));
      }
    }];
    _this.defaultColumns = [{
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      width: 80,
      align: 'center',
      render: function render(_, __, index) {
        return index + 1;
      }
    }, {
      title: '日期',
      dataIndex: 'publishDate',
      key: 'publishDate',
      width: 200,
      align: 'center'
    }, {
      title: '类型',
      dataIndex: 'messageType',
      key: 'messageType',
      width: 130,
      align: 'center',
      render: function render(text) {
        return handleMessageType(text);
      }
    }, {
      title: '标题',
      dataIndex: 'messageTitle',
      key: 'messageTitle'
    }, {
      title: '发布人',
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
          },
          selectedRows: []
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

    _this.lookDetail = function (record, sign) {
      var title = sign === 'look' ? '查看消息' : '编辑消息';

      _this.setState({
        visible: true,
        currentRecord: record,
        title: title,
        sign: sign
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

    }; // 关闭模态框


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

    _this.handleCreate = function () {
      _this.setState({
        title: '发布消息',
        visible: true,
        sign: 'create'
      });
    }; // 删除消息


    _this.handleDel = function () {
      var _this$props2 = _this.props,
          delNewsUrl = _this$props2.delNewsUrl,
          delNewsRequestMethod = _this$props2.delNewsRequestMethod;
      var selectedRows = _this.state.selectedRows;

      if (!selectedRows.length) {
        message.warn('请勾选要彻底删除的项');
        return;
      }

      _this.setState({
        loading: true
      });

      request({
        url: delNewsUrl,
        method: delNewsRequestMethod,
        params: {
          messageIds: selectedRows.map(function (row) {
            return row.messageId;
          }).toString()
        }
      }).then(function (res) {
        message.success(res.message);

        _this.onRefresh();
      })["catch"](function (error) {
        _this.setState({
          loading: false
        });

        console.error('error', error);
      });
    };

    _this.onRefresh = function () {
      var visible = _this.state.visible;

      if (visible) {
        _this.handleCancel();
      }

      _this.handleGet({
        pageIndex: 0
      });
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
      searchValues: {},
      // selectedRowKeys: [],
      selectedRows: [],
      currentRecord: undefined,
      title: '',
      sign: ''
    };
    return _this;
  }

  _createClass(StationNewsManage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleGet();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          form = _this$props3.form,
          _this$props3$columns = _this$props3.columns,
          columns = _this$props3$columns === void 0 ? this.defaultColumns : _this$props3$columns,
          getNewsDetailUrl = _this$props3.getNewsDetailUrl,
          getNewsDetailUrlRequestMethod = _this$props3.getNewsDetailUrlRequestMethod,
          modalProps = _this$props3.modalProps,
          detailContent = _this$props3.detailContent,
          saveNewsUrl = _this$props3.saveNewsUrl,
          saveNewsRequestMethod = _this$props3.saveNewsRequestMethod,
          editNewsUrl = _this$props3.editNewsUrl,
          editNewsRequestMethod = _this$props3.editNewsRequestMethod,
          orgUrl = _this$props3.orgUrl,
          orgRequestMethod = _this$props3.orgRequestMethod,
          uploadDocumentsAPI = _this$props3.uploadDocumentsAPI,
          downloadDocumentAPI = _this$props3.downloadDocumentAPI,
          EDM_URL = _this$props3.EDM_URL,
          receiverUrl = _this$props3.receiverUrl,
          receiverUrlRequestMethod = _this$props3.receiverUrlRequestMethod,
          userId = _this$props3.userId,
          initModalData = _this$props3.initModalData;
      var _this$state = this.state,
          visible = _this$state.visible,
          loading = _this$state.loading,
          currentRecord = _this$state.currentRecord,
          selectedRows = _this$state.selectedRows,
          title = _this$state.title,
          sign = _this$state.sign;
      var finalColumns = this.defaultActionColumns.concat(columns);
      var getFieldDecorator = form.getFieldDecorator;
      var data = this.state.data;
      var newsType = React.createElement(Select, {
        style: {
          width: '100%'
        },
        allowClear: true,
        onChange: function onChange(value) {
          _this2.onSearch(value, 'messageType');
        }
      }, React.createElement(Option, {
        value: 0
      }, "\u7CFB\u7EDF\u6D88\u606F"), React.createElement(Option, {
        value: 1
      }, "\u7FA4\u7EC4\u6D88\u606F"), React.createElement(Option, {
        value: 2
      }, "\u4E2A\u4EBA\u6D88\u606F"), React.createElement(Option, {
        value: ""
      }, "\u5168\u90E8"));
      var propsToDetail = {
        data: initModalData,
        getNewsDetailUrl: getNewsDetailUrl,
        getNewsDetailUrlRequestMethod: getNewsDetailUrlRequestMethod,
        visible: visible,
        sign: sign,
        title: title,
        onCancel: this.handleCancel,
        onRefresh: this.onRefresh,
        params: {
          messageId: currentRecord ? currentRecord.messageId : undefined
        },
        modalProps: modalProps,
        detailContent: detailContent,
        saveNewsUrl: saveNewsUrl,
        saveNewsRequestMethod: saveNewsRequestMethod,
        editNewsUrl: editNewsUrl,
        editNewsRequestMethod: editNewsRequestMethod,
        orgUrl: orgUrl,
        orgRequestMethod: orgRequestMethod,
        uploadDocumentsAPI: uploadDocumentsAPI,
        downloadDocumentAPI: downloadDocumentAPI,
        EDM_URL: EDM_URL,
        receiverUrl: receiverUrl,
        receiverUrlRequestMethod: receiverUrlRequestMethod,
        userId: userId
      };
      return React.createElement(Card, null, React.createElement("div", {
        className: "station-news-manage-action-btn"
      }, React.createElement("div", {
        className: "station-manage-btn-left"
      }, React.createElement(Button, {
        onClick: function onClick() {
          return _this2.handleCreate();
        },
        value: "1",
        type: "primary",
        key: "haveRead"
      }, "\u53D1\u5E03"), React.createElement(Button, {
        onClick: function onClick() {
          return _this2.handleDel();
        },
        value: "2",
        key: "del",
        style: {
          marginLeft: 8
        }
      }, "\u5F7B\u5E95\u5220\u9664")), React.createElement(Form, {
        className: "station-manage-btn-right"
      }, React.createElement(Row, {
        style: {
          width: '100%'
        },
        type: "flex",
        justify: "end"
      }, React.createElement(Col, {
        span: 5
      }, React.createElement(Form.Item, {
        labelCol: {
          span: 8
        },
        wrapperCol: {
          span: 16
        },
        label: "\u6D88\u606F\u7C7B\u578B"
      }, getFieldDecorator('messageType')(newsType))), React.createElement(Col, {
        span: 8
      }, React.createElement(Form.Item, {
        labelCol: {
          span: 5
        },
        wrapperCol: {
          span: 18
        },
        label: "\u53D1\u9001\u65F6\u95F4"
      }, getFieldDecorator('pDateBegin')(React.createElement(RangePicker, {
        allowClear: true,
        onChange: function onChange(value) {
          _this2.onSearch(value, 'pDateBegin');
        }
      })))), React.createElement(Col, {
        span: 7
      }, React.createElement(Form.Item, null, getFieldDecorator('keyword')(React.createElement(Search, {
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
        className: "whole-width",
        allowClear: true,
        onSearch: function onSearch(value) {
          return _this2.onSearch(value, 'keyword');
        },
        onChange: function onChange(e) {
          return _this2.handleClearValue(e, 'keyword');
        }
      }))))))), React.createElement(ExTable, {
        selectedRows: selectedRows,
        columns: finalColumns,
        data: data,
        rowKey: "messageId",
        loading: loading,
        onChange: this.onTablePageChange
      }), visible ? React.createElement(CreateAndEdit, propsToDetail) : null);
    }
  }]);

  return StationNewsManage;
}(PureComponent);

StationNewsManage.defaultProps = {
  getNewsListRequestMethod: defaultRequestMethodGet,
  getNewsDetailUrlRequestMethod: defaultRequestMethodGet,
  saveNewsRequestMethod: defaultRequestMethodPost,
  editNewsRequestMethod: defaultRequestMethodPost,
  delNewsRequestMethod: defaultRequestMethodDel,
  orgRequestMethod: defaultRequestMethodGet,
  receiverUrlRequestMethod: 'post'
}; // @ts-ignore

export default Form.create()(StationNewsManage);
//# sourceMappingURL=index.js.map
