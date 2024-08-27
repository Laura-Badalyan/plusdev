import { Col, Row } from 'antd';
import { Input } from '../input';
import { FormItem } from './form-item';
import { FormSectionCard } from 'components/card/form-section-card';
import { VerticalSpace } from 'components/space/vertical-space';
import { RejectionInfo } from './rejection-info-form';

export const PersonGeneralData = ({ formItemGeneral = {}, isFamilyMember = false }) => {
  return (
    <>
      {isFamilyMember && (
        <FormSectionCard title="Բանկային տվյալներ">
          <VerticalSpace>
            <Row gutter={10}>
              <Col span={12}>
                <FormItem label="Սպասարկող բանկը" {...formItemGeneral.bankName}>
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="Քարտի համարը" {...formItemGeneral.accountNumber}>
                  <Input />
                </FormItem>
              </Col>
            </Row>
          </VerticalSpace>
        </FormSectionCard>
      )}

      <FormSectionCard title="Ընդհանուր տվյալներ">
        <VerticalSpace>
          <Row gutter={10}>
            <Col span={12}>
              <FormItem label="Ֆունկցիոնալության սահմանափակում" {...formItemGeneral.functionalityRestriction}>
                <Input />
              </FormItem>
            </Col>
            {/* <Col span={12}>
              <FormItem label="Հաշվեհամար" rules={[{ required: true }]} {...formItemGeneral.bankAccount}>
                <Input />
              </FormItem>
            </Col> */}
            <Col span={12}>
              <FormItem label="Հաշմանդամության կարգ " rules={[{ required: true }]} {...formItemGeneral.disabilityScore}>
                <Input />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Վճարման ենթակա գումար" {...formItemGeneral.amount}>
                <Input />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Վճարման մեթոդը" rules={[{ required: true }]} {...formItemGeneral.paymentMethod}>
                <Input />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="Կարգավիճակ" {...formItemGeneral.status}>
                <Input />
              </FormItem>
            </Col>
          </Row>
          <RejectionInfo formItemProp={formItemGeneral.rejectionReasons} isFamilyMember={isFamilyMember} />
        </VerticalSpace>
      </FormSectionCard>
    </>
  );
};
