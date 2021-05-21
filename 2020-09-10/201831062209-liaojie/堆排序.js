
/*tree是传进来的数组，n是长度，i是每一个最小二叉树的根节点*/
function heapify(tree,n,i) {

    if(i >= n){
        return;
    }
    let c1 = 2*i + 1;//c1是左边的子节点
    let c2 = 2*i + 2;//c2是右边的子节点
    var max = i;

    /*寻找最大的节点*/
    if(c1 < n && tree[c1] > tree[max]){
        max = c1;
    }
    if(c2< n && tree[c2] > tree[max]){
        max = c2;
    }
    if(max != i){
        //交换最大值
        let temp = tree[max];
        tree[max] = tree[i];
        tree[i] = temp;

        heapify(tree,n,max);//当进行过堆调整之后，子树改变，需要再进行堆调整
    }

}
/*tree是数组，n是长度*/
function build_heap(tree,n) {
    var last_node = n -1;
    var parent = Math.floor((last_node-1) / 2);
    for (var j = parent; j >= 0; j--){
        heapify(tree,n,j);
    }
}

function heap_sort(tree,n){
    build_heap(tree,n);
    var k = n - 1;//最后一个节点
    for(k; k >= 0; k--){

        var temp = tree[k];
        tree[k] = tree[0];
        tree[0] = temp;

        heapify(tree,k,0);
    }
}
function main() {
    var tree = [2,5,3,1,10,4];
    heap_sort(tree,tree.length);
    console.log(tree);

}
main();