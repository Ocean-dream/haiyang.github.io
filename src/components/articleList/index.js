import React, { } from 'react'
import './index.css'
import { List, Card , Space  } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
function ArticleList(props) {
  const listData = props.articleList

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <div className="list_wid">
     <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    renderItem={item => (
      <List.Item
      className="list_style"
      key={item.title}
      actions={[
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        >
        <Card>
        <List.Item.Meta
          title={<a href={`/#/articleDetail?id=${item.id}`}>{item.title}</a>}
          description={item.introduce}
        />
        {item.introduce}
     </Card>
      </List.Item>
    )}
  />,
    </div>
  )
}

export default ArticleList