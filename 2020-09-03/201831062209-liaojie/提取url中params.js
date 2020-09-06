/**
 * 提取url中的参数
 * @param {String} url
 */
function getUrlParams(url){

    let str1 = url.split('?'); //得到后面的参数
    // let str2 = str1.split[1]('&');
    if (str1.length < 2 || str1[1] == ''){
        return {};
    }
    else{

        let str2 = str1[1].split('&');
        let obj = {};
        for(let i = 0; i < str2.length; i++){


            let temp = str2[i].split('=');

            obj[temp[0]] = temp[1];

        }
        return obj;
    }
}

console.log(getUrlParams('https://a.b.com/path#title')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2')); // {id:2}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc')); // {id:'2',name='abc'}
console.log(getUrlParams('https://a.b.com/path?')); // {}
console.log(getUrlParams('https://a.b.com/path?id=2&name=abc&word=dsds')); // {id:'2',name='abc',word:'dsds'}