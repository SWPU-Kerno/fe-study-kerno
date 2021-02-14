function swap(tree,i,max){
    var temp = tree[i];
    tree[i] = tree[max];
    tree[max] = temp;
}

function heapify(tree,n,i){
    if(i >= n){
        return;
    }
    var c1 = 2 * i + 1;
    var c2 = 2 * i + 2;
    var max = i; //先设置最大值为根结点
    if( c1 < n && tree[c1] > tree[max]){
        max = c1;
    }
    if( c2 < n && tree[c2] > tree[max]){
        max = c2;
    }

    if(max != i){
        swap(tree,i,max);
        heapify(tree,n,max);
    }

}

function builtree(tree,len){
    var last_node = len - 1;
    var last_parent = Math.floor((last_node-1)/2);
    for(var j = last_parent; j >= 0; j--){
        heapify(tree,len,j);
    }

}

function heap_sort(tree,len){
    builtree(tree,len);
    for(var k = len - 1; k >= 0; k--){
        swap(tree,k,0);
        heapify(tree,k,0);
    }
}

function main(key){

    var arr = [3,2,1,5,6,4];
    var len = arr.length;
    heap_sort(arr,len);
    //使用堆排序之后直接返回下标为 length - key 的元素就是第key个最大的元素
    return arr[len-key];
}
console.log(main(2));