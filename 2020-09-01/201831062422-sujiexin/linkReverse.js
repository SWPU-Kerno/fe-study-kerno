/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 反转链表
 * @author sujiexin
 * 
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null){
        return head;
    }
    var cur = head;
    var prev = null;
    var curN = cur.next;
    while(cur!=null){
        if(curN == null){
            cur.next = prev;
            break;
        }
        cur.next = prev;
        prev = cur ;
        cur = curN;
        curN = curN.next;
    } 
    return cur 
};