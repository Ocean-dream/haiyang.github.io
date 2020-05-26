import React, { useEffect, useState } from 'react'
import Nav from '../../components/nav/index'
import Side from '../../components/slider/index'
import ArticleContent from '../../components/articleDetail/index'
import serverPath from './../../config/apiUrl'
import axios from 'axios'
function Detail(props) {
  let id = props.location.search.split('=')[1]
  const [articleContent, setArticleContent] = useState('')
  const getArticleById = async () => {
    const {data:res} = await axios.get(serverPath.getArticleById + id)
    setArticleContent(res.data[0].article_content)
  }
  useEffect(() => {
    getArticleById()
  }, [])
  return (
    <div>
      <Nav />
      <div className="article_content">
        <ArticleContent className="article_list" article={articleContent}/>
        <Side className="article_aside"/>
      </div>
    </div>
  )
}

export default Detail
