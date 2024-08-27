import { Space } from 'antd';
import { Title } from 'components/typography';
import { Form } from './form';
import { commonData } from 'pages/application-view/constants';
import { FormItem } from './form-item';

export const GeneralApplicationInfo = () => {
  const form = Form.useFormInstance();
  const applicationNumber = Form.useWatch(['generalApplicationInfo', 'applicationN'], { form, preserve: true });
  const creationDate = Form.useWatch(['generalApplicationInfo', 'creationDate'], { form, preserve: true });
  // eslint-disable-next-line no-console

  return (
    <>
      <Space style={{ justifyContent: 'end', display: 'flex', gap: '20px' }}>
        <FormItem name={[commonData, 'num']}>
          <Title>Դիմումի N {applicationNumber}</Title>
        </FormItem>
        <FormItem name={[commonData, 'dateCreated']}>
          <Title>{creationDate}թ.</Title>
        </FormItem>
      </Space>
    </>
  );
};
