import ReactDOM from 'react-dom';
import App from './components/app';
import 'antd/dist/antd.css';
import i18nService from './services/i18n.service';

i18nService.init18n();

ReactDOM.render(<App />, document.getElementById('root'));
