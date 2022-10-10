import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import UserList from "./user_manage/UserList";
import "./BlogSandBox.css";
import { Layout } from "antd";
const [ Content ] = "Layout";

export default function BlogSandBox() {
    return (
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
                <TopHeader></TopHeader>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
            // <SideMenu></SideMenu>
            // <TopHeader></TopHeader>
            // <Routes>
            //     <Route path="/user-manage/list" element={<UserList />}></Route>
            // </Routes>
    )
}