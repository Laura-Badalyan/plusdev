import { Col, Divider, Row } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import { useAuth } from '../../context/auth-context';
import { Button } from '../button';

export const ManagePage = () => {
  const { logout } = useAuth();

  const logOut = () => {
    logout()
  };


  return (
    <>
      <Row justify="end" align="middle" >
        <Col>
          <Button type="text" onClick={logOut} style={{ padding: '0px 15px' }}>
            <LogoutOutlined style={{ cursor: 'pointer', fontSize: '23px' }} />
          </Button>
        </Col>
      </Row>
      <Divider />
    </>
  );
};

