import { Col, Row } from 'antd';
import { Input } from '../input';
import { FormItem } from './form-item';
import { FormSectionCard } from 'components/card/form-section-card';
import { VerticalSpace } from 'components/space/vertical-space';
import { Datepicker } from 'components/datepicker';
import { setFormItemProp } from './family-member-form';
import { FamilyMemberDocs } from './family-member-documents';
import { DecisionModal } from 'components/modal/decision-modal';
import { Split } from 'components/split';

export const PersonMainData = ({
  formItemProp = {},
  title = 'Անձնական տվյալներ',
  decisionMaking = false,
  id = null,
  field = {},
}) => {
  return (
    <FormSectionCard title={title}>
      <VerticalSpace>
        <Row gutter={10}>
          <Col span={12}>
            <FormItem
              label="ՀԾՀ համար/ՀԾՀ չունենալու մասին տեղեկանքի համար"
              rules={[{ required: true }]}
              {...formItemProp.ssn}
            >
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Անուն" rules={[{ required: true }]} {...formItemProp.firstName}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Ազգանուն" rules={[{ required: true }]} {...formItemProp.lastName}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Հայրանուն" {...formItemProp.patronymicName}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Ծննդյան ամսաթիվ" rules={[{ required: true }]} {...formItemProp.birthdate}>
              <Datepicker style={{ width: '100%' }} />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <FormItem label="Էլ.փոստ" {...formItemProp.email}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Հեռախոսահամար" {...formItemProp.phoneNumber}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="ԱՀՓ տեսակ " {...formItemProp.documentType}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="ԱՀՓ համար" {...formItemProp.documentNumber}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Սեռ" {...formItemProp.gender}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Տարիք" {...formItemProp.age}>
              <Input />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <FormItem label="Ազգակցական կապ" {...formItemProp.relativeType} required>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <Split>
              <FamilyMemberDocs field={setFormItemProp(field.name)} />
            </Split>
          </Col>
        </Row>
      </VerticalSpace>

      {decisionMaking && <DecisionModal id={id} />}
    </FormSectionCard>
  );
};
