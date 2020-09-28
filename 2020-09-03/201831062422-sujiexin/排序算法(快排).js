/**
 * @param {number[]} nums
 * @return {number[]}
 * @author sujiexin
 */
var sortArray = function(nums) {
    if(nums.length<2){
        return nums;
    }
    var l = 0;
    var h = nums.length-1;
    return quicksort(nums,l,h);
}; 

function quicksort(nums,l,h){
    var low = l;
    var high = h;
    if(l>=h){
        return ;
    }
    var key = nums[l];
    while(low<high){
        while(low<high&&nums[high]>key)
        high--;
        if(low<high){
            nums[low] = nums[high];
            low++;
        }
        while(low<high&&nums[low]<key)
        low++;
        if(low<high){
            nums[high]=nums[low];
            high--;
        }
    }
    nums[low] = key;
    quicksort(nums,l,low-1);
    quicksort(nums,low+1,h);
    return nums;
}