import { Button, Card } from 'antd';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import routes from '../../constants/routes';
import styles from './form-details.module.scss';

type FormResponse = {
  name: string;
  email: string;
  topic: string;
  description: string;
  version?: string;
  phone?: string;
};

const FormDetails = () => {
  const {
    backButton,
    summaryItem,
    summaryItemContent,
    summaryItemLabel,
    summaryWrapper,
  } = styles;
  const history = useHistory();
  const { t } = useTranslation();
  const [formResponse, setFormResponse] = useState<FormResponse>({
    name: '',
    description: '',
    email: '',
    topic: '',
  });
  useEffect(() => {
    const query = history.location.search;
    const searchParams = new URLSearchParams(query);
    const name = searchParams.get('name') || '';
    const description = searchParams.get('description') || '';
    const email = searchParams.get('email') || '';
    const topic = searchParams.get('topic') || '';
    const version = searchParams?.get('version') || '';
    const phone = searchParams?.get('phone') || '';

    setFormResponse({
      description,
      email,
      name,
      topic,
      version,
      phone,
    });
  }, [history.location.search]);

  const renderSummary = () => {
    return Object.entries(formResponse).map(
      ([key, value]) =>
        value && (
          <div key={key} className={summaryItem}>
            <Text className={summaryItemLabel} strong>
              {t(`form.${key}`)}:
            </Text>
            <Text className={summaryItemContent}>{value}</Text>
          </div>
        )
    );
  };

  const handleBackButtonClick = () => {
    history.replace(routes.SUPPORT_FORM);
  };

  return (
    <Card>
      <div className={summaryWrapper}>
        <Title level={2}>{t('summary.title')}</Title>
        {renderSummary()}
        <Button className={backButton} onClick={handleBackButtonClick}>
          Try again
        </Button>
      </div>
    </Card>
  );
};

export default FormDetails;
