import React, { } from 'react'
import './index.css'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { RobotOutlined, ConsoleSqlOutlined, CarOutlined, DeploymentUnitOutlined,HomeOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
function Nav(props) {
  const handleClick = e => {
    console.log('click ', e.key);
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
            <Menu.Item key="1">
              <Link className="link" to={`/classify?type=1`}>
                  jquery
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link className="link" to={`/classify?type=2`}>
                    vue
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link className="link" to={`/classify?type=3`}>
                    react
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link className="link" to={`/classify?type=4`}>
                    taro
                </Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu icon={<ConsoleSqlOutlined />} title="service">
            <Menu.Item key="5">
            <Link className="link" to={`/classify?type=5`}>
                    egg
                </Link>
            </Menu.Item>
            <Menu.Item key="6">
            <Link className="link" to={`/classify?type=6`}>
                    docker
                </Link>
            </Menu.Item>
            <Menu.Item key="7">
            <Link className="link" to={`/classify?type=7`}>
                    mysql
                </Link>
            </Menu.Item>
        </SubMenu>
        <Menu.Item key="8" icon={<CarOutlined />}>
          <Link className="link" to={`/classify?type=8`}>
              生活
            </Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<DeploymentUnitOutlined />}>
            <Link className="link" to={`/classify?type=9`}>
              插件
            </Link>
        </Menu.Item>
      </Menu>
      </div>
    </div>
  )
}

export default Nav