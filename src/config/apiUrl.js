// let ipUrl = 'http://127.0.0.1:7001/default/' 
let ipUrl = 'http://101.201.253.124:7001/default/' 

let servicePath = {
    getArticleList:ipUrl + 'getArticleList' ,  //  首页文章列表接口
    getArticleById:ipUrl + 'getArticleById/',  // 文章详细页内容接口 ,需要接收参数
    getTypeInfo: ipUrl + 'getTypeInfo',        // 获取栏目分类
    getListById: ipUrl + 'getListById/',        // 根据栏位信息获取相应内容
    getSkillContent: ipUrl + 'getSkillContent'         // 获取技能标签信息

}
export default servicePath;
