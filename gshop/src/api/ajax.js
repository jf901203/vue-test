
import axios from 'axios'

export default function  ajax(url='',params={},type='GET') {
 
return new Promise(function(resolve,reject){
 
    let promise 
    if(type==="GET"){
        let dataStr=''
        Object.keys(params).forEach((item)=>{
           // demo=123&dem=12
          dataStr+=item+'='+params[item]+"&"
        })
    
       if(dataStr!==''){
         dataStr=dataStr.substr(0,dataStr.lastIndexOf('&'))
         url+='?'+dataStr
       }
        // 返回响应对象
        promise=axios.get(url)
    }else{
        promise=axios.post(url,params)
    }

    promise.then(function(res){
        resolve(res.data)
    }).catch(function(error){
        reject(error)
    })
 


})



  }