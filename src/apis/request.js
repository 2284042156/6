import axios from 'axios';
// axios.defaults.baseURL='http://liuwanr.cn:8080/msdw';
axios.defaults.baseURL='http://192.168.31.181:8080';
// export  const joggle='http://liuwanr.cn:8080/msdw/aliyun/uploadFiles';
export  const joggle='http://192.168.31.181:8080/aliyun/uploadFiles';
axios.interceptors.request.use((req)=>{
    // console.log('请求拦截器拦截的数据：req',req)
    const token = sessionStorage.getItem('token');
    if(token){//给所有需要token的接口统一在请求头上添加token
        req.headers.token = token;
    }
    return req;
});
export function allColumn(){
    return axios.get('/column/column'
    ).then(res=>{
        return res.data.data
    });
}
export function editColumn(parms){
    return axios.post('/column/column/modify',parms
    ).then(res=>{
        return res.data.data
    });
}
export function addColumn(parms){
    return axios.put('/column/column',parms
    ).then(res=>{
        return res.data.data
    });
}
export function deleteColumn(parms){
    return axios.delete('/column/carouse/'+parms,
    ).then(res=>{
        return res.data.data
    });
}
export function returnColumn(parms){
    return axios.get('/column/'+parms,
    ).then(res=>{
        return res.data.data
    });
}
export function sortColumn(parms){
    return axios.post('/column/sorting',parms
    ).then(res=>{
        return res.data
    });
}
export function uploadimg(parms){
    return axios.post('/upload/uploadImage',parms
    ).then(res=>{
        return res.data.data
    });
}
export function getColumnarticle(parms,pangNum){
    return axios.get('/column/column/'+parms+'?pangNum='+pangNum,
    ).then(res=>{
        return res.data.data
    });
}
export function keepOreder(parms){
    return axios.put('/article/article',parms
    ).then(res=>{
        return res.data.data
    });
}
export function deleteArticle(parms){
    return axios.delete('/article/article/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function editArticle(parms){
    return axios.put('/article/article',parms
    ).then(res=>{
        return res.data.data
    });
}
export function addArticle(parms){
    return axios.post('/article/articles',
        parms
    ).then(res=>{
        return res.data
    });
}
export function getHomecolumn(){
    return axios.get('/homepage/getAllPage'
    ).then(res=>{
        return res.data.data
    });
}
export function getHomebanner(parms){
    return axios.get('/img/images/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function postHomebanner(parms){
    return axios.post('/img/images',parms
    ).then(res=>{
        return res.data.data
    });
}
export function getHomecarouse(parms){
    return axios.get('/carouse/carouse/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function addHomecarouse(parms){
    return axios.put('/carouse/carouses',parms
    ).then(res=>{
        return res.data.data
    });
}
export function deleteHomecarouse(parms){
    return axios.delete('/carouse/carouses/'+parms
    ).then(res=>{
        return res.data
    });
}
export function getHomeheadline(parms){
    return axios.get('/headline/'+parms
    ).then(res=>{
        return res.data.data
    });
}
export function addHomeheadline(parms){
    return axios.put('/headline/headlines',parms
    ).then(res=>{
        return res.data.data
    });
}
export function getHomeclassify(){
    return axios.get('/classify/classifies'
    ).then(res=>{
        return res.data.data
    });
}
export function addHomeclassify(parms){
    return axios.post('/classify/classifies/add',parms
    ).then(res=>{
        return res.data.data
    });
}
export function getHomefriendlink(){
    return axios.get('/friendshipLink/getAll'
    ).then(res=>{
        return res.data.data
    });
}
export function addHomefriendlink(params){
    return axios.put('/friendshipLink/addOne',params
    ).then(res=>{
        return res.data
    });
}
export function login(params){
    return axios.post('/admin/login',
        params
    ).then(res=>{
        return res.data.data
    });
}
export function adminChangepwd(params){
    return axios.post('/admin/change',
        params
    ).then(res=>{
        return res.data
    });
}