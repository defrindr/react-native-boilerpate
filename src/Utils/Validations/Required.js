import I18n from '@utils/I18n';

export class Required {
  constructor(message = false, params = {}) {
    this.message = I18n.t('validation.required');
    if (message) {
      this.message = I18n.t(message, {...params});
    }
  }

  validate(value) {
    let type = typeof value;
    if (type === 'string') {
      return value.length > 0 ? null : this.message;
    } else if (type === 'number') {
      return null;
    } else if (type === 'boolean') {
      return null;
    } else if (type === 'object') {
      return value !== null ? null : this.message;
    } else {
      return this.message;
    }
  }
}

export default Required;
