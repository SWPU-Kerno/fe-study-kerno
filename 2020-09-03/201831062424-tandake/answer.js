
/**
 * 提取url中的参数
 * @param {String} url 
 */
function getUrlParams(url){
  let reg = /(\w+)=(\w+)/g
  let arr = url.match(reg)
  let result = {}
  if(arr) arr.forEach((value,i) => {
      let param = value.split('=')
      result[param[0]] = param[1]
  })
  return result 
}


console.log(getUrlParams('https://a.b.com/path#title')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2')); // {id:2}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc')); // {id:'2',name='abc'}
console.log(getUrlParams('https://a.b.com/path?')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc&word=dsds')); // {id:'2',name='abc',word:'dsds'}