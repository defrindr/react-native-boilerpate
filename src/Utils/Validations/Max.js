import I18n from '@utils/I18n';

export class Max {
  constructor(max, message = false, params = {}) {
    this.max = max;
    this.message = I18n.t('validation.max', {max});

    if (message) {
      this.message = I18n.t(message, {...params, max});
    }
  }

  validate(value) {
    const type = typeof value;

    if (type === 'string') {
      return value.length <= this.max ? null : this.message;
    } else if (type === 'number') {
      return value <= this.max ? null : this.message;
    }

    return this.message;
  }
}

export default Max;
