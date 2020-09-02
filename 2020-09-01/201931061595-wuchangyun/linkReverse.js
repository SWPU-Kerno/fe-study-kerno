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
// 递归法
var reverseList = function (head) {
    const reverse = (pre, back) => {
        // 如果下一个节点是null,说明前一个节点是最后一个节点,作为新的头部返回
        if (!back) {
            return pre
        }
        const temp = reverse(back, back.next)
        // 将后一个节点的next指向前一个
        back.next = pre
        return temp
    }
    return reverse(null, head)
};
//迭代法
var reverseList = function(head) {
    let pre, back
    pre = null
    back = head
    while(back){
        let temp = back.next
        back.next = pre
        pre = back
        back = temp
    }
    return pre
};
