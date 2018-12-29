/* 是否为字符串*/
export function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

/* 是否为数字*/
export function isNumber(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

/* 是否为boolean*/
export function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

/* 是否为函数*/
export function isFunction(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

/* 是否为null*/
export function isNull(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

/* 是否为undefined*/
export function isUndefined(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

/* 是否为对象*/
export function isObj(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

/* 是否为数组*/
export function isArray(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

/* 是否为日期对象*/
export function isDate(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

/* 是否为正则*/
export function isRegExp(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

/* 是否为错误对象*/
export function isError(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

/* 是否Symbol函数*/
export function isSymbol(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

/* 是否Promise对象*/
export function isPromise(o) { //
  return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

/* 是否Set对象*/
export function isSet(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

/* 是否false*/
export function isFalse(o) {
  return !o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN'
}

/* 是否true*/
export function isTrue(o) {
  return !this.isFalse(o)
}
