import { Form } from 'antd';
import styled from 'styled-components';
import { COLORS } from '../../helpers/constants';
import { SecondaryText } from '../../components/typography';

const { Item } = Form;

export const FormItem = styled(({ label, ...props }) => {
  return <Item {...props} label={label && <SecondaryText color={COLORS.PRIMARY.BLUE}>{label}</SecondaryText>} />;
})``;
