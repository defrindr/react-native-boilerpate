import id from '@locales/id';
import en from '@locales/en';
import Config from '@config';

class I18N {
  constructor() {
    this.locale = Config.DEFAULT_LANGUAGE;

    // load dictionary from file
    this.dictionary = {
      id,
      en,
    };
  }

  setLocale(locale) {
    this.locale = locale;
  }

  getLocale() {
    return this.locale;
  }

  _replaceParams(message, params) {
    if (params) {
      for (let key in params) {
        message = message.replaceAll(`{${key}}`, params[key]);
      }
    }

    return message;
  }

  t(key, params = null) {
    let locale = this.getLocale();
    let dictionary = this.dictionary[locale];

    let message = this._replaceParams(dictionary[key] || key, params);
    return message;
  }
}

export default new I18N();
