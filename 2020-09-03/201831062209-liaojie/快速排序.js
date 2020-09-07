/*快速排序*/


let sortArray = function (nums) {
    return quickSort(nums,0,nums.length-1);
}
function quickSort(arr,left, right) {
    if(left > right){
        return;
    }
    // let a = arr;//将传进来的数组赋值给arr
    let temp = arr[left];
    let i = left;
    let j = right;

    while(i != j ){

        while( arr[j] >= temp && i < j){
            j--;
        }
        while( arr[i] <= temp && i < j){
            i++;
        }
        if(i < j){
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
        }
    }

    arr[left] = arr[i];
    arr[i] = temp;

    // arr = a;//重新对原数组进行赋值

    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);

    return arr;

}

let list = [7,3,14,8,2,1];
console.log(sortArray(list));