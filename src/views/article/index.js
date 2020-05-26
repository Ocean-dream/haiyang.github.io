import React, {useEffect, useState} from 'react'
import Nav from '../../components/nav/index'
import Sider from '../../components/slider/index'
import ArticleList from '../../components/articleList/index'
import './index.css'
import serverPath from './../../config/apiUrl'
import axios from 'axios'

function Article() {
  const [articleList, setArticleList] = useState([])
  const getAllArticle = async() => {
    const {data: res} = await axios.get(serverPath.getArticleList)
    setArticleList(res.data)
  }
  useEffect(() => {
    getAllArticle()
  }, [])
  return (
    <div>
      <span id="sakura"></span>
      <Nav />
     <div className="article_content">
       <ArticleList className="article_list" articleList={articleList}/>
     <Sider  className="article_aside"/>
     </div>
    </div>
  )
}
export default Article