import { Form, Input, Button, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styles from './support-form.module.scss';
import { useTranslation } from 'react-i18next';
import useRules from '../../effects/use-rules';
import FormRules from '../../types/form-rules';
import logo from '../../assets/img/f11-logo.png';
import Title from 'antd/lib/typography/Title';
import { useHistory } from 'react-router';

const { Option } = Select;

const formMainContentLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const formFooterLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SupportForm = () => {
  const { titleWrapper, image, title, formWrapper } = styles;
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const rules: FormRules = useRules();
  const history = useHistory();

  const onFinish = (values: any) => {
    const softwareErrorVersion = form.getFieldValue('softwareErrorVersion');
    const phone = form.getFieldValue('phone');
    const email = form.getFieldValue('email');
    const name = form.getFieldValue('name');
    const topic = form.getFieldValue('topic');
    const description = form.getFieldValue('description');

    const versionParam = softwareErrorVersion
      ? `&version=${softwareErrorVersion}`
      : '';
    const phoneParam = phone ? `&phone=${phone}` : '';

    history.push(
      `/form-details?name=${name}&email=${email}&topic=${topic}&description=${description}${versionParam}${phoneParam}`
    );
  };

  return (
    <div className={formWrapper}>
      <div className={titleWrapper}>
        <img className={image} src={logo} alt="f11-logo" />
        <Title level={2} className={title}>
          {t('title')}
        </Title>
      </div>
      <Form
        {...formMainContentLayout}
        form={form}
        name="support-form"
        onFinish={onFinish}
        initialValues={{
          topic: 'generalRequest',
        }}
      >
        <Form.Item name="name" label={t('form.name')} rules={rules.name}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label={t('form.email')} rules={rules.email}>
          <Input />
        </Form.Item>
        <Form.Item name="topic" label={t('form.topic')} rules={rules.topic}>
          <Select>
            <Option value="generalRequest">
              {t('form.topics.general_request')}
            </Option>
            <Option value="softwareError">
              {t('form.topics.software_error')}
            </Option>
            <Option value="callback">{t('form.topics.callback')}</Option>
          </Select>
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.topic !== currentValues.topic
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('topic') === 'softwareError' ? (
              <Form.Item
                name="softwareErrorVersion"
                label="Version"
                rules={rules.softwareErrorVersion}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.topic !== currentValues.topic
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('topic') === 'callback' ? (
              <Form.Item
                name="phone"
                label={t('form.phone')}
                rules={rules.callback}
              >
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item
          name="description"
          label={t('form.description')}
          rules={rules.description}
        >
          <TextArea rows={6} />
        </Form.Item>
        <Form.Item {...formFooterLayout}>
          <Button type="primary" htmlType="submit">
            {t('form.submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SupportForm;
