var sortArray = function(nums) {
    return mergeSort(nums, 0, nums.length - 1)
};

function mergeSort(nums, left, right) {
    if (left >= right) return nums;
    let mid = (left + right) >> 1; //比midmid=(left+right)/2要快
    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)
    return merge(nums, left, mid, right)
}

function merge(nums, left, mid, right) {
    let arr = [];
    let c = 0, i = left, j = mid + 1;
    while (i <= mid && j <= right) {
        if (nums[i] < nums[j]) {
            arr[c++] = nums[i++];
        } else {
            arr[c++] = nums[j++]
        }
    }
    while (i <= mid) {
        arr[c++] = nums[i++];
    }
    while (j <= right) {
        arr[c++] = nums[j++];
    }
    for (let i = 0; i < arr.length; i++) {
        nums[i + left] = arr[i];
    }
    return nums;
}