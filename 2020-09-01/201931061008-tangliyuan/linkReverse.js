/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var prev = null,cur = head,temp;
    while(cur){
        temp = cur.next;  //记录下一个
        cur.next = prev;  //把cur指向上一个
        prev = cur;       //把上一个前移
        cur = temp;       //把cur往下移
    }
    return prev; //pre就是最开始链表的最后一个，也就是翻转的第一个
};