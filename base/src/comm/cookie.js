// 对cookie的设置
export const setCookie = function(key,val,day){
    var exp = new Date();
    if(day){
        exp.setTime(exp.getTime()+24*60*60*1000*day)
    }else{
        exp.setTime(exp.getTime()+24*60*60*1000*1)
    }
    
    document.cookie = `${key}=${val};expires=${exp.toGMTString()}`
}
//对cookie的获取
export const getCookie = function(key){
   var str = document.cookie.replace(/\s/g,''),
       arr = str.split(';');
    for(let i=0;i<arr.length;i++){
        if(arr[i].split('=')[0] == key){
            return arr[i][1]
        }
    }
}
// 对cookie的删除
export const delCookie = function(key){
    setCookie(key,null,-1)
}
