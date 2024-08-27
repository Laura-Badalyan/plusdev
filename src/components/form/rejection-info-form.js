import { FormItem } from './form-item';
import { Form } from './form';
import { Col, Row } from 'antd';
import { TextArea } from "../input/text-area"

export const RejectionInfo = ({ formItemProp = {}, isFamilyMember = false }) => {
  const prop = isFamilyMember ? ['familyData', 'familyMembers', ...formItemProp.name] : [...formItemProp.name];

  const val = Form.useWatch(prop, { preserve: true });

  return (
    <>
      {val?.length >= 1 ? (
        <FormItem name={prop} label="Մերժման պատճառը" style={{height: '30vh'}}>
          <Row gutter={10} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {val &&
              val.map((item) => {
                return (
                  <Col span={24} key={item}>
                    <TextArea value={item} />
                  </Col>
                );
              })}
          </Row>
        </FormItem>
      ) : (
        <></>
      )}
    </>
  );
};
