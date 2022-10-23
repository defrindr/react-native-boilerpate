import I18n from '@utils/I18n';

export class Min {
  constructor(min, message = false, params = {}) {
    this.min = min;
    this.message = I18n.t('validation.min', {min});

    if (message) {
      this.message = I18n.t(message, {...params, min});
    }
  }

  validate(value) {
    const type = typeof value;

    if (type === 'string') {
      return value.length >= this.min ? null : this.message;
    } else if (type === 'number') {
      return value >= this.min ? null : this.message;
    }

    return this.message;
  }
}

export default Min;
