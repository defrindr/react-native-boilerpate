import I18n from '@utils/I18n';

export class Email {
  constructor(message = false, params = {}) {
    this.message = I18n.t('validation.email');

    if (message) {
      this.message = I18n.t(message, {...params});
    }
  }

  validate(value) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(value) ? null : this.message;
  }
}

export default Email;
