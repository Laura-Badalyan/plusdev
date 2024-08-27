import { Button, Col, Row } from 'antd';
import { Form } from './form';
import styled from 'styled-components';
import fileIcon from '../../icons/file.svg';
import { SecondaryText } from 'components/typography';
import { useState } from 'react';
import { useGetFile } from 'api/applications/use-get-files';

const DownloadButton = styled(Button)`
  background-color: transparent !important;
  border: none;
  border-radius: 0;
  display: flex;
  gap: 20px;
`;

export const FamilyMemberDocs = ({ field }) => {
  const form = Form.useFormInstance();

  const docs = form.getFieldValue(['familyData', 'familyMembers', ...field.documentChecksum.name]);
  const [checksumToView, setChecksumToView] = useState('');

  const onFileClick = async (checksum) => {
    setChecksumToView(checksum);
  };

  useGetFile(
    { fileChecksum: checksumToView },
    {
      enabled: !!checksumToView,
      onSuccess: () => {
        setChecksumToView();
      },
    }
  );

  return (
    <Row>
      {docs?.map((item, index) => {
        return (
          <Col key={item}>
            <DownloadButton onClick={() => onFileClick(item)} disabled={false} key={item}>
              <img src={fileIcon} alt="icon" style={{ fill: 'red' }} />
              <SecondaryText>Տեղեկանք {index + 1}</SecondaryText>
            </DownloadButton>
          </Col>
        );
      })}
    </Row>
  );
};
