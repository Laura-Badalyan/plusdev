import { Collapse } from 'antd';
import { useCallback } from 'react';
import { Input } from 'components/input';
import { VerticalSpace } from 'components/space/vertical-space';
import { Form } from './form';
import { FormItem } from './form-item';
import { files } from 'pages/application-view/constants';
import { PersonMainData } from './person-main-data-form';

const { Panel } = Collapse;

export const setFormItemProp = (key) => ({
  // Person Main Data
  id: {
    name: [key, 'id'],
  },
  firstName: {
    name: [key, 'firstName'],
  },
  lastName: {
    name: [key, 'lastName'],
  },
  patronymicName: {
    name: [key, 'patronymicName'],
  },
  ssn: {
    name: [key, 'ssn'],
  },
  birthdate: {
    name: [key, 'birthdate'],
  },
  age: {
    name: [key, 'age'],
  },
  gender: {
    name: [key, 'gender'],
  },
  email: {
    name: [key, 'email'],
  },
  phoneNumber: {
    name: [key, 'phoneNumber'],
  },
  documentNumber: {
    name: [key, 'documentNumber'],
  },
  documentType: {
    name: [key, 'documentType'],
  },
  // Person General Data
  disabilityScore: {
    name: [key, 'disabilityScore'],
  },
  accountNumber: {
    name: [key, 'bank', 'accountNumber'],
  },
  bankName: {
    name: [key, 'bank', 'bankName'],
  },
  paymentMethod: {
    name: [key, 'paymentMethod'],
  },
  status: {
    name: [key, 'status'],
  },
  functionalityRestriction: {
    name: [key, 'functionalityRestriction'],
  },
  amount: {
    name: [key, 'amount'],
  },
  rejectionReasons: {
    name: [key, 'rejectionReasons'],
  },
  relativeType: {
    name: [key, 'relativeType'],
  },
  // Documents
  documentChecksum: {
    name: [key, 'documentChecksum'],
  },
});

export const setFamilyEducation = (key) => ({
  isStudying: {
    name: [key, 'isStudying'],
  },
  educationalInstitution: {
    name: [key, 'educationalInstitution'],
  },
  studyFilesChecksum: {
    name: [key, files, 'studyFilesChecksum'],
  },
});

export const FamilyFormForm = ({ field }) => {
  const form = Form.useFormInstance();
  const firstName = form.getFieldValue(['familyData', 'familyMembers', field.name, 'fname']);
  const lastName = form.getFieldValue(['familyData', 'familyMembers', field.name, 'lname']);
  const onSuccess = useCallback(
    (data) => {
      form.setFieldValue(['familyData', 'familyMembers', field.name, 'isApproved'], data);
    },
    [field.name, form]
  );

  return (
    <Collapse defaultActiveKey={[field.name]} key={field.name}>
      <Panel header={firstName ? `${firstName} ${lastName}` : 'Ընտանիքի անդամի տվյալներ'} key={field.name}>
        <VerticalSpace>
          <PersonMainData
            parent={['familyData', 'familyMembers']}
            title="Ընտանիքի անդամի տվյալներ"
            formItemProp={setFormItemProp(field.name)}
            onSuccess={onSuccess}
            decisionMaking={true}
          />
          <FormItem initialvalue={field.name + 1} name={[field.name, 'id']} hidden>
            <Input />
          </FormItem>
        </VerticalSpace>
      </Panel>
    </Collapse>
  );
};
