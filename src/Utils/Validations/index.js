// mapping all the validations
import Email from '@validations/Email';
import Required from '@validations/Required';
import Min from '@validations/Min';
import Max from '@validations/Max';
import Phone from '@validations/Phone';
import Match from '@validations/Match';

const VALIDATION = {
  Email,
  Required,
  Min,
  Max,
  Phone,
  Match
};

export default VALIDATION;
