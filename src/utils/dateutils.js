import isObj from '@/utils/typeutils'

/**
 * 格式化时间
 *
 * @return {String} 字符串
 *
 * @example formatTime('2018-1-29', '{y}/{m}/{d} {h}:{i}:{s}') // -> 2018/01/29 00:00:00
 * @param time
 * @param cFormat
 */
export function formatTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  if ((time + '').length === 10) {
    time = +time * 1000
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (isObj(time) === 'object') {
    date = time
  } else {
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}

/* 获取某年有多少天*/
export function getYearOfDay(time) {
  const firstDayYear = this.getFirstDayOfYear(time)
  const lastDayYear = this.getLastDayOfYear(time)
  const numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000
  return Math.ceil(numSecond / (24 * 3600))
}

/* 获取某年的第一天*/
export function getFirstDayOfYear(time) {
  const year = new Date(time).getFullYear()
  return year + '-01-01 00:00:00'
}

/* 获取某年最后一天*/
export function getLastDayOfYear(time) {
  const year = new Date(time).getFullYear()
  const dateString = year + '-12-01 00:00:00'
  const endDay = this.getMonthOfDay(dateString)
  return year + '-12-' + endDay + ' 23:59:59'
}

/* 获取某个日期是当年中的第几天*/
export function getDayOfYear(time) {
  const firstDayYear = this.getFirstDayOfYear(time)
  const numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000
  return Math.ceil(numSecond / (24 * 3600))
}

/* 获取某个日期在这一年的第几周*/
export function getDayOfYearWeek(time) {
  const numdays = this.getDayOfYear(time)
  return Math.ceil(numdays / 7)
}

/* 获取某月有多少天*/
export function getMonthOfDay(time) {
  const date = new Date(time)
  const year = date.getFullYear()
  const mouth = date.getMonth() + 1
  let days

  // 当月份为二月时，根据闰年还是非闰年判断天数
  if (mouth === 2) {
    days = (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0) ? 28 : 29
  } else if (mouth === 1 || mouth === 3 || mouth === 5 || mouth === 7 || mouth === 8 || mouth === 10 || mouth === 12) {
    // 月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
    days = 31
  } else {
    // 其他月份，天数为：30.
    days = 30
  }
  return days
}
