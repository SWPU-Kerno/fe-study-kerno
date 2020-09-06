/**
 * quick sort
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArray = function(nums) {
    if (nums.length < 2) return nums;
    return  quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
    if (left >= right) return;
    let pivotIndex = partition(nums, left, right)
    quickSort(nums, left, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, right)
    return nums;
}

function partition (nums, left, right) {
    let pivot = right;
    let leftIndex = left;
    for (let i = left; i < right; i++) {
        if (nums[i] < nums[pivot]) {
            [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
            leftIndex++;
        }
    }
    [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
    return leftIndex;
}
