/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

//检查是否是一个简单对象，即凡不是new Object()或者字面量的方式构建出来的对象都不是简单对象
//所谓的简单对象就是该对象的__proto__等于Object.prototype,
export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj
  //循环调用 直到取到最底层的原型
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  //判断obj的原型是否和Object的原型相同
  return Object.getPrototypeOf(obj) === proto
}
