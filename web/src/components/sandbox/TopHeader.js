import React, { useState } from "react";
import { Layout } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons';

const { Header } = Layout;

export default function TopHeader() {
  //函数式组件利用hooks设置状态.
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: "0 16px"
      }}
    >
    {
      collapsed?<MenuUnfoldOutlined onClick={changeCollapsed}/>
        :<MenuFoldOutlined onClick={changeCollapsed}/>
    }
      {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })} */}
    </Header>
  )
}
