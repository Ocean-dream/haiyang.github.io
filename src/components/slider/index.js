import React, { useState, useEffect  } from 'react'
import { Card, Avatar, Tag, Row, Col, Tooltip  } from 'antd'
import { GithubOutlined, WechatOutlined, QqOutlined,RedditOutlined } from '@ant-design/icons';
import axios from 'axios'
import servePath from '../../config/apiUrl'

const { Meta } = Card;

function Slide() {
  // const [markData, setMarkData] = useState([])
  // const getMarkSkill = async() => {
  //   const {data: res} = await axios.get(servePath.getSkillContent)
  //   console.log(res)
  //   setMarkData(res.data)
  // }
  // useEffect(() => {
  //   getMarkSkill()
  // }, [])
  const markData = [{"id":1,"skill_name":"vue全家桶","mark_style":"success"},{"id":2,"skill_name":"react-hook","mark_style":"processing"},{"id":3,"skill_name":"redux","mark_style":"warning"},{"id":4,"skill_name":"d3.js","mark_style":"error"}]
  return (
    <div>
      <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <Tooltip placement="top" title={'https://github.com/Ocean-dream/'}><GithubOutlined key="git" /></Tooltip>,
            <Tooltip placement="top" title={'y2527668'}><WechatOutlined key="wechat" /></Tooltip>,
            <Tooltip placement="top" title={'961742948'}><QqOutlined key="qq" /></Tooltip>,
            <Tooltip placement="top" title={'😁'}><RedditOutlined key="reddit" /></Tooltip>,
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
        <Row>
          {
            markData.map(item => {
              return (
                <Col key={item.id} span={7} style={{margin:5}}>
                  <Tag color={item.mark_style}>{item.skill_name}</Tag>
                </Col>
              )
            })
          }
        </Row>
        </Card>
    </div>
  )
}

export default Slide