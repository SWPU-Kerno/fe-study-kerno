/*快速排序*/


let sortArray = function (nums) {
    return quickSort(nums,0,nums.length-1);
}
function quickSort(arr,left, right) {
    if(left > right){
        return;
    }
    let a = arr;//将传进来的数组赋值给arr
    let temp = a[left];
    let i = left;
    let j = right;

    while(i != j ){

        while( a[j] >= temp && i < j){
            j--;
        }
        while( a[i] <= temp && i < j){
            i++;
        }
        if(i < j){
            let t = a[i];
            a[i] = a[j];
            a[j] = t;
        }
    }

    a[left] = a[i];
    a[i] = temp;

    arr = a;//重新对原数组进行赋值

    quickSort(arr,left,i-1);
    quickSort(arr,i+1,right);

    return arr;

}

let list = [7,3,14,8,2,1];
console.log(sortArray(list));