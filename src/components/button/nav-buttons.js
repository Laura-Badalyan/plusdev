import { Col, Row, Space } from 'antd';
import { Button } from '.';

export const NavButtons = ({ canceltext, disabled, submitText, onCancel, showCancelButton = true, onSubmit }) => {
  return (
    <Row align="center" justify="center" style={{ margin: '20px 0' }}>
      <Col span={8}>
        <Space size="middle" align="center" style={{ width: '100%', justifyContent: 'center' }}>
          {showCancelButton && (
            <Button type="default" onClick={onCancel}>
              {canceltext}
            </Button>
          )}

          <Button disabled={disabled} htmlType="submit" type="primary" onClick={onSubmit}>
            {submitText}
          </Button>
        </Space>
      </Col>
    </Row>
  );
};
