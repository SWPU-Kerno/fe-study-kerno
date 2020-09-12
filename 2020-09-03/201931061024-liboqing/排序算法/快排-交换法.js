/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1){
        return nums;
    }
    return quick_sort(nums, 0, nums.length-1);
};

function quick_sort(s, l, r){
    if(l < r)
    {
        let i = l;
        let j = r;
        let x = s[l];

        while(i<j){     // 左右哨兵找位置交换
            while(i<j && s[j]>=x){
                j--;
            }
            while(i<j && s[i]<=x){
                i++;
            }
            var t = s[j];
            s[j] = s[i];
            s[i] = t;   
        }
        t = s[l];
        s[l] = s[i];
        s[i] = t;    // 基数与哨兵碰面位置交换
        quick_sort(s, l, i-1);
        quick_sort(s, i+1, r);   // 左右分区递归
    }
    return s;
}