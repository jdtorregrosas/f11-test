import { Button, Switch } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import routes from '../../constants/routes';
import styles from './navbar.module.scss';

const NavBar = () => {
  const { i18n } = useTranslation();
  const history = useHistory();
  const { header, toggle } = styles;

  const handleChange = (checked: any) => {
    checked ? i18n.changeLanguage('en') : i18n.changeLanguage('de');
  };
  const handleHomeClick = () => {
    history.push(routes.HOME);
  };

  return (
    <Header className={header}>
      <Button onClick={handleHomeClick}>Home</Button>
      <Switch
        className={toggle}
        checkedChildren="English"
        unCheckedChildren="Deutsch"
        defaultChecked
        onChange={handleChange}
      />
    </Header>
  );
};

export default NavBar;
