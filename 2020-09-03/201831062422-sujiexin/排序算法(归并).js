/**
 * @param {number[]} nums
 * @return {number[]}
 * @author sujiexin
 */
var sortArray = function(nums) {
    if(nums.length<2){
        return nums;
    }
    return mergeSort(nums);
}; 

function mergeSort(nums){
    var length = nums.length;
    if(length<2){
        return nums;
    }
    var middle = Math.floor(length/2);
    var left = nums.slice(0,middle);
    var right =  nums.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    var result = [];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }       
    while(left.length)
    result.push(left.shift());
    while(right.length)
    result.push(right.shift());
    return result;
}