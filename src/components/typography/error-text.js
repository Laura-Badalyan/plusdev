import { Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { COLORS } from '../../helpers/constants';
import { Text } from './text';

export const ErrorText = ({ text }) => {
  return (
    <Space size={5}>
      <CloseOutlined style={{ color: COLORS.ALERT.RED }} />
      <Text color={COLORS.ALERT.RED}>{text}</Text>
    </Space>
  );
};
