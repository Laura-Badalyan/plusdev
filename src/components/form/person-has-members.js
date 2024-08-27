import { FormSectionCard } from 'components/card/form-section-card';
import { FormItem } from './form-item';
import { Radio } from 'antd';
import { VerticalSpace } from 'components/space/vertical-space';
import { SecondaryText } from 'components/typography';
import { COLORS } from 'helpers/constants';

export const HasMembersInSameAddress = () => {
  return (
    <FormSectionCard title="Կա՞ն արդյոք նույն հասցեում բնակվող այլ անդամներ">
      <FormItem name="hasMembersInSameAddress">
        <Radio.Group>
          <VerticalSpace direction="horizonal">
            <Radio value={true}>
              <SecondaryText color={COLORS.PRIMARY.BLUE}>Այո</SecondaryText>
            </Radio>
            <Radio value={false}>
              <SecondaryText color={COLORS.PRIMARY.BLUE}>Ոչ</SecondaryText>
            </Radio>
          </VerticalSpace>
        </Radio.Group>
      </FormItem>
    </FormSectionCard>
  );
};
