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
    let fast = head , slow = head 
    for(let i = 0 ;i < k;i++) {
        fast = fast.next
    }
    while(fast){
        fast = fast.next
        slow = slow.next
    }
    return slow
};

// 思路 这里使用两个指针 分别是慢指针slow和快指针fast 设一共有n个结点 在开始的时候快慢指针
// 都位于第一个结点 然后快指针向前移动k位 移动结束之后快指针离最后一个结点还有n-k-1位，然后
// 慢指针开始向前移动 当快指针指向空的时候 也就是向前移动了n-k时，此时慢指针向前移动了n-k位
// 刚好就是倒数第k个元素的位置
var a = '5'
a = a * 1
console.log(typeof a)