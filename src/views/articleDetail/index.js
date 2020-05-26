import React, {  } from 'react'
import Nav from '../../components/nav/index'
import Side from '../../components/slider/index'
import ArticleContent from '../../components/articleDetail/index'

function Detail() {
  return (
    <div>
      <Nav />
      <div>
        <ArticleContent></ArticleContent>
        <Side />
      </div>
    </div>
  )
}

export default Detail
