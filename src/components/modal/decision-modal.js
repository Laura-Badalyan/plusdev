import { useEffect, useState } from 'react';
import { Col, Modal, Row, Space, Spin } from 'antd';
import { Button } from 'components/button';
import { VerticalSpace } from 'components/space/vertical-space';
import { GET_MSC_DECISION_MAKING, GET_MSC_VIEWER_DECISION_MAKING } from 'api/applications/use-get-data-for-application';
import { useAuth } from 'context/auth-context';
import { COLORS, PATHS, USERS } from '../../helpers/constants';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import {
  GET_ADMIN_APPLICATION_BY_ID,
  GET_MSC_APPLICATION_BY_ID,
  GET_VIEWER_APPLICATION_BY_ID,
} from 'api/applications/use-get-application-by-id';
import { useGetDecisionData } from 'api/applications/use-get-decision-data';
import { errorMessage } from 'helpers/utils';

export const DecisionModal = ({ canceltext = 'Մերժել', submitText = 'Հաստատել', id }) => {
  const { user } = useAuth();
  const { id: applicationId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [isApproved, setIsApproved] = useState(null);
  const { data, isFetched, isInitialLoading } = useGetDecisionData(
    user.userType === USERS.MSC_VIEWER ? GET_MSC_VIEWER_DECISION_MAKING : GET_MSC_DECISION_MAKING,
    {
      householdId: id,
      isApproved,
    },
    {
      enabled: check && isApproved !== null,
      onError: (error) => {
        errorMessage(error);
        setIsApproved(null);
      },
    }
  );

  useEffect(() => {
    if (data) {
      setOpen(true);
    }
    if (isFetched && data === true && check && isApproved !== null) {
      queryClient.resetQueries({
        queryKey: [
          user.userType === USERS.ADMIN
            ? GET_ADMIN_APPLICATION_BY_ID
            : user.userType === USERS.VIEWER
            ? GET_VIEWER_APPLICATION_BY_ID
            : GET_MSC_APPLICATION_BY_ID,
          {
            applicationId,
          },
        ],
      });
      // message.success(isApproved ? 'Ենթահայտը հաստատվել է' : 'Ենթահայտը մերժվել է');
      // handleCancel();
    }
  }, [applicationId, check, data, isApproved, isFetched, queryClient, user.userType]);

  const onApprove = () => {
    setCheck(true);
  };

  const confirmationMessage = isApproved
    ? 'Համոզվա՞ծ եք, որ ցանկանում եք հաստատել'
    : 'Համոզվա՞ծ եք, որ ցանկանում եք մերժել';

  const handleCancel = () => {
    setIsApproved(null);
    setCheck(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigate(PATHS.APPLICATIONS);
  };
  return (
    <>
      {user.userType === USERS.MSC_HEAD ||
        (user.userType === USERS.MSC_VIEWER && (
          <>
            <Row align="center" justify="center" style={{ paddingTop: '25px' }}>
              <Col span={8}>
                <Space size="middle" align="center" style={{ width: '100%', justifyContent: 'center' }}>
                  <Button
                    type="default"
                    shape="round"
                    size="large"
                    onClick={() => {
                      setIsApproved(false);
                    }}
                    disabled={false}
                  >
                    {canceltext}
                  </Button>

                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    onClick={() => {
                      setIsApproved(true);
                    }}
                    disabled={false}
                  >
                    {submitText}
                  </Button>
                </Space>
              </Col>
            </Row>
            <Modal
              open={isApproved !== null}
              onCancel={handleCancel}
              footer={
                <Row align="center" justify="center" gutter={[24, 24]}>
                  <Col>
                    <Space size="small" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                      <Button size="large" type="primary" shape="round" onClick={() => onApprove()} disabled={false}>
                        Այո
                      </Button>
                      <Button size="large" type="default" shape="round" onClick={() => handleCancel()} disabled={false}>
                        Ոչ
                      </Button>
                    </Space>
                  </Col>
                </Row>
              }
            >
              {data && (
                <Modal title="" footer={null} open={open} centered onCancel={handleCloseModal}>
                  <p style={{ color: data?.isApproved ? COLORS.ALERT.GREEN : COLORS.ALERT.RED, textAlign: 'center' }}>
                    {data.title}
                  </p>
                  {data.reasons.map((reason) => (
                    <p style={{ textAlign: 'center' }} key={reason.id}>
                      {reason.name}
                    </p>
                  ))}
                </Modal>
              )}
              <Spin spinning={isInitialLoading}>
                <VerticalSpace style={{ width: '100%' }} size="large">
                  <Row align="center" justify="center">
                    <Col>
                      <p>{confirmationMessage}</p>
                    </Col>
                  </Row>
                </VerticalSpace>
              </Spin>
            </Modal>
          </>
        ))}
    </>
  );
};
