import I18n from '@utils/I18n';

export class Phone {
  constructor(message = false, params = {}) {
    this.message = I18n.t('validation.phone');
    this.params = params;

    if (message) {
      this.message = I18n.t(message);
    }
  }

  validate(value) {
    const regex = /^(\+62|62|0)(\d{3,4}-?){2}\d{3,4}$/;

    return regex.test(value) ? null : this.message;
  }
}

export default Phone;
