import { Button } from 'antd';
import Paragraph from 'antd/lib/typography/Paragraph';
import Title from 'antd/lib/typography/Title';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import logo from '../../assets/img/f11-logo.png';
import routes from '../../constants/routes';
import styles from './home.module.scss';

const Home = () => {
  const {
    applicantName,
    image,
    imageWrapper,
    buttonWrapper,
    homeWrapper,
  } = styles;

  const history = useHistory();
  const { t } = useTranslation();

  const handleOpenFormClick = () => {
    history.push(routes.SUPPORT_FORM);
  };

  return (
    <div className={homeWrapper}>
      <div className={imageWrapper}>
        <img className={image} src={logo} alt="f11-logo" />
      </div>
      <div className={buttonWrapper}>
        <Button type="primary" onClick={handleOpenFormClick}>
          {t('home.button')}
        </Button>
      </div>
      <Title>Factor 11 - {t('home.entrance_test')}</Title>
      <Title level={2}>
        {t('home.applicant')}&nbsp;
        <span className={applicantName}>Julian Torregrosa</span>
      </Title>
      <Paragraph>
        {t('home.task.main_info')}
        <ul>
          <li>{t('home.task.name')}</li>
          <li>{t('home.task.email')}</li>
          <li>{t('home.task.topic')}</li>
          <li>{t('home.task.description')}</li>
          <li>{t('home.task.button')}</li>
        </ul>
        {t('home.task.additional_info')}
      </Paragraph>
    </div>
  );
};

export default Home;
