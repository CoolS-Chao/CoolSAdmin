import React from "react";
import "./index.css"
import { Layout, Menu } from "antd";
import {
    UserOutlined,
  } from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

//模拟数据结构
const menuList = [
	{
		key: "/user_manage",
		icon: <UserOutlined />,
		label: "用户管理",
		children: [
			{
				key: "/user_manage/list",
				icon: <UserOutlined />,
				label: "用户列表"
			}
		]
	},
	{
		key: "right_manage",
		icon: <UserOutlined />,
		label: "权限管理",
		children: [
			{
				key: "/user_manage/list",
				icon: <UserOutlined />,
				label: "用户列表"
			},
		]
	}
]

export default function SideMenu() {
	const renderMenu = (menuList) => {
		return menuList.map(item=>{
			if (item.children) {
				return <SubMenu key={item.key} icon={item.icon} title={item.title}></SubMenu>
			}
			return <Menu.Item key={item.key} icon={item.icon}>{item.title}</Menu.Item>
		})
	}
	return (
		<Sider trigger={null} collapsible collapsed={false}>
      		<div className="logo">博客发布管理系统</div>
    		<Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}
    			// items={[
          		// 	{
				// 		key: '1',
				// 		icon: <UserOutlined />,
				// 		label: 'nav 1',
          		// 	},
          		// 	{
				// 		key: '2',
				// 		icon: <VideoCameraOutlined />,
				// 		label: 'nav 2',
				// 		children: [{ label: '子菜单项', key: 'submenu-item-1' }],
				// 	},
				// 	{
				// 		key: '3',
				// 		icon: <UploadOutlined />,
				// 		label: 'nav 3',
				// 	},
        		// ]}
				{...renderMenu(menuList)}
    		/>
    	</Sider>
	)
}
