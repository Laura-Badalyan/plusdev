import { FormSectionCard } from 'components/card/form-section-card';
import { FormItem } from './form-item';
import { Col, Row } from 'antd';
import { Input } from '../input';

export const HasMemberBankData = ({ formItemProp }) => {
  return (
    <FormSectionCard title="Բանկային տվյալներ">
      <Row gutter={10}>
        <Col span={12}>
          <FormItem label="Սպասարկող բանկը" {...formItemProp?.bankName}>
            <Input />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="Քարտի համարը" {...formItemProp?.accountNumber}>
            <Input />
          </FormItem>
        </Col>
      </Row>
    </FormSectionCard>
  );
};
