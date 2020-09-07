function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left),mergeSort(right));
}
function merge(left,right) {

    let temp = [];

    while(left.length && right.length){

        if(left[0] <= right[0] ){

            temp.push(left.shift());
        }
        else{
            temp.push(right.shift());
        }
    }

    while(left.length){
        temp.push(left.shift());
    }
    while(right.length){
        temp.push(right.shift());
    }

    return temp;
}

console.log(mergeSort([7, 3, 8, 2, 1, 4]));
