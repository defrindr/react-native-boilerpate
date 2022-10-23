import I18n from "@utils/I18n";

class Match {
    constructor(target, message = false, params = {}) {
        const { value = null, field = null } = target;

        this.value = value;
        this.field = field;

        this.params = { ...params, field };
        this.message = I18n.t('validation.match', this.params);
        
        if (message) {
            this.message = I18n.t(message, this.params);
        }
    }

    validate(value) {
        return value === this.value ? null : this.message;
    }
}

export default Match;