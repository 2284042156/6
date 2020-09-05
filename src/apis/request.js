import axios from 'axios';
axios.defaults.baseURL='http://liuwanr.cn:8080/msdw';
export  const joggle='http://liuwanr.cn:8080/msdw/aliyun/uploadFiles';
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
export function uploadimg(parms){
    return axios.post('/upload/uploadImage',parms
    ).then(res=>{
        return res.data.data
    });
}
export function getColumnarticle(parms){
    return axios.get('/column/column/'+parms,
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
export function getHomeheadline(parms){
    return axios.get('/headline/'+parms
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
export function getHomefriendlink(){
    return axios.get('/friendshipLink/getAll'
    ).then(res=>{
        return res.data.data
    });
}
