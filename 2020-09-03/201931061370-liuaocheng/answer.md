# 排序算法  

## 快速排序

```js
var sortArray = function(nums) {
    return quick_sort(nums, 0, nums.length - 1);
};

function quick_sort(arr,left,right){
	var i = left; //哨兵i
	var j = right; //哨兵j
	var key = arr[left]; //标准值
	if(left >= right){ //如果数组只有一个元素
	   return arr;
	}
	while(i < j){
		while(arr[j] >= key && i < j){ 
			j--;
		}
		while(arr[i] <= key && i < j){   
			i++;
		}
		if(i < j){ 
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
	}
	arr[left] = arr[i] 
	arr[i] = key;
    quick_sort(arr,left,i-1);
	quick_sort(arr,i+1,right);
    return arr;
}  
```

## 归并排序  

```js
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
	
```

###问题回答

1. 快速排序最好情况下时间复杂度为O(n*logn)，最坏情况为O（n^2）（最坏情况）（此处不太理解）当输入序列是正序或者逆序，每次划分只得到一个比上一次划分少一个记录的子序列，注意另一个为空。如果递归树画出来，它就是一棵斜树。此时需要执行n-1次递归调用，且第i次划分需要经过n-i次关键字比较才能找到第i个记录，也就是key的位置，因此比较次数为n(n-1)/2，因此，最坏时间复杂度为O(n^2)  
归并排序最坏最坏情况下时间复杂度都为O(n*logn)
2. 算法的稳定性：假定在待排序的记录序列中，存在多个具有相同的关键字的记录，若经过排序，这些记录的相对次序保持不变，即在原序列中，r[i]=r[j]，且r[i]在r[j]之前，而在排序后的序列中，r[i]仍在r[j]之前，则称这种排序算法是稳定的；否则称为不稳定的。  
堆排序、快速排序、希尔排序、直接选择排序是不稳定的排序算法，而冒泡排序、直接插入排序、折半插入排序、归并排序是稳定的排序算法。

# ES5

### 问题回答

1. 下面输出结果是什么,并说明转换的过程  
该问题主要是js中数据类型强制转换的问题    
if ([]) console.log(1); **输出:1**   
if ({}) console.log(2); **输出:2**  
if ([] == false) console.log(3); **输出:3** []和false都转换为数字类型0然后== 返回为true  
if ({} == false) console.log(4); **输出:无** {}转换为NaN false为0 最终返回false  
if ([] == ![]) console.log(5); **输出:5** [] == ! []   ->   [] == false  ->  [] == 0  ->   '' == 0   ->  0 == 0   ->  true  
if ({} == !{}) console.log(6); **输出:无** {} == ! {}   ->   {} == false  ->  {} == 0  ->   NaN == 0    ->  false  
if ('' == false) console.log(7); **输出:7** 都转换为0后返回true  
if (false == 0) console.log(8); **输出:8** false转换为0之后返回true  
if (1 == true) console.log(9); **输出:9** true转换为1之后返回true  
if ('' == 0) console.log(10); **输出:10** ''->0 最终返回true  
if (NaN == NaN) console.log(11); **输出:无** NaN不等于任何其他类型  
if ([] == !true) console.log(12); **输出:12** []->0 !true->false->0 最终返回12  
if ([] == false) console.log(13); **输出:13** []->0 0==false 返回true  
if ([] == 0) console.log(14); **输出:14** []->0 0==0返回true  
if (+0 == -0) console.log(15); **输出:15** +0和-0相等返回true  
if (NaN == false) console.log(16); **输出:无** NaN不等于任何其他类型  
2. 下面计算结果（包含结果的类型）是什么，并说明理由  
{ } +1
1 + {}
[] + 1
1 + []
[1, 2, 3] + 0
[1, 2, 3] + '0'
1 + '0'
1 + 0
1 + true
1 + false
'1' + true
'1' + false
![] + []

1 - true
'0' - 0
0 - '1'
false - true
{ } -[]
[] - {}
false - []