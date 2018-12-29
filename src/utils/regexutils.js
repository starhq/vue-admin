/* 是否为合法手机*/
export function isMobile(o) {
  return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(o)
}

/* 是否为合法座机*/
export function isTelphone(o) {
  return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(o)
}

/* 是否为合法身份证*/
export function isIdcard(o) {
  return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(o)
}

/* 密码是否健壮*/
export function isStrongPassword(o) {
  return /^[a-zA-Z]\w{5,17}$/.test(o)
}

/* 是否为邮编*/
export function ispostal(o) {
  return /[1-9]\d{5}(?!\d)/.test(o)
}

/* 是否为qq*/
export function isQQ(o) {
  return /^[1-9][0-9]{4,9}$/.test(o)
}

/* 是否为邮箱*/
export function isEmail(o) {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(o)
}

/* 是否为money(小数点2位)*/
export function isMoney(o) {
  return /^\d*(?:\.\d{0,2})?$/.test(o)
}

/* 是否为url*/
export function isUrl(o) {
  return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(o)
}

/* 是否为ip*/
export function isIp(o) {
  return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(o)
}

/* 是否为date*/
export function isDate(o) {
  return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(o) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(o)
}

/* 是否为数字*/
export function isNumber(o) {
  return /^[0-9]$/.test(o)
}

/* 是否为英文*/
export function isEnglish(o) {
  return /^[a-zA-Z]+$/.test(o)
}

/* 是否为中文*/
export function isChinese(o) {
  return /^[\u4E00-\u9FA5]+$/.test(o)
}

/* 是否为小写*/
export function isLower(o) {
  return /^[a-z]+$/.test(o)
}

/* 是否为大写*/
export function isUpper(o) {
  return /^[A-Z]+$/.test(o)
}

/* 是否为html*/
export function isHtml(o) {
  return /<("[^"]*"|'[^']*'|[^'">])*>/.test(o)
}

/* 严格的身份证校验*/
export function isCardID(sId) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    return false
  }
  // 身份证城市
  const aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  }
  if (!aCity[parseInt(sId.substr(0, 2))]) {
    return false
  }

  const sBirthday = (sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))).replace(/-/g, '/')
  const d = new Date(sBirthday)
  if (sBirthday !== (d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate())) {
    return false
  }

  let sum = 0
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const codes = '10X98765432'
  for (let i = 0; i < sId.length - 1; i++) {
    sum += sId[i] * weights[i];
  }
  const last = codes[sum % 11]
  return sId[sId.length - 1] === last
}
