import { FormItem } from './form-item';
import { PhoneNumber } from '../input/phone-number';
import { phonePattern } from '../../helpers/constants';

export const PhoneNumberFormItem = ({ inputProps, rules = [], ...props }) => {
  return (
    <FormItem
      label="Հեռախոսահամար"
      tooltip="Թույլատրվող ֆորմատ +37400000000"
      rules={[{ pattern: phonePattern, message: 'Սխալ հեռախոսի ֆորմատ, պետք է լինի +374XXXXXXXX ֆորմատով' }, ...rules]}
      {...props}
    >
      <PhoneNumber {...inputProps} />
    </FormItem>
  );
};
