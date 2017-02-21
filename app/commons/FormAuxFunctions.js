export default {
  isRFC(item) {
    const valid = '^[A-Za-z]{3,4}[0-9]{6}[A-Za-z0-9]{3}?$'
    const validRfc = new RegExp(valid)
    return item.length === 0 ? '' : item.match(validRfc) ? '' : 'RFC invalido'
  },

  errorTextMessage (item, type) {
    if (type === 'rfc') return this.isRFC(item)

    return 'REQ..'
  }
}
