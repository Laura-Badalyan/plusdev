import { Col, Form, Row, notification } from 'antd';

import { useSignIn } from '../../api/auth/use-sign-in';
import { Navigate } from 'react-router-dom';
import { VerticalSpace } from '../../components/space/vertical-space';
import { PATHS } from '../../helpers/constants';
import { useAuth } from '../../context/auth-context';
import { LoginTab } from '../../components/tabs/login-tab';
import { SigninForm } from './form';

export const SignIn = () => {
  const [form] = Form.useForm();
  const { user, login } = useAuth();

  const { mutate, isLoading } = useSignIn({
    onSuccess: ({ data }) => {
      login({
        user: data,
        access_token: data.accessToken,
      });
    },
    onError: (error) => {
      notification.error({
        description: error?.response?.data?.message,
        placement: 'topRight',
        duration: 1.5,
      });
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };
  if (user) {
    return <Navigate to={PATHS.APPLICATIONS} replace />;
  }
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col span={8}>
        <Form name="signin" form={form} onFinish={onFinish} autoComplete="off" layout="vertical" requiredMark={false}>
          <VerticalSpace size="large">
            <div>
              <LoginTab
                items={[
                  {
                    key: '1',
                    label: 'Մուտք',
                    children: <SigninForm isLoading={isLoading} />,
                  },
                ]}
              />
            </div>
          </VerticalSpace>
        </Form>
      </Col>
    </Row>
  );
};
