import { Form } from './form';
import { FamilyFormFormView } from './family-member-form-view';

const FamilyMemberData = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => (
        <FamilyFormFormView key={field.name} field={field} />
      ))}
    </div>
  );
};

export const AddFamilyMember = ({ viewMode = false }) => {
  return (
    <Form.List name={['familyData', 'familyMembers']}>
      {(fields, { add, remove }) => <FamilyMemberData viewMode={viewMode} fields={fields} add={add} remove={remove} />}
    </Form.List>
  );
};
