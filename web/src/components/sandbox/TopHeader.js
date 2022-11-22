import React, { useState } from "react";
import { Layout, Dropdown, Menu, Space, Avatar, Image } from "antd";
import {
	MenuFoldOutlined,
	MenuUnfoldOutlined,
	SmileOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export default function TopHeader() {
	//函数式组件利用hooks设置状态.
	const [collapsed, setCollapsed] = useState(false)
	const changeCollapsed = () => {
		setCollapsed(!collapsed)
	}
	const menu = (
		<Menu
			items={[
			{
				key: '1',
				label: (111),
				icon: <SmileOutlined />
			},
			{
				key: '4',
				danger: true,
				label: '退出登录',
			},
			]}
		/>
	);
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
			<div style={{float: "right"}}>
				<span>欢迎Admin回来</span>
				<Dropdown overlay={menu}>
					<a onClick={(e) => e.preventDefault()}>
						<Space>
							<Avatar
								src={
									<Image
										src="https://joeschmoe.io/api/v1/random"
										style={{width: 32}}
									/>
								}
							/>
						</Space>
    				</a>
  				</Dropdown>
			</div>
		</Header>
	)
}
