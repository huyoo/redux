import { wrapMapToPropsConstant, wrapMapToPropsFunc } from './wrapMapToProps'

// 当mapStateToProps是否函数时，即connect的第一个参数是匿名函数
export function whenMapStateToPropsIsFunction(mapStateToProps) {
  return (typeof mapStateToProps === 'function')
    ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps')
    : undefined
}

// 当第一个参数==false时，返回一个空函数
export function whenMapStateToPropsIsMissing(mapStateToProps) {
  return (!mapStateToProps)
    ? wrapMapToPropsConstant(() => ({}))
    : undefined
}

export default [
  whenMapStateToPropsIsFunction,
  whenMapStateToPropsIsMissing
]
