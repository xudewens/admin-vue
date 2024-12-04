export default {
  thousands(num) {
    if (num) {
      let reg = /\d{1,3}(?=(\d{3})+$)/g, n=String(num).split('.')
      return n.length === 1 ? String(n[0]).replace(reg, '$&.') : n[0].replace(reg, '$&.')+'.'+n[1]
    } else {
      return 0
    }
  },
  timeFormat(time) {
    if (time) {
      const date = new Date(time)
      const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 使用24小时制
      }
        return new Intl.DateTimeFormat('en-GB', options).format(date)
    } else {
      return ''
    }
  }
}