import React from 'react'
import { Layout, Menu } from 'antd'
import {Link} from 'react-router-dom'

const { Header } = Layout;
const NavBar = () => {
    return (
        <Layout className="layout">
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/demo1">Demo 1</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/demo2">Demo 2</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/demo3">Demo 3</Link></Menu.Item>
          </Menu>
        </Header>
        </Layout>
    )
}

export default NavBar
