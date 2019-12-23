// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants
// 封装组件连接到redux仓库的订阅逻辑，子组件的嵌套订阅也是一样，这样我们可以确保父组件可以在子组件之前重渲染
// TODO 这是分发数据订阅的功能模块？？？需要看是谁在调用这个方法

const CLEARED = null
const nullListeners = { notify() {} }

// 订阅函数管理集合
function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  let current = []
  let next = []

  return {
    clear() {
      next = CLEARED
      current = CLEARED
    },

    // 通知订阅函数，connect的第一个函数
    notify() {
      const listeners = current = next
      for (let i = 0; i < listeners.length; i++) {
        listeners[i]()
      }
    },

    get() {
      return next
    },

    // 添加订阅函数，参考redux，createStore下的subscribe
    subscribe(listener) {
      let isSubscribed = true
      if (next === current) next = current.slice()
      next.push(listener)

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return
        isSubscribed = false

        if (next === current) next = current.slice()
        next.splice(next.indexOf(listener), 1)
      }
    }
  }
}

// 订阅管理对象
export default class Subscription {
  constructor(store, parentSub, onStateChange) {
    this.store = store
    this.parentSub = parentSub
    this.onStateChange = onStateChange
    this.unsubscribe = null
    this.listeners = nullListeners// nullListeners = { notify() {} }
  }

  // 增加订阅关系
  addNestedSub(listener) {
    this.trySubscribe()
    return this.listeners.subscribe(listener)
  }

  // 通知订阅者更新
  notifyNestedSubs() {
    this.listeners.notify()
  }

  isSubscribed() {
    return Boolean(this.unsubscribe)
  }

  trySubscribe() {
    // 只有unsubscribe为false时才能进行订阅操作
    if (!this.unsubscribe) {
      // 当parentSub不为空时，说明构造函数传入了完整参数，否则直接在store上进行订阅
      this.unsubscribe = this.parentSub
        ? this.parentSub.addNestedSub(this.onStateChange)
        : this.store.subscribe(this.onStateChange)

      this.listeners = createListenerCollection()// 初始化订阅管理器
    }
  }

  // 解除订阅绑定
  tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe()
      this.unsubscribe = null
      this.listeners.clear()
      this.listeners = nullListeners
    }
  }
}
