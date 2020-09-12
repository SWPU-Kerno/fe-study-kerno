function getUrlParams(url){
    var a = url.split('?');
    var str = a[1];
    var result = {};
    if(!str) return {};  // 检测是否为空
    var str2 = str.split('&');
    str2.forEach(function(item){ 
      var temp = item.split('=');
      result[temp[0]] = temp[1];
    })
    return result;
  }
    
    console.log(getUrlParams('https://a.b.com/path#title')); // {}
    console.log(getUrlParams('https://a.b.com/path?id=2')); // {id:2}
    console.log(getUrlParams('https://a.b.com/path?id=2&name=abc')); // {id:'2',name='abc'}
    console.log(getUrlParams('https://a.b.com/path?')); // {}