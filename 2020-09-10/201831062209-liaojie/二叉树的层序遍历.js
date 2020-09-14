//返回二叉树的层序遍历，按照树的结构进行

function levelOrder(root){
    if(!root){
        return [];
    }
    let items = [];//用来存放所有层序

    let levelNodes = [];//用来存放一层的节点

    let queue = [root,null];
    //先初始化队列,null为标志为，表示这一层结束


    //利用队列的性质先进先出，每一层以null作为标志一层一层的输出
    while(queue.length > 0){

        let t = queue.shift();//每一层一次出队列，遇到null说明一层完成
        if(t){

            levelNodes.push(t.val);
            if(t.left){
                queue.push(t.left);
            }
            if(t.right){
                queue.push(t.right);
            }

        }else{

            //每一层输出之后，需要将队列中剩余的元素当作一层然后添加null标志
            items.push(levelNodes);
            levelNodes = [];//将该层放到总的数组当中之后，该层重新赋空

            /*必须进行判断队列是否已经空了，如果已经空了表示遍历完成就不用添 加标志了*/
            if(queue.length > 0){
                queue.push(null);
            }
        }

    }
    return items;
}