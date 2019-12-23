const hasOwn = Object.prototype.hasOwnProperty

function is(x, y) {
  // 判断x、y绝对相等时，即便xy都是对象，内存地址也指向同一个
  if (x === y) {
    // 绝对相等时，只要有一个不是0，就为true
    return x !== 0 || y !== 0 || 1 / x === 1 / y
  } else {
    // FIXME 需要研究下这里
    // NaN === NaN 为false，可能是判断这个的
    return x !== x && y !== y
  }
}

// 浅层对比对象
export default function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false
  }


  // 数字的keys是索引String
  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)

  if (keysA.length !== keysB.length) return false

  // 循环校验每个属性值是否相等
  for (let i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) ||
        !is(objA[keysA[i]], objB[keysA[i]])) {
      return false
    }
  }

  return true
}
