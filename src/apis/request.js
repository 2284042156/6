import axios from 'axios';
//基础地址
axios.defaults.baseURL='http://139.9.247.137/msdw';
//token为登录时，账号密码正确，服务端res中的数据
//joggle为上传文件地址
export  const joggle='http://139.9.247.137/msdw/aliyun/uploadFiles';
axios.interceptors.request.use((req)=>{
    // console.log('请求拦截器拦截的数据：req',req)
    const token = sessionStorage.getItem('token');
    if(token){//给所有需要token的接口统一在请求头上添加token
        req.headers.token = token;
    }
    return req;
});
//获取栏目信息，未被删除的
export function allColumn(){
    return axios.get('/column/column'
    ).then(res=>{
        return res.data.data
    });
}
//修改栏目信息
export function editColumn(parms){
    return axios.post('/column/column/modify',parms
    ).then(res=>{
        return res.data.data
    });
}
//新增栏目信息
export function addColumn(parms){
    return axios.put('/column/column',parms
    ).then(res=>{
        return res.data.data
    });
}
//删除栏目信息
export function deleteColumn(parms){
    return axios.delete('/column/carouse/'+parms,
    ).then(res=>{
        return res.data.data
    });
}
//根据一个或多个id查找栏目数据
export function returnColumn(parms){
    return axios.get('/column/'+parms,
    ).then(res=>{
        return res.data.data
    });
}
//更新栏目排序
export function sortColumn(parms){
    return axios.post('/column/sorting',parms
    ).then(res=>{
        return res.data
    });
}
/*上传文件
// export function uploadimg(parms){
//     return axios.post('/upload/uploadImage',parms
//     ).then(res=>{
//         return res.data.data
//     });
// }
*/
//查看该栏目下的文章详情
export function getColumnarticle(parms,pangNum){
    return axios.get('/column/column/'+parms+'?pangNum='+pangNum,
    ).then(res=>{
        return res.data.data
    });
}
//该id栏目下的所有文章，管理系统
export function getColumnallarticle(params){
    return axios.get('/column/column/all/'+params,
    ).then(res=>{
        return res.data.data
    });
}
//修改文章
export function keepOreder(parms){
    return axios.put('/article/article',parms
    ).then(res=>{
        return res.data.data
    });
}
//删除二级栏目文章
export function deleteArticle(parms){
    return axios.delete('/article/article/'+parms
    ).then(res=>{
        return res.data.data
    });
}
//修改文章
export function editArticle(parms){
    return axios.put('/article/article',parms
    ).then(res=>{
        return res.data
    });
}
//新增文章
export function addArticle(parms){
    return axios.post('/article/articles',
        parms
    ).then(res=>{
        return res.data
    });
}
//获取主页上各部分id，根据id查询各部分的详情
export function getHomecolumn(){
    return axios.get('/homepage/getAllPage'
    ).then(res=>{
        return res.data.data
    });
}
//根据id查找图片
export function getHomebanner(parms){
    return axios.get('/img/images/'+parms
    ).then(res=>{
        return res.data.data
    });
}
//新增图片信息
export function postHomebanner(parms){
    return axios.post('/img/images',parms
    ).then(res=>{
        return res.data.data
    });
}
//根据传入id查询轮播图信息
export function getHomecarouse(parms){
    return axios.get('/carouse/carouse/'+parms
    ).then(res=>{
        return res.data.data
    });
}
//增加轮播图
export function addHomecarouse(parms){
    return axios.put('/carouse/carouses',parms
    ).then(res=>{
        return res.data.data
    });
}
//删除carouse
export function deleteHomecarouse(parms){
    return axios.delete('/carouse/carouses/'+parms
    ).then(res=>{
        return res.data
    });
}
//轮播图排序接口
export function Homecarousesort(parms){
    return axios.post('/carouse/sorting',parms
    ).then(res=>{
        return res.data
    });
}
//修改轮播图信息
export function Homecarouseedit(parms){
    return axios.post('/carouse/modify',parms
    ).then(res=>{
        return res.data
    });
}
//根据id查找链接
export function getHomelinks(parms){
    return axios.get('/link/'+parms
    ).then(res=>{
        return res.data.data
    });
}
//修改链接
export function editHomelinks(parms){
    return axios.post('/link',parms
    ).then(res=>{
        return res.data.data
    });
}
//根据id查找标题
export function getHomeheadline(parms){
    return axios.get('/headline/'+parms
    ).then(res=>{
        return res.data.data
    });
}
//新增一个标题
export function addHomeheadline(parms){
    return axios.put('/headline/headlines',parms
    ).then(res=>{
        return res.data.data
    });
}
//获取所有未被删除的分类
export function getHomeclassify(){
    return axios.get('/classify/classifies'
    ).then(res=>{
        return res.data.data
    });
}
//添加分类
export function addHomeclassify(parms){
    return axios.post('/classify/classifies/add',parms
    ).then(res=>{
        return res.data.data
    });
}
//获取所有友情链接，未被删除的is——show
export function getHomefriendlink(){
    return axios.get('/friendshipLink/getAll'
    ).then(res=>{
        return res.data.data
    });
}
//新增一条友情链接
export function addHomefriendlink(params){
    return axios.put('/friendshipLink/addOne',params
    ).then(res=>{
        return res.data
    });
}
//修改多条友情链接
export function modifyHomefriendlink(params){
    return axios.post('/friendshipLink/modify',params
    ).then(res=>{
        return res.data
    });
}
//修改分类信息
export function modifyHomeclassify(params){
    return axios.post('/classify/classify',params
    ).then(res=>{
        return res.data
    });
}
//新增一个主页
export function addHomepage(params){
    return axios.put('/homepage/homepage',params
    ).then(res=>{
        return res.data
    });
}
//管理员登录接口
export function login(params){
    return axios.post('/admin/login',
        params
    ).then(res=>{
        return res.data.data
    });
}
//管理员修改密码
export function adminChangepwd(params){
    return axios.post('/admin/change',
        params
    ).then(res=>{
        return res.data
    });
}
//获取所有友情链接分类以及子级信息
export function getHomelink(){
    return axios.get('/friendshipLink/friendshipLinkGet/all'
    ).then(res=>{
        return res.data.data
    });
}
//删除友情链接，删除未传入的
export function deleteHomelink(params){
    return axios.delete('/friendshipLink/deleteFriend/'+params,
    ).then(res=>{
        return res.data.data
    });
}
//删除分类，传入的不删
export function deleteHomeclassify(params){
    return axios.delete('/classify/classifies/'+params,
    ).then(res=>{
        return res.data.data
    });
}