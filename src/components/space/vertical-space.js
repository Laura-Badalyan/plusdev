import { Space } from 'antd';

export const VerticalSpace = ({ children, size = 'middle', style = { width: '100%' }, ...rest }) => (
  <Space direction="vertical" size={size} style={style} {...rest}>
    {children}
  </Space>
);
