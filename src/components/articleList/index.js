import React, { } from 'react'
import './index.css'
import { List, Card } from 'antd';
import { CarryOutOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
function ArticleList(props) {
  const listData = props.articleList
  // const [isAdmire, setIsAdmin] = useState(false)
  // const handleAdmire = () => {
  //     setIsAdmin(!isAdmire)
  //   }
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
        >
        <Card>
        <List.Item.Meta
          title={<a href={`/#/articleDetail?id=${item.id}`}>{item.title}</a>}
          description={item.introduce}
        />
       <div className="list_admin">
         {/* <span onClick={handleAdmire} style={isAdmire==true ? {color:'blue'} : {color: '#ccc'}}><LikeOutlined style={isAdmire==true ? {color:'blue'} : {color: '#ccc'}}/>{item.view_count}</span> */}
         <span><CarryOutOutlined />{item.addTime}</span>
       </div>
     </Card>
      </List.Item>
    )}
  />,
    </div>
  )
}

export default ArticleList