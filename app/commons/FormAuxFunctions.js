import emailValidator from 'email-validator'

export default {
  isRFC (item) {
    const valid = '^[A-Za-z]{3,4}[0-9]{6}[A-Za-z0-9]{3}?$'
    const validRfc = new RegExp(valid)
    return item.length === 0 ? '' : item.match(validRfc) ? '' : 'RFC invalido'
  },
  isEmail (item) {
    return item.length === 0 ? '' : emailValidator.validate(item) ? '' : 'Formato email invalido'
  },
  hasText (item) {
    return item.length === 0 ? '' : item.length > 3 ? '' : 'Requerido'
  },
  errorTextMessage (item, type) {
    if (type === 'rfc') return this.isRFC(item)
    if (type === 'text') return this.hasText(item)
    if (type === 'email') return this.isEmail(item)
  }
}
