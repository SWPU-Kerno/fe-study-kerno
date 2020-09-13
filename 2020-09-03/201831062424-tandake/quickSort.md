#排序

##快速排序

快速排序使用的是，分治的方法，使用快排最核心的思想就是把**原始数组分为较小的数组**，在分割的过程中，也可以使用多种分割的方法
* 1.取一个基准值（通常取为mid），通过左右两个指针分别向中间逼近，移动左指
针直到我们找到一个比主元大的元素，接着，移动右指针直到找到一个比主元小的元素，然后交
换它们，重复这个过程，直到左指针超过了右指针。这也是我最开始使用的方法
>       
    var sortArray = function(nums) {
        quick(nums, 0, nums.length - 1)
        return nums
        };
        function quick (list, left, right) {
        let index = 0
        if (list.length > 1){
        index = partition(list, left, right)             
        left < index - 1 && quick(list, left, index - 1)
        index < right && quick(list, index, right)
        }
    }
     function partition(list, left, right){
        let mid = list[(right + left) >> 1]
        while (left <= right) {
        while (list[left] < mid) {
        left++
        }
        while (list[right] > mid) {
        right--
        }
            if (left <= right) {
            [list[left], list[right]] = [list[right], list[left]]
            left++
            right--
            }
        }
        return left
    }

* 2.取一个基准值（最右边），在这里只使用了一个left指针，与一个for循环，主要的思路是，每次从数组的最左边开始向最右边滑动，同时使用一个变量记住当前的leftindex，把所有比基准值小的排到一边，大的拍到一边，最后交换leftindex与最右边的值，然后递归即可

>
        var sortArray = function(nums,left = 0,right = nums.length - 1) {
            if (nums.length < 2) return nums;
            return  quickSort(nums, left, right);
        };

        function quickSort(nums, left, right) {
            if (left >= right) return;
            let pivotIndex = partition(nums, left, right) // 找到分割的基准数
            quickSort(nums, left, pivotIndex - 1)// 左排
            quickSort(nums, pivotIndex + 1, right)// 右拍
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
