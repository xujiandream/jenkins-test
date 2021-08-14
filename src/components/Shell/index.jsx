import React, { useCallback, useState} from 'react'
import './index.css'
import Hobby from '../../containers/Hobby'
// 引入ant design组件
import { Layout, Menu, Button, Breadcrumb, Row, Col } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

export default function AsideMenu() {
  const [collapsed, setcollapsed] = useState(false)
  const toggleCollapsed = useCallback(
    () => {
      setcollapsed(!collapsed)
    },
    [collapsed]
  )
  return (
    <Layout className='Shell'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          CrazyBoy
        </div>
        <div className='collapsedBtn'>
          <Button type="primary"  onClick={toggleCollapsed}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          collapsed={collapsed.toString()}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background">
          <Row justify="space-between" align="middle">
            <Col span={4}>
              
            </Col>
            <Col span={12} className='welcome'>
              <div>欢迎进入CrazyBoy的管理后台</div>
            </Col>
            <Col span={4} className='welcome'>
              <div>退出登录</div>
            </Col>
          </Row>
          
        </Header>
        <Content
          className="site-layout-background"
        >
          <Breadcrumb className='breadcrumb'>
            <Breadcrumb.Item href="">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <UserOutlined />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
          <Hobby></Hobby>
        </Content>
      </Layout>
    </Layout>
  );
}
