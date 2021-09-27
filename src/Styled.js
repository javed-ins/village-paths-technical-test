import { Image, Menu, Col, Button } from 'antd';
import styled from 'styled-components';

export const CardImage = styled(Image)`
  margin-top: 4rem;
`;

export const LayoutCol = styled(Col)`
  margin-top: 4rem;
`;

export const LeftArrow = styled(Image)`
  padding: 0.5rem;
  border-radius: 50%;
  border: 1px solid lightGrey;
`;
export const HeaderStyled = styled(Menu)`
  padding-left: 1.5em;
  padding-top: 1.5rem;
`;

export const ImageCol = styled(Col)`
  height: 93vh;
  text-align: center;
  background: #f5f5f6;
`;

export const StyledButton = styled(Button)(
  ({ secondary }) => `
color: ${secondary ? '#494A4E' : '#FFFFFF'};
padding: .5rem 1rem;
height: 40px;
text-align: center;
background-color: ${secondary ? '#FFFFFF' : '#2F5082'}; 
border-radius: 8px;
font-size: 16px;
font-weight: 600;
line-height: 16px;
`,
);
