import { Space } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { COLORS } from '../../helpers/constants';
import { SecondaryText } from './text';

export const Info = ({ text }) => {
  return (
    <Space size={5}>
      <InfoCircleOutlined style={{ color: COLORS.PRIMARY.GRAY_LIGHT }} />
      <SecondaryText color={COLORS.PRIMARY.GRAY_LIGHT}>{text}</SecondaryText>
    </Space>
  );
};
