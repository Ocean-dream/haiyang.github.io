// 利用react-router-config对路由进行配置
import React from 'react'
// import {Redirect} from 'react-router-dom'
import Home from '../views/home/index.js'
import Article from '../views/article/index.js'
import ArticleCon from '../views/articleDetail/index'


let config = [
  {
    path: '/',
    name:'/',
    exact:true,
    component: Home,
  },
  {
    path: '/articles',
    name:'/articles',
    exact:true,
    component: Article,
  },
  {
    path: '/articleDtail',
    name:'/articleDtail',
    exact:true,
    component: ArticleCon,
  },
]

// export default[
//   {
//     path: '/',
//     component: Home,
//     routers: [
//       {
//         path: '/',
//         exact:true,
//         render: () => (
//           <Redirect to={"/index"}></Redirect>
//         )
//       }
//     ]
//   },
//   {
//     path: "/articles",
//     component: Article
//   },
// ]
export default config;