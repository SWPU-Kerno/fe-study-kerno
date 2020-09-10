




function bigNumPlus(s1,s2) {
    /*flag作为是否向前进一的标志位*/
    let flag = 0;
    /*补全更好操作*/
    while(s1.length>s2.length){
        s2 = '0' + s2;
    }
    while(s1.length<s2.length){
        s1 = '0' + s1;
    }

    let len1 = s1.length;
    let len2 = s2.length;

    let newS3 = '';//新字符串

    while( len1 > 0 && len2 > 0){

        let number = Number(s1[len1-1]) + Number(s2[len2-1]) + flag;//相加后数字结果
        let tempStr = String(number);//相加后的数字转为字符串的结果
        // console.log(tempStr);
        if(number > 9) {
            flag = 1;
            newS3 = tempStr[1].concat(newS3);
        }else{
            flag = 0;
            newS3 = tempStr.concat(newS3);
        }
        len1--;
        len2--;
    }

    /*如果到最后还有进一，则再向前多加一位*/
    if(flag){
        newS3 = '1'.concat(newS3);
        
    }
    return newS3;

}

console.log(typeof bigNumPlus('9', '9'));