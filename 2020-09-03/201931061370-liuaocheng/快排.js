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