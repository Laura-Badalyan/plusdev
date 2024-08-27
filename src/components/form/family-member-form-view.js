import { Collapse } from 'antd';
// import { Input } from 'components/input';
import { VerticalSpace } from 'components/space/vertical-space';
import { Form } from './form';
// import { FormItem } from './form-item';
import { setFormItemProp } from './family-member-form';
import { PersonMainData } from './person-main-data-form';
import { PersonGeneralData } from './person-general-data';
// import { FamilyMemberDocs } from './family-member-documents';

const { Panel } = Collapse;

export const FamilyFormFormView = ({ field }) => {
  const form = Form.useFormInstance();
  const firstName = form.getFieldValue(['familyData', 'familyMembers', field.name, 'fname']);
  const lastName = form.getFieldValue(['familyData', 'familyMembers', field.name, 'lname']);
  const id = form.getFieldValue(['familyData', 'familyMembers', field.name, 'id']);
  const status = form.getFieldValue(['familyData', 'familyMembers', field.name, 'status']);
  let decisionMaking = true && status === 'Ենթակա է ստուգման';


  return (
    <Collapse defaultActiveKey={[field.name]} key={field.name}>
      <Panel header={firstName ? `${firstName} ${lastName}` : 'Ընտանիքի անդամի տվյալներ'} key={field.name}>
        <VerticalSpace>
          <PersonMainData
            title="Ընտանիքի անդամի տվյալներ"
            formItemProp={setFormItemProp(field.name)}
            decisionMaking={decisionMaking}
            id={id}
            field={field}
          />

          <PersonGeneralData formItemGeneral={setFormItemProp(field.name)} isFamilyMember={true} />
          {/* <FamilyMemberDocs field={setFormItemProp(field.name)} /> */}
        </VerticalSpace>
      </Panel>
    </Collapse>
  );
};
