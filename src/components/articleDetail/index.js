import React, {  } from 'react'
import marked from 'marked'
import hljs from 'highlight.js'
import {Affix} from 'antd'
import 'highlight.js/styles/monokai-sublime.css'
// import 'highlight.js/styles/github.css'
import './index.css'
// import Tocify from './../tocify.tsx'
function Detail(props) {
  const markdownData = props.article
  // const tocify = new Tocify()
  // 解析markdown格式
  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,     // 样式渲染方式
    pedantic: false,     // markdown格式容错
    sanitize: false, // 忽略原始标签
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight: (code) => {
      return hljs.highlightAuto(code).value
    }
  })
  // renderer.heading = (text, level, raw) => {
  //   const anchor = tocify.add(text, level)
  //   return `<a id="${anchor}" href="#${anchor} class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  // }
  let html = marked(markdownData, {renderer: renderer})
  return (
    <div className='detail_sty'>
       <div className="nav-mulu">
       <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              {/* {tocify && tocify.render()} */}
            </div>
          </Affix>
       </div>
       <div className="space"></div>
      <div className="detailed-content" dangerouslySetInnerHTML={{__html:html}}></div>
       <div className="space"></div>
    </div>
  )
}

export default Detail
