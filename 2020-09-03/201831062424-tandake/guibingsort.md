## 归并排序

思路：第一步先对两个数组进行分组，然后开始mergeSort,在对数组进行分组的时候，在js中可以使用Array自带的pop或者是shift方法，这样每次只需要比较第一位或者是最后一位就可以了（我这里使用的是shift方法），当左右的某一个数组被取完之后，把剩下的一个数组压入，然后在对数组进行切分，直到最后小数组只有一个位置，然后将小数组归并成一个大数组
> 代码如下

        var sortArray = function(nums) {
            var len = nums.length
            if(len === 1) return nums
            var mid = len >> 1
            var leftNums = nums.slice( 0, mid)
            var rightNums = nums.slice(mid)
            return merge(sortArray(leftNums),sortArray(rightNums)) 
        };
        function merge(left,right){
            var result = []
            while (left.length && right.length) {
                if (left[0] <= right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }

            while (left.length)
                result.push(left.shift());
            while (right.length)
                result.push(right.shift());
            return result;
        }

采用传统的记录下标的方法

        var sortArray = function(nums) {
        var len = nums.length
        if(len === 1) return nums
        var mid = len >> 1
        var leftNums = nums.slice( 0, mid)
        var rightNums = nums.slice(mid)
        return merge(sortArray(leftNums),sortArray(rightNums)) 
        };
        function merge(left,right){
        var result = []
        let ii = left.length,jj = right.length
        let i=0,j=0
        while(i < ii && j < jj){
        if(left[i] < right[j]){
            result.push(left[i++])
        } else {
            result.push(right[j++])
        }
        }
        while(i < ii){
        result.push(left[i++])
        }
        while(j < jj){
        result.push(right[j++])
        }
        return result;
        }

此外 在**运行速度上**可以发现第二种的速度仅仅只有第一种的一半，说明js中数组的构造函数的还是会花费一定的时间