# 剑指 Offer 22. 链表中倒数第k个节点

输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。



### 方法一：栈方法

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    var  link= [];
    var ans = [];
    //先倒着输入栈里面
    while(head){
        link.push(head);
        head = head.next;
    }
    //再取出前K个进入另一个栈里面
    while(k > 0){
        ans = link.pop();
        k--;
    }
    return ans;
};
```

![1600999563315]( http://img.cdn.sugarat.top/mdImg/MTYwMTI4MDU5NDg3Nw==601280594877 )
### 方法二：快慢指针

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    var quick = head, low = head;
    //快指针先走k步
    while(k > 0){
        quick = quick.next;
        k--;
    }
    //直到快指针走到null，那慢指针和快指针之间就有k个值
    while(quick != null){
        quick = quick.next;
        low = low.next;
    }
    return low;
};
```

![图片](http://img.cdn.sugarat.top/mdImg/MTYwMTI4MDYzNTcxMw==601280635713)

