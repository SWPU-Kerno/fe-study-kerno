let sortArray = function(nums) {
    for(let i = 0; i < nums.length; i++)
    {
        for(let j = i + 1; j < nums.length; j++ )
        {
            if(nums[i] > nums[j])
            {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
    }
    return nums;
};

let arr = [5,2,3,1];
arr = sortArray(arr);
console.log(arr);