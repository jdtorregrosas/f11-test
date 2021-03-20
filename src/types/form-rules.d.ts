import { Rule } from 'rc-field-form/lib/interface';

type FormRules = {
  name: Rule[];
  email: Rule[];
  topic: Rule[];
  description: Rule[];
  softwareErrorVersion: Rule[];
  callback: Rule[];
};

export default FormRules;
