import React from 'react';
import { Menu, Image } from 'antd';
import { HeaderStyled } from '../Styled';
import Logo from '../assets/svg/logo-full.svg'

export default function Header() {
  return (
    <HeaderStyled mode="horizontal">
      <Menu.Item key="app">
        <Image preview={false} src={Logo} alt="logo" />
      </Menu.Item>
    </HeaderStyled>
  );
}
