import { Col, Form, Row, Space } from 'antd';
import { FormSectionCard } from 'components/card/form-section-card';
import { usepersonalDataChangeColumns } from 'pages/applications/personal-data-change-columns';
import { FormItem } from './form-item';
import { StyledTable } from 'components/table/styled-table';

export const PersonalDataChangeTable = () => {
  const data = Form.useWatch(['citizenData', 'personalDataChanges'], { preserve: true });
  const dataChangeColumns = usepersonalDataChangeColumns(data);

  return (
    data?.length !== 0 && (
      <FormSectionCard title="Անձնական տվյալների փոփոխություն">
        <Space size="middle" direction="horizontal" justify="center" style={{ width: '100%' }}>
        <Row style={{ display: 'flex', flexDirection: 'row',}}>
            <FormItem style={{ maxWidth: '1000px', width: '100%' }} name="PersonalDataChangeTable">
              <Col span={24}>
                <StyledTable
                  style={{ maxWidth: '1000px', width: "100%" }}
                  pagination={false}
                  columns={dataChangeColumns}
                  dataSource={data}
                  scroll={{ x: 'max-content' }}
                />
              </Col>
            </FormItem>
          </Row>
        </Space>
      </FormSectionCard>
    )
  );
};
