import React, { useState } from 'react';
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
import SmallLogo from '../assets/svg/logo.svg';
import { useHistory } from 'react-router-dom';

import { PlusOutlined } from '@ant-design/icons';

export default function JoinOrg() {
  const history = useHistory();
  const { Title, Text } = Typography;
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
                  <Card>
                    <Row align="middle">
                      <Col span="4">
                        <Image preview={false} width={70} src={SmallLogo} />
                      </Col>
                      <Col span="16">
                        <Space direction="vertical">
                          <Title level={5}>
                            <b>Village Creed PBC</b>
                          </Title>
                          <Text style={{ color: 'grey' }}>11 members</Text>
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
