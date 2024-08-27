import { Col, Input, Row } from 'antd';
import { VerticalSpace } from '../space/vertical-space';
import { FormItem } from './form-item';
import { FormSectionCard } from 'components/card/form-section-card';

export const PersonAddress = ({ formItemAddress = {} }) => {
  return (
    <FormSectionCard title="Փաստացի բնակության հասցե">
      <VerticalSpace>
        <Row gutter={10}>
          <Col span={12}>
            <FormItem label="Մարզ" {...formItemAddress.regionId}>
              <Input />
            </FormItem>
            <FormItem hidden {...formItemAddress.region} />
          </Col>
          <Col span={12}>
            <FormItem label="Համայնք" {...formItemAddress.communityId}>
              <Input />
            </FormItem>
            <FormItem hidden {...formItemAddress.community} />
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <FormItem label="Բնակավայր" {...formItemAddress.settlementId}>
              <Input />
            </FormItem>
            <FormItem hidden {...formItemAddress.settlement} />
          </Col>
          <Col span={12}>
            <FormItem label="Փողոց" {...formItemAddress.street}>
              <Input />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <FormItem label="Կառույցի տեսակ" {...formItemAddress.buildingType}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Կառույցի համար" {...formItemAddress.building}>
              <Input />
            </FormItem>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col span={12}>
            <FormItem label="Բնակարան" {...formItemAddress.apartment}>
              <Input />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="Փոստային դասիչ" {...formItemAddress.postIndex}>
              <Input />
            </FormItem>
          </Col>
        </Row>
      </VerticalSpace>
    </FormSectionCard>
  );
};
