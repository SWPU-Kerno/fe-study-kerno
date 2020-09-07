/**
 * @param {number[]} nums
 * @return {number[]}
 */

 // 填坑法
 
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums;
    }
    return quick_sort(nums, 0, nums.length-1);  
};
function quick_sort(s, l, r){   //s: nums; l: left;  r: right
    if(l < r){
        let i = l;
        let j = r;   // 安排左右工兵
        let x = s[l];  //x: key基准值，基数

        while(i<j){   //区间排序完成的标志是左右工兵碰面
            while(i<j && s[j]>=x)
                j--;    //先找好右坑位
            s[i] = s[j];   //右坑位的值赋给左边的坑位
            while(i<j && s[i]<x)
                i++;   //再找好左坑位的位置
            s[j] = s[i];  //左坑位的值赋给右边的坑位
        }

        s[i] = x;
        quick_sort(s, l, i-1);
        quick_sort(s, i+1, r);   //左右区间（子树）分别递归排序，注意左右工兵位置更新
    }
    return s;
}