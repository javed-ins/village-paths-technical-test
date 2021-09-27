import React, { useState } from 'react';
import { Form, Input, Row, Col, Typography, Space } from 'antd';
import {
  CardImage,
  LayoutCol,
  LeftArrow,
  StyledButton,
  ImageCol,
} from '../Styled';

import LeftArrowIcon from '../assets/svg/arrow-left.svg';
import UseCard from '../assets/svg/user-cards.svg';

export default function NewAccount() {
  const { Title, Text } = Typography;
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <React.Fragment>
      <Row>
        <LayoutCol span={13}>
          <Row>
            <Col sm={{ span: 23, offset: 1 }} md={{ span: 1, offset: 1 }}>
              <LeftArrow src={LeftArrowIcon} />
            </Col>
            <Col sm={{ span: 22, offset: 1 }} md={{ span: 20, offset: 2 }}>
              <React.Fragment>
                <Space direction="vertical">
                  <Title level={2}>Let's get to know you...</Title>
                  <Text>Tell us more about yourself.</Text>
                </Space>
                <Row>
                  <Col xs={24} sm={24} md={15} lg={13}>
                    <Form layout="vertical" name="basic" size="large">
                      <Row>
                        <Col span="24">
                          <Form.Item
                            style={{ padding: '9px 0 0', borderRadius: '5px' }}
                            name="email"
                          >
                            <Input
                              placeholder="anita.village@villagecreed.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Row justify="space-between">
                        <Col span="12">
                          <Form.Item
                            name="First Name"
                            style={{ borderRadius: '6px' }}
                          >
                            <Input
                              placeholder="Anita"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                        <Col span="11">
                          <Form.Item
                            name="Last Name"
                            style={{ borderRadius: '6px' }}
                          >
                            <Input
                              placeholder="Village"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </Form.Item>
                        </Col>
                      </Row>
                      <Form.Item name="password">
                        <Input.Password
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Item>
                      <Form.Item>
                        <StyledButton htmlType="submit">Continue</StyledButton>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              </React.Fragment>
            </Col>
          </Row>
        </LayoutCol>
        <ImageCol sm={24} md={24} lg={11} span={11}>
          <CardImage preview={false} src={UseCard} alt="UseCard Image" />
        </ImageCol>
      </Row>
    </React.Fragment>
  );
}
