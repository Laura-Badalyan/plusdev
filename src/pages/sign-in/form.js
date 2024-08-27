import { Col, Row } from 'antd';
import styled from 'styled-components';

import { Button } from '../../components/button';
import { FormItem } from '../../components/form/form-item';
import { Input } from '../../components/input';
import { SecondaryText } from '../../components/typography';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Checkbox } from '../../components/checkbox';

const Wrapper = styled.div`
    .login-form-forgot {
         float: right;
    }
    .ant-col-rtl .login-form-forgot {
         float: left;
    }
`;
export const SigninForm = ({ isLoading }) => {
    return (
        <Wrapper>
            <Row gutter={16}>
                <Col span={24}>
                    <FormItem name="email" rules={[{ required: true }, { type: 'email' }]} >
                        <Input placeholder='մուտքանուն' prefix={<UserOutlined />} />
                    </FormItem>
                </Col>
                <Col span={24}>
                    <FormItem name="password" rules={[{ required: true, min: 6 }]}>
                        <Input.Password placeholder='գաղտնաբառ' prefix={<LockOutlined />} />
                    </FormItem>
                </Col>
                <Col span={24}>
                    <FormItem>
                        <FormItem name="remember" valuePropName="checked" noStyle

                        >
                            <Checkbox>Հիշել </Checkbox>
                        </FormItem>
                        <a href="/forgot-password" className="login-form-forgot">
                            <SecondaryText>Մոռացել եմ գաղտնաբառը</SecondaryText>
                        </a>
                    </FormItem>
                </Col>
                <Col span={24}>
                    <Button htmlType="submit" size="large" type="primary" block loading={isLoading} >
                        Մուտք
                    </Button>
                </Col>

            </Row>
        </Wrapper>
    )
}