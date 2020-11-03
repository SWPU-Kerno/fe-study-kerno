
    // ## 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
  @param {ListNode} head
  @return {ListNode}
 */


// 注意：特殊情况的优先判定！

// ## 用递归的方法
var reverseList = function(head) {
    var prev=null;
    var cur = head;
    var temp;
    while(cur){
        temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp
    }
    return prev
};

// ## 用数组迭代的方法
var reverseList = function(head) {
 if (head === null) {
        return null
    }
    var arr = [];
    var cur = head;
    //利用数组来存储所有节点
    while(cur){
        arr.push(cur);
        cur = cur.next;
    }
    let length = arr.length;
    
    for(let i=1;i<arr.length;i++){
        arr[i].next = arr[i-1];
    }
    arr[0].next =null;
    return arr[length-1];
};


