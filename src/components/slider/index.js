import React, {  } from 'react'
import { Card, Avatar, Tag  } from 'antd'
import { GithubOutlined, WechatOutlined, QqOutlined,RedditOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Slide() {
  return (
    <div>
      <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <GithubOutlined key="git" />,
            <WechatOutlined key="wechat" />,
            <QqOutlined key="qq" />,
            <RedditOutlined key="reddit" />,
          ]}
        >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="Card title"
              description="This is the description"
            />
        </Card>
        <Card title="skill" extra={<a href="#">More</a>} style={{ width: 300,marginTop:20 }}>
          <p>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
          </p>
          <p>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
            <Tag color="default">default</Tag>
          </p>
          <p>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag color="warning">warning</Tag>
          </p>
        </Card>
    </div>
  )
}

export default Slide