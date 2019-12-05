/**
 * create by hy ON 2019/12/5
 */
let store = {
  name: 'demo',
  style: 'left'
}
let reducer = function(store, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...store,
        name: action.data
      }
    case 'SET_STYLE':
      return {
        ...store,
        style: action.data
      }
  }
}
//订阅器
const subscribe = []

function subscribeFn1() {
  console.log(store.name)
}

function subscribeFn2() {
  console.log(store)
}

subscribe.push(subscribeFn1, subscribeFn2)

//监听器
const listener = () => subscribe.forEach(item => item())

//分发器
function dispatch(type, value) {
  store = reducer(store, { type, data: value })
  listener();
}

dispatch('SET_NAME', new Date().toTimeString());
