import { bindActionCreators } from 'redux'

// 使用dispatch包装对象
export default function wrapActionCreators(actionCreators) {
  return dispatch => bindActionCreators(actionCreators, dispatch)
}
