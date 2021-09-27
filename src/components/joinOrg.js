import React, { useEffect } from 'react';
import { Image, Row, Col, Typography, Card, Space } from 'antd';
import {
  CardImage,
  LayoutCol,
  LeftArrow,
  StyledButton,
  ImageCol,
} from '../Styled';

import LeftArrowIcon from '../assets/svg/arrow-left.svg';
import JoinOrgImg from '../assets/svg/join-org.svg';
import { useHistory } from 'react-router-dom';

import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getOrg } from '../redux/joinOrgReducer';

export default function JoinOrg() {
  const history = useHistory();
  const { Title, Text } = Typography;
  const dispatch = useDispatch();
  const organizationLoading = useSelector(
    (state) => state.joinOrgReducer.loading
  );

  const organizations = useSelector(
    (state) => state.joinOrgReducer.organizations
  );

  useEffect(() => {
    dispatch(getOrg());
  }, []);
  return (
    <React.Fragment>
      <Row>
        <LayoutCol span={13}>
          <Row>
            <Col sm={{ span: 23, offset: 1 }} md={{ span: 1, offset: 1 }}>
              <LeftArrow
                preview={false}
                src={LeftArrowIcon}
                onClick={() => {
                  history.goBack();
                }}
              />
            </Col>
            <Col sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}>
              <React.Fragment>
                <Space direction="vertical">
                  <Title level={2}>Join your organization in Village Hub</Title>
                  <Col sm={22} md={20} style={{ paddingBottom: '2rem' }}>
                    <Text>
                      This organization allow anyone from
                      <b>@villagecreed.com </b> to join:
                    </Text>
                  </Col>
                </Space>
                <Col sm={22} md={16}>
                  <Card loading={organizationLoading}>
                    <Row align="middle">
                      <Col span="4">
                        <Image
                          preview={false}
                          width={70}
                          src={organizations?.profileImage?.url}
                        />
                      </Col>
                      <Col span="16">
                        <Space direction="vertical">
                          <Title level={5}>
                            <b>{organizations?.name}</b>
                          </Title>
                          <Text style={{ color: 'grey' }}>
                            {`${organizations?.memberCount} members`}
                          </Text>
                        </Space>
                      </Col>
                      <Col span="4">
                        <StyledButton>Join</StyledButton>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Space direction="vertical" style={{ padding: '1.5rem 0' }}>
                  <StyledButton icon={<PlusOutlined />} secondary type="dashed">
                    Create a new organizaton
                  </StyledButton>
                </Space>
              </React.Fragment>
            </Col>
          </Row>
        </LayoutCol>
        <ImageCol sm={24} md={24} lg={11} span={11}>
          <CardImage preview={false} src={JoinOrgImg} alt="Join Org Image" />
        </ImageCol>
      </Row>
    </React.Fragment>
  );
}
