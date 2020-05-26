import React, {useEffect} from 'react'
import Nav from '../../components/nav/index'
import Sider from '../../components/slider/index'
import ArticleList from '../../components/articleList/index'
import './index.css'

function Article() {
  useEffect(() => {
    console.log(111)
  }, [])
  return (
    <div>
      <span id="sakura"></span>
      <Nav />
     <div className="article_content">
       <ArticleList className="article_list"/>
     <Sider  className="article_aside"/>
     </div>
    </div>
  )
}
export default Article