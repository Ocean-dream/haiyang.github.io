import React, { } from 'react'
import './index.css'
import { List, Card , Space  } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
function ArticleList() {

  const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://ant.design',
      title: `ant design part ${i}`,
      description:
        'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }

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
      pageSize: 6,
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
          title={<a href={'/articleDtail'}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
     </Card>
      </List.Item>
    )}
  />,
    </div>
  )
}

export default ArticleList