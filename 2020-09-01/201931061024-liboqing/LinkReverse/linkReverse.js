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
    if (head == null || head.next == null){
         return head;
    }
    var left = head;
    var right = head.next;

    while(right) {
        var t = right.next;
        right.next = left;
        left = right;
        right = t;
    }
    head.next = null;
    return left;
};