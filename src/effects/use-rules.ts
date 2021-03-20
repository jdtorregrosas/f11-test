import { Rule } from 'rc-field-form/lib/interface';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormRules from '../types/form-rules';

const useRules = (): FormRules => {
  const { t } = useTranslation();

  const [rules, setRules] = useState<FormRules>({
    name: [],
    email: [],
    topic: [],
    description: [],
    softwareErrorVersion: [],
    callback: [],
  });

  useEffect(() => {
    const rules: FormRules = {
      name: [{ required: true, message: t('form.errors.name_required') }],
      email: [
        { required: true, message: t('form.errors.email_required') },
        {
          type: 'email',
          message: t('form.errors.email_invalid'),
        } as Rule,
      ],
      topic: [{ required: true }],
      description: [{ required: true }],
      softwareErrorVersion: [
        { required: true, message: t('form.errors.version_required') },
        {
          pattern: /[0-9]+\.[0-9]+\.[0-9]+/,
          message: t('form.errors.version_invalid'),
        },
      ],
      callback: [
        {
          required: true,
          pattern: /^[0-9()-]+$/,
          message: t('form.errors.phone_invalid'),
        },
      ],
    };

    setRules(rules);
  }, [t]);

  return rules;
};

export default useRules;
