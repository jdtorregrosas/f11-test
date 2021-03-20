import { Content } from 'antd/lib/layout/layout';
import NavBar from '../navbar';
import SupportForm from '../support-form';
import styles from './app.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../home';
import routes from '../../constants/routes';
import FormDetails from '../form-details';

function App() {
  const { main, mainWrapper } = styles;

  return (
    <div className={mainWrapper}>
      <BrowserRouter>
        <NavBar />
        <Content className={main}>
          <Switch>
            <Route path={routes.SUPPORT_FORM}>
              <SupportForm />
            </Route>
            <Route path={routes.FORM_DETAILS}>
              <FormDetails />
            </Route>
            <Route path={routes.HOME}>
              <Home />
            </Route>
          </Switch>
        </Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
