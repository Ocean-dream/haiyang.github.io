import React, { } from 'react'
import './index.css'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { RobotOutlined, ConsoleSqlOutlined, CarOutlined, DeploymentUnitOutlined,HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
function Nav() {
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <div className="nav_header">
      <div className="nav_logo">
        <a href="#">
          <img src={require('../../assets/userLogo.jpg')}></img>
        </a>
      </div>
      <div className="nav_brief">
        <h2>前端cv攻城狮</h2>
      </div>
      <div className="nav_menu">
      <Menu onClick={handleClick} selectedKeys={['font']} mode="horizontal">
      <Menu.Item key="index" icon={<HomeOutlined />}>
          <Link className="link" to={`/`}>
                首页
          </Link>
        </Menu.Item>
        <Menu.Item key="article" icon={<HomeOutlined />}>
          <Link className="link" to={`/articles`}>
                文章列表
          </Link>
        </Menu.Item>
        <SubMenu icon={<RobotOutlined />} title="web">
            <Menu.Item key="setting:1">jquery</Menu.Item>
            <Menu.Item key="setting:2">vue</Menu.Item>
            <Menu.Item key="setting:3">react</Menu.Item>
            <Menu.Item key="setting:4">taro</Menu.Item>
        </SubMenu>
        <SubMenu icon={<ConsoleSqlOutlined />} title="service">
            <Menu.Item key="setting:5">egg</Menu.Item>
            <Menu.Item key="setting:6">docker</Menu.Item>
            <Menu.Item key="setting:7">mysql</Menu.Item>
        </SubMenu>
        <Menu.Item key="life" icon={<CarOutlined />}>
          生活
        </Menu.Item>
        <Menu.Item key="plug" icon={<DeploymentUnitOutlined />}>
          插件
        </Menu.Item>
      </Menu>
      </div>
    </div>
  )
}

export default Nav