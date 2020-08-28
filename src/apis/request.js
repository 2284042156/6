import axios from 'axios';
axios.defaults.baseURL='https://192.168.31.180:8081';
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
    return axios.post('/article/articles',{
        parms
    }
    ).then(res=>{
        return res.data.data
    });
}